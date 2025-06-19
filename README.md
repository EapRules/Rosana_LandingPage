# Rosana Hadad Salomón - Landing Page

## 📋 Descripción del Proyecto

Sitio web profesional de **Rosana Hadad Salomón**, ingeniera, educadora y coach especializada en desarrollo profesional y liderazgo. La página presenta sus servicios de formación, consultoría estratégica y mentorías, con más de 20 años de experiencia en el sector.

## 🎯 Características Principales

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Secciones Principales**:
  - Hero Section con presentación personal
  - Sección "¿Quién Soy?" con información profesional
  - Servicios: Formación & Capacitaciones, Consultoría Estratégica, Mentorías & Academia
  - Entrenamiento de Equipos
  - Testimonios
  - Experiencias
  - Formulario de Contacto
- **UI Moderna**: Utilizando shadcn/ui y Tailwind CSS
- **Tipografías Personalizadas**: Brittany, Poppins y Montserrat
- **Paleta de Colores**: Branding personal con fucsia (#F72E91) y fondos neutros

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Notifications**: Sonner

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o bun

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# 2. Navegar al directorio del proyecto
cd rosana_landingpage

# 3. Instalar dependencias
npm install
# o
bun install

# 4. Iniciar el servidor de desarrollo
npm run dev
# o
bun dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── TeamTrainingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperiencesSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/              # Páginas de la aplicación
├── hooks/              # Custom hooks
├── lib/                # Utilidades y configuraciones
└── App.tsx             # Componente principal
```

## 🎨 Personalización

### Colores del Branding

Los colores principales están definidos en `tailwind.config.ts`:

- **Fucsia Principal**: `#F72E91`
- **Fondo**: Colores neutros y blancos
- **Texto**: Grises oscuros para contraste

### Tipografías

- **Brittany**: Para elementos decorativos y títulos especiales
- **Poppins**: Para títulos principales
- **Montserrat**: Para texto de cuerpo

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Build para producción
npm run build:dev    # Build para desarrollo

# Linting
npm run lint         # Ejecuta ESLint

# Preview
npm run preview      # Previsualiza el build
```

## 🌐 Despliegue

```bash
# 1. Construir para producción
npm run build

# 2. Los archivos estarán en la carpeta dist/
# 3. Subir el contenido de dist/ a tu servidor web
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🤝 Contribución

Este es un proyecto personal de Rosana Hadad Salomón. Para consultas sobre el desarrollo, contactar directamente con el equipo de desarrollo de Nerds.com.ar

## 📞 Contacto

- **Rosana Hadad Salomón**: [Información de contacto en el sitio web]
- **Desarrollo**: [Información del equipo de desarrollo]

---

© 2024 Rosana Hadad Salomón. Todos los derechos reservados.
