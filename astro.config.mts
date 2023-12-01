import { name } from './package.json'
import { theme, langtag, description } from './config.mts'

import Webmanifest from 'astro-webmanifest'

import { defineConfig } from 'astro/config'


export default defineConfig(
    {
        site: 'https://projektarbeit.pages.dev',
        build: {
            assets: 'assets'
        },
        integrations: [
            Webmanifest({
                name: name.charAt(0).toUpperCase() + name.substring(1),
                description: description,
                lang: langtag,
                start_url: '/',
                icons: [
                    {
                        src: '/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ],
                display: 'standalone',
                theme_color: theme,
                background_color: '#e6e6e6',
                config: {
                    eol: '',
                    indent: '',
                    outfile: 'site.webmanifest'
                }
            })
        ]
    }
)