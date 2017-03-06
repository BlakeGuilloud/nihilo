#!/usr/bin/env node

// const commander = require('commander');
const src = require('./src');
console.log('src', src);
src.createProject('test');
//
// commander.version('0.1.5');
// commander.command('component [value] [value]')
//   .description('creates a templated React Component')
//   .action((name, path) => {
//     rcc.createFile(name, 'components', path);
//   });
//
// commander.parse(process.argv);
