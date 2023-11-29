import Compress from 'astro-compress';

import { defineConfig } from 'astro/config';


export default defineConfig(
    {
        site: 'https://projektarbeit.pages.dev',
        build: {
            assets: 'assets'
        },
        integrations: [
            Compress()
        ]
    }
)