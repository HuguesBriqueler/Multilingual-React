import styles from "./Content.module.css";
import data from "../../assets/data";

function Content() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{data["FR"].title}</h1>
      <p className={styles.contentTxt}>{data["FR"].txt}</p>
    </div>
  );
}

export default Content;
