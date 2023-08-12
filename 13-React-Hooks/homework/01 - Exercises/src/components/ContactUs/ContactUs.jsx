import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  const dispatch = useDispatch();

  const [forms, setForms] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (event) => {
    setForms({
      ...forms,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(enviarForm(forms));
    setForms({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={handleInput} name="nombre" value={forms.nombre} />
        <label htmlFor="email">Email: </label>
        <input onChange={handleInput} name="email" value={forms.email} />
        <label htmlFor="asunto">Asunto: </label>
        <input onChange={handleInput} name="asunto" value={forms.asunto} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange={handleInput} name="mensaje" value={forms.mensaje} />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
