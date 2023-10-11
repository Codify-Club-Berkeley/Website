# Codify Website

Currently deployed at [https://codifyberkeley.org/](https://codifyberkeley.org/)

## To Make Changes

1. Run the site locally to make sure everything is working as expected **>yarn start**
2. Push or merge updates into the master branch
3. Run **>npm run deploy** to build the site and publish it to GitHub Pages
4. **IMPORTANT** immediately after pushing the updates, go to settings -> pages -> Custom domain an update the domain to codifyberkeley.org
5. It may take a second to run a DNS check, but once that is done, visit the site live and make sure the updates are reflected.

## TypeScript and Tailwind

The website was initially created using vanilla css. For better overall maintainability, please write all future code using tailwind css.

## Branching Strategy:

Create a branch, make changes, and submit a pull request (PR) to the main branch.
PRs should include a clear title, description, and reference to the related issue.

Branch naming convention: When you create a branch from master, name it [initials_page/feature]. For example, `ES_home` or `ES_navbar`.

If the commit is related to an issue or pull request, include references to them: eg. "Fix #123" to indicate that the commit resolves the issue.

## Commit Messages:

Start with these key words:

1. "Added:" for adding new features or functionality.
2. "Fixed:" for bug fixes.
3. "Updated:" for general updates or improvements.
4. "Refactored:" for code refactoring without changing functionality.
5. "Docs:" for documentation updates.
6. "Tested:" for test-related changes.
7. "Styled:" for code style or formatting changes.
