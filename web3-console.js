#!/usr/bin/env node

const repl = require('repl')
const process = require('process')
const Web3 = require('web3')

let endpoint = process.argv.length > 2 ? process.argv[2] : 'http://localhost:8545'
console.log('Web3 provider: ' + endpoint)

web3 = new Web3(new Web3.providers.HttpProvider(endpoint))
eth = web3.eth

repl.start('> ')
