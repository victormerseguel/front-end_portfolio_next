import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victor Merseguel",
  description: "Front-End Developer",
  icons: {
    icon: "/assets/img/faviconweb.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
