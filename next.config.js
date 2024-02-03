/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [      
          //   {
          //   protocol: 'https',
          //   hostname: 't3.ftcdn.net',
          //   port: '',
          //   pathname: '/jpg/02/22/38/86/360_F_222388660_ey3if0TwU3ZyCJYUJg3AYHNrsLK4inSC.jpg',
          // },
            {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
            {
            protocol: 'https',
            hostname: 'www.freetobechill.com',
            port: '',
          },
        
        ]
    }
}

module.exports = nextConfig
