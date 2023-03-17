module.exports = function (plop) {
  plop.setGenerator('page object', {
    prompts: [
      {
        type: 'input',
        name: 'pageName',
        message: 'What is the name of the page object class?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/page-objects/{{pageName}}/{{pageName}}-page.ts',
        template: `import { OptionsType } from '../../common/interface/common-types';
import { BasePage } from '../abstract-page/base-page';
import { {{pageName}}FrameLocatorsType, {{pageName}}LocatorsType } from './{{pageName}}-constants';

export class {{pageName}} extends BasePage<{{pageName}}LocatorsType, {{pageName}}FrameLocatorsType> {
  constructor(options: OptionsType) {
    super(options);
  }

  public async visit(): Promise<void> {}
}

`,
      },
      {
        type: 'add',
        path: 'src/page-objects/{{pageName}}/{{pageName}}-constants.ts',
        template: `import { Locator } from '@playwright/test';

export const {{pageName}}Locators = {
  LOCATOR_TEST: '#001',
};

export const {{pageName}}FrameLocators = {
  FRAME_TEST: '#001',
};

export type {{pageName}}LocatorsType = Record<keyof typeof {{pageName}}Locators, Locator>;
export type {{pageName}}FrameLocatorsType = Record<keyof typeof {{pageName}}FrameLocators, Locator>;
`,
      },
    ],
  });
};
