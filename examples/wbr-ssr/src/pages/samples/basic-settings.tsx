import {
  DefaultTemplate,
  PageTitle,
  useLngLinks,
} from "@arcnovus/wet-boew-react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DateModifiedExample from "../../components/DateModifiedExample";
import VersionIdentifierExample from "../../components/VersionIdentifierExample";
import ScreenIdentifierExample from "../../components/ScreenIdentifierExample";
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage";

export default function BasicSettings() {
  const { t } = useTranslation("basic-settings-page");

  const currentLanguage = useCurrentLanguage();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${
      currentLanguage == "en" ? "fr" : "en"
    }/samples/basic-settings`,
  });

  return (
    <DefaultTemplate
      lngLinks={lngLinks}
      dateModified="2019-07-31"
      versionIdentifier="7890123456"
      screenIdentifier="0123456789"
      breadcrumbs={[{ title: t("homeCrumbTitle"), href: t("homeCrumbHref") }]}
    >
      <PageTitle text={t("title")} />
      <p>{t("intro")}</p>
      <DateModifiedExample />
      <ScreenIdentifierExample />
      <VersionIdentifierExample />
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
      "common",
      "basic-settings-page",
    ])),
  },
});
