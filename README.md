# Treeview CLI

A simple CLI tool to print the current folder/project structure in a tree view. Perfect for developers who want a quick visual overview of their project directories.

## Features

* Recursively prints all folders and files from the current directory.
* Easy to install and use.
* Lightweight and dependency-free.

## Installation

Globally:

npm install -g treeview-cli

Or as a dev dependency:

npm install -D treeview-cli

## Usage

Run the CLI in any folder to print its structure:

treeview

Example output:

`
/Users/ved/projects/my-app
├── src
│   ├── components
│   ├── pages
│   └── utils
├── public
└── tests
`

## Options (future enhancements)

* \--depth <n> : Limit recursion to n levels.
* \--dirs-only : Show only directories, no files.
* \--json : Output structure as JSON.

## Contributing

Feel free to submit issues, feature requests, or pull requests. PRs that add new features or improve the CLI are welcome!

## License

MIT

---

Do you want me to also provide the **MIT license in plain text** the same way?
