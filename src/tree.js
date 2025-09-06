const fs = require("fs");
const path = require("path");

/**
 * Reads .gitignore from the project root and returns a list of ignored files/folders.
 * Automatically adds '.git' to the ignore list.
 */
function getGitignoreList(startPath) {
  const gitignorePath = path.join(startPath, ".gitignore");
  let ignoreList = ['.git']; // always ignore .git

  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, "utf-8");
    const gitignoreItems = content
      .split("\n")
      .map(line => line.trim())
      .filter(line => line && !line.startsWith("#"));
    ignoreList = ignoreList.concat(gitignoreItems);
  }

  return ignoreList;
}

/**
 * Recursively prints the folder structure, ignoring items in ignoreList.
 */
function printTree(dirPath, prefix = "", ignoreList = []) {
  const items = fs.readdirSync(dirPath).filter(item => !ignoreList.includes(item));

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
  const ignoreList = getGitignoreList(startPath);
  console.log(startPath);
  printTree(startPath, "", ignoreList);
}

module.exports = { runTree };
