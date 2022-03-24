import frenchFlag from "../../assets/france.svg";
import spanishFlag from "../../assets/spain.svg";
import englishFlag from "../../assets/uk.svg";
import styles from "./ToggleLanguage.module.css";

function ToggleLanguage() {
  return (
    <div className={styles.container}>
      <img src={frenchFlag} alt="French Flag" />
      <img src={spanishFlag} alt="Spanish Flag" />
      <img src={englishFlag} alt="English Flag" />
    </div>
  );
}

export default ToggleLanguage;
