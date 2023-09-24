// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('simple test suite',()=>{

  test.use({storageState:"accept_cookie.json"})

  test.beforeEach(async ({page})=>{
    await page.goto('');
  })

  test('has title', async ({ page }) => {
    
    await expect(page).toHaveTitle(/EPAM | Software Engineering & Product Development Services/);
  });
  
  test('can view hamburger menu', async ({ page }) => {
  
    const hamburger = '[class="hamburger-menu__button"]'
  
    await page.locator(hamburger).click()
  
    await expect(page.locator(hamburger)).toBeVisible();
   
  
  });

  test('intentional failed test-case', async ({ page }) => {
  
    const hamburger = '[class="hamburger-menu__button"]'
  
    await page.locator(hamburger).click()
  
    await expect(page.locator(hamburger)).toBeHidden()
   
  
  });
})


