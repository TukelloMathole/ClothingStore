import "@/styles/globals.css";  // Import global styles
import { AppProps } from "next/app";  // Import the AppProps type for Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;