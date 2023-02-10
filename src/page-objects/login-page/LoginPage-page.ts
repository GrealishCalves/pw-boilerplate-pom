import { OptionsType } from '../../common/interface/common-types';
import { LoginPageFrameLocatorsType, LoginPageLocatorsType } from './LoginPage-constants';
import * as data from '../../data/data.json';
import { BasePage } from '../abstract-page/base-page';

export class LoginPage extends BasePage<LoginPageLocatorsType, LoginPageFrameLocatorsType> {
  constructor(options: OptionsType) {
    super(options);
  }

  public async visit(): Promise<void> {
    await this.page.goto(data.LOGIN_PAGE.URL);
  }

  public async fillUserNameAndPassword(): Promise<void> {
    await this.locators.USERNAME_INPUT.fill(data.LOGIN_PAGE.USERNAME);
    await this.locators.PASSWORD_INPUT.fill(data.LOGIN_PAGE.PASSWORD);
    await this.locators.LOGIN_BUTTON.click();
  }
}
