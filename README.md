
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
  yarn install
```

then run the frontend

```bash
  yarn start
```


## Deployment

1. Run the site locally to make sure everything is working as expected 
```bash
  yarn start
```

2. Push or merge updates into the master branch
3. To build the site and publish it to GitHub Pages run 
```bash
  npm run deploy
``` 
4. IMPORTANT immediately after pushing the updates, go to settings -> pages -> Custom domain an update the domain to codifyberkeley.org

5. It may take a second to run a DNS check, but once that is done, visit the site live and make sure the updates are reflected.




## Tech Stack

TailwindCSS: The website was initially created using vanilla css, but for better overall maintainability, please write all future code using TailwindCSS.

ReactJS: JavaScript library for building user interfaces.

React-Bootstrap: CSS framework of Bootstrap and replaces any existing JavaScript with strictly React components.

Material UI: any library of React UI components that implements Google's Material Design.


