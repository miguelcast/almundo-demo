# almundo-demo

#### Clonar repositorio
```
git clone https://github.com/miguelcast/almundo-demo.git
```

#### Instalar dependencia
Ejecutar los siguientes comandos desde la raíz del proyecto.
```
cd api/ && yarn
```
```
cd web/ && yarn
```
#### Ejecutar API
```
cd api/
```
```
yarn start
```
Api de hoteles queda en http://localhost:3001

Ambiente de producción
```
cd api/
```
```
yarn start-prod
```
Los archivos de configuración para los ambientes de desarrollo y producción
se encuentran en `/api/config/`  `default.json` (desarrollo) y `production.json`

#### Ejecutar Frontend
Ambiente de desarrollo
```
cd web/
```
```
yarn dev
```
Web de Almundo queda en http://localhost:3000

Ambiente de producción
```
cd web/
```
```
yarn build
```
```
yarn start
```
El archivo de configuración para los ambientes de desarrollo y 
producción se encuentra en `next.config.js`

#### UI Components con Storybook
Ver UI components del proyecto, en la carpeta web ejecutar
```
yarn storybook
```
UI Components de Almundo queda en http://localhost:9001