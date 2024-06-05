import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "pokemon web application for Sprout test",
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://beta.pokeapi.co/graphql/v1beta"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
