// src/components/hook/useAge.js

export function useAge(
    bornDate
) {

    const fechaNacimientoDate = new Date(bornDate);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNacimientoDate.getMonth();

    // Ajustar si el cumpleaños aún no ha pasado este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad;
}