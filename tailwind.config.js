/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    

   ],
  theme: {
    colors: {
      whiteSepia:"#ffffff0c",
      white: "#fff",
      darkGray: "#A9A9A9",
      lightGray: "#E5E4E2",
      red: "red",
      slate: "#4B5563",
      black: "black"
    },
    extend: {
      backgroundImage: {
       "landing-image":"url(/assets/home/background-home-desktop.jpg)",
       "landing-mobile": "url(/assets/home/background-home-mobile.jpg)",
       "destination-mobile": "url(/assets/destination/background-destination-mobile.jpg)",
       "destination-img": "url(/assets/destination/background-destination-desktop.jpg)",
       "crew-img": "url(/assets/crew/background-crew-desktop.jpg)",
       "crew-mobile":"url(/assets/crew/background-crew-mobile.jpg)",
       "tech-img": "url(/assets/technology/background-technology-desktop.jpg)",
       "tech-mobile": "url(/assets/technology/background-technology-mobile.jpg)"
      
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
        "slideIn": {
          '0%': {
            transform: 'translateX(500px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        "slideOut": {
          '0%': {
            transform: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(500px)'
          }
        }
      },
      animation: {
        upp: 'upp 2.5s linear infinite forwards',
        slideIn: 'slideIn 1s ease-out forwards',
        slideOut: 'slideOut 1s ease-in forwards'
      }
    },
    
  },
  plugins: [],
}

