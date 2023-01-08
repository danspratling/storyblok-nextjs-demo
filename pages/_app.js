// import "@fontsource/rubik/latin-300.css";
// import "@fontsource/rubik/variable.css";
// import "@fontsource/rubik/latin-700.css";
import "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
// import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import PlausibleProvider from "next-plausible";
// import { components } from "../storyblok";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  // components,
});

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <PlausibleProvider domain="skyward.digital" trackOutboundLinks>
      {/* Disabled as it doesn't correctly load all dark styles in the header on first load */}
      {/* <ThemeProvider defaultTheme="system" attribute="class"> */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </PlausibleProvider>
  );
}

export default MyApp;
