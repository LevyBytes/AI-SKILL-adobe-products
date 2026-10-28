# Getting started

**Requirements**

1. [NodeJS](https://nodejs.org/en) (>= v 14.20.0)
2. [Yarn](https://yarnpkg.com/getting-started/install) package manager
3. UXP Developer Tool (UDT)

**Build, then run**

1. Install the dependencies first with `yarn install`.
2. Build the Webpack bundle with `yarn build`. Afterward, a **dist** folder should be present.
3. (Optional) Use `yarn watch` to rebuild whenever a source file changes, and use `yarn start` to keep the plugin running while changes trigger automatic builds.

**Load the plugin into the application via UDT**

1. Confirm that the application is open and listed under 'Connected apps'.
2. Select the 'Add Plugin' button, then choose this plugin's `manifest.json`.
3. Set the plugin's `dist` folder through 'More' -> 'Advanced' in the action menu `•••`
4. Open the ••• menu for the matching plugin row. Choose 'Load' to display the plugin inside the application.
5. (Optional) Choose 'Watch' from plugin actions ••• so the newest plugin changes load dynamically. A manifest change still requires unloading and loading the plugin again.

In Photoshop, the loaded plugin should show a banner.
