# Treeview CLI

A simple CLI tool to print your project or folder structure in a clear tree view. Perfect for developers who want a quick visual overview of their directories.

---

## Features

* Recursively prints all folders and files from the current directory
* Easy to install and use
* Lightweight with minimal dependencies
* Automatically ignores `.git` and entries from `.gitignore`
* Flexible ignore options via CLI flags:

  * `--ignore-files` → Ignore specific files or directories
  * `--ignore-pattern` → Ignore files matching glob patterns
  * `--dirs-only` → Show only directories
  * `--as-json` → Output as a nested JSON object

---

## Installation

Install as a development dependency:

```bash
npm install --save-dev treeview-cli
```

---

## Usage

Run directly using `npx`:

```bash
npx treeview
```

Or add it to your `package.json` scripts:

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

## Command Line Options

### Ignore Specific Files or Folders

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

### Show Only Directories

```bash
treeview --dirs-only
```

### Output as JSON Object

```bash
treeview --as-json
```

### Show Help

```bash
treeview --help
```

---

## Example Output

### Visual Treeview

```
/Users/ved/projects/my-app
├── src
│   ├── components
│   ├── pages
│   └── utils
├── public
└── tests
```

### JSON Treeview

```json
{
  "path": "/Users/ved/projects/my-app",
  "name": "my-app",
  "type": "directory",
  "children": [
    {
      "path": "/Users/ved/projects/my-app/src",
      "name": "src",
      "type": "directory",
      "children": [
        {
          "path": "/Users/ved/projects/my-app/src/components",
          "name": "components",
          "type": "directory",
          "children": []
        },
        {
          "path": "/Users/ved/projects/my-app/src/pages",
          "name": "pages",
          "type": "directory",
          "children": []
        },
        {
          "path": "/Users/ved/projects/my-app/src/utils",
          "name": "utils",
          "type": "directory",
          "children": []
        }
      ]
    },
    {
      "path": "/Users/ved/projects/my-app/public",
      "name": "public",
      "type": "directory",
      "children": []
    },
    {
      "path": "/Users/ved/projects/my-app/tests",
      "name": "tests",
      "type": "directory",
      "children": []
    }
  ]
}

```

---

## Future Enhancements (TODO)

* `--depth <n>` : Limit recursion to n levels

---

## Contributing

Contributions are welcome.
Please feel free to submit issues, feature requests, or pull requests that improve the CLI or add new functionality.

---

## License

MIT License
