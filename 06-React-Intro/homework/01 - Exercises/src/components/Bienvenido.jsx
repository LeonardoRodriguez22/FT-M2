import React from "react";
import Botones from "./Botones";

const studentName = "Leonardo Rodruiguez 12/8/2023";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>FT-41-a</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill) => (
          <li key={id}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

export default Bienvenido;

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
