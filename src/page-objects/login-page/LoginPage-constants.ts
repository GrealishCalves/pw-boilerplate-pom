import { Locator } from '@playwright/test';

export const LoginPageLocators = {
  USERNAME_INPUT: '#user-name',
  PASSWORD_INPUT: '#password',
  LOGIN_BUTTON: '#login-button',
};

export const LoginPageFrameLocators = {};

export type LoginPageLocatorsType = Record<keyof typeof LoginPageLocators, Locator>;
export type LoginPageFrameLocatorsType = Record<keyof typeof LoginPageFrameLocators, Locator>;
