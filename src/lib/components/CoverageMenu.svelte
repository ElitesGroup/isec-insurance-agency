<script lang="ts">
	import { coverages } from '$lib/isec-data';
	import { reveal } from '$lib/actions/reveal';
	import { trackEvent } from '$lib/utils/analytics';
	import { imageUrl } from '$lib/utils/assets';

	let {
		activeCoverageIndex,
		selectCoverage
	}: {
		activeCoverageIndex: number;
		selectCoverage: (index: number) => void;
	} = $props();

	const activeCoverage = $derived(coverages[activeCoverageIndex]);

	function handleCoverageSelect(index: number) {
		selectCoverage(index);
		trackEvent('coverage_select', { coverage: coverages[index]?.title ?? 'unknown', index });
	}
</script>

<div class="cover-panel cover-dropdown reveal is-revealed" id="coverage-menu" use:reveal>
	<div class="cover-list">
		<p class="eyebrow">Products</p>
		{#each coverages as coverage, index (coverage.title)}
			<button
				class:is-selected={activeCoverageIndex === index}
				class="cover-item"
				type="button"
				onclick={() => handleCoverageSelect(index)}
			>
				<span class="cover-icon">
					<img
						src={imageUrl(coverage.icon)}
						alt={`${coverage.title} icon`}
						loading="lazy"
						decoding="async"
					/>
				</span>
				<span>
					<strong>{coverage.title}</strong>
					<small>{coverage.description}</small>
				</span>
			</button>
		{/each}
	</div>

	<article class="cover-feature">
		<img
			src={imageUrl(activeCoverage.previewImage)}
			alt={activeCoverage.previewTitle}
			loading="eager"
			fetchpriority="high"
			decoding="async"
		/>
		<span>{activeCoverage.previewTitle}</span>
	</article>
</div>
