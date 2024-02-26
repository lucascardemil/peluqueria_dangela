export function cleanRut(value) {
    let formato = value.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
    let len = formato.length - 1;
    if (len > 3) {
        let dv = formato[len];
        let beforeDv = formato.substring(0, len).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        formato = beforeDv + '-' + dv;
    }
    return formato;
}

function validarRut(rut) {
    // Limpiar el formato del RUT
    let formatoLimpio = rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();

    // Separar el cuerpo del RUT del dígito verificador
    let cuerpo = formatoLimpio.slice(0, -1);
    let dv = formatoLimpio.slice(-1);

    // Calcular el dígito verificador esperado
    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i)) * multiplo;
        if (multiplo < 7) {
            multiplo += 1;
        } else {
            multiplo = 2;
        }
    }

    let dvEsperado = 11 - (suma % 11);

    // Validar el dígito verificador
    if (dvEsperado === 11) {
        dvEsperado = 0;
    } else if (dvEsperado === 10) {
        dvEsperado = 'K';
    }

    if (dv == dvEsperado) {
        // Formatear el RUT si es válido
        let formatoFinal = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv;
        return formatoFinal;
    } else {
        // Devolver null si el RUT no es válido
        return false;
    }
}