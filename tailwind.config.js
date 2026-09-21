/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pupils: {
          navy: '#071B52',
          deepBlue: '#123B8C',
          orange: '#FF7043',
          orangeHover: '#F4511E',
          coral: '#FF8A65',
          purple: '#6C3EF4',
          purpleLight: '#F3EFFF',
          blue: '#3B82F6',
          blueLight: '#EEF5FF',
          cream: '#FFF9F2',
          creamBg: '#FAF7F2',
          cardPost: '#FDF2EC',
          cardContest: '#F3EFFF',
          cardDiscover: '#EEF5FF',
          verified: '#00BBA7',
          verifiedBg: '#E6F7F0',
          textDark: '#111827',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        handwritten: ['Caveat', 'Kalam', 'cursive']
      },
      boxShadow: {
        'pupils-card': '0 10px 30px -5px rgba(7, 27, 82, 0.05), 0 4px 12px -2px rgba(7, 27, 82, 0.03)',
        'pupils-hover': '0 20px 40px -10px rgba(7, 27, 82, 0.08), 0 8px 16px -4px rgba(7, 27, 82, 0.04)',
        'pupils-orange': '0 8px 25px -5px rgba(255, 112, 67, 0.35)',
        'pupils-purple': '0 8px 25px -5px rgba(108, 62, 244, 0.35)',
        'pupils-blue': '0 8px 25px -5px rgba(59, 130, 246, 0.35)',
      }
    },
  },
  plugins: [],
}
