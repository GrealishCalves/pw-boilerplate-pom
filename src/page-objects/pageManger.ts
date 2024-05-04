import { LoginPageFrameLocators, LoginPageLocators } from './login-page/LoginPage-constants';
import { LoginPage } from './login-page/LoginPage-page';

export class PageManager {
  constructor(public page: any) {}
  public onMainPage = new LoginPage(this.page, LoginPageLocators, 'd', LoginPageFrameLocators);
  public onLoginPage = new LoginPage(this.page, LoginPageLocators, 'd', LoginPageFrameLocators);
  public onTetsPage = new LoginPage(this.page, LoginPageLocators, 'd', LoginPageFrameLocators);
}

export type PagesType = { pm: PageManager };
