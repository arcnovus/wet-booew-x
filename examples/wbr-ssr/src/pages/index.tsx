import { SplashTemplate } from "@arcnovus/wet-boew-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const Index: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t("appName")}</title>
        <meta name="description" content="Wet for NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <SplashTemplate
          nameEng="WET for NextJS"
          nameFra="BOEW pour NextJS"
          indexEng="/en/home"
          indexFra="/fr/home"
        />
      </div>
    </div>
  );
};

export default Index;
