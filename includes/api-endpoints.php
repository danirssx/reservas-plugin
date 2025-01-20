<?php
// Exit if accessed directly
if (!defined("ABSPATH")) {
    exit();
}

include_once plugin_dir_path(__FILE__) . "/sr-functions.php";

// Registrar endpoint
add_action("rest_api_init", function () {
    // GET
    register_rest_route("reservas/v1", "/datos/", [
        "methods" => "GET",
        "callback" => "sr_obtener_reservas",
    ]);

    register_rest_route("reservas/v1", "/datos/", [
        "methods" => "POST",
        "callback" => "sr_guardar_reserva",
        "permission_callback" => "__return_true",
    ]);
});
