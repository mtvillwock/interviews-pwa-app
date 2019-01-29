import Vue from 'vue'
import App from './App'
import './scss/app.scss'
import {store} from './store/store'
import axios from 'axios'
// Video player
import VueVideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
// Buttons
import ButtonHamburger from './components/ButtonHamburger'
import ButtonToggle from './components/ButtonToggle'
import ButtonShare from './components/ButtonShare'
// Screens
import ScreenLogin from './components/ScreenLogin'
import ScreenShare from './components/ScreenShare'
import ScreenPlaceholder from './components/ScreenPlaceholder'
// Sidebar
import Sidebar from './components/Sidebar'
// Mobile Menu
import MobileMenu from './components/MobileMenu'

// Video player
Vue.use(VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */)
// Buttons
Vue.component('ButtonHamburger', ButtonHamburger)
Vue.component('ButtonToggle', ButtonToggle)
Vue.component('ButtonShare', ButtonShare)
// Screens
Vue.component('ScreenLogin', ScreenLogin)
Vue.component('ScreenShare', ScreenShare)
Vue.component('ScreenPlaceholder', ScreenPlaceholder)
// Sidebar
Vue.component('Sidebar', Sidebar)
// Mobile menu
Vue.component('MobileMenu', MobileMenu)

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.AXIOS_BASE_URL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
