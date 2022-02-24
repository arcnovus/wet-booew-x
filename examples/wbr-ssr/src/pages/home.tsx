import {
  DefaultTemplate,
  PageTitle,
  useLngLinks,
} from "@arcnovus/wet-boew-react";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function Home() {
  const currentLanguage = useCurrentLanguage();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${currentLanguage == "en" ? "fr" : "en"}/home/`,
  });
  const { t } = useTranslation("home-page");
  return (
    <DefaultTemplate lngLinks={lngLinks}>
      <PageTitle text={t("title")} />
      <p>{t("intro")}</p>
      <ul>
        <li>
          <a href={`/samples/basic-settings`}>{t("basic-setting")}</a>
        </li>
        <li>
          <a href={`/samples/breadcrumbs`}>{t("breadcrumbs")}</a>
        </li>
      </ul>
      <h3>{t("appTemplates")}</h3>
      <ul>
        <li>
          <a href={`/${currentLanguage}/samples/sectionmenu`}>
            {t("customMenu")}
          </a>
        </li>
      </ul>
    </DefaultTemplate>
  );
}

// Note: You can use getServerSideProps if you also need to load dynamic data
// from an API on each page load.
export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? defaultLocale ?? "en", [
      "home-page",
    ])),
  },
});
