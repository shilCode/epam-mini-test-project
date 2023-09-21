const {test:base,expect} = require('@playwright/test')

const test = base.extend({
    mainPage:async({page},use)=>{
        await page.goto('');
        await page.locator('[id="onetrust-accept-btn-handler"]').click();
        await use(page);
    }
})

test('launch epam',async ({mainPage})=>{
    await expect(mainPage).toHaveTitle('EPAM | Software Engineering & Product Development Services')
})