# 📋 Task Dashboard - Angular Client

Este proyecto es la **Capa de Presentación (Frontend)** de una aplicación Full-Stack de gestión de tareas. Está construido con las últimas características de Angular (Componentes Standalone) y diseñado bajo el principio de separación de responsabilidades (Decoupled Architecture).

## 🚀 Arquitectura y Enfoque

En lugar de construir una aplicación monolítica, este cliente web funciona de manera 100% independiente. Se comunica a través de peticiones HTTP con un backend propio, gestionando correctamente las políticas CORS y manteniendo el estado de la interfaz sincronizado con la base de datos en tiempo real.

## 🛠️ Tecnologías y Herramientas

- **Framework:** Angular (Standalone Components)
- **Lenguaje:** TypeScript
- **Conectividad:** `HttpClient` / RxJS (Consumo de API REST)
- **Estilos:** CSS3 / HTML5 (Estructura Flexbox)
- **Data Binding:** Two-Way Data Binding (`ngModel`)

## ✨ Características Principales

- **CRUD Completo:** Creación, lectura, actualización y eliminación de tareas.
- **Ciclo de Vida:** Uso avanzado de `ngOnInit` para carga inicial de datos.
- **Detección de Cambios:** Implementación de `ChangeDetectorRef` para evitar desincronización visual tras recibir respuestas del servidor.
- **Manejo de Estados:** La interfaz se adapta dinámicamente dependiendo de si el usuario está creando o editando una tarea.

## 🔗 Conexión con el Backend (Go)

Este proyecto no funciona de forma aislada. Requiere que la API REST desarrollada en **Go (Golang)** esté corriendo localmente en el puerto `3000`.

👉 **[Ver el código fuente y arquitectura del Backend en Go aquí](PON_AQUI_EL_LINK_DE_TU_OTRO_REPOSITORIO)**

## ⚙️ Cómo ejecutar este proyecto localmente

1. Clona este repositorio: `git clone https://github.com/tu-usuario/task-dashboard-angular.git`
2. Entra a la carpeta: `cd task-dashboard`
3. Instala las dependencias: `npm install`
4. Enciende el servidor de Angular: `ng serve -o`
   _(Asegúrate de tener la API de Go encendida simultáneamente)._
