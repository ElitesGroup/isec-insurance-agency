import { expect, test } from '@playwright/test';

test('section navigation and faq interaction work', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('link', { name: 'Support' }).click();
	await expect(page.locator('#support')).toBeInViewport();

	await page.getByRole('button', { name: 'Can I compare several insurance covers?' }).click();
	await expect(page.getByText('compare different providers and coverage types')).toBeVisible();
});

test('coverage menu opens from the primary call to action', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('button', { name: 'Get Coverage' }).click();

	await expect(page.locator('#coverage-menu')).toBeVisible();
	await expect(page.locator('.cover-item')).toHaveCount(8);
});

test('privacy policy route is available', async ({ request }) => {
	const response = await request.get('/privacy-policy', { maxRedirects: 0 });

	expect(response.status()).toBe(308);
	expect(response.headers().location).toBe('/legal/privacy-policy.pdf');
});
