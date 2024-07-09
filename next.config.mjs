/* eslint-disable import/no-anonymous-default-export */
/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";
import { hostname } from "os";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: ["media.dev.to"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**',
  //       // pathname: '/cdn-cgi/image/**',
  //     },
  //   ],
  // },
  // Other Next.js configurations can go here
};

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
});

export default {
  ...nextConfig,
  ...mdxConfig(nextConfig),
};
