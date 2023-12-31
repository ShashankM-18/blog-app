import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterInfo from "./components/FooterInfo";
import Copyright from "./components/Copyright";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Ecommerce and Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={montserrat.className}>
          <Header />
          <Navbar />
          {children}
          <Footer />
          <FooterInfo />
          <Copyright />
        </body>
      </UserProvider>
    </html>
  );
}
