#!/usr/bin/env node

const commander = require('commander');
const nihilo = require('./src');

nihilo.createProject('test');

commander.version('0.1.5');
commander.command('nihilo [value]')
  .description('Create a Nihilo Project')
  .action((projectName) => {
    nihilo.createProject(projectName);
  });

commander.parse(process.argv);
