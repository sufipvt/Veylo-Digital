import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// React only hydrates React Bits islands; every other page ships zero JS.
export default defineConfig({ site: 'https://veylomedia.in', trailingSlash: 'never', build: { format: 'file' }, integrations: [react()] });
