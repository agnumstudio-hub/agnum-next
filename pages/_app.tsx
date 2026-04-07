import type { AppProps } from "next/app";
import "../css/styles.css";
import "../css/site.css";
import "../css/home.css";
import "../css/studio.css";
import "../css/dashboard.css";

import ClientEffects from "../components/ClientEffects";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClientEffects />
      <Component {...pageProps} />
    </>
  );
}

