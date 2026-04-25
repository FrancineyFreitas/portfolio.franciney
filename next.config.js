/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com', 
      'via.placeholder.com', 
      'alonerd.com',
      'cdn.pixabay.com',
      'secure.gravatar.com',
      'www.gravatar.com',
      'gravatar.com',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'img.odcdn.com.br',
      'gmzmoke.com.br',
      'agenciafreela.com.br',
      'abradi.com.br',
      'agenciadecriacao.com.br',
      'ukmarketingdigital.com.br',
      'alonerd.com',
      'hellomidia.com.br',
      'encrypted-tbn0.gstatic.com',
      'cajamar.sp.gov.br',
      'static.vecteezy.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alonerd.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'img.odcdn.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'gmzmoke.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'agenciafreela.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'abradi.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'agenciadecriacao.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ukmarketingdigital.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'alonerd.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'hellomidia.com.br',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images?**',
      },
      {
        protocol: 'https',
        hostname: 'cajamar.sp.gov.br',
        pathname: '/noticias/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '/system/resources/thumbnails/**',
      },
    ],
  },
}

module.exports = nextConfig
