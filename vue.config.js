module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'טהרה',
        short_name: 'טהרה',
        themeColor: '#f54291',
        msTileColor: '#000000',
        backgroundColor: '#ffffff',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
        },
        manifestOptions: {
            gcm_sender_id: "103953800507",
            icons: [
                {
                    src: "img/icons/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "img/icons/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        }
    }
}