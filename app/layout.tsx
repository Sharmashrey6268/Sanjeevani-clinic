import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const notoHindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-hindi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://childtherapycenter.in"),
  title: {
    default:
      "Sanjeevani Pediatric Rehab and Wellness Center Indore | Pediatric Occupational Therapy",
    template: "%s | Sanjeevani Pediatric Rehab",
  },
  description:
    "Pediatric occupational therapy center in Indore for autism, ADHD, speech delay, sensory processing issues, learning difficulties, motor skill delay, and child development support.",
  keywords: [
    "Child therapy in Indore",
    "Occupational therapist near me",
    "Pediatric occupational therapy Indore",
    "Autism therapy Indore",
    "ADHD therapy children Indore",
    "Speech delay support Indore",
    "Home visit therapy Indore",
  ],
  openGraph: {
    title: "Sanjeevani Pediatric Rehab and Wellness Center Indore",
    description:
      "Helping children reach their full potential with pediatric therapy support in Indore.",
    url: "https://childtherapycenter.in",
    siteName: "Sanjeevani Pediatric Rehab and Wellness Center",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${poppins.variable} ${notoHindi.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}