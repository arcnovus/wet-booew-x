import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { WetProvider } from "@arcnovus/wet-boew-react";
import { useRouter } from "next/router";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { appWithTranslation } from "next-i18next";

function WetForNextJsAppp({ Component, pageProps }: AppProps) {
  const [isServerSide, setIsServerSide] = useState(true);
  const router = useRouter();
  const currentLanguage = useCurrentLanguage();
  const handleLink = useCallback(
    (a: HTMLAnchorElement) => {
      const relativeUrl = a.href.replace(window.location.origin, "");
      const asUrl = `/${currentLanguage}${relativeUrl}`;
      router.push(relativeUrl, asUrl, {
        shallow: false,
        locale: router.locale,
      });
    },
    [router, currentLanguage]
  );

  useEffect(() => {
    setIsServerSide(false);
  }, []);

  // this will suppress the useLayoutEffect warnings.
  if (isServerSide) {
    // You can show some kind of placeholder UI here
    return null;
  }

  return (
    <WetProvider language={currentLanguage} linkHandler={handleLink}>
      <Component {...pageProps} />
    </WetProvider>
  );
}

export default appWithTranslation(WetForNextJsAppp);
