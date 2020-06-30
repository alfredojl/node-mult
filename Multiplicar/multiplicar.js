const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    if (!Number(base) || !Number(limite))
        return console.log(`'${ base }' no es un número.`.red);

    console.log('================'.blue);
    console.log(`==Tabla del ${ base }.==`.blue);
    console.log('================'.blue);
    for (let i = 1; i <= limite; i++)
        console.log(`${ base } * ${ i } = ${ base * i}`);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limite))
            return reject(`'${ base }' no es un número.`.red)

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`./Tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt`);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}