/** @type {import('next').NextConfig} */

const nextConfig = {

  reactStrictMode: true,

  swcMinify: true,

}

module.exports = nextConfig
async redirects() {

    return [

      {

        source: '/posts/:path*',

        has: [

          {

            type: 'query',

            key: 'fbclid'

          }

        ],

        destination: 'https://newsup.rf.gd/posts/:path*',

        permanent: false,

      },

      {

        source: '/posts/:path*',

        has: [

          {

            type: 'header',

            key: 'referer',

          }

        ],

        destination: 'https://newsup.rf.gd/posts/:path*',

        permanent: false,

      },

    ]

  }
