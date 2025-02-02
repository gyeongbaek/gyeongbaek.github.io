import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";

export const metadata: Metadata = {
  title: "GYEONGB-LOG",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto max-w-3xl h-screen px-5 lg:max-w-6xl lg:px-8 text-base lg:text-lg flex flex-col">
          <Header />
          <Main className="flex-1 h-auto">{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
