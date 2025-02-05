<?php
// Incluir el autoloader de Composer para PHPMailer
require 'vendor/autoload.php';

// Usar la clase PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Crear una nueva instancia de PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';           // Usar el servidor SMTP de Gmail
        $mail->SMTPAuth = true;                  // Activar autenticación SMTP
        $mail->Username = 'mytiendawebpersonaly@gmail.com'; // Tu correo electrónico (por ejemplo, un Gmail)
        $mail->Password = 'hajd txie syoe sslk'; // Contraseña de aplicación de Gmail (¡NO la contraseña normal!)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Usar TLS
        $mail->Port = 587;                      // Puerto SMTP para Gmail

        // Remitente
        $mail->setFrom('mytiendawebpersonaly@gmail.com', 'Nombre de Remitente'); // El correo que envía el mensaje

        // Destinatario
        // Aquí el destinatario será el correo fijo "mytiendawebpersonaly@gmail.com"
        $mail->addAddress('mytiendawebpersonaly@gmail.com', 'Nombre del Destinatario'); // Cambia "Nombre del Destinatario" si quieres personalizar el nombre

        // Contenido del correo
        $mail->isHTML(true);  // Enviar en formato HTML
        $mail->Subject = 'Nuevo mensaje de formulario de contacto';
        $mail->Body    = 'Nombre: ' . $_POST['nombre'] . '<br>' .
                         'Email: ' . $_POST['email'] . '<br>' .
                         'Teléfono: ' . $_POST['telefono'] . '<br>' .
                         'Mensaje: ' . nl2br($_POST['mensaje']); // Convertir saltos de línea en el mensaje

        // Enviar el correo
        if ($mail->send()) {
            echo 'El mensaje ha sido enviado correctamente';
        } else {
            echo 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.';
        }
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
?>
