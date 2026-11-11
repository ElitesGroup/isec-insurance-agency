<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { imageUrl } from '$lib/utils/assets';

	let { openQuoteModal }: { openQuoteModal: () => void } = $props();
</script>

<section class="landing-hero reveal is-revealed" use:reveal>
	<div class="hero-logo-backdrop" aria-hidden="true">
		<img src={imageUrl('isecinsurance.svg')} alt="" loading="lazy" decoding="async" />
	</div>
	<img
		class="hero-title-logo"
		src={imageUrl('iseclogo.svg')}
		alt=""
		aria-hidden="true"
		loading="lazy"
		decoding="async"
	/>
	<h1><span>Your Reliable Partner In</span> <strong>Insurance Matters</strong></h1>
	<p>We offer a variety of products custom designed for all your insurance needs.</p>
	<button class="hero-pill large" type="button" onclick={openQuoteModal}
	>Request your quote <span aria-hidden="true" class="hero-pill-arrow">&rsaquo;</span></button
	>
</section>
