/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@use "sass:math"; @import "styles/css/global.scss";`
  },
}

export default nextConfig; 