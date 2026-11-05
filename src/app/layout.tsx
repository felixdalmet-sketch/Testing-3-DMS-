import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIGITAL MARKETING SUMMIT 2027 | Discover. Connect. Transform.",
  description:
    "Two-day professional conference on the Future of Search, Social Media & AI Marketing. 20-21 February 2027, Fairfield by Marriott Belagavi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
