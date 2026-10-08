PRUEBA TÉCNICA QA

Hecha por: [Tu nombre]

Aquí están las 4 partes de la prueba. Abajo explico qué hay en cada carpeta y cómo abrir o ejecutar cada cosa.


CARPETAS

- postman/     -> colección con las pruebas de la API REST
- soap/        -> proyecto de SoapUI con la prueba de la calculadora
- playwright/  -> pruebas automatizadas de SauceDemo
- pruebasQA        -> caso de prueba documentado (Parte 4)
- evidencia/   -> capturas de las ejecuciones


QUÉ SE NECESITA INSTALAR

- Postman
- SoapUI (versión Open Source)
- Node.js versión 22 o superior


PARTE 1 - API REST

Usé la API https://dummyjson.com/ con Postman.

Para abrirla:

1. Abrir Postman y dar clic en Import.
2. Seleccionar el archivo postman/pruebasQA.postman_collection.json
3. Abrir cada petición y dar clic en Send.

Las validaciones se ven en la pestaña Test Results de la respuesta.

Pruebas que hice:

1. Login exitoso: valida el status y que devuelva el token.
2. Login fallido: con credenciales inválidas, valida el error.
3. Listar productos: valida el status, la lista y la estructura.


PARTE 2 - SOAP

Usé SoapUI con el servicio http://www.dneonline.com/calculator.asmx?WSDL (SOAP 1.1).

Para abrirlo:

1. Abrir SoapUI e ir a File -> Import Project.
2. Seleccionar el archivo soap/pruebasQA-soapui-project.xml
3. Abrir el request de la operación Add y dar clic en la flecha verde.

Pruebas que hice:

1. Suma 5 + 3: el resultado es 8.



PARTE 3 - PLAYWRIGHT

Automaticé https://www.saucedemo.com/ con Playwright y TypeScript. Usé Page Object Model: los pages están en la carpeta page, los tests en tests y los datos en data.

Para instalar:

    cd playwright
    npm install
    npx playwright install

Para ejecutar:

    npx playwright test

Para ver el navegador mientras corre:

    npx playwright test --headed

Para ver el reporte:

    npx playwright show-report

Pruebas que hice:

1. Login exitoso
2. Login fallido
3. Agregar producto al carrito


PARTE 4 - DOCUMENTACIÓN

El caso de prueba está en docs/caso-de-prueba.md

Como el enunciado no da un sistema para probar el ingreso del paciente, definí los campos y las validaciones como consideraciones, y el resultado y las evidencias de esa parte son de ejemplo.


EVIDENCIA

En el archivo evidencia/ están las capturas de Postman, SoapUI y Playwright.
