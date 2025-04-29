# Proyecto React + Vite

Este proyecto está construido con React 19.0.10 y Vite 6.3.1.

## Requisitos

- Node.js versión 20 o superior.
- npm instalado.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <https://github.com/danielzemanate/interactive-table>
   cd <interactive-table>
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución en entorno de desarrollo

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador en la siguiente URL:

   ```
   http://localhost:3000
   ```

El proyecto estará corriendo en modo desarrollo.

## Tecnologías utilizadas

- React 19.0.10
- Vite 6.3.1

## Control de versiones

### Versión 1.0.0

Descripción de la tarea:

Se desarrolló una tabla interactiva en React con los siguientes requisitos funcionales:

1. Fila completamente editable:

   - Todas las celdas de esta fila permiten seleccionar un valor desde una lista desplegable (opciones: "A", "B", "C" y "D").

2. Fila parcialmente editable:

   - Algunas columnas permiten seleccionar un valor desde la lista desplegable, mientras que otras columnas permanecen bloqueadas o en modo solo lectura.

3. Fila editable con números:

   - Algunos valores numéricos pueden ser editados mediante inputs de tipo número, mientras que otros campos permanecen bloqueados (solo lectura).

4. Visibilidad condicional:
   - Las filas mencionadas en los puntos 2 y 3 solo se mostrarán si un checkbox ("Ver más") está activado. Si el checkbox está desactivado, estas filas estarán completamente ocultas.
