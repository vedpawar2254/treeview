const fs = require("fs");
const path = require("path");

function printTree(dirPath, prefix = "") {
  const items = fs.readdirSync(dirPath);

  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";

    console.log(prefix + pointer + item);

    if (fs.statSync(fullPath).isDirectory()) {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      printTree(fullPath, newPrefix);
    }
  });
}

module.exports = { printTree };
