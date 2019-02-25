#!/usr/bin/env node
'use strict'
const meow = require('meow')
const starNames = require('.')

const cli = meow(`
  Examples
    $ star-names
    Mizar
    $ star-names --all
    Achernar
    Acrux
    …
  Options
    --all  Get all names instead of a random name
`)

console.log(cli.flags.all ? starNames.all.join('\n') : starNames.random())
