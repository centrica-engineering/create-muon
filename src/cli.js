#!/usr/bin/env node

const { resolve } = require('path');
const { create } = require('create-create-app');

const templateRoot = resolve(__dirname, '..', 'templates');

create('create-muon', {
  templateRoot
});
