const { test, chromium, expect } = require('@playwright/test');

test('testing something', async () => {
  const browser = await chromium.launch({ headless:true, locale:'en-US'});
  const page = await browser.newPage();
  

  await page.goto('https://www.google.com');

  await page.locator('//div[contains(text(),"Zaakceptuj wszystko")]').nth(1).click()

  // Get the value of the search input element
  const searchTerm = await page.evaluate(() => document.querySelector('[value="Szukaj w Google"]').value);
   // Get text content of all h1 elements
   const h1Elements = await page.evaluate(() => {
    const h1Nodes = document.querySelectorAll('h1');
    const h1TextContent = [];
    h1Nodes.forEach((h1Node) => {
      h1TextContent.push(h1Node.textContent);
    });
    return h1TextContent;
  });

  console.log("searched item ", searchTerm);
  console.log("Page titles: ", h1Elements);
   

  // Assert that the search term matches the default text
   expect(searchTerm).toBe('Szukaj w Google');
   expect(h1Elements).toContain('Zanim przejdziesz do Google')

  await browser.close();
});
