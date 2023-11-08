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