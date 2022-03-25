import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [language, setLanguage] = useState("FR");

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
