import type { Metadata } from "next";
import Footer from "./components/client/footer";
import { Inter, Inika, IBM_Plex_Serif } from "next/font/google";
import "@bitcoin-dev-project/bdp-ui/styles.css";
import "./globals.css";
import Navbar from "@/app/components/server/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inika = Inika({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inika",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Bitcoin TLDR",
  alternates: {
    types: {
      "application/rss+xml": "./rss.xml",
    },
  },
  description: "Bitcoin-dev and Lightning-dev mailing list summaries and discoveries",
  keywords:
    "bitcoin, bitcoin development, bitcoin tldr, bitcoin tl;dr, bitcoin learning, bitcoin resources, bitcoin resources for beginners, bitcoin resources for developers, bitcoin resources for beginners and developers, bitcoin resources for beginners and developers",
  openGraph: {
    title: "Bitcoin TLDR",
    description: "Bitcoin-dev and Lightning-dev mailing list summaries and discoveries",
    url: "https://tldr.bitcoinsearch.xyz",
    type: "website",
    images: [
      {
        url: "https://tldr.bitcoinsearch.xyz/images/laughing_cat_sq.jpg",
      },
    ],
  },
  twitter: {
    card: "summary",
    creator: "@chaincodelabs",
    images: ["https://tldr.bitcoinsearch.xyz/images/laughing_cat_landscape.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className={`${inter.variable} ${inika.variable} ${ibmPlexSerif.variable} font-inter h-full`}>
        <div className='w-full items-center h-full flex flex-col'>
          <div className='w-full grow flex flex-col'>
            <div className='z-10'>
              <Navbar />
            </div>
            <div>{children}</div>
            <Footer />
          </div>
        </div>
        <script async src='https://visits.bitcoindevs.xyz/script.js' data-website-id='a711d1d5-764e-461e-83bd-d715c5b8cb29'></script>
      </body>
    </html>
  );
}
