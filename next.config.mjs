/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.jbl.com.co',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'sorfin.org',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
