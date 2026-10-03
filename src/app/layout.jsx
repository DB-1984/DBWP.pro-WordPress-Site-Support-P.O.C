import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata = {
  title: "DBWP | WordPress Design & Development",
  description:
    "Independent WordPress and WooCommerce design, custom development and practical website support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${newsreader.variable} min-h-screen w-full bg-white text-zinc-950 font-sans antialiased m-0 p-0 overflow-x-hidden`}
      >
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
