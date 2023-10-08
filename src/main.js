import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

const pinia = createPinia();
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia);
app.mount("#app");
