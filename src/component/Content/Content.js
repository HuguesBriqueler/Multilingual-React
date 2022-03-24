import { useContext } from "react";
import { Context } from "../../context/LanguageContext";
import styles from "./Content.module.css";
import data from "../../assets/data";

function Content() {
  const { language } = useContext(Context);
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{data[language].title}</h1>
      <p className={styles.contentTxt}>{data[language].txt}</p>
    </div>
  );
}

export default Content;
