
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': 'hsla(271, 100%, 50%, 1)',
        'custom-magenta': 'hsla(294, 100%, 50%, 1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(225deg, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        'start': 'hsla(271, 100%, 50%, 1)',
        'end': 'hsla(294, 100%, 50%, 1)',
      }),
    },
    darkMode: 'class',
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
  
}