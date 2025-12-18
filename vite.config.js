import { defineConfig } from 'vite'
import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteImagemin from 'vite-plugin-imagemin'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vituum({
      pages: {
        dir: 'src/pug/pages',
        ext: 'pug'
      }
    }),

    pug({
      root: resolve(__dirname, 'src/pug')
    }),

    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/svg/icons')],
      symbolId: 'icon-[name]'
    }),

    viteImagemin({
      mozjpeg: { quality: 75 },
      optipng: { optimizationLevel: 7 },
      svgo: true
    })
  ],

  build: {},

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
