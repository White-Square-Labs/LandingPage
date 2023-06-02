import "../styles/global.css";

export const metadata = {
  title: "White Square Labs",
  description: "Building DeFi from ground up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
