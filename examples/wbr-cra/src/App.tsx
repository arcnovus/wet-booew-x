import {
  AppTemplate,
  PageTitle,
  SplashTemplate,
  WetProvider,
  useLanguage,
} from "@arcnovus/wet-boew-react";
import { useCallback } from "react";
import {
  useLocation,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {
  // const loc = useLocation();
  // console.log(loc);
  const { currentLanguage } = useLanguage(useLocation());
  const history = useHistory();
  const labels = {
    en: {
      title: "A Title",
      contents: "Hello, World!",
      appName: "Some awesome app.",
    },
    fr: {
      title: "Un Titre",
      contents: "Bonjour!",
      appName: "Une application merveilleuse.",
    },
  };
  const handleClick = useCallback(
    (a) => {
      console.log("A", a.href);
      history.push(a.href.replace(window.location.origin, ""));
    },
    [history]
  );
  return (
    <WetProvider linkHandler={handleClick}>
      {currentLanguage == null ? (
        <SplashTemplate
          nameEng={labels.en.appName}
          nameFra={labels.fr.appName}
        />
      ) : (
        <AppTemplate
          appName={[
            {
              href: "/",
              text: labels[currentLanguage].appName,
            },
          ]}
        >
          <PageTitle text={labels[currentLanguage].title} />
          <p>{labels[currentLanguage].contents}</p>
        </AppTemplate>
      )}
    </WetProvider>
  );
}