#!/usr/bin/env node
const argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('test', 'Test a spec file with a given purchase order')
    .example('$0 test -f foo.js -p 987698796', 'run a specific spec file with a ponumber')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Run a test')
    .alias('p', 'ponumber')
    .nargs('p', 1)
    .describe('p', 'Use this ponumber')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .argv;

const fs = require('fs')
const s = fs.createReadStream(argv.file)

s.on('data', _=> {

    if (argv.file === 'file.js') require('./file')
    if (argv.p) {
        console.log(argv.p)
    }
    

});

s.on('end', _=> {
    
});