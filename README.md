**CONFIGURACIÓN DE PROYECTO BASE NODE + EXPRESS + TS + JWT + TYPEORM**

El proyecto tiene una configuración base con express y typescript, se realizó la implementación de typeOrm y se utilizaron migraciones para generar nuestra tabla contacts en la base de datos.

**PRE-REQUISITOS**

1. Node la versión LTS `https://nodejs.org/es/`
2. Instalar TypeScript de manera global. Para esto abren una consola en modo administrador para windows y ejecutan `npm install -g typescript` para usuarios linux o mac deben ejecutar `sudo npm install -g typescript`
3 instalación de manera global de nodemon. Hacen lo mismo que en el paso 2 y ejecutan `npm install -g nodemon` para linux y mac `sudo npm install -g nodemon`

**INSTALACIÓN Y PUESTA EN MARCHA**

`1. git clone git@github.com:Adrian-Vergara/contact_server.git`

`2. cd contact_server`

`3. npm install`

`4. Crear la base de datos llamada db_contacts, si quieren modificar el nombre, primero deben modificarlo en el fichero connection/app.ts y ormconfig.ts`

`5. npm run dev` para levantar el servidor

`6. en la raíz del proyecto les dejo un api-postman.json que deben importar en postman donde tendrán las apis`

**LIBRERÍAS RELEVANTES QUE SE UTILIZARON**

`1. Express https://github.com/expressjs/express`

`2. TypeOrm https://typeorm.io/#/`

`2. JsonWebToken https://github.com/auth0/node-jsonwebtoken`

**NOTA!!!**

Cada vez que instalen una librería recuerden que deben hacer la instalación para TypeScript pero como dependencias de desarrollo. Por ejemplo si instalan la librería moment que es para el manejo de fechas deben hacer lo siguiente:

`1. npm install moment`

`2. npm install @types/moment --save-dev`



