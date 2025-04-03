import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Portfolio - Ben Ephraim",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: 'Poppins, sans-serif'}} className="leading-8 antialiased overflow-x-hidden dark:bg-darkTheme dark:text-white">
        
        {children}
      </body>
    </html>
  );
}
