import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Button } from "@mui/material";
import Header from "@/components/heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PRQ | Practice Random Question",
  description: "Developed and Designed by Nilendra Patel "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
