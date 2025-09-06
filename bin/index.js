#!/usr/bin/env node
const { printTree } = require("../src/tree");
const process = require("process");

const startPath = process.cwd();
console.log(startPath);
printTree(startPath);
