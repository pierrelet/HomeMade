import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // Ajout de l'importation de path

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Définition de l'alias '@' pour le dossier 'src'
    }
  }
})
