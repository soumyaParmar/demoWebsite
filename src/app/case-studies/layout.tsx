import "./global.css";


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
