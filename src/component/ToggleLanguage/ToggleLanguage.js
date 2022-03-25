import { useContext } from "react";
import frenchFlag from "../../assets/france.svg";
import spanishFlag from "../../assets/spain.svg";
import englishFlag from "../../assets/uk.svg";
import styles from "./ToggleLanguage.module.css";
import { Context } from "../../context/LanguageContext";

function ToggleLanguage() {
  const { handleLanguage } = useContext(Context);

  return (
    <div className={styles.container}>
      <img
        src={frenchFlag}
        onClick={() => handleLanguage("FR")}
        alt="French Flag"
      />
      <img
        src={spanishFlag}
        onClick={() => handleLanguage("SP")}
        alt="Spanish Flag"
      />
      <img
        src={englishFlag}
        onClick={() => handleLanguage("EN")}
        alt="English Flag"
      />
    </div>
  );
}

export default ToggleLanguage;
