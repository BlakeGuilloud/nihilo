#!/usr/bin/env node

const commander = require('commander');
const nihilo = require('./src');

commander.version('0.1.5');
commander.command('create [value]')
  .description('Create a Nihilo Project')
  .action((projectName) => {
    nihilo.createProject(projectName);
  });

commander.parse(process.argv);
