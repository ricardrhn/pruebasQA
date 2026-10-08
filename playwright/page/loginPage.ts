import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  
    get usernameInput(): Locator {
    return this.page.locator('[data-test="username"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-test="password"]');
  }

  get loginButton(): Locator {
    return this.page.locator('[data-test="login-button"]');
  }

  

  constructor(readonly page: Page) {
        
  }

  async goto() {
    await this.page.goto('');
  }

 
}