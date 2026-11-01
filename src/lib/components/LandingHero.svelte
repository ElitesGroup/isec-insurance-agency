<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let { openQuoteModal }: { openQuoteModal: () => void } = $props();
</script>

<section class="landing-hero reveal is-revealed" use:reveal>
	<h1>Your Reliable Partner In <span>All Insurance Matters</span></h1>
	<p>We offer a variety of products custom designed for all your insurance needs.</p>
	<button class="hero-pill large" type="button" onclick={openQuoteModal}
	>Request your quote <span aria-hidden="true" class="hero-pill-arrow">&rsaquo;</span></button
	>
</section>
