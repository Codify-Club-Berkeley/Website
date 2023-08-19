# Codify Website

Currently deployed at [https://codifyberkeley.org/](https://codifyberkeley.org/)

## To Make Changes

1. Run the site locally to make sure everything is working as expected **>yarn start**
2. Push or merge updates into the master branch
3. Run **>npm run deploy** to build the site and publish it to GitHub Pages
4. **IMPORTANT** immediately after pushing the updates, go to settings -> pages -> Custom domain an update the domain to codifyberkeley.org
5. It may take a second to run a DNS check, but once that is done, visit the site live and make sure the updates are reflected.

## TypeScript and Tailwind

The website was initially created using vanilla javascript and vanilla css. For better overall maintainability, please write all future code using typescript and tailwind css.
