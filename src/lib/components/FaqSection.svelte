<script lang="ts">
	import { faqs } from '$lib/isec-data';
	import { reveal } from '$lib/actions/reveal';

	let {
		openFaqIndex,
		toggleFaq
	}: {
		openFaqIndex: number | null;
		toggleFaq: (index: number) => void;
	} = $props();
</script>

<section class="faq-section reveal" id="support" use:reveal>
	<div class="faq-inner">
		<h2>Frequently asked questions</h2>
		<p>
			Questions on the I-Sec Insurance? Find your answers below. For any further help or
			troubleshooting, please contact customer service.
		</p>
		<div class="faq-list">
			{#each faqs as faq, index (faq.question)}
				<article class:is-open={openFaqIndex === index} class="faq-item">
					<button
						type="button"
						onclick={() => toggleFaq(index)}
						aria-expanded={openFaqIndex === index}
					>
						<span>{faq.question}</span>
						<span aria-hidden="true">&#8964;</span>
					</button>
					{#if openFaqIndex === index}
						<p>{faq.answer}</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
