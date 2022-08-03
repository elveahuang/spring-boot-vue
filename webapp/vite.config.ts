import {defineConfig, loadEnv, UserConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import inspect from 'vite-plugin-inspect';

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}. env - ${env}.`);
    const config: UserConfig = {
        server: {
            port: 8081,
        },
        build: {
            manifest: true,
            // outDir: resolve(__dirname, '../server/src/main/resources/resources'),
            outDir: resolve(__dirname, '../server/build/resources/main/resources'),
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html'),
                    admin: resolve(__dirname, 'admin.html'),
                }
            }
        },
        plugins: [
            tsconfigPaths(),
            vue(),
            inspect(),
        ],
    };
    return config;
});
