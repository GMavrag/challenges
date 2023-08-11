import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
