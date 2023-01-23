import { createApp } from 'vue';
import App from './App.vue';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);

app.component('Date-picker', Datepicker);

app.mount('#app');

//createApp(App).mount('#app')
