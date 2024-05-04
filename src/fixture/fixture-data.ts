export type DataTestType = {
  dataType: unknown;
  dynamicDataOrFix: unknown;
};

export enum DataType {
  DEFAULT = 'default',
}

export const simpleValues = {
  dataType: DataType.DEFAULT,
};

export const autoTrueFixtures = {
  dynamicDataOrFix: [
    async ({ dataType }: { dataType: DataType }, use: (currentData: unknown) => Promise<unknown>) => {
      if (dataType !== 'default') {
        return;
      }
      const currentData = {
        username: 'admin',
        password: 'admin',
      };
      await use(currentData);
    },
    { auto: true },
  ],
};

export const dataTestFixtures = {
  ...autoTrueFixtures,
  ...simpleValues,
};
