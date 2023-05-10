#!/usr/bin/env node

const yargs = require('yargs')

// eslint-disable-next-line no-unused-expressions
yargs
    .option('host', {
        alias: 'h',
        type: 'string',
        default: 'https://cdli.mpiwg-berlin.mpg.de/',
        description: 'Host URL to use for API calls'
    })
    .option('format', {
        alias: 'f',
        description: 'File format',
        choices: [
            'ndjson',
            'csv',
            'tsv',
            'ntriples',
            'bibtex',
            'atf'
        ]
    })
    .option('output-file', {
        alias: 'o',
        description: 'Output file (outputs to stdout by default)'
    })
    .boolean('auth')
    .command(require('./src/export'))
    .help()
    .argv
