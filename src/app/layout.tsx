import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BMO from "./components/bmo/bmo";

const inter = Inter({ subsets: ["latin"] });

{
  /* Nesse arquivo será codado o root layout, irá ser aplicado para todas as rotas*/
}

export const metadata: Metadata = {
  title: "BMO Math Game",
  description:
    "A fun game to complete equations until there are no attempts left.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <BMO>{children}</BMO>
      </body>
    </html>
  );
}
