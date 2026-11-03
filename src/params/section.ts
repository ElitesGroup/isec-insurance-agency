import type { ParamMatcher } from '@sveltejs/kit';

const sections = new Set(['cover', 'services', 'quote', 'partners', 'support', 'contact']);

export const match: ParamMatcher = (param) => sections.has(param);
