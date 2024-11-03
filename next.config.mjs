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
          hostname: "img.freepik.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  