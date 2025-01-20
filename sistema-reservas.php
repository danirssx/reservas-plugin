<?php
/**
 * Plugin Name: Sistema de Reservas
 * Description: Plugin para gestionar reservas de servicios.
 * Version: 1.0
 * Author: Daniel Ross
 * License: GPL2
 */

// Evitar el directo acceso al archivo
defined("ABSPATH") || exit(); // Prevent direct access to the file.

// Carga de archivos
include_once plugin_dir_path(__FILE__) . "includes/sr-database.php";
include_once plugin_dir_path(__FILE__) . "includes/sr-functions.php";

// Registrar la activación del plugin
function sr_activate_plugin()
{
    sr_create_database();
}
register_activation_hook(__FILE__, "sr_activate_plugin");

// React
function render_reservas_app()
{
    // Asegúrate de que el script y estilos de React estén encolados.
    wp_enqueue_script(
        "reservas-script", // Identificador único del script
        plugins_url("build/index-CoNGDpaZ.js", __FILE__), // Ruta del script generado
        [], // Dependencias (React, ReactDOM, etc., si es necesario)
        "1.0", // Versión
        true // Coloca el script en el footer
    );

    wp_enqueue_style(
        "reservas-styles", // Identificador único de estilos
        plugins_url("build/index-C6G_3qQV.css", __FILE__), // Ruta de los estilos generados
        [], // Dependencias de estilo
        "1.0" // Versión
    );

    // Devuelve el contenedor donde React montará la aplicación.
    return '<div id="reservas-root"></div>';
}
add_shortcode("reservas_app", "render_reservas_app");

// Admin menu
function sr_admin_menu()
{
    add_menu_page(
        "Reservas",
        "Reservas",
        "manage_options",
        "sr-reservas",
        "sr_mostrar_reservas"
    );
}
add_action("admin_menu", "sr_admin_menu");

function sr_mostrar_reservas()
{
    $reservas = sr_obtener_reservas();

    echo "<h1>Reservas</h1>";
    echo "<table>";
    echo "<tr><th>Nombre</th><th>Email</th><th>Teléfono</th><th>Fecha</th><th>Hora</th></tr>";
    foreach ($reservas as $reserva) {
        echo "<tr>
                <td>{$reserva["nombre"]}</td>
                <td>{$reserva["email"]}</td>
                <td>{$reserva["telefono"]}</td>
                <td>{$reserva["fecha"]}</td>
                <td>{$reserva["hora"]}</td>
            </tr>";
    }
    echo "</table>";
}
