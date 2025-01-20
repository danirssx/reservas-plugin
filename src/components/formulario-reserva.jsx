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
    <form onSubmit={handleSubmit} className="p-2 flex flex-col justify-between">
      <label>Nombre:</label>
      <input
        type="text"
        value={reserva.nombre}
        onChange={(e) => setReserva({ ...reserva, nombre: e.target.value })}
        className="rounded-md border"
      />

      <label>Nota:</label>
      <textarea
        value={reserva.nota}
        onChange={(e) => setReserva({ ...reserva, nota: e.target.value })}
        className="rounded-md border"
      />

      <label>Email:</label>
      <input
        type="text"
        value={reserva.email}
        onChange={(e) => setReserva({ ...reserva, email: e.target.value })}
        className="rounded-md border"
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
        className="rounded-md border"
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
        className="rounded-md border"
      />

      <label>Hora:</label>
      <input
        type="time"
        value={reserva.hora}
        onChange={(e) =>
          setReserva({
            ...reserva,
            hora: e.target.value,
          })
        }
        className="rounded-md border"
      />

      <button
        type="submit"
        className="rounded-lg bg-red-400 p-2 font-bold text-white mt-2"
      >
        Enviar
      </button>
    </form>
  );
}

export default FormularioReserva;
