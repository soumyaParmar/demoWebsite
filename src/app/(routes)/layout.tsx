import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoEdify Technology LLP",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Engineering the Future Together" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content="CoEdify Technology LLP" />
        <meta
          property="og:description"
          content="Optimizing cloud costs to integrating cutting-edge AI, onboarding experienced developers, designing complex systems, refactoring legacy software, and auditing existing system."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://coedify.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="coedify" />

        <meta name="author" content="CoEdify Technology LLP" />
        <meta
          name="keywords"
          content="engineering, software development, cloud cost,technology solutions, code refactoring, legacy software, innovation, AI, LLM, GenAI"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="canonical" href="https://coedify.com/" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CoEdify Technology LLP",
            url: "https://coedify.com",
            logo: "https://coedify.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-7834906274",
              contactType: "Human Resources",
            },
            sameAs: [
              "https://www.facebook.com/coedifytechnology",
              "https://x.com/CoEdifyTech",
              "https://www.linkedin.com/company/coedify/mycompany",
            ],
          })}
        </script>
      </Head>
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
