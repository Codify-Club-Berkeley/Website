
# Codify Website

A static website that provides information to potential Codify members and clients.

Currently deployed at https://codifyberkeley.org/




## Contributing

Contributions are always welcome!

**Branching Strategy:**
Create a branch, make changes, and submit a pull request (PR) to the main branch. PRs should include a clear title, description, and reference to the related issue.

**Branch naming convention**: When you create a branch from master, name it [initials_page/feature]. For example, ES_home or ES_navbar.

If the commit is related to an issue or pull request, include references to them: eg. "Fix #123" to indicate that the commit resolves the issue.

## Run Locally

To start, install all dependencies locally
```bash
  bun install
```

then run the frontend

```bash
  bun start
```


## Tech Stack

TailwindCSS: The website was initially created using vanilla css, but for better overall maintainability, please write all future code using TailwindCSS.

ReactJS: JavaScript library for building user interfaces.

React-Bootstrap: CSS framework of Bootstrap and replaces any existing JavaScript with strictly React components.

Material UI: any library of React UI components that implements Google's Material Design.


## TASK LIST
Any new tasks will be added below for simplicity ranked by priority e.g. 1 (most important)... nth task (least important, n denoting # of tasks).

1. Convert jsx files to tsx files
2. Combine new tsx (formerly jsx in task above) files with css files using TailwindCSS
3. Remove any unused Files/Components
