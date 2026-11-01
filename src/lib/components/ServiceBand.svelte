<script lang="ts">
	import { supportFeatures } from '$lib/isec-data';
	import { reveal } from '$lib/actions/reveal';
	import { imageUrl } from '$lib/utils/assets';
</script>

<section class="service-band reveal" id="services" use:reveal>
	<h2>We offer a variety of tailor made products designed for all your insurance needs;</h2>
	<div class="service-grid">
		{#each supportFeatures as feature, index (feature.title)}
			<article>
				<img
					class:service-icon-sun={index === 0}
					class:service-icon-folder={index === 1}
					class:service-icon-orbit={index === 2}
					class="service-icon"
					src={imageUrl(feature.image)}
					alt={`${feature.title} icon`}
					loading="lazy"
					decoding="async"
				/>
				<h3>{feature.title}</h3>
				<p>{feature.body}</p>
			</article>
		{/each}
	</div>
</section>
