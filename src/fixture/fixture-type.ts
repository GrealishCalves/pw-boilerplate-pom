import { ApiService } from '../common/services/api.service';
import { LoginPage } from '../page-objects/login-page/LoginPage-page';

export type PagesType = {
  loginPage: LoginPage;
};

export type ServiceType = {
  ApiService: ApiService;
};
