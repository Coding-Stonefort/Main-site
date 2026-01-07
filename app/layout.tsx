import "./css/style.css";
import "./css/global.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ChatWidget from "@/components/chat/ChatWidget";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Stonefort Securities",
  description: "Stonefort securities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>

        <ChatWidget />
      </body>
    </html>
  );
}
