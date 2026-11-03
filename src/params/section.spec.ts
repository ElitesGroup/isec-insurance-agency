import { describe, expect, it } from 'vitest';
import { match } from './section';

describe('section param matcher', () => {
	it('accepts all supported section slugs', () => {
		expect.assertions(6);
		expect(match('cover')).toBe(true);
		expect(match('services')).toBe(true);
		expect(match('quote')).toBe(true);
		expect(match('partners')).toBe(true);
		expect(match('support')).toBe(true);
		expect(match('contact')).toBe(true);
	});

	it('rejects unsupported section slugs', () => {
		expect.assertions(4);
		expect(match('top')).toBe(false);
		expect(match('about')).toBe(false);
		expect(match('')).toBe(false);
		expect(match('COVER')).toBe(false);
	});
});

