import { useNavigate } from "react-router-dom";
import styles from "../styles/Error404.scss";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>404</h1>
      <h2 className={styles.container__description}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <p className={styles.container__return} onClick={() => navigate("/")}>
        Retourner sur la page d'accueil
      </p>
    </div>
  );
}
