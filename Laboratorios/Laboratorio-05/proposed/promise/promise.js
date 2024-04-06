function descuentoFunction(pago) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pago >= 100) {
                resolve('Descuento aplicado');
            } else {
                reject('Descuento no aplicado')
            }
        }, 4000);
    })
}

function sumaFunction(num_1, num_2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const suma = num_1 + num_2;
            if (suma >= 50) {
                resolve('Suma mayor a 50');
            } else {
                reject('Suma menor a 50');
            }
        }, 4000);
    })
}

function datosFunction(nombre, apellido) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre === '' || apellido === '') {
                reject('Datos incompletos');
            } else {
                resolve(`Nombre: ${nombre}, Apellido: ${apellido}`);
            }
        }, 4000);
    })
}

function envioDUI(edad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve('Solicitud para DUI aceptada');
            } else {
                reject('Solicitud para DUI denegada');
            }
        }, 4000);
    })
}

Promise.allSettled([descuentoFunction(100), sumaFunction(20, 30), datosFunction('Axel', ''), envioDUI(18)])
    .then(response => console.log(response))
    .catch(error => console.log(error))