/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./starter-code/**/*.{html,js}",
    "./src/*.{html,js}",

   ],
  theme: {
    colors: {
      whiteSepia:"#ffffff0c",
      white: "#fff",
      darkGray: "#A9A9A9",
      lightGray: "#E5E4E2",
      red: "red"
    },
    extend: {
      backgroundImage: {
       "landing-image":"url(/starter-code/assets/home/background-home-desktop.jpg)",
       "landing-mobile": "url(/starter-code/assets/home/background-home-mobile.jpg)",
       "destination-mobile": "url(/starter-code/assets/destination/background-destination-mobile.jpg)",
       "destination-img": "url(/starter-code/assets/destination/background-destination-desktop.jpg)",
       "crew-img": "url(/starter-code/assets/crew/background-crew-desktop.jpg)",
       "crew-mobile":"url(/starter-code/assets/crew/background-crew-mobile.jpg)",
       "tech-img": "url(/starter-code/assets/technology/background-technology-desktop.jpg)",
       "tech-mobile": "url(/starter-code/assets/technology/background-technology-mobile.jpg)"
      
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlowCondensedRegular: ['Barlow Condensed', 'sans-serif']
      },
      keyframes: {
        'upp': {
          '0%': {
            transform: 'translateY(0)'
          },
          
          '50%': {
            transform:'translateY(-10px)'
          },

        
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'slideIn': {
          'from': {
            transform: 'translateX(-200px)'
          },
          
          'to': {
            transform:'translateX(0)'
          }
        }
      },
      animation: {
        upp: 'upp 2.5s linear infinite forwards',
        slideIn: 'slideIn 0.5s ease-out forwards'
      }
    },
    
  },
  plugins: [],
}

