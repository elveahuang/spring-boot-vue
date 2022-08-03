import {createApp} from 'vue';
import Admin from '@/components/Admin.vue';
import '@/index.scss';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from "@/components/App.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
            path: '/workbench',
            component: () => import('@/views/admin/Workbench.vue'),
        },
    ],
    history: createWebHashHistory(),
});
const setupApp = async (app: App) => {
    await app.use(router);
    await router.isReady().then(() => {
        app.mount('#root');
    });
}
setupApp(createApp(Admin)).then(() => {
    console.log(`Admin has been started.`);
});
