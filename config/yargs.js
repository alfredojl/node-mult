const comms = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Lista las tablas de multiplicar.', comms)
    .command('crear', 'Crea un archivo de la tabla de multiplicar.', comms)
    .argv;

module.exports = {
    argv
}