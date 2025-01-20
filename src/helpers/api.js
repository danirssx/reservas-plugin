const API_URL = "/wp-json/reservas/v1/datos/";

// GET
export async function fetchReservas() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    return await response.json();
  } catch (e) {
    console.error(`Error: ${e}`);
    return [];
  }
}

// POST
export async function postReserva(reserva) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserva),
    });

    if (!response.ok) {
      throw new Error("Error al guardar los datos");
    }

    return await response.json();
  } catch (err) {
    console.error(`Error: ${err}`);
    return null;
  }
}
