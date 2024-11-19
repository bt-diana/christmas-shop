import { defineConfig } from 'vite';
import { resolve } from 'path';

const jsToBottomNoModule = () => {
    return {
        name: "no-attribute",
        transformIndexHtml(html) {
            let scriptTag = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/)[0];
            html = html.replace(scriptTag, "");
            html = html.replace("</body>", "\t" + scriptTag + "\n</body>");
            return html;
        }
    }
}

export default defineConfig({
    base: './',
    build: {
        modulePreload: {
            polyfill: false,
        },
        cssCodeSplit: true,
        minify: false,
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                gifts: resolve(__dirname, 'gifts.html'),
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name][extname]',
            },
        },
    },
    plugins: [jsToBottomNoModule()],
});
