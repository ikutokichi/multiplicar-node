const argv = require('yargs')
    .command('listar', 'imprime en consola una tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'crea un archivo con una tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}