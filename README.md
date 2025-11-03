# 🎥 Zudum App - Para compartir y enlistar tus series de Netflix
[![Stack](https://img.shields.io/badge/Stack-Ionic%20%2B%20Angular-blueviolet)](https://ionicframework.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Este proyecto fue desarrollado como parte de la **Evaluación Sumativa UNIDAD N° 1** de la asignatura **Desarrollo de Aplicaciones Móviles** en el Instituto Profesional San Sebastián.

---

## 🌟 1. Descripción del Proyecto

**Zudum** es una aplicación móvil híbrida diseñada para la **gestión personal de series de televisión (CRUD)**. Permite a los usuarios llevar un registro de sus programas, actualizando información como el título, la sinopsis, el número de temporadas y el **estado** actual de visionado (Pendiente, Viendo, Terminada).

### Fases Cubiertas (Evidencia de Entrega)

El proyecto implementa las siguientes fases de la evaluación:

1.  **Fase 1 (Interfaces):** Diseño de todas las interfaces de usuario requeridas (Login, Registro, Listar, Agregar, Detalle/Actualizar).
2.  **Fase 2 (Validaciones):** Implementación de todas las validaciones de formularios del lado del cliente (no vacío, email, contraseñas coincidentes) y diálogos de confirmación (`ion-alert`).

---

## ⚙️ 2. Arquitectura y Tecnologías

El proyecto se basa en un stack híbrido y sigue el patrón MVVM (Modelo-Vista-VistaModelo).

### Stack Tecnológico

* **Framework Híbrido:** [Ionic 7](https://ionicframework.com/)
* **Framework Base:** [Angular](https://angular.io/) (utilizando **Standalone Components**).
* **Manejo del Estado:** Reactive Forms (para validación de formularios).
* **Simulación de Datos:** Un **Service** (`SeriesService`) simula la base de datos manteniendo una lista de series en memoria.

### Patrón de Diseño (MVVM)

| Elemento | Archivo(s) | Función |
| :--- | :--- | :--- |
| **Modelo** | `serie.model.ts` | Define la estructura de datos (título, temporadas, estado). |
| **Vista** | `.page.html` | La interfaz del usuario, compuesta por componentes de Ionic. |
| **VistaModelo** | `.page.ts` | Contiene la lógica, maneja el `FormGroup`, y se conecta al `SeriesService`. |

---

## 🎯 3. Funcionalidad Implementada (CRUD)

| Interfaz | Funcionalidad | Validación (Feedback) |
| :--- | :--- | :--- |
| **Login / Registro** | Autenticación simulada y creación de cuenta. | Campos requeridos, formato de email, y **contraseñas coincidentes** (`password-match.validator.ts`). |
| **Listar (Tab 1)** | Muestra todas las series cargadas desde el servicio. | La vista se actualiza automáticamente al volver de Agregar/Editar/Eliminar. |
| **Agregar (Tab 2)** | Formulario para crear una nueva serie (CREATE). | Título/Sinopsis requeridos, Temporadas como valor numérico mínimo 1. |
| **Detalle/Editar** | Formulario para ver y modificar una serie existente (UPDATE). | Mantiene las validaciones de campos del formulario. |
| **Eliminar** | Botón de eliminación con **Confirmación obligatoria** mediante `ion-alert`. | Implementación del requisito de confirmación de borrado. |

---

## 🛠️ 4. Instalación y Ejecución

Para levantar y probar este proyecto en tu entorno local, asegúrate de tener **Node.js** y **Ionic CLI** instalados.

### Requisitos

* Node.js (versión LTS o superior)
* Ionic CLI (`npm install -g @ionic/cli`)

### Comandos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/ivancf89/zudum.dev.git](https://github.com/ivancf89/zudum.dev.git)
    cd zudum.dev
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar la aplicación en modo desarrollo:**
    ```bash
    ionic serve
    ```
    La aplicación se abrirá automáticamente en tu navegador (`http://localhost:8100`).

---

## 👨‍💻 Autor

* **Iván Campos Farfán**
    * *Estudiante de Programación y Análisis de Sistemas - IP San Sebastián*
