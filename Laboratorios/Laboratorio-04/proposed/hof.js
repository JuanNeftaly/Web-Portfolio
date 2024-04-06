function saludo(timeOfDay, name) {
    let saludo;
    if (timeOfDay >= 12) {
        saludo = 'Buenas tardes ' + name;
    } else if (timeOfDay < 24) {
        console.log('El dia solo tiene 24 horas mi rey');
    } else {
        saludo = 'Buenos dias ' + name;
    }

    return saludo;
}

const time = 25;
const nombre = 'Juan';

console.log(saludo(time, nombre));