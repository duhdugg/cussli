#!/usr/bin/env node

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

(async () => {
  const { cuss } = await import('cuss')
  console.log(labels[cuss[word]])
})()
