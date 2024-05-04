import { FrameLocator, Page } from '@playwright/test';
import { LocatorObject, OptionsType, PageObject } from '../../common/interface/common-types';

export abstract class BasePage<T, U> implements PageObject {
  protected readonly page: Page;
  protected readonly locators: T;
  protected readonly frameLocators: U;

  constructor(page, pageLocatorsObject, frameSelector, frameLocatorsObject: any) {
    this.page = page;
    this.locators = pageLocatorsObject ? this.mapLocators(page, pageLocatorsObject) : ({} as T);
    this.frameLocators =
      frameSelector && frameLocatorsObject ? this.mapLocators(page.frameLocator(frameSelector), frameLocatorsObject) : ({} as U);
  }

  private mapLocators<T>(locator: Page | FrameLocator, object: LocatorObject<string>): T {
    const entries = Object.entries(object);
    const mappedEntries = entries.map(([key, value]) => [key, locator.locator(value)]);
    return Object.fromEntries(mappedEntries) as T;
  }

  public async wait(time: number): Promise<void> {
    await this.page.waitForTimeout(time);
  }

  public async pause(): Promise<void> {
    await this.page.pause();
  }

  public async waitForState(state?: 'load' | 'domcontentloaded' | 'networkidle'): Promise<void> {
    await this.page.waitForLoadState(state);
  }
}
