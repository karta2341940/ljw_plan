import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    "plugins": [
        vue({
            template: { transformAssetUrls }
        }),
        vuetify({
            autoImport: true,
        }),
    ],
    "publicDir": 'assets',
    "build":{
        "outDir":"../dist"
    },
    "server": {
        "port": 3000,
    },
    "base": "./",
    "root": "./src",
    "resolve": {
        "alias": {
            "@src": fileURLToPath(new URL('./src', import.meta.url)),
            "@store": fileURLToPath(new URL('./src/store', import.meta.url)),
            "@component": fileURLToPath(new URL('./src/components', import.meta.url)),
            "@layout": fileURLToPath(new URL('./src/layouts', import.meta.url)),
        },
        "extensions": [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ]
    }
})
