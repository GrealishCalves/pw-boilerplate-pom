import { OptionsType } from '../../common/interface/common-types';
import { LoginPageFrameLocatorsType, LoginPageLocatorsType } from './LoginPage-constants';
import * as data from '../../data/data.json';
import { BasePage } from '../abstract-page/base-page';

export class LoginPage extends BasePage<LoginPageLocatorsType, LoginPageFrameLocatorsType> {
  private readonly pageData = data.LOGIN_PAGE;

  public async visit(): Promise<void> {
    await this.page.goto(this.pageData.URL);
  }

  public async fillUserNameAndPassword(): Promise<void> {
    await this.locators.USERNAME_INPUT.fill(this.pageData.USERNAME);
    await this.locators.PASSWORD_INPUT.fill(this.pageData.PASSWORD);
    await this.locators.LOGIN_BUTTON.click();
  }
}
