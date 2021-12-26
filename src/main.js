import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import App from './App.vue'
import router from './router'
import store from './store'
import SectionA from './components/UI/SectionA.vue'
import SectionB from './components/UI/SectionB.vue'
import SectionC from './components/UI/SectionC.vue'
import StageCard from './components/UI/StageCard.vue'


const app = createApp(App)
app.component('section-a', SectionA)
app.component('section-b', SectionB)
app.component('section-c', SectionC)
app.component('stage-card', StageCard)
app.use(Quasar, quasarUserOptions)
app.use(router)
app.use(store)
app.mount('#app')
