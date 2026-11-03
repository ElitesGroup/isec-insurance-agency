<script lang="ts">
	import type { SectionId } from '$lib/isec-data';
	import { imageUrl } from '$lib/utils/assets';
	import { reveal } from '$lib/actions/reveal';
	import { trackEvent } from '$lib/utils/analytics';

	type SectionHref = (sectionId: SectionId) => string;

	let {
		closeCoverageMenu,
		isCoverageMenuOpen,
		sectionHref,
		toggleCoverageMenu
	}: {
		closeCoverageMenu: () => void;
		isCoverageMenuOpen: boolean;
		sectionHref: SectionHref;
		toggleCoverageMenu: () => void;
	} = $props();

	function handleCoverageToggle() {
		toggleCoverageMenu();
		trackEvent('coverage_menu_toggle', { isOpening: !isCoverageMenuOpen });
	}

	function handleNavClick(sectionId: SectionId) {
		closeCoverageMenu();
		trackEvent('nav_click', { sectionId });
	}

	function handleContactClick() {
		closeCoverageMenu();
		trackEvent('nav_click', { sectionId: 'contact' });
	}
</script>

<nav class="site-nav reveal is-revealed" use:reveal>
	<a
		class="brand"
		href={sectionHref('top')}
		aria-label="I-SEC Insurance Agency home"
		onclick={() => handleNavClick('top')}
	>
		<img
			class="brand-logo"
			src={imageUrl('i-sec.png')}
			alt="I-SEC Insurance Agency"
			decoding="async"
		/>
	</a>

	<div class="nav-links" aria-label="Primary navigation">
		<button class="nav-link-button" type="button" onclick={handleCoverageToggle}
			>Insurance Cover</button
		>
		<a href={sectionHref('services')} onclick={() => handleNavClick('services')}>Services</a>
		<a href={sectionHref('partners')} onclick={() => handleNavClick('partners')}>Company</a>
		<a href={sectionHref('support')} onclick={() => handleNavClick('support')}>Support</a>
		<a href="/contact" onclick={handleContactClick}>Contact Us</a>
	</div>

	<div class="nav-actions">
		<a class="message-link" href="mailto:hello@isec.co.ke" aria-label="Send message">
			<img src={imageUrl('mail.svg')} alt="" loading="lazy" decoding="async" />
			<span>Send message</span>
		</a>
		<button
			class="hero-whatsapp-button"
			type="button"
			aria-controls="coverage-menu"
			aria-expanded={isCoverageMenuOpen}
			onclick={handleCoverageToggle}
		>
			Get Coverage
		</button>
		<a
				class="hero-whatsapp-button"
				href="https://api.whatsapp.com/send/?phone=%2B254113821287&text=Hi+I-Sec+Insurance+Agency+Customer+Support&type=phone_number&app_absent=0"
				target="_blank"
				rel="noreferrer"
		>Whatsapp us</a
		>
	</div>
</nav>
