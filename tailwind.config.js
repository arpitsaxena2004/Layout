module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7F9CF5', // blue
          DEFAULT: '#5A67D8', // indigo
          dark: '#434190',
        },
        accent: {
          blue: '#38BDF8',
          purple: '#A78BFA',
          teal: '#14B8A6',
          orange: '#F59E42',
        },
        glass: 'rgba(255,255,255,0.6)',
        darkGlass: 'rgba(30,41,59,0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};