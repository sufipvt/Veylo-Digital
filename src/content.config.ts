import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const page = z.object({ title: z.string(), line: z.string(), order: z.number(), points: z.array(z.string()) });
export const collections = {
  services: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/services' }), schema: page }),
  areas: defineCollection({ loader: glob({ pattern: '*.md', base: 'src/content/areas' }), schema: page }),
};
