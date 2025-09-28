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

### Combine Both Options

```bash
treeview --ignore-files temp.txt --ignore-pattern "*.log" "*.tmp"
```
### Only Directories

```bash
treeview --dirs-only
```
### Show Help

```bash
treeview --help
```

---

Example output:

```
/Users/ved/projects/my-app
├── src
│   ├── components
│   ├── pages
│   └── utils
├── public
└── tests
```

## Additional Options (for future versions) [TODO]

* `--depth <n>` : Limit recursion to n levels.
* `--json` : Output structure as JSON.

## Contributing

Feel free to submit issues, feature requests, or pull requests.
PRs that add new features or improve the CLI are welcome!

## License

MIT
