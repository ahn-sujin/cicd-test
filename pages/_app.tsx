import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ASJ ECS DEPLOY TEST 👩‍💻</title>
        {/* 모바일에서 확대 축소 방지 */}
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        {/* 검색엔진에서 검색차단 */}
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
