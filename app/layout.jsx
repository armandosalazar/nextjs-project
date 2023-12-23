import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "My Next.js Site",
  description: "Generated by Next.js",
  keywords: "nextjs, react, seo",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={(roboto.className, "text-slate-300")}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
