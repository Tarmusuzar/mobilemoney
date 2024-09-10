// app.js (Vue 3 version)

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import components for routing
import MainHome from './components/MainHome.vue';
import MainMenu from './components/MainMenu.vue';


// Define routes
const routes = [
  { path: '/', component: MainHome },
  { path: '/menu', component: MainMenu },
  
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // Uses history mode to avoid hash in URL
  routes
});

// Create the Vue application instance and use the router
const app = createApp(App);
app.use(router);
app.mount('#app');
