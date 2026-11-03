<script lang="ts">
	import { imageUrl } from '$lib/utils/assets';

	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="social-links " aria-label="Social links">
		<a href="/" aria-label="Facebook"
			><img src={imageUrl('Social Icons1.svg')} alt="" loading="lazy" decoding="async" /></a
		>
		<a href="/" aria-label="X"
			><img src={imageUrl('Social Icons 2.svg')} alt="" loading="lazy" decoding="async" /></a
		>
		<a href="/" aria-label="Instagram"
			><img src={imageUrl('Social Icons3.svg')} alt="" loading="lazy" decoding="async" /></a
		>
		<a href="/" aria-label="LinkedIn"
			><img src={imageUrl('Social Icons4.svg')} alt="" loading="lazy" decoding="async" /></a
		>
		<a href="/" aria-label="YouTube"
			><img src={imageUrl('Vector.svg')} alt="" loading="lazy" decoding="async" /></a
		>
	</div>
	<div class="footer-contact" id="contact" aria-label="Contact details">
		<a class="contact-item" href="tel:+254113821287" aria-label="Call +254 113 821287">
			<span class="contact-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" focusable="false">
					<path
						d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.11.37 2.3.56 3.52.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.75 21 3 13.25 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.19 2.41.56 3.52a1 1 0 0 1-.24 1.02z"
					></path>
				</svg>
			</span>
			<span>+254 113 821287</span>
		</a>
		<a class="contact-item" href="tel:+254780862854" aria-label="Call +254 780 862 854">
			<span class="contact-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" focusable="false">
					<path
							d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.11.37 2.3.56 3.52.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.75 21 3 13.25 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.19 2.41.56 3.52a1 1 0 0 1-.24 1.02z"
					></path>
				</svg>
			</span>
			<span>+254 780 862 854</span>
		</a>

		<a class="contact-item" href="mailto:isecinsuranceagency@gmail.com" aria-label="Email isecinsuranceagency@gmail.com">
			<span class="contact-icon" aria-hidden="true">
				<img src={imageUrl('mail.svg')} alt="" loading="lazy" decoding="async" />
			</span>
			<span>isecinsuranceagency@gmail.com</span>
		</a>
		<a class="contact-item" href="mailto:info@isecinsuranceagency.com" aria-label="Email info@isecinsuranceagency.com">
			<span class="contact-icon" aria-hidden="true">
				<img src={imageUrl('mail.svg')} alt="" loading="lazy" decoding="async" />
			</span>
			<span>info@isecinsuranceagency.com</span>
		</a>
	</div>
	<div class="footer-legal">
		<a href="/legal/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer"
			>Terms & Conditions</a
		>
		<a href="/legal/privacy-policy.pdf" target="_blank" rel="noopener noreferrer"
			>Privacy Policy</a
		>
		<span>&copy;{currentYear}, I-Sec Insurance Agency. All rights reserved.</span>
	</div>
</footer>
