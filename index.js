'use strict'
const uniqueRandomArray = require('unique-random-array')
const starNames = require('./star-names.json')

exports.all = starNames
exports.random = uniqueRandomArray(starNames)
