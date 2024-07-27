Proyecto [Next.js](https://nextjs.org/) hecho con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Aplicacion del curso: 
[Next.js: El framework de React para producción (Versión de Next.js 13+, 14+)](https://santec.udemy.com/course/nextjs-fh/)

SSR, SSG, CSR, ISR, Middlewares, Rutas dinámicas, Next API, Next Auth, Material UI, despliegues, Cookies y más

   Instructor:
      Fernando Herrera
      A Full-Stack Developer & Teacher

   Motivación:
      Crear una copia del e-commerce de [Tesla](https://shop.tesla.com/es_es/)


## Tecnologias aplicadas:

[React Icons](https://react-icons.github.io/react-icons/), 
[Zustand](https://zustand-demo.pmnd.rs/), 
[clsx](https://nextjs.org/learn-pages-router/basics/assets-metadata-css/styling-tips), 
[Swiper](https://swiperjs.com/), 
[Prisma](https://www.prisma.io/)
[ts-node] ```npm i -D ts-node``` //para poder ejecutar codigo typescript en node


## Getting Started

   Node: ( version necesaria: 18 )
```bash
nvm install 18.17.0
nvm use 18.17.0
```

## Ejecutar en dev:

1. Clonar el repositorio
2. Crear una copia del ```.env.template```, renombrarlo a ```.ènv``` y cambiar las variables de entorno.
3. Instalar las dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev``` 
6. Ejecutar seed ```npm run seed```
7. Ejecutar el proyecto ```npm run dev```  - Ingresar a [http://localhost:3000](http://localhost:3000) 



