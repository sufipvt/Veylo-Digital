import { defineConfig } from 'astro/config';

// TODO(owner): replace with the live domain before launch.
export default defineConfig({ site: 'https://veylomedia.example', trailingSlash: 'never', build: { format: 'file' } });
