//const core = require('@actions/core');
// const github = require('@actions/github');
//const exec = require('@actions/exec');

import * as core from '@actions/core';

function run() {
  core.notice("hello from my custom JS action!")
}

run();