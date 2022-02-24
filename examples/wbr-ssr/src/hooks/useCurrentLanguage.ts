import { useRouter } from "next/router";
import { Language } from "@arcnovus/wet-boew-react";
export function useCurrentLanguage(): Language {
  const { locale } = useRouter();
  return locale?.split("-")[0] as Language;
}
