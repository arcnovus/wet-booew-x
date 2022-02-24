import { useTranslation } from "next-i18next";

export default function ScreenIdentifierExample() {
  const { t } = useTranslation("basic-settings-page");
  return (
    <>
      <h2>{t("screenIdentifier")}</h2>
      <p>{t("screenIdentifierIntro")}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: t("instructions"),
        }}
      ></p>
      <pre>{`
import { DefaultTemplate } from "@arcnovus/wet-boew-react"
...
function MyScreenIdentifierPage() {
  return (<DefaultTemplate screenIdentifier="0123456789">...</DefaultTemplate>)
}
        `}</pre>
      <pre>{`
import { AppTemplate } from "@arcnovus/wet-boew-react"
...
function MyScreenIdentifierPage() {
  return (<AppTemplate appName={[{ text: t("appName"), href: "/home" }]} screenIdentifier="0123456789">...</AppTemplate>)
}
        `}</pre>
    </>
  );
}
