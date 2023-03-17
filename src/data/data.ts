export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface APIEndpoint {
  method: HttpMethod;
  url: string;
}

export interface APIDefinitions {
  [key: string]: APIEndpoint;
}

export interface PageData<T extends APIDefinitions> {
  url: string;
  apis: T | null;
  username?: string | null | undefined;
  password?: string | null | undefined;
}

export interface LoginPageDataApi extends APIDefinitions {
  configProdJson: APIEndpoint;
}

