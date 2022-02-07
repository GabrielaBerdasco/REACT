# PROYECTO E-COMMERCE TIENDA BONACHONA

Proyecto desarrollado para el curso React Js de CoderHouse, camada 19770

![Demonstration web](./public/assets/proyectoTiendaB.gif)

Ver y probar app en [GitHub-pages](https://gabrielaberdasco.github.io/REACT)

## Sobre la tienda

Tienda Bonachona es un e-commerce que vende productos del hogar y accesorios útiles con el fin de donar parte de la ganancia a distintas causas benéficas.

## Descripción del proyecto

El desarrollo hasta ahora está pensando como un e-commerce user-friendly, claro y simple de entender para el usuario. En HOME se encuentra un banner de bienvenida, productos destacados y los enlaces a las distintas categorías donde el usuario podrá seleccionar productos para luego realizar una orden desde el carrito. También incluí un apartado "Nosotros" (en desarrollo) para poder ampliar la información sobre la misión benéfica de la tienda.

### Dependencias extras:

* create-react-app: Creación de la aplicación como una página única para el desarrollo optimizado del e-commerce.

* react-toastify: Para la creación de toast emergentes al agregar productos al carrito (o si existió algún error al hacerlo) y para mostrar el número de orden generado al finalizar la compra. 

* material-icons: Implementación a través de link en index.html (https://fonts.google.com/icons), para el widget del carrito de compras en el navbar.

* react-router-dom: Paquete utilizado para declarar rutas de navegación y tomar parámetros de las mismas.

* Firebase: Se utilizó para almacenar colecciones de datos, a través de Firestore. La colección "products" se consume desde la app de acuerdo al pedido del usuario. La colección "ventas" almacena los datos ingresados por el usuario al realizar el pedido, así como también los consume al consultar una orden ya generada.

## Instrucciones para probar la app

1. En la terminal, seleccionar la carpeta donde se almacenará el proyecto.

> cd mi_carpeta

2. Clonar el repositorio con el comando: 

> git clone https://github.com/GabrielaBerdasco/REACT.git

3. En la carpeta seleccionada se creará una nueva carpeta con el código por lo que deberás moverte a dicha carpeta.

> cd REACT

4. Instalar las dependencias necesarias para correr el proyecto.

> npm install

5. Al terminar la instalación, ejecutar el comando para iniciar el servidor en la aplicación.

> npm start

6. Para terminar el proceso en Windows presionar en la consola:

> ctrl + C 

