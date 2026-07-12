import { test, expect } from '@playwright/test';

test.describe('Inner Pages', () => {
  test('about page renders banner and story heading', async ({ page }) => {
    await page.goto('/about/');
    await expect(page.getByRole('heading', { level: 1, name: /about aerantis/i })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: /a considered approach to property/i }),
    ).toBeVisible();
  });

  test('services page shows capability heading and card', async ({ page }) => {
    await page.goto('/services/');
    await expect(page.getByRole('heading', { level: 1, name: /our services/i })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: /capabilities shaped around long-term value/i }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /property solutions/i })).toBeVisible();
  });

  test('projects page renders portfolio heading', async ({ page }) => {
    await page.goto('/projects/');
    await expect(page.getByRole('heading', { level: 1, name: /^projects$/i })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: /selected projects/i }),
    ).toBeVisible();
  });

  test('contact page renders consultation form and sidebar', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.getByRole('heading', { level: 1, name: /^contact$/i })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: /request a consultation/i }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /^call$/i })).toBeVisible();
  });
});

