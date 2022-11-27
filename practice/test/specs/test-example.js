const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

//test suite is defined by - describe
describe('My Login application', () => {

    //testcases inside suite are described by - it
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


