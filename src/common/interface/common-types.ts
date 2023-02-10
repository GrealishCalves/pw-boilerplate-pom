import { Locator, Page } from '@playwright/test';

export type LocatorObject<T> = Record<string, T>;

export type OptionsType = {
  page: Page;
  pageLocatorsObject: LocatorObject<string>;
  frameSelector?: string;
  frameLocatorsObject?: LocatorObject<string>;
};

export interface PageObject {
  wait(time: number): Promise<void>;
  pause(): Promise<void>;
  waitForState(state?: 'load' | 'domcontentloaded' | 'networkidle'): Promise<void>;
}
