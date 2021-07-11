# api-marvel-movies
Challenge to create an api of marvel movies

Para comenzar es necesario tener instalado lo siguiente
- nodejs v12.19.0 ( https://nodejs.org/es/download/ ) 
- npm v6.14.8

Para checar que se instalo correctamente nodejs y npm corremos dentro de una consola de comendo los siguientes comandos
```sh
    $ node -v
    $ npm -v
```
Una vez instalados ambos paquetes continuamos con la instalacion de la aplicacion, dentro de la carpeta donde se encuentra la aplicaion, comenzamos la instalacion con el siguiente codigo
```sh
    $ npm install
```

El paso siguiente es renombrar el archivo `.env.example` que contiene las variables de entonrno necesarias para correr la aplicacion, se renombrara solo a `.env`
| Plugin | README |
| ------ | ------ |
| PORT |Puerto donde correra la aplicacion 4000 por default |
| MONGO_URI_PROD | Uri para conectarse a mongo atlas de la base de produccion|
| MONGO_URI_TEST | Uri para conectarse a mongo atlas de la base de test|

Para iniciar la aplicacion en modo de desarrollo es el siguiente comando
```sh
    $ npm run start:dev
```
Finalmente para iniciar la aplicacion en desarollo es necesario seguir los siguientes pasos

#### Produccion
Para correr en prodiccopm
```sh
    $ npm start
```