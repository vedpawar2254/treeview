# Treeview CLI
A simple CLI tool to print the current folder/project structure in a tree view. Perfect for developers who want a quick visual overview of their project directories.
 
## Features 
* Recursively prints all folders and files from the current directory.
* Easy to install and use.
* Lightweight with minimal dependencies.
* Ignores `.git` and files/folders in `.gitignore`
* Additional ignore options via CLI flags 
  * `--ignore-files`: Ignore specific files or directories
  * `--ignore-pattern`: Ignore files matching glob patterns
  * `--dirs-only` : Show only directories, no files.
  * `--as-json` : Show tree as a nested JSON object.
## Installation
Install as a dev dependency:
```bash
npm install --save-dev treeview-cli
```
---
## Usage
Run using `npx`:
```bash
npx treeview
```
Or add an npm script in your `package.json`:
```json
"scripts": {
  "treeview": "treeview"
}
```
Then run:
```bash
npm run treeview
```
## Command Line Options
### Ignore Specific Files
```bash
treeview --ignore-files temp.txt build/ dist/
```
### Ignore Files with Glob Patterns
```bash
treeview --ignore-pattern "*.log" "*.tmp" "test-*"
```
### Combine ignore options
```bash
treeview --ignore-files temp.txt --ignore-pattern "*.log" "*.tmp"
```
### Only Directories
```bash
treeview --dirs-only
```
### As JSON object
```bash
treeview --as-json
```

### Show Help
```bash
treeview --help
```
---
Example output (Visual Treeview):
```
/Users/ved/projects/my-app
├── src
│   ├── components
│   ├── pages
│   └── utils
├── public
└── tests
```
Example output (JSON Treeview):
```json
{
  "/Users/ved/projects/my-app": {
    "public": {},
    "src": {
      "components": {},
      "pages": {},
      "utils": {}
    },
    "tests": {}
  }
}
```
## Additional Options (for future versions) [TODO]
* `--depth <n>` : Limit recursion to n levels.

## Testing
### Setup
1. Ensure Node.js is installed on your system
2. Install dependencies:
```bash
npm install
```

### Running Tests
To run the test suite:
```bash
npm test
```

This will execute the test file using Node.js to verify the functionality of the treeview CLI tool.

## Contributing
Feel free to submit issues, feature requests, or pull requests.
PRs that add new features or improve the CLI are welcome!
## License
MIT
