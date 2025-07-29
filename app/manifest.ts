import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Garving Vásquez Severino - Portfolio',
        short_name: 'GVS Portfolio',
        description: 'Portafolio profesional de Garving Vásquez Severino, desarrollador fullstack junior y analista de datos.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#64748b',
        icons: [
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}