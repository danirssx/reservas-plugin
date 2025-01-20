import React from "react";
import { useState, useEffect } from "react";
import { postReserva } from "../helpers/api";
import { z } from "zod";

const reservaSchema = z.object({
  nombre: z.string().min(1, { message: "El nombre es obligatorio" }),
  nota: z.string().optional(),
  email: z.string().email({ message: "Debe ser un email válido" }),
  telefono: z.string().min(6, { message: "Ingresa un teléfono válido" }),
  fecha: z.string().min(1, { message: "La fecha es obligatoria" }),
  hora: z.string().min(1, { message: "La hora es obligatoria" }),
});

function FormularioReserva() {
  const [reserva, setReserva] = useState({
    nombre: "",
    nota: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: Date.now(),
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      reservaSchema.parse(reserva);

      const response = await postReserva(reserva);
      if (response) alert("Reserva guardada con exito");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.issues.forEach((issue) => {
          const fieldName = issue.path[0];
          fieldErrors[fieldName] = issue.message;
        });
        setErrors(fieldErrors);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col justify-between">
      <label>Nombre:</label>
      <input
        type="text"
        value={reserva.nombre}
        onChange={(e) => setReserva({ ...reserva, nombre: e.target.value })}
        className="rounded-md border text-md text-gray-700"
      />
      {errors.nombre && <p className="text-red-500 text-md">{errors.nombre}</p>}

      <label>Nota:</label>
      <textarea
        value={reserva.nota}
        onChange={(e) => setReserva({ ...reserva, nota: e.target.value })}
        className="rounded-md border text-md text-gray-700"
      />
      {errors.nota && <p className="text-red-500 text-md">{errors.nota}</p>}

      <label>Email:</label>
      <input
        type="text"
        value={reserva.email}
        onChange={(e) => setReserva({ ...reserva, email: e.target.value })}
        className="rounded-md border text-md text-gray-700"
      />
      {errors.email && <p className="text-red-500 text-md">{errors.email}</p>}

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
        className="rounded-md border text-md text-gray-700"
      />
      {errors.telefono && (
        <p className="text-red-500 text-md">{errors.telefono}</p>
      )}

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
        className="rounded-md border text-md text-gray-700"
      />
      {errors.fecha && <p className="text-red-500 text-md">{errors.fecha}</p>}

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
        className="rounded-md border text-md text-gray-700"
      />
      {errors.hora && <p className="text-red-500 text-md">{errors.hora}</p>}

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
