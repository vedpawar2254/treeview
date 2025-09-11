name: 💡 Feature Request
description: Suggest a new idea or feature to improve Treeview CLI.
title: "[FEATURE] <short description>"

labels:
  - enhancement

body:
  - type: textarea
    id: need_improvement
    attributes:
      label: Why do we need this improvement?
      description: Describe the problem or limitation the current Treeview CLI has that justifies this feature.
    validations:
      required: true

  - type: textarea
    id: change
    attributes:
      label: How will this change help?
      description: Explain how this new feature would benefit users or improve the Treeview CLI experience.
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots or examples (optional)
      description: Add any screenshots, mockups, or example commands that illustrate the feature.
    validations:
      required: false

  - type: textarea
    id: implemented
    attributes:
      label: How could it be implemented or designed?
      description: Share your thoughts or suggestions on how this feature could be built or integrated.
    validations:
      required: true

  - type: dropdown
    id: breakingchange
    attributes:
      label: "🚧 Will this feature introduce breaking changes?"
      description: "Could this feature break backward compatibility or change existing behavior?"
      options:
        - "Yes"
        - "No"
    validations:
      required: true

  - type: checkboxes
    id: duplicate_check
    attributes:
      label: "👀 Have you checked for similar open issues?"
      options:
        - label: "I have searched and did not find an existing feature request"
          required: true

  - type: checkboxes
    id: read_docs
    attributes:
      label: "📚 Have you read the documentation?"
      options:
        - label: "I have reviewed the [README](https://github.com/namanjain24-sudo/treeview#readme) and other docs"
          required: true

  - type: dropdown
    id: help_offer
    attributes:
      label: "Are you willing to help implement this feature?"
      description: "Your willingness to contribute a pull request."
      options:
        - "Yes, I am willing to submit a PR"
        - "No, someone else can work on it"
