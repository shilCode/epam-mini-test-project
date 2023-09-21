// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/EPAM | Software Engineering & Product Development Services/);
});

test('can view hamburger menu', async ({ page }) => {

  await page.goto('');

  const hamburger = '[class="hamburger-menu__button"]'

  await page.locator(hamburger).click()

  await expect(page.locator(hamburger)).toBeVisible();
 

});
