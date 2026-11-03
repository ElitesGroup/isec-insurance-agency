FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

# adapter-node bundles every runtime import into build/, and the project has
# only devDependencies, so no node_modules are needed in this stage.
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1

CMD ["node", "build"]
