#!/usr/bin/env node

const { program } = require('commander');
const getRepositoryInfo = require('functions/get.js'); // Import the get.js module

program
  .version('1.0.0')
  .description('A CLI for various tasks')
  .command('get <githubRepositoryName>', 'Fetch GitHub repository information', { executableFile: 'commands/get.js' }) // Use the executableFile option
  .parse(process.argv);

program.parse(process.argv);
