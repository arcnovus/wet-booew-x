import { useTranslation } from "next-i18next";

export default function VersionIdentifierExample() {
  const { t } = useTranslation("basic-settings-page");
  return (
    <>
      <h2>{t("versionIdentifier")}</h2>
      <p>{t("versionIdentifierIntro")}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: t("instructions"),
        }}
      ></p>
      <pre>{`
import { DefaultTemplate } from "@arcnovus/wet-boew-react"
...
function MyVersionIdentifierPage() {
  return (<DefaultTemplate versionIdentifier="7890123456">...</DefaultTemplate>)
}
        `}</pre>
      <pre>{`
import { AppTemplate } from "@arcnovus/wet-boew-react"
...
function MyVersionIdentifierPage() {
  return (<AppTemplate appName={[{ text: t("appName"), href: "/home" }]} versionIdentifier="7890123456">...</AppTemplate>)
}
        `}</pre>
    </>
  );
}
