import { LoginPageDataApi, PageData } from '../../data/data';

export const loginPageData: PageData<LoginPageDataApi> = {
  url: 'https://services.cal-online.co.il/Card-Holders/Screens/AccountManagement/Login.aspx',
  apis: {
    configProdJson: {
      method: 'GET',
      url: 'https://connect.cal-online.co.il/assets/config/config.prod.json',
    },
  },
  username: '310430582',
  password: '7215',
};
