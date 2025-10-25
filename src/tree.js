const fs = require("fs");
const path = require("path");
const { minimatch } = require("minimatch");

/**
 * Default ignore list (always skipped).
 */
const DEFAULT_IGNORES = [
  ".git",
  "node_modules",
  "__pycache__",
  ".DS_Store",
  "Thumbs.db"
];

/**
 * Reads .gitignore from the project root and returns a list of ignored files/folders.
 * Merges with default ignores and additional CLI-provided patterns.
 */
function getIgnoreList(startPath, additionalFiles = [], additionalPatterns = []) {
  let ignoreList = [...DEFAULT_IGNORES];

  const gitignorePath = path.join(startPath, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, "utf-8");
    const gitignoreItems = content
      .split("\n")
      .map(line => line.trim())
      .filter(line => line && !line.startsWith("#"));
    ignoreList = ignoreList.concat(gitignoreItems);
  }

  // Add additional files to ignore
  ignoreList = ignoreList.concat(additionalFiles);

  return {
    exactMatches: [...new Set(ignoreList)],
    globPatterns: additionalPatterns
  };
}

/**
 * Checks if an item should be ignored based on exact matches and glob patterns.
 */
function shouldIgnoreItem(item, ignoreConfig) {
  // Check exact matches
  if (ignoreConfig.exactMatches.includes(item)) {
    return true;
  }

  // Check glob patterns
  return ignoreConfig.globPatterns.some(pattern => {
    try {
      return minimatch(item, pattern);
    } catch (error) {
      // If pattern is invalid, treat as exact match
      return item === pattern;
    }
  });
}

/**
 * Recursively prints the folder structure, ignoring items based on ignoreConfig.
 * If dirsOnly is true, files will be skipped.
 */
function printTree(
  dirPath,
  prefix = "",
  ignoreConfig = { exactMatches: [], globPatterns: [] },
  dirsOnly = false
) {
  let items = fs
    .readdirSync(dirPath)
    .filter(item => !shouldIgnoreItem(item, ignoreConfig));
  // If dirsOnly, filter out files
  if (dirsOnly) {
    items = items.filter(item => {
      const fullPath = path.join(dirPath, item);
      return fs.statSync(fullPath).isDirectory();
    });
  }

  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";

    console.log(prefix + pointer + item);

    if (fs.statSync(fullPath).isDirectory()) {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      printTree(fullPath, newPrefix, ignoreConfig, dirsOnly);
    }
  });
}


/**
 * Recursively stores the folder structure in nested json object, ignoring items based on ignoreConfig.
 * If dirsOnly is true, files will be skipped.
 */
function printTreeAsJson(
  dirPath,
  ignoreConfig = { exactMatches: [], globPatterns: [] },
  dirsOnly = false,
  jsonTree = {}
  
) {
  let items = fs
    .readdirSync(dirPath)
    .filter(item => !shouldIgnoreItem(item, ignoreConfig));
  // If dirsOnly, filter out files
  if (dirsOnly) {
    items = items.filter(item => {
      const fullPath = path.join(dirPath, item);
      return fs.statSync(fullPath).isDirectory();
    });
  }

  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    if (fs.statSync(fullPath).isDirectory()) {
      jsonTree[item]=printTreeAsJson(fullPath, ignoreConfig, dirsOnly,{});
    }else{
      jsonTree[item]="FILE"
    }
  });
  return jsonTree;
}


/**
 * Main function to run the tree printer.
 */
function runTree(
  startPath = process.cwd(),
  additionalFiles = [],
  additionalPatterns = [],
  dirsOnly = false,
  asJson = false
) {
  const ignoreConfig = getIgnoreList(startPath, additionalFiles, additionalPatterns);
  if (asJson){
    console.log(JSON.stringify(  {[startPath]:printTreeAsJson(startPath, ignoreConfig, dirsOnly)}  ,null  , 4))
  }
  else{
    console.log(startPath);
    printTree(startPath, "", ignoreConfig, dirsOnly);
  }
}

module.exports = { runTree };
