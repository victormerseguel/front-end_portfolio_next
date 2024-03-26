import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContextProvider } from "./hooks/ContextFilm";

export const metadata = {
  title: "Victor Films",
  description: "",
  icons: {
    icon: "/assets/img/faviconfilm.ico",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div className="container">
          <div className="content">
            <ContextProvider>
              <Header />
              {children}
              <Footer />
            </ContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
