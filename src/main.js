import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)


/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass, faClock, faPhone, faEnvelope, faChevronRight, faLocationDot, faPlaneDeparture,faArrowRight, faNetworkWired, faBriefcase, faChartSimple, faEarthEurope, faScroll } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass, faClock, faPhone, faEnvelope, faChevronRight, faLocationDot, faPlaneDeparture, faArrowRight, faNetworkWired, faBriefcase, faChartSimple, faEarthEurope, faScroll) 
library.add(faFacebookF, faTwitter, faLinkedinIn)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
