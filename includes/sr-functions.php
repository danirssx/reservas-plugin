<?php

// Guardar una nueva reserva
function sr_guardar_reserva($request)
{
    global $wpdb;
    $table_name = $wpdb->prefix . "reservas";
    $params = $request->get_json_params();

    $wpdb->insert($table_name, [
        "nombre" => sanitize_text_field($params["nombre"]),
        "nota" => sanitize_textarea_field($params["nota"]),
        "email" => sanitize_text_field($params["email"]),
        "telefono" => sanitize_text_field($params["telefono"]),
        "fecha" => sanitize_text_field($params["fecha"]),
        "hora" => sanitize_text_field($params["hora"]),
    ]);

    return $wpdb->insert_id;
}

// Obtener todas las reservas
function sr_obtener_reservas()
{
    global $wpdb;
    $table_name = $wpdb->prefix . "reservas";

    return $wpdb->get_results(
        "SELECT * FROM $table_name ORDER BY fecha, hora ASC",
        ARRAY_A
    );
}

// // Shortcode
// function sr_formulario_shortcode()
// {
//     if ($_POST && !empty($_POST["nombre"])) {
//         sr_guardar_reserva($_POST);
//         echo "<p>!Reserva guardada exitosamente!</p>";
//     }

//     ob_start();
//     include plugin_dir_path(__FILE__) . "../templates/form.php";
//     return ob_get_clean();
// }

// add_shortcode("formulario_reservas", "sr_formulario_shortcode");
