import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/components/web/hooks/Context";
import ProjectMore from "@/components/web/ProjectMore";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victor Merseguel",
  description: "Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
