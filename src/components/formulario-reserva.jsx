import React from "react";
import { useState, useEffect } from "react";
import { postReserva } from "../helpers/api";

function FormularioReserva() {
  const [reserva, setReserva] = useState({
    nombre: "",
    nota: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: Date.now(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await postReserva(reserva);

    response && alert("Reserva guardada con exito");
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 rounded-s">
      <label>Nombre:</label>
      <input
        type="text"
        value={reserva.nombre}
        onChange={(e) => setReserva({ ...reserva, nombre: e.target.value })}
      />

      <label>Nota:</label>
      <input
        type="text"
        value={reserva.nota}
        onChange={(e) => setReserva({ ...reserva, nota: e.target.value })}
      />

      <label>Email:</label>
      <input
        type="text"
        value={reserva.email}
        onChange={(e) => setReserva({ ...reserva, email: e.target.value })}
      />

      <label>Telefono:</label>
      <input
        type="text"
        value={reserva.telefono}
        onChange={(e) =>
          setReserva({
            ...reserva,
            telefono: e.target.value,
          })
        }
      />

      <label>Fecha:</label>
      <input
        type="date"
        value={reserva.fecha}
        onChange={(e) =>
          setReserva({
            ...reserva,
            fecha: e.target.value,
          })
        }
      />

      <label>Hora:</label>
      <input
        type="datetime-local"
        value={reserva.hora}
        onChange={(e) =>
          setReserva({
            ...reserva,
            hora: e.target.value,
          })
        }
      />
    </form>
  );
}

export default FormularioReserva;
