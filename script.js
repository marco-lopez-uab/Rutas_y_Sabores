// js
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-reserva');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitar que la página se recargue

            // Obtener los valores introducidos
            const nombre = document.getElementById('nombre').value;
            const destinoSelect = document.getElementById('destino');
            const destinoTexto = destinoSelect.options[destinoSelect.selectedIndex].text;

            // Mostrar mensaje interactivo de confirmación
            mensajeConfirmacion.style.color = '#27ae60';
            mensajeConfirmacion.textContent = `¡Muchas gracias, ${nombre}! Tu reserva para la "${destinoTexto}" se ha procesado con éxito.`;

            // Limpiar los campos del formulario
            formulario.reset();
        });
    }
});