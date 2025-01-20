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
