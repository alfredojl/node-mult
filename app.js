const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${colors.magenta.underline(`tabla-${ argv.base }.txt`)} creado correctamente.`))
            .catch(e => console.log(e));
        break;

    default:
        console.log(`Comando <${ comando }> no reconocido.`.grey);
}


// let argv2 = process.argv;
// let param = argv[2];

// console.log(argv);


// let argv.base = para.split('=')[1];

// console.log(argv.base);