const fs = require("fs");
const path = require("path");

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
 * Merges with default ignores.
 */
function getIgnoreList(startPath) {
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

  
  return [...new Set(ignoreList)];
}

/**
 * Recursively prints the folder structure, ignoring items in ignoreList.
 */
function printTree(dirPath, prefix = "", ignoreList = []) {
  const items = fs
    .readdirSync(dirPath)
    .filter(item => !ignoreList.includes(item));

  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";

    console.log(prefix + pointer + item);

    if (fs.statSync(fullPath).isDirectory()) {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      printTree(fullPath, newPrefix, ignoreList);
    }
  });
}

/**
 * Main function to run the tree printer.
 */
function runTree(startPath = process.cwd()) {
  const ignoreList = getIgnoreList(startPath);
  console.log(startPath);
  printTree(startPath, "", ignoreList);
}

module.exports = { runTree };
