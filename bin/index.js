#!/usr/bin/env node
const { runTree } = require("../src/tree");

/**
 * Parse command line arguments for ignore options
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const additionalFiles = [];
  const additionalPatterns = [];
  let dirsOnly = false;
  let asJson=false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--ignore-files') {
      // Collect all files until next flag or end of args
      i++;
      while (i < args.length && !args[i].startsWith('--')) {
        additionalFiles.push(args[i]);
        i++;
      }
      i--; // Adjust for the loop increment
    } else if (args[i] === '--ignore-pattern') {
      // Collect all patterns until next flag or end of args
      i++;
      while (i < args.length && !args[i].startsWith('--')) {
        additionalPatterns.push(args[i]);
        i++;
      }
      i--; // Adjust for the loop increment
    } else if (args[i] === '--dirs-only') {
      dirsOnly = true;
    } else if (args[i] === '--as-json') {
      asJson = true;
    } else if (args[i] === '--help' || args[i] === '-h') {
      console.log(`
Treeview CLI - Print project folder structure

Usage: treeview [options]

Options:
  --ignore-files <file1> [file2] ...    Ignore specific files or directories
  --ignore-pattern <pattern1> [pattern2] ...  Ignore files matching glob patterns
  --help, -h                           Show this help message
  --dirs-only                                Show only directories, no files
  --as-json                                 Show tree as a nested JSON object

Examples:
  treeview --ignore-files temp.txt build/
  treeview --ignore-pattern "*.log" "*.tmp"
  treeview --ignore-files temp.txt --ignore-pattern "*.log" "test-*"
  treeview --dirs-only
  treeview --as-json
      `);
      process.exit(0);
    }
  }
  
  return { additionalFiles, additionalPatterns,dirsOnly,asJson };
}

// Parse arguments and run tree
const { additionalFiles, additionalPatterns,dirsOnly,asJson } = parseArgs();
runTree(process.cwd(), additionalFiles, additionalPatterns,dirsOnly,asJson);
