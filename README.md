# Kibu - Soluciones Tecnológicas

## 📋 Descripción del Proyecto

Kibu es una aplicación web desarrollada para una empresa de soluciones tecnológicas que se especializa en desarrollo de software personalizado, aplicaciones web, móviles y sistemas que automatizan procesos empresariales. El frontend está construido con React, TypeScript y Tailwind CSS, proporcionando una experiencia de usuario fluida y profesional.

La aplicación implementa un sistema completo de gestión de servicios con persistencia de datos simulada mediante localStorage, permitiendo funcionalidad completa sin requerir infraestructura backend.

## 🌐 Aplicación en Línea

La aplicación está desplegada y disponible públicamente en:

**🔗 [https://kibu-frontend.vercel.app/](https://kibu-frontend.vercel.app/)**

- ✅ Acceso 24/7 sin restricciones
- ✅ Optimizada con CDN global
- ✅ Certificado SSL/HTTPS automático
- ✅ Compatible con todos los dispositivos

## 🚀 Características Principales

- ✨ **Interfaz Moderna**: Diseño responsivo y atractivo basado en mockups de Figma
- 🏠 **Página Principal**: Hero section con carrusel interactivo y servicios destacados
- 📊 **Catálogo de Servicios**: Grid responsivo con filtros, búsqueda y paginación avanzada
- 📄 **Detalle de Servicios**: Información completa con galería de imágenes y tabs informativos
- 🏢 **Página Institucional**: Información de la empresa, equipo y valores corporativos
- 📞 **Sistema de Contacto**: Formulario con validación completa y gestión de mensajes
- 🔐 **Panel Administrativo**: Sistema CRUD completo para gestión de servicios y mensajes
- 💾 **Persistencia de Datos**: Sistema de almacenamiento local con localStorage
- 📱 **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- 🔄 **Backup y Restauración**: Funcionalidades de exportar/importar datos
- 🌐 **Deploy Automático**: Integración continua con Vercel desde GitHub

## 🏗️ Arquitectura del Sistema

### Patrón de Diseño
- **Frontend**: SPA (Single Page Application) con React
- **Estado**: Context API + useState para gestión local
- **Routing**: React Router DOM con rutas protegidas
- **Persistencia**: localStorage como capa de datos

### Flujo de Datos
Usuario → Componente → dataService → localStorage → Respuesta

### Estructura de Capas
- **Presentación**: Componentes React (pages, components)
- **Lógica de Negocio**: dataService.ts
- **Persistencia**: localStorage del navegador

## 🛠️ Tecnologías Utilizadas

### Core Technologies
- **React 19.1.1** - Librería para interfaces de usuario
- **TypeScript 5.8.3** - Superset de JavaScript con tipado estático
- **Vite 7.1.6** - Herramienta de construcción y desarrollo

### Styling & UI
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Lucide React 0.544.0** - Librería de iconos SVG

### Routing & Navigation
- **React Router DOM 7.9.1** - Enrutamiento del lado cliente

### Development Tools
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

### Deployment & Hosting
- **Vercel** - Plataforma de hosting con deploy automático
- **GitHub Actions** - Integración continua

## 📁 Estructura del Proyecto

```
kibu-frontend/
├── docs/                     # Documentación del proyecto
│   └── ManualUsuario/        # Manual completo de la aplicación
├── public/                   # Archivos estáticos
│   ├── logo.png              # Logo corporativo
├── src/                      # Código fuente
│   ├── components/           # Componentes reutilizables
│   │   ├── admin/            # Componentes del panel admin
│   │   │   └── ServiceForm.tsx
│   │   ├── common/           # Componentes compartidos
│   │   │   └── ImageCarousel.tsx
│   │   └── layout/           # Componentes de estructura
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── pages/                # Páginas principales
│   │   ├── Home.tsx          # Página principal
│   │   ├── Services.tsx      # Catálogo de servicios
│   │   ├── ServiceDetail.tsx # Detalle del servicio
│   │   ├── About.tsx         # Página "Nosotros"
│   │   ├── Contact.tsx       # Página de contacto
│   │   ├── Login.tsx         # Autenticación
│   │   └── AdminPanel.tsx    # Panel administrativo
│   ├── services/             # Servicios de datos
│   │   └── dataService.ts    # API simulada con localStorage
│   ├── types/                # Definiciones TypeScript
│   │   └── service.ts        # Tipos de servicios
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── vercel.json               # Configuración de Vercel
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración Tailwind
├── tsconfig.json             # Configuración TypeScript
├── vite.config.ts            # Configuración Vite
└── README.md                 # Documentación
```

## 📱 Casos de Uso

### Usuario Final
1. Explora catálogo de servicios
2. Filtra y ordena servicios
3. Visualiza detalles completos
4. Envía mensaje de contacto

### Administrador
1. Inicia sesión segura
2. Gestiona servicios (CRUD)
3. Visualiza mensajes de contacto
4. Exporta/importa datos

## 💾 Sistema de Persistencia de Datos

La aplicación implementa un sistema avanzado de persistencia usando **localStorage** del navegador que simula una base de datos completa:

### Características del Sistema de Datos
- **🗄️ Almacenamiento Local**: Datos persistentes en localStorage del navegador
- **⚡ Operaciones CRUD**: Create, Read, Update, Delete de servicios completamente funcionales
- **🔄 Simulación de API**: Funciones asíncronas con delays realistas
- **💼 Gestión de Servicios**: 12 servicios precargados con información completa
- **📬 Sistema de Mensajes**: Almacenamiento y gestión de mensajes de contacto de usuarios
- **🔐 Autenticación**: Sistema de tokens y sesiones para administrador
- **📤 Backup/Restore**: Exportar e importar datos de servicios en formato JSON

### Claves de Almacenamiento
- `kibu_services` - Catálogo completo de servicios
- `kibu_messages` - Mensajes de contacto recibidos
- `kibu_admin_token` - Token de autenticación administrativa
- `kibu_admin_user` - Datos del usuario administrador

### Ventajas del Sistema
- ✅ Funcionalidad completa sin servidor backend
- ✅ Persistencia real durante la sesión
- ✅ Ideal para demostraciones y evaluación
- ✅ Datos visibles en DevTools para debugging

## 🎨 Páginas y Funcionalidades

### 🏠 Página Principal (Home)
- Hero section con mensaje de bienvenida animado
- Carrusel interactivo de imágenes corporativas
- Sección de servicios destacados con promociones
- Información institucional con call-to-action
- Estadísticas de la empresa en tiempo real

### 📊 Catálogo de Servicios
- Grid responsivo de servicios (12-8-4 por página)
- Sistema de búsqueda en tiempo real
- Filtros por categoría y ordenamiento (precio, nombre)
- Paginación dinámica con controles avanzados
- Indicadores visuales (promociones, descuentos, disponibilidad)

### 📄 Detalle del Servicio
- Galería de imágenes con navegación
- Tabs de información (descripción, información adicional, características)
- Precios con descuentos calculados automáticamente
- Botones de acción (contactar, volver)
- Navegación breadcrumb funcional

### 🏢 Página Nosotros
- Historia y misión de la empresa
- Estadísticas corporativas animadas
- Valores y principios con iconografía
- Equipo de trabajo con perfiles
- Call-to-action para contacto directo

### 📞 Sistema de Contacto
- Formulario completo con validación en tiempo real
- Campos: nombre, email, teléfono, empresa, servicio, mensaje
- Confirmación de envío con página de éxito
- Almacenamiento automático en localStorage
- Información de contacto y horarios

### 🔐 Sistema Administrativo
- **Login Seguro**: Autenticación con validación completa
- **Panel CRUD Avanzado**: Gestión completa de servicios
  - ➕ Crear nuevos servicios con formulario modal
  - ✏️ Editar servicios existentes
  - 🗑️ Eliminar con confirmación de seguridad
  - 🔍 Búsqueda instantánea y filtrado
  - 📊 Tabla responsiva con todas las propiedades
- **Gestión de Mensajes**: Tab dedicado para mensajes de contacto
  - 📬 Visualización de todos los mensajes recibidos
  - 👁️ Marcar como leído/no leído
  - 📅 Ordenamiento cronológico
  - 📋 Información completa del remitente
- **Backup de Datos**: Exportar/importar datos completos

## 🚦 Instalación y Configuración

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 8.0.0

### Instalación Local


```bash
# Clonar el repositorio
git clone https://github.com/chartorresgg/kibu.git

# Navegar al directorio del proyecto
cd kibu-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Construcción
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción

# Calidad de código
npm run lint         # Verificación con ESLint
```

## 🌐 URLs de la Aplicación

### Producción (Vercel)
- **🌍 Aplicación Principal**: https://kibu-frontend.vercel.app/
- **🏠 Home**: https://kibu-frontend.vercel.app/
- **📊 Servicios**: https://kibu-frontend.vercel.app/servicios
- **🏢 Nosotros**: https://kibu-frontend.vercel.app/nosotros
- **📞 Contacto**: https://kibu-frontend.vercel.app/contacto
- **🔐 Login**: https://kibu-frontend.vercel.app/login
- **⚙️ Admin Panel**: https://kibu-frontend.vercel.app/admin

### Desarrollo Local
- **Home**: `http://localhost:5173/`
- **Servicios**: `http://localhost:5173/servicios`
- **Nosotros**: `http://localhost:5173/nosotros`
- **Contacto**: `http://localhost:5173/contacto`
- **Login**: `http://localhost:5173/login`
- **Admin Panel**: `http://localhost:5173/admin`

## 🔑 Credenciales de Demo

Para acceder al panel administrativo:
- **Email**: `admin@kibu.com`
- **Contraseña**: `admin123`

## 📖 Manual de Usuario

Se ha desarrollado un **manual completo de 20+ páginas** que incluye:

### 📂 Ubicación
El manual se encuentra en: **`docs/ManualUsuario/`**

### 📋 Contenido del Manual
- **Introducción y arquitectura** del sistema
- **Guías de navegación** para usuarios y administradores
- **Instrucciones de configuración** y requerimientos
- **Funcionalidades detalladas** de cada módulo
- **Sistema de persistencia** con localStorage
- **Despliegue en Vercel** y acceso en línea
- **Solución de problemas** y troubleshooting
- **Especificaciones técnicas** y APIs internas

### 🎯 Audiencias del Manual
- **Usuarios finales**: Navegación y uso de servicios
- **Administradores**: Gestión de contenido y mensajes
- **Desarrolladores**: Mantenimiento y extensiones
- **Evaluadores**: Revisión académica y técnica

## 🎨 Configuración de Diseño

### Breakpoints Responsivos
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 📱 Responsividad

La aplicación está completamente optimizada para:
- 📱 **Móviles**: Layout de 1 columna, menú hamburguesa, touch-friendly
- 📱 **Tablets**: Layout de 2 columnas, navegación adaptada
- 💻 **Desktop**: Layout completo de 3-4 columnas, máxima funcionalidad

## 🔧 Funcionalidades Técnicas Avanzadas

### Componentes Destacados

#### Carrusel de Imágenes Interactivo
- Navegación manual con flechas direccionales
- Reproducción automática configurable (4 segundos)
- Indicadores de posición (dots) interactivos
- Contador de imágenes dinámico
- Transiciones suaves con CSS

#### Sistema de Formularios Inteligentes
- Validación en tiempo real con feedback visual
- Manejo de estados de carga con spinners
- Mensajes de error específicos por campo
- Confirmaciones de éxito con páginas dedicadas
- Limpieza automática tras envío exitoso

#### Sistema CRUD Administrativo
- Tabla responsiva con scroll horizontal
- Modales reactivos para crear/editar servicios
- Confirmaciones de seguridad para eliminar
- Búsqueda instantánea por múltiples campos
- Filtrado por categorías con contadores

#### Sistema de Paginación Avanzado
- Controles de cantidad de elementos (4, 8, 12)
- Navegación por números de página
- Botones anterior/siguiente
- Indicadores de posición y total

## 🚀 Despliegue en Vercel

### Configuración de Build
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Deploy Automático
- ✅ Integración continua con GitHub
- ✅ Deploy automático en cada push a main
- ✅ Preview deployments para ramas de desarrollo
- ✅ Rollback instantáneo disponible

### Optimizaciones Aplicadas
- 🚀 Compresión Gzip y Brotli automática
- 🌐 CDN global para carga rápida
- 📊 Core Web Vitals optimizados
- 🔒 HTTPS automático con certificado SSL

### Variables de Entorno
```env
# Configuración de Vite
VITE_APP_TITLE=Kibu - Soluciones Tecnológicas
VITE_APP_VERSION=1.0.0
```

## 🤝 Contribución

### Estándares de Código
- **ESLint**: Configuración estricta para React/TypeScript
- **Prettier**: Formato automático de código
- **Commits**: Mensajes descriptivos siguiendo convención
- **Branches**: Feature branches para nuevas funcionalidades

### Flujo de Trabajo
1. Fork del repositorio
2. Crear branch para feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

## 📄 Licencia

Este proyecto es desarrollado para fines académicos. Todos los derechos reservados.

## 👥 Equipo de Desarrollo

- **Desarrollador Full-Stack**: Carlos Eduardo Guzmán Torres
- **Diseño UI/UX**: Mockups desarrollados en Figma
- **Repositorio**: https://github.com/chartorresgg/kibu
- **Deploy**: https://kibu-frontend.vercel.app/

## 🔄 Funcionalidades Completadas

- ✅ Sistema completo de persistencia con localStorage
- ✅ CRUD funcional para servicios
- ✅ Sistema de mensajes de contacto
- ✅ Autenticación administrativa
- ✅ Diseño responsive completo
- ✅ Deploy automático en Vercel
- ✅ Manual de usuario completo
- ✅ Backup y restauración de datos
- ✅ Validación de formularios avanzada
- ✅ Navegación SPA con React Router
- ✅ Interfaz de administración completa

## 🚀 Próximas Mejoras Sugeridas

- [ ] Integración con API backend real
- [ ] Base de datos PostgreSQL/MongoDB
- [ ] Autenticación JWT con roles
- [ ] Sistema de notificaciones email
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro/claro
- [ ] Múltiples idiomas (i18n)
- [ ] Analytics de uso con Google Analytics

## 📚 Recursos Adicionales

### Documentación
- [Manual de Usuario Completo](./kibu-frontend/docs/ManualUsuario/Kibu_ManualdeUsuario.pdf)
- [Entrega final - Escenario 7](./kibu-frontend/docs/Documentación%20de%20entrega/Entrega%20final%20-%20Escenario%207.pdf)

### Enlaces Útiles
- [Figma Mockups](./kibu-frontend/docs/Mockups/Kibu%20-%20Mockup.fig)
- [Repositorio GitHub](https://github.com/chartorresgg/kibu)
- [Deploy en Vercel](https://kibu-frontend.vercel.app/)
- [Documentación de React](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
---

**🌟 Aplicación disponible en línea: [https://kibu-frontend.vercel.app/](https://kibu-frontend.vercel.app/)**

**© 2025 Kibu - Soluciones Tecnológicas. Desarrollado para fines académicos.**