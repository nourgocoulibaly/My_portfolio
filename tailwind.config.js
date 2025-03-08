/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true, // Pour s'assurer que Tailwind surcharge les styles SCSS si nécessaire
  theme: {
    extend: {
      colors: {
        // Vous pouvez ajouter vos couleurs personnalisées ici
      },
    },
  },
  plugins: [],
} 