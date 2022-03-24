import Content from "./component/Content/Content";
import ToggleLanguage from "./component/ToggleLanguage/ToggleLanguage";
import ContextProvider from "./context/LanguageContext";

function App() {
  return (
    <ContextProvider>
      <ToggleLanguage />
      <Content />
    </ContextProvider>
  );
}

export default App;
