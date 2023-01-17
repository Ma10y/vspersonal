import Window from "@/components/Window";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Window>
      <Component {...pageProps} />
    </Window>
  );
}
