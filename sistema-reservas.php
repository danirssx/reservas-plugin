<?php
/**
 * Plugin Name: Sistema de Reservas
 * Description: Plugin para gestionar reservas de servicios.
 * Version: 1.0
 * Author: Daniel Ross
 * License: GPL2
 */

// Evitar el directo acceso al archivo
if (!defined(" ABSPATH ")) {
    exit();
}

// Carga de archivos
include_once plugin_dir_path(__FILE__) . "includes/sr-database.php";
include_once plugin_dir_path(__FILE__) . "includes/sr-functions.php";

// Registrar la activación del plugin
function sr_activate_plugin()
{
    sr_create_database();
}
register_activation_hook(__FILE__, "sr_activate_plugin");

// Registrar scripts
function sr_enqueue_scripts()
{
    wp_enqueue_style(
        "sr-styles",
        plugin_dir_url(__FILE__) . "assets/styles.css"
    );
    wp_enqueue_script(
        "sr-scripts",
        plugin_dir_url(__FILE__) . "assets/scripts.js",
        ["jquery"],
        null,
        true
    );
}
add_action("wp_enqueue_scripts", "sr_enqueue_scripts");

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
