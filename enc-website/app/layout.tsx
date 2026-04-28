import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENC — Intelligent Encryption for Modern Security",
  description:
    "ENC delivers enterprise-grade encryption, decryption, and cybersecurity infrastructure that protects your data and secures your digital ecosystem.",
  keywords: [
    "encryption",
    "cybersecurity",
    "data privacy",
    "secure systems",
    "ENC",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
