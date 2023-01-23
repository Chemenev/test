<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Datepicker v-model="date" multi-dates></Datepicker>

  {{ date }}

  <Datepicker v-model="dateMultiCalendars" range multi-calendars />

  {{ dateMultiCalendars }}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const date = ref();
    const dateMultiCalendars = ref();
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      dateMultiCalendars.value = [startDate, endDate];
    });
    return {
      date,
      dateMultiCalendars,
    };
  },
  name: 'App',
  components: {
    HelloWorld,
    Datepicker,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
