#!/usr/bin/env node

const cuss = require('cuss')

const labels = {
  undefined: 'unknown',
  0: 'unlikely',
  1: 'likely',
  2: 'most-likely'
}

function printUsage(printFunc, object={}) {
  printFunc(`Usage: cussli [word]`)
}

const word = process.argv[2]
if (!word) {
  printUsage(console.error)
  process.exit(1)
}

console.debug(labels[cuss[word]])
