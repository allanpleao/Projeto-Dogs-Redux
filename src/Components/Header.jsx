import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dog from "../assets/dogs.svg?react";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((state) => state.user)

  return (
    <header className={styles.header}>
      <nav className="container">
        <Link className={styles.logo} to={"/"} aria-label="Dogs - home">
          <Dog />
        </Link>
        {data ? (
          <Link className={styles.login} to={"/account"}>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to={"/login"}>
            Login|Criar
          </Link>
        )}

      </nav>
    </header>
  );
};

export default Header;
