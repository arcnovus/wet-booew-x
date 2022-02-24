import { useTranslation } from "next-i18next";

export default function DateModifiedExample() {
  const { t } = useTranslation("basic-settings-page");
  return (
    <>
      <h2>{t("dateModified")}</h2>
      <p>{t("dateModifiedIntro")}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: t("instructions"),
        }}
      ></p>
      <pre>{`
import { DefaultTemplate } from "@arcnovus/wet-boew-react"
...
function MyDateModifiedPage() {
  return (<DefaultTemplate dateModified="2019-07-31">...</DefaultTemplate>)
}
        `}</pre>
      <pre>{`
import { AppTemplate } from "@arcnovus/wet-boew-react"
...
function MyDateModifiedPage() {
  return (<AppTemplate appName={[{ text: t("appName"), href: "/home" }]} dateModified="2019-07-31">...</AppTemplate>)
}
        `}</pre>
    </>
  );
}
