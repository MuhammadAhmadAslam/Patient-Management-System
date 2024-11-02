/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "preview.colorlib.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "randomuser.me",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  