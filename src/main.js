import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// // script.js
// particlesJS('particles-js', {
//   particles: {
//     number: {
//       value: 100, // Adjust the number of particles
//       density: {
//         enable: true,
//         value_area: 800 // Adjust the density of particles
//       }
//     },
//     color: {
//       value: ['#ffffff', '#ffcc00', '#ff0000'] // Define the colors of the particles
//     },
//     shape: {
//       type: 'circle', // You can use "circle", "edge", "triangle", "polygon", etc.
//       stroke: {
//         width: 0,
//         color: '#ffffff'
//       },
//       polygon: {
//         nb_sides: 5
//       }
//     },
//     opacity: {
//       value: 0.8, // Adjust the opacity of particles
//       random: true
//     },
//     size: {
//       value: 3, // Adjust the size of particles
//       random: true
//     },
//     move: {
//       enable: true,
//       speed: 2, // Adjust the speed of particles
//       direction: 'none',
//       random: false,
//       straight: false,
//       out_mode: 'out',
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200
//       }
//     }
//   },
//   interactivity: {
//     detect_on: 'canvas',
//     events: {
//       onhover: {
//         enable: true,
//         mode: 'repulse' // Adjust the interaction mode on hover
//       },
//       onclick: {
//         enable: true,
//         mode: 'push' // Adjust the interaction mode on click
//       },
//       resize: true
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1
//         }
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3
//       },
//       repulse: {
//         distance: 100, // Adjust the distance of repulsion
//         duration: 0.4
//       },
//       push: {
//         particles_nb: 4 // Adjust the number of particles to push on click
//       },
//       remove: {
//         particles_nb: 2
//       }
//     }
//   },
//   retina_detect: true
// })
