import { expect, test } from '@playwright/test';

test('carousel controls change active product and dot state', async ({ page }) => {
	await page.goto('/');

	const activeCard = page.locator('.product-card.is-active').first();
	const activeDot = page.locator('.dots button.is-active').first();
	const firstProduct = await activeCard.getAttribute('data-product');

	await page.getByRole('button', { name: 'Next product' }).click();

	expect(firstProduct).not.toBeNull();
	await expect(page.locator('.product-card.is-active').first()).not.toHaveAttribute(
		'data-product',
		firstProduct as string
	);
	await expect(activeDot).toBeVisible();

	await page.locator('.dots button').nth(3).click();
	await expect(page.locator('.dots button').nth(3)).toHaveClass(/is-active/);
	await expect(page.locator('.product-card.is-active').first()).toHaveAttribute('data-product', 'motor');
});

test('coverage menu selection updates preview area', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Products' }).click();

	const previewTitle = page.locator('.cover-feature span');
	const initialTitle = await previewTitle.textContent();

	await page.locator('.cover-item').nth(2).click();

	expect(initialTitle).not.toBeNull();
	await expect(previewTitle).not.toHaveText(initialTitle as string);
	await expect(previewTitle).toHaveText('Medical Insurance');
});

test('faq answer can be toggled open and closed', async ({ page }) => {
	await page.goto('/');

	const faqButton = page.getByRole('button', { name: 'How fast can I get a quote?' });
	await faqButton.scrollIntoViewIfNeeded();

	await faqButton.click();
	await expect(faqButton).toHaveAttribute('aria-expanded', 'true');
	await expect(
		page.getByText('Most simple covers can be matched in minutes once the required details are available.')
	).toBeVisible();

	await faqButton.click();
	await expect(faqButton).toHaveAttribute('aria-expanded', 'false');
});
