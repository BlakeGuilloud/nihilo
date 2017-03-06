#!/usr/bin/env node

const commander = require('commander');
const nihilo = require('./nihilo');

nihilo.createProject('test');

commander.version('0.1.5');
commander.command('nihilo [value]')
  .description('Create a Nihilo Project')
  .action((name) => {
    nihilo.createProject(name);
  });

commander.parse(process.argv);
