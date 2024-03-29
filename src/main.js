// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router' // <---
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import JsonCSV from 'vue-json-csv'
/* add icons to the library */
library.add(faUserSecret)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).component('downloadCsv', JsonCSV).use(router).mount('#app')

