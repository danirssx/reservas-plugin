<?php

// Crear tabla personalizada
function sr_create_database()
{
    global $wpdb;
    $table_name = $wpdb->prefix . "reservas";
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table_name (
        id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(100) not NULL,
        nota VARCHAR(100) NULL,
        email VARCHAR(100) NOT NULL,
        telefono VARCHAR(15) NOT NULL,
        fecha DATE NOT NULL,
        hora TIME NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once ABSPATH . "wp-admin/includes/upgrade.php";
    dbDelta($sql);
}
