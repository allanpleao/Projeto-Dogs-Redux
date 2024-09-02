import { Outlet, Navigate } from "react-router-dom";
import Loading from '../Helper/Loading'
import styles from "./Login.module.css";
import { useSelector } from "react-redux";

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />
  if (data) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  );
};

export default Login;
