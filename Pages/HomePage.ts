import{Page, Locator} from '@playwright/test';

export class HomePage{

    readonly page:Page;
    readonly usernameInput:Locator
    readonly passwordInput:Locator
    readonly loginbutton:Locator


    constructor(page:Page){

        this.page=page;
        this.usernameInput=page.getByPlaceholder('Username');
        this.passwordInput=page.getByPlaceholder('Password');
        this.loginbutton=page.locator('#login-button');

    }

    async navigateToHome(){

        await this.page.goto("https://www.saucedemo.com/");

    }

    async login(username:string,password:string){


        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginbutton.click();

    }


}