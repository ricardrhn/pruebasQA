import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginPage';
import loginData from '../data/login.json';
import { compraPage } from '../page/compraPage';
import productoData from '../data/producto.json';


test('test login exitoso', async ({ page }) => {  
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.usernameInput.fill(loginData.usuario);
  await loginPage.passwordInput.fill(loginData.password);
  await loginPage.loginButton.click();
  await page.screenshot({ path: 'evidencia/login-exitoso.png', fullPage: true });

});

test('test usuario bloqueado', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.usernameInput.fill(loginData.usuarioIncorrecto);
  await loginPage.passwordInput.fill(loginData.password);
  await loginPage.loginButton.click();
  await page.screenshot({ path: 'evidencia/login-fallo.png', fullPage: true });
});

test('test contraseña incorrecta', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.usernameInput.fill(loginData.usuario);
  await loginPage.passwordInput.fill(loginData.contrasenaIncorrecta);
  await loginPage.loginButton.click();
  await page.screenshot({ path: 'evidencia/login-contrasena-incorrecta.png', fullPage: true });
});

test('test flujo de compra', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const compra = new compraPage(page);

  //login exitoso
  await loginPage.goto();
  await loginPage.usernameInput.fill(loginData.usuario);
  await loginPage.passwordInput.fill(loginData.password);
  await loginPage.loginButton.click();  

  //proceso de compra

  await compra.agregar.click();
  //await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
  await page.screenshot({ path: 'evidencia/agregar-al-carrito.png', fullPage: true });

  await compra.carrito.click();
  //await page.locator('[data-test="shopping-cart-link"]').click();
  await page.screenshot({ path: 'evidencia/carrito.png', fullPage: true });

  await compra.checkout.click();
  //await page.locator('[data-test="checkout"]').click();
  await page.screenshot({ path: 'evidencia/checkout.png', fullPage: true });

  await compra.firstName.fill(productoData.primerNombre);
  await compra.lastName.fill(productoData.apellido);
  await compra.postalCode.fill(productoData.postal);
  await compra.continue.click();
  await page.screenshot({ path: 'evidencia/checkout.png', fullPage: true });

  /*await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('pruebas');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('tester');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('0');
  await page.locator('[data-test="continue"]').click();
  
  /*await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="complete-header"]').click();*/
  await compra.finish.click();
  await compra.complete.click();
  await page.screenshot({ path: 'evidencia/login-flujo-compra.png', fullPage: true });
});