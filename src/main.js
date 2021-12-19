import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import App from './App.vue'
import router from './router'
import SectionOne from './components/UI/SectionOne.vue'
import SectionTwo from './components/UI/SectionTwo.vue'


const app = createApp(App)
app.component('section-one', SectionOne)
app.component('section-two', SectionTwo)
app.use(Quasar, quasarUserOptions)
app.use(router)
app.mount('#app')
