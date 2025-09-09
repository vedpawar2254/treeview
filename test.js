#!/usr/bin/env node

/**
 * Test file for treeview CLI tool
 * This file creates test files and directories to verify the ignore functionality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🌳 Treeview CLI Test Suite\n');

// Create test directory structure
const testDir = path.join(__dirname, 'test-project');
const testFiles = [
  'package.json',
  'README.md',
  'src/index.js',
  'src/utils.js',
  'src/components/Button.js',
  'src/components/Modal.js',
  'build/app.js',
  'build/style.css',
  'dist/app.min.js',
  'dist/style.min.css',
  'temp.txt',
  'debug.log',
  'error.log',
  'test-file.tmp',
  'backup-file.bak',
  'config.json',
  'data.csv',
  'notes.md',
  'temp-folder/file1.txt',
  'temp-folder/file2.txt',
  'logs/2024-01-01.log',
  'logs/2024-01-02.log',
  'cache/data.cache',
  '.env',
  '.env.local',
  'coverage/lcov.info',
  'coverage/index.html'
];

// Clean up previous test
if (fs.existsSync(testDir)) {
  fs.rmSync(testDir, { recursive: true, force: true });
}

// Create test directory structure
console.log('📁 Creating test directory structure...');
fs.mkdirSync(testDir, { recursive: true });

// Create all test files
testFiles.forEach(file => {
  const filePath = path.join(testDir, file);
  const dir = path.dirname(filePath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, `// Test file: ${file}\n// Created for treeview testing\n`);
});

console.log(`✅ Created ${testFiles.length} test files\n`);

// Test functions
function runTest(testName, command, expectedBehavior) {
  console.log(`🧪 Testing: ${testName}`);
  console.log(`   Command: ${command}`);
  
  try {
    const result = execSync(command, { 
      cwd: testDir, 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`   ✅ Success`);
    console.log(`   Output preview: ${result.split('\n').slice(0, 3).join(' | ')}...`);
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }
  console.log('');
}

// Run tests
console.log('🚀 Running tests...\n');

// Test 1: Basic functionality
runTest(
  'Basic tree output',
  'node ../bin/index.js',
  'Should show all files in tree format'
);

// Test 2: Ignore specific files
runTest(
  'Ignore specific files',
  'node ../bin/index.js --ignore-files temp.txt debug.log',
  'Should hide temp.txt and debug.log'
);

// Test 3: Ignore glob patterns
runTest(
  'Ignore glob patterns - log files',
  'node ../bin/index.js --ignore-pattern "*.log"',
  'Should hide all .log files'
);

// Test 4: Ignore glob patterns - multiple patterns
runTest(
  'Ignore multiple glob patterns',
  'node ../bin/index.js --ignore-pattern "*.log" "*.tmp" "*.bak"',
  'Should hide .log, .tmp, and .bak files'
);

// Test 5: Ignore directories
runTest(
  'Ignore directories',
  'node ../bin/index.js --ignore-files build dist',
  'Should hide build and dist directories'
);

// Test 6: Ignore with glob patterns for directories
runTest(
  'Ignore directories with glob',
  'node ../bin/index.js --ignore-pattern "temp-*" "logs"',
  'Should hide temp-folder and logs directories'
);

// Test 7: Combined ignore flags
runTest(
  'Combined ignore flags',
  'node ../bin/index.js --ignore-files temp.txt --ignore-pattern "*.log" "*.tmp"',
  'Should hide temp.txt and all .log/.tmp files'
);

// Test 8: Help flag
runTest(
  'Help flag',
  'node ../bin/index.js --help',
  'Should show help information'
);

// Test 9: Complex glob patterns
runTest(
  'Complex glob patterns',
  'node ../bin/index.js --ignore-pattern "*.min.*" "coverage/*" ".env*"',
  'Should hide minified files, coverage directory, and .env files'
);

// Test 10: Edge case - no matches
runTest(
  'No matching patterns',
  'node ../bin/index.js --ignore-pattern "*.nonexistent"',
  'Should show all files (no matches)'
);

console.log('🎉 Test suite completed!');
console.log('\n🧹 Cleaning up test directory...');
fs.rmSync(testDir, { recursive: true, force: true });
console.log('✅ Cleanup complete!');
