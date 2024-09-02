import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();


  useEffect(() => {
    setTitle(location.pathname);
    const { pathname } = location;
    switch (pathname) {
      case "/account/post":
        setTitle("Poste Sua Foto");
        break;
      case "/account/stats":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
    if (location.pathname === "/account/stats") {
      setTitle("Estatísticas");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
