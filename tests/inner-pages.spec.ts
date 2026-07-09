import { test, expect } from '@playwright/test';

test.describe('Inner Pages', () => {
  test('about page renders updated banner and team section', async ({ page }) => {
    await page.goto('/about/');
    await expect(page.getByRole('heading', { level: 1, name: /about aerantis/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /meet the team behind aerantis/i })).toBeVisible();
  });

  test('services page shows capability heading and service cards', async ({ page }) => {
    await page.goto('/services/');
    await expect(page.getByRole('heading', { level: 1, name: /^services$/i })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: /strategic support across property and project delivery/i }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /general repairs/i })).toBeVisible();
  });

  test('reviews page renders testimonial system', async ({ page }) => {
    await page.goto('/reviews/');
    await expect(page.getByRole('heading', { level: 1, name: /client reviews/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /trusted relationships built on clear delivery/i })).toBeVisible();
    await expect(page.getByText(/verified/i).first()).toBeVisible();
  });

  test('contact page renders refreshed form and sidebar cards', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.getByRole('heading', { level: 1, name: /^contact$/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /send us a message/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /call us/i })).toBeVisible();
  });
});

