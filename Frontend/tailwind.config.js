export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        ink: '#15171E',
        cobalt: {
          50: '#EEF1FE',
          100: '#DCE3FD',
          500: '#2C4CE0',
          600: '#233ec2',
          700: '#1c319c',
        },
        signal: {
          green: '#1E9E6B',
          amber: '#E0A22C',
          red: '#D6493F',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
