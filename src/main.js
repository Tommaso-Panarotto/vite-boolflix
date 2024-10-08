import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass as fasSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret as fasUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo as fasCircleInfo } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(fasFaStar, farFaStar, fasSearch, fasUserSecret, fasCircleInfo)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
