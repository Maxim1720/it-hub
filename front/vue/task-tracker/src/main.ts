import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import ProjectVue from './components/project/Projects.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegistrationVue from './components/auth/Registration.vue';


const routes = [
    {
        path: "/", component: ProjectVue,
    },
    {
        path: "/sign-up", component: RegistrationVue
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

createApp(App).use(createPinia()).use(router).mount('#app')
