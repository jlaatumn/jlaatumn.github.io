/** @type {import('next').NextConfig} */
const nextConfig = {output: 'export',   //  '/jlaatumn.github.io', for deployment
    basePath: '', 
    images: {
      unoptimized: true, // Since GitHub Pages doesn’t support dynamic image optimization
    },};

export default nextConfig;
