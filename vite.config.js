import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs/promises';

export default defineConfig({
  base: './',
  build: {
    polyfillModulePreload: false,
    cssCodeSplit: true,
    minify: false,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/index.html'),
        gifts: resolve(__dirname, 'src/gifts.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  plugins: [
    {
      name: 'adjust-html-plugin',
      closeBundle: async () => {
        const distDir = resolve(__dirname, 'dist');
        const srcDir = resolve(distDir, 'src');

        try {
          await fs.mkdir(distDir, { recursive: true });

          const files = await fs.readdir(srcDir);

          for (const file of files) {
            if (file.endsWith('.html')) {
              const source = resolve(srcDir, file);
              const destination = resolve(distDir, file);

              await fs.rename(source, destination);

              const content = await fs.readFile(destination, 'utf-8');
              const updatedContent = content.replace(/"\.\.\/assets\//g, '"./assets/');
              await fs.writeFile(destination, updatedContent, 'utf-8');
            }
          }

          await fs.rmdir(srcDir);
        } catch (err) {
          console.error('[adjust-html-plugin] Error moving HTML files:', err);
        }
      },
    },
  ],
});
