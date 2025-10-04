# Guía de Instalación - KiBu Frontend

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** versión 18.0 o superior ([Descargar Node.js](https://nodejs.org/))
- **npm** versión 8.0 o superior (se instala automáticamente con Node.js)
- **Git** para clonar el repositorio ([Descargar Git](https://git-scm.com/))

### Verificar Instalación

Abre tu terminal y ejecuta:

```bash
node --version    # Debe mostrar v18.0.0 o superior
npm --version     # Debe mostrar 8.0.0 o superior
git --version     # Debe mostrar cualquier versión
```

## Instalación Paso a Paso

### 1. Clonar el Repositorio

```bash
git clone https://github.com/chartorresgg/kibu.git
```

Esto descargará todo el código del proyecto en tu computadora.

### 2. Navegar al Directorio del Proyecto

```bash
cd kibu/kibu-frontend
```

### 3. Instalar Dependencias

```bash
npm install
```

Este comando descargará todas las librerías necesarias (React, Tailwind, etc.). Puede tomar 1-2 minutos.

### 4. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Verás un mensaje similar a:

```
VITE v4.4.5  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 5. Abrir la Aplicación

Abre tu navegador y ve a: **http://localhost:5173/**

¡La aplicación ya está corriendo! 🎉

## Scripts Disponibles

### Desarrollo

```bash
npm run dev
```
Inicia el servidor de desarrollo con **hot reload** (los cambios se reflejan automáticamente sin recargar).

### Construcción para Producción

```bash
npm run build
```
Genera una versión optimizada de la aplicación en la carpeta `dist/`. Usa este comando antes de desplegar.

### Vista Previa de Producción

```bash
npm run preview
```
Sirve localmente la versión de producción para verificar que todo funciona correctamente.

### Verificación de Código

```bash
npm run lint
```
Analiza el código en busca de errores de sintaxis y problemas de estilo.

## Estructura de Carpetas Generada

Después de la instalación, tendrás:

```
kibu-frontend/
├── node_modules/     # Dependencias (generada automáticamente)
├── public/           # Archivos estáticos
├── src/              # Código fuente
├── dist/             # Build de producción (después de npm run build)
├── package.json      # Configuración del proyecto
└── ...
```

## Solución de Problemas Comunes

### Error: "npm: command not found"
**Solución**: Instala Node.js desde [nodejs.org](https://nodejs.org/)

### Error: "EACCES: permission denied"
**Solución en Mac/Linux**: 
```bash
sudo npm install
```

**Solución en Windows**: Ejecuta la terminal como Administrador

### Error: "Port 5173 is already in use"
**Solución**: Cierra otras aplicaciones usando ese puerto o cambia el puerto:
```bash
npm run dev -- --port 3000
```

### Los cambios no se reflejan en el navegador
**Solución**: 
1. Verifica que `npm run dev` esté corriendo
2. Actualiza el navegador (Ctrl+F5 o Cmd+Shift+R)
3. Limpia la caché del navegador

## Acceso al Panel Administrativo

Una vez que la aplicación esté corriendo:

1. Ve a: **http://localhost:5173/login**
2. Usa las credenciales:
   - **Email**: admin@kibu.com
   - **Contraseña**: admin123

## Detener el Servidor

Para detener el servidor de desarrollo:
- Presiona **Ctrl + C** en la terminal donde está corriendo

## Próximos Pasos

- Lee el [Manual de Usuario](./kibu-frontend/docs/ManualUsuario/Kibu_ManualdeUsuario.pdf) para conocer todas las funcionalidades
- Explora el código en la carpeta `src/`
- Revisa el archivo `README.md` principal para información completa del proyecto

---