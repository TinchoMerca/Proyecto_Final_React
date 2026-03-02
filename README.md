# 🏋️‍♂️ MuscleStore - E-commerce de Suplementos 🛒

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Este proyecto es una aplicación web de e-commerce dedicada a la venta de suplementos deportivos. Fue realizado como proyecto final integrador para el curso de React JS en Coderhouse.

![app](/public/captura.jpeg)

## ✨ Funcionalidades

- **Navegación Dinámica:** Rutas para categorías y detalles de productos sin recargar la página.
- **Gestión de Carrito:** Agregar, eliminar, vaciar y calcular el total de la compra utilizando Context API.
- **Base de Datos:** Catálogo de productos y registro de órdenes almacenados en Firebase/Firestore.
- **Control de Stock:** Validación de inventario antes de generar la compra mediante lotes.
- **Validación de Formulario:** Comprobación estricta de datos del cliente para asegurar el flujo de compra.

### Instalación ⚙️

1. Clone el repositorio: `git clone https://github.com/TinchoMerca/Proyecto_Final_React.git`
2. Muévase a la carpeta creada con el comando: `cd e-commerce-suplementos`
3. Ejecute el comando `npm install` para instalar dependencias y crear la carpeta `node_modules`.
4. **Importante:** Cree un archivo `.env` en la raíz del proyecto guiándose con el archivo `.env.example` y coloque sus propias credenciales de Firebase.
5. Ejecute el comando `npm run dev` para levantar la app en un entorno local.

> Es necesario contar con Node.js instalado en su equipo.

### Version Host 💻

Si desea ver el proyecto online y probar su funcionalidad, puede ingresar al siguiente link: https://proyecto-final-react-musclestore.vercel.app

### Librerías utilizadas 📖

- [Tailwind CSS](https://tailwindcss.com/): utilizada para el diseño ágil y responsivo de la interfaz.
- [React Router Dom](https://reactrouter.com/): utilizada para implementar la navegación dinámica por rutas (SPA).
- [Firebase](https://firebase.google.com/): utilizada como base de datos en la nube (Firestore) para el catálogo y órdenes de compra.
- [Vite](https://vitejs.dev/): utilizada como entorno de desarrollo rápido.

Desarrollado por Martín 🤭
