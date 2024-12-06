import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAlignLeft, faAlignCenter, faAlignRight, faTable, faCalendar, faImage, faList, faHighlighter, faEyeDropper } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faAlignLeft, faAlignCenter, faAlignRight, faTable, faCalendar, faImage, faList, faHighlighter, faEyeDropper)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
