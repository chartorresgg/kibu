# Kibu - Soluciones Tecnológicas

## 📋 Descripción del Proyecto

Kibu es una aplicación web desarrollada para una empresa de soluciones tecnológicas que se especializa en desarrollo de software personalizado, aplicaciones web, móviles y sistemas que automatizan procesos empresariales. El frontend está construido con React, TypeScript y Tailwind CSS, proporcionando una experiencia de usuario fluida y profesional.

## 🚀 Características Principales

- ✨ **Interfaz Moderna**: Diseño responsivo y atractivo basado en mockups de Figma
- 🏠 **Página Principal**: Hero section con carrusel interactivo y servicios destacados
- 📊 **Catálogo de Servicios**: Grid responsivo con filtros, búsqueda y paginación
- 📄 **Detalle de Servicios**: Información completa con galería de imágenes
- 🏢 **Página Institucional**: Información de la empresa, equipo y valores
- 📞 **Formulario de Contacto**: Validación en tiempo real y confirmación de envío
- 🔐 **Panel Administrativo**: Sistema CRUD completo para gestión de servicios
- 📱 **Diseño Responsivo**: Optimizado para móviles, tablets y desktop

## 🛠️ Tecnologías Utilizadas

### Core Technologies
- **React 18.2.0** - Librería para interfaces de usuario
- **TypeScript 5.0.2** - Superset de JavaScript con tipado estático
- **Vite 4.4.5** - Herramienta de construcción y desarrollo

### Styling & UI
- **Tailwind CSS 3.4.0** - Framework CSS utility-first
- **Lucide React 0.263.1** - Librería de iconos SVG

### Routing & Navigation
- **React Router DOM 6.15.0** - Enrutamiento del lado cliente

### Development Tools
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
kibu-frontend/
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
│   ├── types/                # Definiciones TypeScript
│   │   └── service.ts        # Tipos de servicios
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración Tailwind
├── tsconfig.json             # Configuración TypeScript
├── vite.config.ts            # Configuración Vite
└── README.md                 # Documentación
```

## 🎨 Páginas y Funcionalidades

### 🏠 Página Principal (Home)
- Hero section con mensaje de bienvenida
- Carrusel interactivo de imágenes corporativas
- Sección de servicios destacados
- Información institucional con call-to-action

### 📊 Catálogo de Servicios
- Grid responsivo de servicios (4-2-1 columnas)
- Sistema de búsqueda en tiempo real
- Filtros por categoría y tipo
- Paginación dinámica
- Indicadores visuales (promociones, nuevos servicios)

### 📄 Detalle del Servicio
- Galería de imágenes con navegación
- Información técnica completa
- Características y especificaciones
- Botones de acción (contratar, volver)
- Navegación breadcrumb

### 🏢 Página Nosotros
- Historia y misión de la empresa
- Estadísticas corporativas
- Valores y principios
- Equipo de trabajo
- Call-to-action para contacto

### 📞 Contacto
- Formulario completo con validación
- Información de contacto
- Horarios de atención
- Mapa de ubicación (placeholder)
- Confirmación de envío

### 🔐 Sistema Administrativo
- **Login**: Autenticación segura con validación
- **Panel CRUD**: Gestión completa de servicios
  - Crear nuevos servicios
  - Editar servicios existentes
  - Eliminar con confirmación
  - Búsqueda y filtrado
  - Tabla responsiva

## 🚦 Instalación y Configuración

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 8.0.0

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/chartorresgg/kibu.git

# Navegar al directorio del proyecto
cd kibu/kibu-frontend

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

Una vez iniciado el servidor de desarrollo:

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

## 🎨 Configuración de Diseño

### Colores Corporativos
```css
/* Paleta de colores Kibu */
--kibu-primary: #B8860B     /* Dorado principal */
--kibu-secondary: #F5F5DC   /* Beige claro */
--kibu-accent: #D4A574      /* Dorado claro */
--kibu-dark: #2C2C2C        /* Texto principal */
--kibu-gray: #6B7280        /* Texto secundario */
```

### Breakpoints Responsivos
- **Mobile**: 375px
- **Tablet**: 768px  
- **Desktop**: 1440px

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 📱 Responsividad

La aplicación está completamente optimizada para:
- 📱 **Móviles**: Layout de 1 columna, menú hamburguesa
- 📱 **Tablets**: Layout de 2 columnas, navegación adaptada
- 💻 **Desktop**: Layout completo de 3-4 columnas

## 🔧 Funcionalidades Técnicas

### Componentes Destacados

#### Carrusel de Imágenes
- Navegación manual con flechas
- Reproducción automática configurable
- Indicadores de posición (dots)
- Contador de imágenes
- Transiciones suaves

#### Formularios Inteligentes
- Validación en tiempo real
- Manejo de estados de carga
- Mensajes de error específicos
- Confirmaciones de éxito
- Limpieza automática tras envío

#### Sistema CRUD
- Tabla responsiva con scroll
- Modales para crear/editar
- Confirmaciones para eliminar
- Búsqueda instantánea
- Filtrado por categorías

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

El build optimizado se genera en la carpeta `dist/` y está listo para despliegue en cualquier servidor web estático.

### Variables de Entorno
```env
# .env.development
VITE_API_URL=http://localhost:3000/api

# .env.production  
VITE_API_URL=https://api.kibu.com
```

## 🤝 Contribución

### Estándares de Código
- **ESLint**: Configuración estricta para React/TypeScript
- **Prettier**: Formato automático de código
- **Commits**: Mensajes descriptivos en español
- **Branches**: Feature branches para nuevas funcionalidades

### Flujo de Trabajo
1. Fork del repositorio
2. Crear branch para feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Kibu. Todos los derechos reservados.

## 👥 Equipo de Desarrollo

- **Desarrollador Full-Stack**: Carlos Eduardo Guzmán Torres
- **Diseño UI/UX**: Mockups de Figma
- **Repositorio**: https://github.com/chartorresgg/kibu

## 🔄 Próximas Funcionalidades

- [ ] Integración con API backend
- [ ] Base de datos MySQL
- [ ] Autenticación JWT
- [ ] Persistencia de la información
- [ ] Manual de usuario
---

**© 2025 Kibu. Todos los derechos reservados.**