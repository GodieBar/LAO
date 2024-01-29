<?php
// Verifica si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera los datos del formulario
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Aquí deberías realizar la validación de usuario y contraseña
    // Por ejemplo, puedes consultar una base de datos para verificar las credenciales

    // Si la validación es exitosa, puedes redirigir a otra página
    // Por ahora, simplemente mostraremos un mensaje de éxito
    echo "Inicio de sesión exitoso para el usuario: " . $username;
} else {
    // Si no se ha enviado el formulario, redirige a la página de inicio
    header("Location: index.html");
    exit();
}
?>
