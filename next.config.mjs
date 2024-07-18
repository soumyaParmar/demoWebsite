/* eslint-disable import/no-anonymous-default-export */
/** @type {import('next').NextConfig} */


import withMDX from "@next/mdx";


const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // images: {
  //   domains: ["media.dev.to", 'files.ably.io', "miro.medium.com", "www.crio.do"],
  // },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
 
  // Other Next.js configurations can go here
};

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
});

export default {
  ...nextConfig,
  ...mdxConfig(nextConfig),
};
