import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { text } from "./languages";

i18n.use(LanguageDetector).init({
  debug: false,
  defaultNS: ["translations"],
  fallbackLng: "pt",
  ns: ["translations"],
  resources: text,
});

export { i18n };
