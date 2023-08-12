import React from "react";
import "./Contact.modules.css";
import { useState } from "react";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
  let errors = {};
  if (!inputs.name) {
    errors.name = "se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electronico";
  }
  if (!inputs.messagge) {
    errors.messagge = "se requiere un mensaje";
  }
  return errors;
};

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    messagge: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    messagge: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...errors,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(errors).length) {
      alert("Datos completos");
      setInputs({
        name: "",
        email: "",
        messagge: "",
      });
      setErrors({
        name: "",
        email: "",
        messagge: "",
      });
    } else {
      alert("Debe llenar todos los datos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre: </label>
      <input
        className={errors.name && "warning"}
        onChange={handleChange}
        value={inputs.name}
        name="name"
        type="text"
        placeholder="Escribe tu nombre..."
      />
      {errors.name && <p className="danger">{errors.name}</p>}

      <label>Email: </label>
      <input
        className={errors.email && "warning"}
        onChange={handleChange}
        value={inputs.email}
        name="email"
        type="text"
        placeholder="Escribe tu email..."
      />
      {errors.email && <p className="danger">{errors.email}</p>}

      <label>Mensaje: </label>
      <textarea
        className={errors.messagge && "warning"}
        onChange={handleChange}
        value={inputs.messagge}
        name="messagge"
        type="text"
        placeholder="Escribe tu mensaje..."
      />
      {errors.messagge && <p className="danger">{errors.messagge}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;
