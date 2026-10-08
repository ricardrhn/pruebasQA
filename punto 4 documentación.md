# Parte 4 – Documentación del caso de prueba


## Caso de uso

Verificar que el sistema permita el ingreso correcto de un paciente cumpliendo con todos los campos obligatorios y validaciones del flujo.

## Consideraciones de la prueba

- El ingreso de pacientes se hace desde un módulo web "Pacientes → Nuevo ingreso".
- Campos obligatorios: tipo de documento, número de documento, nombres, apellidos, fecha de nacimiento, sexo, teléfono, correo electronico.
- Validaciones del flujo: mensajes de alerta, tipo de dato(texto, numerico), campos obligatorios, longitud según el tipo de documentos, CE(7), CC(10), formato de fecha(futuras, antiguas).

---

## Caso 1 – Ingreso exitoso de paciente con todos los campos obligatorios

| Campo | Detalle |
|---|---|
| **ID** | C1 |
| **Título** | Ingreso exitoso de paciente con todos los campos obligatorios |
| **Tipo de prueba** | Funcional |
| **Prioridad** | Alta |
| **Ambiente** | ambiente de pruebas |
| **Navegador** | Chrome,firefox,edge |
| **Ejecutado por** | Ricardo Hurtado |
| **Fecha de ejecución** | 07/10/2026 |

### Precondiciones para ejecutar la prueba

1. El ambiente de QA está disponible y el sitio web de pacientes está desplegado en pruebas.
2. Se cuenta con acceso a la base de datos de QA para la gestión de usuarios y permisos.
3. El usuario de prueba tiene asignados, por base de datos, los permisos sobre el módulo de registro de pacientes.
4. El usuario ha iniciado sesión en el sistema.
5. El número de documento a utilizar no está registrado.
6. Los datos de prueba están preparados.

### Datos de prueba

| Campo | Valor |
|---|---|
| Tipo de documento | Cédula de ciudadanía |
| Número de documento | 1126564180 |
| Nombres | ricardo renato |
| Apellidos | hurtado naranjo |
| Fecha de nacimiento | 10/08/2026 |
| Sexo | masculino |
| Teléfono | 3203531768 |
| correo electronico | pruebas@gmail.com |

### Pasos de ejecución

| # | Paso | Resultado esperado |
|---|---|---|
| 1 | Ir al menú Pacientes → Nuevo ingreso | Se muestra el formulario de ingreso con los campos obligatorios marcados con (*) |
| 2 | Seleccionar el tipo de documento e ingresar el número | Los campos aceptan los valores sin mostrar errores |
| 3 | Ingresar nombres y apellidos | Los campos aceptan los valores sin mostrar errores |
| 4 | Ingresar fecha de nacimiento, sexo, teléfono y correo electronico | Los campos aceptan los valores sin mostrar errores |
| 5 | Hacer clic en "Guardar" | Se muestra el mensaje "Paciente no registrado" |



### Resultado obtenido 

El sistema registra al paciente, muestra el mensaje de confirmación y el registro queda disponible
en la búsqueda con los mismos datos ingresados.

Sin embargo, al validar el campo "Fecha de nacimiento" se evidenció que el sistema permite ingresar
y guardar una fecha futura sin mostrar ninguna alerta.

### Estado del caso

**Fallido**

El flujo principal se completa, pero no se cumple una de las validaciones exigidas por el caso de uso.

Estados posibles: Exitoso · Fallido · Bloqueado · No ejecutado.

### Evidencias 

| # | Descripción | Archivo |
|---|---|---|
| 1 | Formulario diligenciado antes de guardar | `evidencia/imagen.png` |
| 2 | Mensaje de confirmación del registro | `evidencia/imagen2.png` |
| 3 | Paciente encontrado en la búsqueda | `evidencia/imagen3.png` |
| 4 | Fecha de nacimiento futura aceptada | `evidencia/imagen4.png` |

### Defectos asociados

| Campo | Detalle |
|---|---|
| **ID** | E1 |
| **Título** | El formulario de ingreso permite registrar un paciente con fecha de nacimiento futura |
| **Prioridad** | Alta |
| **Estado** | Abierto |
| **Ambiente** | pruebas |
| **Caso asociado** | C1 |

**Pasos para reproducir**

1. Ir a Pacientes → Nuevo ingreso.
2. Diligenciar todos los campos obligatorios con datos válidos.
3. En "Fecha de nacimiento" seleccionar una fecha posterior al día actual.
4. Hacer clic en "Guardar".

**Resultado actual:** el sistema guarda el paciente sin mostrar ningún error.

**Resultado esperado:** el sistema no permite guardar y muestra el mensaje "La fecha de nacimiento no puede ser futura".

**Evidencia:** `evidencia/imagen4.png`


