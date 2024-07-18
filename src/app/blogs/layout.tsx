import Footer from "../_common/Footer/Footer";
import Navbar from "../_common/Navbar/Navbar";
import Subscribers from "./_components/Subscribers/Subscribers";
import "./global.css";
// import Head from "next/head";
// import { Html } from 'next/document';
// import { Html } from "next/document";

export const metadata = {
  title: "CoEdify Technology LLP",
  description: "Engineering the Future Together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
