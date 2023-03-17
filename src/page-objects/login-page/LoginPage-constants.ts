import { Locator } from '@playwright/test';

export const LoginPageLocators = {};

export const LoginPageFrameLocators = {
  USERNAME_INPUT: '#mat-input-0',
  PASSWORD_INPUT: '#mat-input-1',
  LOGIN_BUTTON: "span[class='ng-star-inserted']",
  SEND_BUTTON: "button[type='submit']",
};

export type LoginPageLocatorsType = Record<keyof typeof LoginPageLocators, Locator>;
export type LoginPageFrameLocatorsType = Record<keyof typeof LoginPageFrameLocators, Locator>;
