<script lang="ts">
	import { products } from '$lib/isec-data';
	import { reveal } from '$lib/actions/reveal';
	import { imageUrl } from '$lib/utils/assets';

	let {
		activeProductIndex,
		nextProduct,
		previousProduct,
		selectProduct
	}: {
		activeProductIndex: number;
		nextProduct: () => void;
		previousProduct: () => void;
		selectProduct: (index: number) => void;
	} = $props();

	let productTrack: HTMLDivElement | undefined;
	let productCards: Array<HTMLButtonElement | undefined> = [];

	function scrollActiveProductIntoView(behavior: ScrollBehavior = 'smooth') {
		const activeCard = productCards[activeProductIndex];
		if (!productTrack || !activeCard) return;

		const nextLeft =
			activeCard.offsetLeft - (productTrack.clientWidth - activeCard.clientWidth) / 2;

		productTrack.scrollTo({
			left: Math.max(0, nextLeft),
			behavior
		});
	}

	$effect(() => {
		activeProductIndex;
		if (typeof window === 'undefined') return;
		scrollActiveProductIntoView('smooth');
	});
</script>

<section class="product-stage reveal" id="cover" aria-label="Insurance products" use:reveal>
	<div class="product-track" bind:this={productTrack}>
		{#each products as product, index (`${product.title}-${index}`)}
			<button
				type="button"
				bind:this={productCards[index]}
				class:product-card-wide={index === activeProductIndex}
				class:is-active={index === activeProductIndex}
				class="product-card"
				data-product={product.title.toLowerCase()}
				aria-label={`Show ${product.title} insurance`}
				onclick={() => selectProduct(index)}
			>
				<img
					src={imageUrl(product.image)}
					alt={`${product.title} insurance`}
					loading={index <= 1 ? 'eager' : 'lazy'}
					fetchpriority={index === activeProductIndex ? 'high' : 'low'}
					decoding="async"
				/>
				<span class="product-title">{product.title}</span>
				{#if index === activeProductIndex}
					<span class="product-divider" aria-hidden="true"></span>
					<span class="product-copy">{product.body}</span>
				{/if}
			</button>
		{/each}
	</div>

	<div class="arrows arrows-overlay" aria-label="Product carousel arrows">
		<button type="button" aria-label="Previous product" onclick={previousProduct}>
			<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
				<path d="M14.4 5.2 8 12l6.4 6.8" />
			</svg>
		</button>
		<button type="button" aria-label="Next product" onclick={nextProduct}>
			<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
				<path d="M9.6 5.2 16 12l-6.4 6.8" />
			</svg>
		</button>
	</div>

	<div class="slider-controls" aria-label="Product carousel controls">
		<div class="dots">
			{#each products as product, index (`${product.title}-dot-${index}`)}
				<button
					type="button"
					class:is-active={index === activeProductIndex}
					aria-label={`View ${product.title} insurance`}
					onclick={() => selectProduct(index)}
				></button>
			{/each}
		</div>
	</div>
</section>
