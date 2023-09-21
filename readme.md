# EPAM Demo Project

things to lookout for while working with playwright

- test.use() is really powerful, to skip/config on the fly
       ` Specifies options or fixtures to use in a single test file or a test.describe() group. Most useful to set an option, for example set locale to configure context fixture

        Arguments:

            options (TestOptions) - An object with local options.

            Popular options. (You can exlore more here: TestOptions | Playwright)

            headless: whether to run browser in headless mode.

            test.describe('Login Test Suite', () => {
            test.use( {headless: true} ); 
            test('should login suing valid credentials', async ({ page }) => {...}); 
            test('should not login using non-valid credentials', async ({ page }) => {...}); 
            });
            locale: Specify user locale, for example en-GB, de-DE, etc.

            test.describe('Login Test Suite', () => {
            test.use( {locale: 'de-DE'} ); 
            test('should login suing valid credentials', async ({ page }) => {...}); 
            test('should not login using non-valid credentials', async ({ page }) => {...}); 
            });
            isMobile: whether the meta viewport tag is taken into account and touch events are enabled.

            test.describe('Login Test Suite', () => {
            test.use({ isMobile: true }); 
            test('should login suing valid credentials', async ({ page }) => {...}); 
            test('should not login using non-valid credentials', async ({ page }) => {...}); 
            });
            viewport: emulates consistent viewport for each page. Defaults to an 1280x720 viewport.

            test.describe('Login Test Suite', () => {
            test.use({ viewport: {width: 100, height: 100} }); 
            test('should login suing valid credentials', async ({ page }) => {...}); 
            test('should not login using non-valid credentials', async ({ page }) => {...}); 
            });
            storageState: Populates context with given storage state.

            test.describe('Logged in user', () => {
            test.use({ storageState: 'state.json' }); 
            test('should open a page', async ({ page }) => {...}); 
            });`

 - look at the config file and how setup file is linked 
