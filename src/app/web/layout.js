import "./globals.css";
import { ContextProvider } from "@/components/hooks/ContextWeb";

export const metadata = {
  title: "Victor Merseguel",
  description: "Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
