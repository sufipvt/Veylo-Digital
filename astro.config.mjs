import { defineConfig } from 'astro/config';

// TODO(owner): replace with the live domain before launch.
export default defineConfig({ site: 'https://veylodigital.example', trailingSlash: 'never', build: { format: 'file' } });
