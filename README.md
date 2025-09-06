# Treeview CLI

A simple CLI tool to print the current folder/project structure in a tree view. Perfect for developers who want a quick visual overview of their project directories.

## Features

* Recursively prints all folders and files from the current directory.
* Easy to install and use.
* Lightweight and dependency-free.
* ignores `.git` and files/folders in `.gitignore`

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

## Options (for future versions)

* `--depth <n>` : Limit recursion to n levels.
* `--dirs-only` : Show only directories, no files.
* `--json` : Output structure as JSON.

## Contributing

Feel free to submit issues, feature requests, or pull requests.
PRs that add new features or improve the CLI are welcome!

## License

MIT

