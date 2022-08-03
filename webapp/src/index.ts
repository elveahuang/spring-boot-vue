import {createApp} from 'vue';
import App from '@/components/App.vue';
import '@/index.scss';
import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/views/Index.vue'),
        },
        {
            path: '/about',
            component: () => import('@/views/About.vue'),
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
setupApp(createApp(App)).then(() => {
    console.log(`App has been started.`);
});
