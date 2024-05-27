# CourseHub Backend

CourseHub es una plataforma para almacenar y gestionar cursos en línea, similar a Udemy. Este repositorio contiene únicamente el backend de la aplicación, construido con Node.js y Express.

## Características

- Gestión de usuarios (registro, inicio de sesión, autenticación)
- Gestión de cursos (crear, leer, actualizar, eliminar)
- Soporte para categorías de cursos
- Gestión de contenido de cursos (videos, documentos, etc.)
- Sistema de calificaciones y reseñas
- Búsqueda y filtrado de cursos

## Tecnologías Utilizadas

- Node.js
- Express.js
- PostgreSQL (base de datos)
- JSON Web Tokens (JWT) para autenticación
- BCrypt.js (para hashing de contraseñas)
- Dotenv (para manejo de variables de entorno)
- Morgan (para logging de solicitudes HTTP)
- Helmet (para seguridad de la aplicación)
- CORS (para habilitar solicitudes desde diferentes dominios)
- Body-parser (para manejar datos en las solicitudes)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

- Node.js (v12 o superior)
- PostgreSQL (v10 o superior)

### Pasos

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/coursehub-backend.git
    cd coursehub-backend
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Configura las variables de entorno:
    - Crea un archivo `.env` en la raíz del proyecto.
    - Añade las siguientes variables:
        ```env
        PORT=3000
        DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/coursehub
        JWT_SECRET=your_jwt_secret
        ```

4. Inicia el servidor:
    ```sh
    npm start
    ```

El servidor debería estar corriendo en `http://localhost:3000`.