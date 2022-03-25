import { createContext, useState } from "react";

export const Context = createContext();

const supportedLanguages = ["fr", "es", "en"];
let browserLanguage = navigator.language.slice(0, 2);

if (!supportedLanguages.includes(browserLanguage)) {
  console.log("Navigator default language is not supported.");
  browserLanguage = "en";
}

const ContextProvider = (props) => {
  const [language, setLanguage] = useState(browserLanguage);

  const handleLanguage = (chosenLanguage) => {
    setLanguage(chosenLanguage);
  };

  return (
    <Context.Provider value={{ language, handleLanguage }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
