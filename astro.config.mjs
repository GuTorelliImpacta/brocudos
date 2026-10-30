import { defineConfig } from 'astro/config';
const site = process.env.SITE_URL || 'https://brocudosbarbearia.com.br';
export default defineConfig({ site, trailingSlash: 'never', build: { format: 'file' } });
