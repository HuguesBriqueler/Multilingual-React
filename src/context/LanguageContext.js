import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [language, setLanguage] = useState("ES");
  return (
    <Context.Provider value={{ language }}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
