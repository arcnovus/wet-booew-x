import {
  AppTemplate,
  PageTitle,
  useLngLinks,
  Href,
} from "@arcnovus/wet-boew-react";
import { CdtsBreadcrumb } from "@arcnovus/wet-boew-react/dist/cdts";
import { GetServerSideProps } from "next";
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage";

export const getServerSideProps: GetServerSideProps<{
  breadcrumbs: CdtsBreadcrumb[];
}> = async (context) => {
  return {
    props: {
      breadcrumbs: context.locale?.startsWith("en")
        ? [
            {
              title: "Home",
              href: "/home" as Href,
            },
          ]
        : [
            {
              title: "Acceuil",
              href: "/home" as Href,
            },
          ],
    },
  };
};

export default function SectionMenu({
  breadcrumbs,
}: {
  breadcrumbs: CdtsBreadcrumb[];
}) {
  // TODO: use a better i18n library
  const labels = {
    en: {
      title: "Custom Menu",
      intro:
        "This sample page demonstrates how a custom menu can be displayed on your page.",
    },
    fr: {
      title: "Menu personnalisé",
      intro:
        "Cet exemple de page montre comment un menu personnalisé peut être affiché sur votre page.",
    },
  };

  const currentLanguage = useCurrentLanguage();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${
      currentLanguage == "en" ? "fr" : "en"
    }/home/samples/breadcrumbs`,
  });

  return (
    <AppTemplate
      appName={[{ text: "WET for NextJS", href: "/home" }]}
      lngLinks={lngLinks}
      breadcrumbs={breadcrumbs}
      menuLinks={[
        {
          text: "Overview",
          href: "#",
        },
        {
          text: "First Section",
          href: "#",
        },
        {
          href: "#",
          text: "Second Section",
          subLinks: [
            {
              subhref: "#",
              subtext: "Subsection 1",
            },
            {
              subhref: "#",
              subtext: "Subsection 2",
            },
            {
              subhref: "#",
              subtext: "Subsection 3",
            },
            {
              subhref: "#",
              subtext: "Subsection 4",
            },
            {
              subhref: "#",
              subtext: "Second section - More",
            },
          ],
        },
      ]}
    >
      <PageTitle text={labels[currentLanguage].title} />
      <p>{labels[currentLanguage].intro}</p>
      <h2>Implementation</h2>
      <p>
        Breadcrumbs are configured as a prop passed to the{" "}
        <code>DefaultTemplate</code> or <code>AppTemplate</code>.
      </p>
      <ul>
        <li>
          <code>&quot;href&quot;:</code> the url of the link. If left empty, the
          item will the url of the link.
        </li>
        <li>
          <code>&quot;title&quot;:</code> the text of the link that is
          displayed.
        </li>
        <li>
          <code>&quot;acronym&quot;:</code> if your title has an acronym, you
          can use this property to provide the full text of the title. It will
          be displayed when the user hovers over the link.
        </li>
      </ul>
      <pre>
        {`
const breadcrumbs = [{
    "title": "Home",
    "href": "/" as Href
},{
    "title": "CDTS",
    "acronym": "Centrally Deployed Templates Solution",
    "href": "https://www.canada.ca/en/index.html" as Href
}]`}
      </pre>
      <pre>
        {`<DefaultTemplate breadcrumbs={breadcrumbs}>...</DefaultTemplate>`}
      </pre>
      <pre>{`<AppTemplate breadcrumbs={breadcrumbs}>...</AppTemplate>`}</pre>
    </AppTemplate>
  );
}
