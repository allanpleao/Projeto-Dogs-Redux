import { useState } from "react";

const validations = {
  email: {
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
    message: 'A senha precisa ter no mínimo 1 letra maiúscula, 1 letra minúscula e 1 caracter especial. A senha tem que ter pelo menos 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message: "Ultilize apenas números" 
  }
};

export const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function handleChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("preencha um valor");
      return false;
    }  else if (validations[type] && !validations[type].regex.test(value)) {
      setError(validations[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    handleChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
