import { type Page, type Locator } from '@playwright/test';

export class compraPage {
  
    get agregar(): Locator {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get carrito(): Locator {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  get checkout(): Locator {
    return this.page.locator('[data-test="checkout"]');
  }
get firstName(): Locator {
    return this.page.locator('[data-test="firstName"]');
  }
get lastName(): Locator {
    return this.page.locator('[data-test="lastName"]');
  }
  get postalCode(): Locator {
    return this.page.locator('[data-test="postalCode"]');
  }

   get continue(): Locator {
    return this.page.locator('[data-test="continue"]');
  }
  get finish(): Locator {
    return this.page.locator('[data-test="finish"]');
  }
  get complete(): Locator {
    return this.page.locator('[data-test="complete-header"]');
  }

  

  constructor(readonly page: Page) {
        
  }

  async goto() {
    await this.page.goto('');
  }

 
}