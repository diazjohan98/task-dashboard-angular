# 📋 Task Dashboard - Angular Client

Este proyecto es la **Capa de Presentación (Frontend)** de una aplicación Full-Stack de gestión de tareas. Destaca por una interfaz de usuario (UI) limpia y moderna construida con CSS puro, y una arquitectura basada en componentes Standalone de Angular.

## ⚠️ Requisito Indispensable: El Backend en Go

Esta interfaz de usuario **no funciona de forma aislada**. Para visualizar los datos, interactuar con el CRUD y evitar errores de conexión, es estrictamente necesario tener la API REST corriendo localmente en el puerto `3000`.

👉 **[Ver, descargar y configurar el Backend en Go aquí](https://github.com/diazjohan98/REST-API-GO)**

Por favor, dirígete al repositorio del backend y sigue las instrucciones allí descritas (creación de la base de datos MySQL, configuración del archivo `.env` y ejecución del servidor) **antes** de levantar este cliente web.

## 🛠️ Tecnologías y Herramientas

- **Framework:** Angular
- **Lenguaje:** TypeScript
- **Diseño UI:** CSS Puro (Variables CSS, Flexbox, Diseño Responsivo)
- **Conectividad:** `HttpClient` / RxJS (Gestión asíncrona y CORS)

## ✨ Características de la Interfaz

- **Diseño Moderno:** Tarjetas (cards), sombras suaves y paleta de colores profesional.
- **Reactividad Visual:** Cambio de estados en tiempo real (modo creación vs. modo edición).
- **Actualización Inmediata:** Implementación de `ChangeDetectorRef` para evitar desincronización de datos tras las peticiones HTTP.

## ⚙️ Cómo ejecutar este cliente web (Paso a Paso)

**Prerrequisito:** Asegúrate de que tu terminal indica que el servidor de Go está corriendo exitosamente.

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/task-dashboard-angular.git](https://github.com/diazjohan98/task-dashboard-angular.git)
   ```
2. Entra a la carpeta del proyecto:

```
Bash
cd task-dashboard
```

3. Instala las dependencias de Node:

```
Bash
npm install
```

4. Enciende el servidor de desarrollo de Angular:

```
Bash
ng serve -o
```

5. El navegador se abrirá automáticamente en http://localhost:4200 y se conectará a la base de datos.
