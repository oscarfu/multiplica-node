//requireds
const fs = require('fs');


let listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject(`La base ${base} tiene que ser un numero`);
        return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += (`${base}*${i} = ${i*base}\n`);
    }

    return data;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} tiene que ser un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base}*${i} = ${i*base}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-limite ${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}-limite ${limite}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}