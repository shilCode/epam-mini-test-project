import {test as setup, expect }  from '@playwright/test'

setup.describe('epam test suite',()=>{

    setup('clear cookie accceptance for the user',async ({page})=>{
        await page.goto('')
        const acceptAllCookie = '[id="onetrust-accept-btn-handler"]'

        await expect(page.locator(acceptAllCookie)).toBeVisible();
        await page.locator(acceptAllCookie).click();

        await page.context().storageState({path:"accept_cookie.json"})
        //saves the state in a json file so that the setup can be used later on

    })

})