export type DataTestType = {
  dataType: unknown;
  dynamicDataOrFix: unknown;
};

export const simpleValues = {
  dataType: 'default',
};

export const autoTrueFixtures = {
  dynamicDataOrFix: [
    async ({ dataType }: { dataType: any }, use: (currentData: unknown) => Promise<unknown>) => {
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
