# Stiqi 3D E-Commerce

un Ecommerce simple, para mi tienda de articulo impresos en 3D, es totalmente responsiva!
Este es un proyecto para CODERHOUSE

## Objetivo

Desarrollar mis habilidades con React, conseguir experiencia y por supuesto, la certificaion

## Funcionalidades

> Navegacion:

    -Logo de mi emprendimiento: Para ir a la página principal
    -Icono de tienda: dropdown para navegar por la tienda, con diferentes pesatañas para las diferentes categorias
    -Icono de carrito: para navegar hacia el carrito, incluye un contador con la cantidad total de objetos dentro del carrito
    -Iconos de mis redes sociales

> Lista de productos:

    Cards: proporcionan informacion básica de los diferentes productos, incluye un contador desde el cual se pueden agregar y quitar objetos del carrito
    tienen ademas, un boton que lleva a una página de detalles de cada producto, a la cual se puede acceder tambien clickeando en la imagen

> Detalle de producto:

    -Mas info sobre el producto, como una descripción y el tamaño, además la imagen se ve más grande
    -Incluye un contador igual que las cards

> Carrito:

    Si el carrito tiene objetos:
        -Se ven los objetos dentro del carrito, cada item tiene un contador y un boton para sacarlo del carrito
        -Hay un checkout form, un brief del pedido con la cantidad y el nombre de cada objeto en el carrito y un total del precio

    Si el carrito está vacío:
        -Se ve un texto que dice "Tu carrito está vacío" y aparece un boton para volver a la tienda

## Tecnologías Utilizadas

- React
- JavaScript
- CSS
- Firebase (Firestore, Storage)

## Librerias de componentes

- Ant Design

## Instalacion

> Clona el repo:

    git clone https://github.com/Stiqi/ProyectoFinal-Rotondo.git
    cd ProyectoFinal-Rotondo

> Instala dependencias:

    npm install

## Configuración de Firebase

        Crea un archivo ".env" en la raíz del proyecto con la siguiente información:

        VITE_REACT_APP_API_KEY=TuApiKey
        VITE_REACT_APP_AUTH_DOMAIN=TuAuthDomain
        VITE_REACT_APP_PROJECT_ID=TuProjectId
        VITE_REACT_APP_STORAGE_BUCKET=TuStorageBucket
        VITE_REACT_APP_MESSAGING_SENDER_ID=TuMessagingSenderId
        VITE_REACT_APP_APP_ID=TuAppId

> Ejecuta la App:

    npm run dev

> En tu navegador:

    http://localhost:5173/
