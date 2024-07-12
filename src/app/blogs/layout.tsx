import Footer from "../_common/Footer/Footer";
import Navbar from "../_common/Navbar/Navbar";
import Head from "next/head";

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
    <html lang="en">
      
      <body style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
