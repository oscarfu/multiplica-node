var colors = require('colors');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log(listarTabla(argv.base, argv.limite).green);
        break;
    case 'crear':

        // let base = argv.base | argv.b;
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`.green + colors.gray(archivo)))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

// let parametro = argv[2];

// let base = parametro.split('=')[1];