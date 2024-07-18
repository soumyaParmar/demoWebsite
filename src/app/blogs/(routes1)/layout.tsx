// layout for blog reading page

import styles from "../(routes1)/readingPage.module.css";
import dynamic from "next/dynamic";
import Subscribers from "../_components/Subscribers/Subscribers";
import Footer from "@/app/_common/Footer/Footer";

const Navbar = dynamic(() => import("@/app/_common/Navbar/Navbar"), {
  ssr: false,
});
const LatestPostSection = dynamic(
  () => import("../_components/latestPost/LatestPostSection"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        suppressHydrationWarning
      >
        <div style={{ backgroundColor: "#fafafa" }}>
          <Navbar flag={true} motionValue={true} />
          <div className={`${styles.container} `}>
            {children}
            <LatestPostSection insightsData={[]} />
          </div>
          <Subscribers />
          <Footer />
        </div>
      </body>
    </html>
  );
}
