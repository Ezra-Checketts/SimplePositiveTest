import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

describe('The website', () => {
    it('should login properly and fail later actions', async () => {
        await LoginPage.open();
        await LoginPage.login('error_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toBeExisting();
    })
})