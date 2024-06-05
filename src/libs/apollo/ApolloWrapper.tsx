"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ReactNode } from "react";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    fetchOptions: { cache: "no-store" },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: {children: ReactNode}) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}