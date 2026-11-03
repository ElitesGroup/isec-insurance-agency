<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import CoverageMenu from '$lib/components/CoverageMenu.svelte';
	import FloatingSectionNav from '$lib/components/FloatingSectionNav.svelte';
	import GrowthSection from '$lib/components/GrowthSection.svelte';
	import LandingHero from '$lib/components/LandingHero.svelte';
	import MetricGrid from '$lib/components/MetricGrid.svelte';
	import ProductCarousel from '$lib/components/ProductCarousel.svelte';
	import QuoteRequestModal from '$lib/components/QuoteRequestModal.svelte';
	import ServiceBand from '$lib/components/ServiceBand.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import { coverages, products, type SectionId } from '$lib/isec-data';
	import { trackEvent } from '$lib/utils/analytics';
	import { boundedIndex, nextIndex, previousIndex } from '$lib/utils/carousel';

	let activeProductIndex = $state(1);
	let isCoverageMenuOpen = $state(false);
	let showFloatingNav = $state(false);
	let activeCoverageIndex = $state(0);
	let openFaqIndex = $state<number | null>(0);
	let scrollProgress = $state(0);
	let isQuoteModalOpen = $state(false);
	let productTimer: ReturnType<typeof setInterval> | undefined;
	let scrollFrame: number | undefined;

	const partnerSectionModule = import('$lib/components/PartnerSection.svelte');
	const proofSectionModule = import('$lib/components/ProofSection.svelte');
	const faqSectionModule = import('$lib/components/FaqSection.svelte');
	const siteFooterModule = import('$lib/components/SiteFooter.svelte');
	const pathSections = new Set(['cover', 'services', 'quote', 'partners', 'support', 'contact']);

	function sectionHref(sectionId: SectionId) {
		return sectionId === 'top' ? '/' : `/${sectionId}`;
	}

	function sectionIdFromPath(pathname: string) {
		const sectionId = pathname.replace(/^\/+|\/+$/g, '');
		if (!sectionId) return 'top';
		return pathSections.has(sectionId) ? sectionId : null;
	}

	function scrollToSectionFromPath(behavior: ScrollBehavior = 'auto', retries = 0) {
		const sectionId = sectionIdFromPath(window.location.pathname);
		if (!sectionId) return;

		if (sectionId === 'top') {
			window.scrollTo({ top: 0, behavior });
			return;
		}

		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior, block: 'start' });
			return;
		}

		if (retries < 30) {
			window.setTimeout(() => scrollToSectionFromPath(behavior, retries + 1), 50);
		}
	}

	function closeCoverageMenu() {
		isCoverageMenuOpen = false;
	}

	function syncScrollState() {
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		scrollProgress = docHeight > 0 ? window.scrollY / docHeight : 0;
		showFloatingNav = window.scrollY > window.innerHeight * 0.72;
	}

	function scheduleScrollStateSync() {
		if (scrollFrame !== undefined) return;
		scrollFrame = window.requestAnimationFrame(() => {
			scrollFrame = undefined;
			syncScrollState();
		});
	}

	function nextProduct() {
		activeProductIndex = nextIndex(activeProductIndex, products.length);
		trackEvent('carousel_next', { activeProductIndex });
		restartProductTimer();
	}

	function previousProduct() {
		activeProductIndex = previousIndex(activeProductIndex, products.length);
		trackEvent('carousel_previous', { activeProductIndex });
		restartProductTimer();
	}

	function selectProduct(index: number) {
		activeProductIndex = boundedIndex(index, products.length);
		trackEvent('carousel_select', { activeProductIndex });
		restartProductTimer();
	}

	function restartProductTimer() {
		if (!productTimer) return;
		clearInterval(productTimer);
		productTimer = setInterval(nextProduct, 20000);
	}

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
		trackEvent('faq_toggle', { index, isOpen: openFaqIndex === index });
	}

	onMount(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		syncScrollState();
		window.addEventListener('scroll', scheduleScrollStateSync, { passive: true });

		if (!reduceMotion) {
			productTimer = setInterval(nextProduct, 20000);
		}

		scrollToSectionFromPath('auto');

		return () => {
			window.removeEventListener('scroll', scheduleScrollStateSync);
			if (scrollFrame !== undefined) window.cancelAnimationFrame(scrollFrame);
			if (productTimer) clearInterval(productTimer);
		};
	});

	afterNavigate(() => {
		if (typeof window === 'undefined') return;
		scrollToSectionFromPath('smooth');
	});
</script>

<svelte:head>
	<title>I-SEC Insurance Agency</title>
	<meta
		name="description"
		content="Compare insurance covers from trusted partners and find flexible protection for life, medical, motor, business, and more."
	/>
</svelte:head>

<main class="site-shell">
	<div
		class="scroll-progress"
		style:transform={`scaleX(${scrollProgress})`}
		aria-hidden="true"
	></div>

	<section class="hero-section" id="top" aria-label="ISEC Insurance landing page">
		<div class="ambient ambient-two"></div>

		<SiteNav
			{closeCoverageMenu}
			{isCoverageMenuOpen}
			{sectionHref}
			toggleCoverageMenu={() => (isCoverageMenuOpen = !isCoverageMenuOpen)}
		/>

		{#if isCoverageMenuOpen}
			<CoverageMenu
				{activeCoverageIndex}
				selectCoverage={(index) => (activeCoverageIndex = index)}
			/>
		{/if}

		<LandingHero openQuoteModal={() => (isQuoteModalOpen = true)} />
		<ProductCarousel {activeProductIndex} {nextProduct} {previousProduct} {selectProduct} />
		<ServiceBand />
		<GrowthSection openQuoteModal={() => (isQuoteModalOpen = true)} />
		<MetricGrid />
	</section>

	{#if isQuoteModalOpen}
		<QuoteRequestModal onClose={() => (isQuoteModalOpen = false)} services={coverages.map((item) => item.title)} />
	{/if}

	<FloatingSectionNav {closeCoverageMenu} {sectionHref} {showFloatingNav} />
	{#await partnerSectionModule then { default: PartnerSection }}
		<PartnerSection />
	{/await}
	{#await proofSectionModule then { default: ProofSection }}
		<ProofSection />
	{/await}
	{#await faqSectionModule then { default: DeferredFaqSection }}
		<DeferredFaqSection {openFaqIndex} {toggleFaq} />
	{/await}
	{#await siteFooterModule then { default: SiteFooter }}
		<SiteFooter />
	{/await}
</main>
