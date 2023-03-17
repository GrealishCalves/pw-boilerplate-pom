import { Page } from '@playwright/test';

export class ApiService {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async printApiResponse(url: string): Promise<void> {
    const response = await this.page.waitForResponse(url);
    if (response.ok()) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } else {
      console.error(`API request failed with status ${response.status()}`);
    }
  }
}
