import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import buttonStyles from '../Forms/Button.module.css'
import Head from "../Helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/store/Slices/userSlice";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state)
  const { loading, error } = user || token;
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      dispatch(userLogin({username: username.value, password: password.value}));
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login"/>
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <button className={buttonStyles.button} disabled>
            Carregando...
          </button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/lost">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={buttonStyles.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
