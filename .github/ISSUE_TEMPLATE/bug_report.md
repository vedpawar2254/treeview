name: 🐛 Bug Report
description: Report bugs to fix and improve Treeview CLI.
title: "[BUG] <short description>"

labels:
  - bug

body:
  - type: textarea
    id: description
    attributes:
      label: Describe the bug
      description: Provide a clear and concise explanation of the bug you encountered while using the Treeview CLI.
    validations:
      required: true

  - type: textarea
    id: expected_behavior
    attributes:
      label: Expected behavior
      description: Describe what you expected Treeview to do instead.
    validations:
      required: true

  - type: textarea
    id: actual_behavior
    attributes:
      label: Actual behavior
      description: Describe what actually happened when using Treeview CLI.
    validations:
      required: true

  - type: textarea
    id: steps_to_reproduce
    attributes:
      label: Steps to reproduce
      description: Provide step-by-step instructions or commands to reproduce the bug.
      value: |
        1. Run `npx treeview` on your project folder
        2. Observe the output
        3. Note any errors or unexpected behavior here
    validations:
      required: true

  - type: textarea
    id: environment
    attributes:
      label: 🖥️ Environment info (optional)
      description: Provide details about your system environment to help diagnose issues.
      value: |
        - Operating System (OS): e.g., macOS 13.5, Ubuntu 22.04, Windows 11
        - Node.js version: e.g., v18.16.1
        - npm version: e.g., 9.5.1
        - Terminal or shell used: e.g., zsh, bash, PowerShell
    validations:
      required: false

  - type: checkboxes
    id: duplicate_check
    attributes:
      label: "👀 Have you checked for similar open issues?"
      options:
        - label: "I have searched and did not find a similar issue"
          required: true

  - type: checkboxes
    id: read_docs
    attributes:
      label: "📚 Have you read the documentation?"
      options:
        - label: "I have read the [README](https://github.com/vedpawar2254/treeview/blob/main/README.md) and other docs"
          required: true

  - type: dropdown
    id: help_offer
    attributes:
      label: "Are you willing to help with a fix?"
      description: Your willingness to submit a pull request.
      options:
        - "Yes, I am willing to submit a PR"
        - "No, someone else can handle it"
