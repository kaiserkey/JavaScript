export function multiplicar(a,b){
    return (a*b).toFixed(2);
}

function sumar(a,b){return (a+b).toFixed(2)}
function restar(a,b){return (a-b).toFixed(2)}

export const aritmeticaBasica = {
    sumar,
    restar,
}