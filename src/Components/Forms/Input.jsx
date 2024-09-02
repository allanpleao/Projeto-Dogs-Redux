import styles from "./Input.module.css";

const Input = ({ label, type, name, value, handleChange, error, onBlur }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
