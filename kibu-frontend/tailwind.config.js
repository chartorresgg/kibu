// tailwind.config.js (reemplazar el contenido generado)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kibu': {
          'primary': '#B8860B',    // Dorado del logo y botones
          'secondary': '#F5F5DC',  // Beige claro del fondo
          'dark': '#2C2C2C',       // Texto oscuro
          'gray': '#6B7280',       // Texto secundario
          'light-gray': '#F9FAFB', // Fondos claros
          'white': '#FFFFFF',
          'accent': '#D4A574',     // Dorado más claro
        }
      },
      fontFamily: {
        'kibu': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'kibu-h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'kibu-h2': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'kibu-h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'kibu-body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'kibu-small': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      screens: {
        'kibu-mobile': '375px',
        'kibu-tablet': '768px',
        'kibu-desktop': '1440px',
      },
      boxShadow: {
        'kibu-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'kibu-navbar': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}