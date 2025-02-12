/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}" // ✅ Ensures Tailwind scans all Vue components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  