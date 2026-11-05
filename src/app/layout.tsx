import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIGITAL MARKETING SUMMIT 2027",
  description: "Discover. Connect. Transform. 20-21 February 2027, Belagavi",
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
