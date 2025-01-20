<?php

// Guardar una nueva reserva
function sr_guardar_reserva($data)
{
    global $wpdb;
    $table_name = $wpdb->prefix . "reservas";

    $wpdb->insert($table_name, [
        "nombre" => sanitize_text_field($data["nombre"]),
        "nota" => sanitize_textarea_field($data["nota"]),
        "email" => sanitize_text_field($data["email"]),
        "telefono" => sanitize_text_field($data["telefono"]),
        "fecha" => sanitize_text_field($data["fecha"]),
        "hora" => sanitize_text_field($data["hora"]),
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

// Shortcode
function sr_formulario_shortcode()
{
    if ($_POST && !empty($_POST["nombre"])) {
        sr_guardar_reserva($_POST);
        echo "<p>!Reserva guardada exitosamente!</p>";
    }

    ob_start();
    include plugin_dir_path(__FILE__) . "../templates/form.php";
    return ob_get_clean();
}

add_shortcode("formulario_reservas", "sr_formulario_shortcode");
