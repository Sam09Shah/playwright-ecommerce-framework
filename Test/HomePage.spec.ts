import{test,expect} from '@playwright/test'
import{HomePage} from '../Pages/HomePage.ts'

test.describe('HomePage tests',()=>{

    let home:HomePage;

    test.beforeEach('HomePage',async({page})=>{

         home=new HomePage(page)
         home.navigateToHome();
         await expect(page).toHaveTitle('Swag Labs');

    })

    test('Valid Login',async({page})=>{

        await home.login('standard_user','secret_sauce');
        await expect(page).toHaveURL(/inventory/);

        await page.waitForTimeout(5000);

    })

})