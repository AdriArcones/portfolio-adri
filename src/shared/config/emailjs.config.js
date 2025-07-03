// Configuración de EmailJS
// Reemplaza estos valores con tus credenciales reales de EmailJS

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_lyzejj9', // Tu Service ID de EmailJS
  TEMPLATE_ID: 'template_uxnuzbd', // Tu Template ID de EmailJS
  PUBLIC_KEY: 'j-JA7Q2PbSkFubxS0', // Tu Public Key de EmailJS
  TO_EMAIL: 'adrianarconesgomez@gmail.com' // Tu email personal donde recibirás los mensajes
};

// Ejemplo de cómo obtener estas credenciales:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta o inicia sesión
// 3. En el dashboard, crea un nuevo servicio (Gmail, Outlook, etc.)
// 4. Crea una nueva plantilla de email
// 5. Copia los IDs que te proporcionan

// Variables disponibles en la plantilla:
// {{from_name}} - Nombre del remitente
// {{from_email}} - Email del remitente  
// {{from_phone}} - Teléfono del remitente
// {{message}} - Mensaje del formulario
// {{to_email}} - Tu email personal
// {{date}} - Fecha del envío (formato español)
// {{time}} - Hora del envío (formato español)
// {{browser}} - Información del navegador del usuario 