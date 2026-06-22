# Jszip Sample, Layer Creation Js Sample, Oauth Workflow Sample, Secure Storage Sample ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: JSZip Sample; Starter Photoshop Plugin (Vanilla); How to Integrate with OAuth; Secure Storage Sample; UXP Plugin with Spectrum Web Component in React context; UXP Plugin with Spectrum Web Component; Cross-Compatible JS Sample; Photoshop TypeScript / Webpack Sample; uxp-ui-kitchen-sink-plugin; Photoshop UXP Playground Plugin; React Starter Plugin; Svelte Starter Plugin; Vue Starter Plugin; Unsplash Images Plugin Sample — What does it do?; Unsplash Images Plugin Sample.

## JSZip Sample

Use this sample as a starting point for an Adobe Photoshop plugin that uses JSZip. The project already declares the dependencies needed for the initial setup. Because the sample is built with Webpack, it needs a small amount of configuration before Adobe Photoshop can run it.

### Build Process

Build the plugin for Adobe Photoshop with either of these workflows:

- `yarn watch` or `npm run watch` creates a development build, watches source-file edits, and recompiles after each change. The output goes into `dist`.
- `yarn build` or `npm run build` creates the production build and writes it to `dist`. It does not refresh automatically when source files change.

> Run either `watch` or `build` before trying to use the plugin in Photoshop.

### Launching in Photoshop

Load this plugin into Photoshop through the UXP Developer Tools.

When the plugin is not yet present in the UXP Developer Tools workspace, add it with "Add Plugin..." and choose `dist/manifest.json`. **DO NOT** choose the `manifest.json` file under the `plugin` folder.

After it appears in the workspace, use the â€¢â€¢â€¢ button in that plugin row and select "Load". Return to Photoshop, where the starter panel should appear.

### What this plugin does

This plugin demonstrates JSZip working with Photoshop through several practical examples. `IMPORT ZIP FILE` imports a `zip` file containing images and opens those images automatically. `EXPORT ARTBOARDS AS ZIP` exports every artboard in a Photoshop project into one `zip` file. `SAVE FILES TO ZIP` lets you choose any number of files and write them into a `zip` file.

## Starter Photoshop Plugin (Vanilla)

This sample plugin adds a text layer to the active document, then places text in that layer. The text source can be either a plugin-panel input field or a file.

## How to Integrate with OAuth

This tutorial walks through adding an OAuth workflow to an XD plugin, with the Dropbox API used as the example service.

> **info**
> Authentication flows involve several moving pieces, so this guide is longer and uses some advanced ideas. Read each section closely, particularly Prerequisites and Configuration.

### Prerequisites

- HTML, CSS, and JavaScript basics.
- [Quick Start Tutorial](https://raw.githubusercontent.com/develop/tutorials/quick-start/)
- [Debugging Tutorial](https://raw.githubusercontent.com/develop/tutorials/debugging/)
- Ability to work in your operating system's command-line app
- General understanding of [OAuth](https://oauth.net/2/)
- [A registered app on Dropbox](https://www.dropbox.com/developers/apps/create) configured with these settings:

  1.  Choose "Dropbox API"
  1.  Choose "Full Dropbox" for the access type

### Technology Used

1. Install [Node.js](https://nodejs.org/en/) and use [`npm`](https://www.npmjs.com) for package management
1. [OAuth](https://oauth.net/2/)
1. [Dropbox API](https://www.dropbox.com/developers/documentation/http/overview)

### Overview of the OAuth workflow

The workflow has three cooperating pieces:

- The Photoshop plugin
- The server endpoints; in this development example, the server is a local Node.js instance
- The service providers OAuth endpoints; for this example, those endpoints come from the Dropbox API

At a high level, the flow works like this:

1. The Photoshop plugin contacts the server to request the session ID
1. The server replies with a unique ID for that Photoshop session
1. The plugin opens a tab in the user's default browser and points it to a server endpoint URL
1. The server performs the full OAuth code grant workflow
1. The user grants the plugin the required permissions
1. The server stores the access token together with the session ID
1. The plugin polls the server for the session ID until the access token is ready. When it is available, the server returns the access token
1. The plugin calls the service API with the access token

### Configuration

Use these steps to get the sample code from the GitHub repo configured and running.

### 1. Add Node.js dependencies

The sample repo includes a `package.json` dependency list inside the `server` folder. From the repo's top-level directory, install those dependencies with:

```bash
$ cd server
$ npm install
```

### 2. Configure API credentials and the public URL

Put the needed credential values in `public/config.js`. Provide:

- Dropbox API key
- Dropbox API secret
- Public `ngrok` URL

```js
const dropboxApiKey = "YOUR-DROPBOX-API-KEY";
const dropboxApiSecret = "YOUR-DROPBOX-SECRET";
const publicUrl = "http://localhost:8000";

try {
  if (module) {
    module.exports = {
      dropboxApiKey: dropboxApiKey,
      dropboxApiSecret: dropboxApiSecret,
      publicUrl: publicUrl,
    };
  }
} catch (err) {
  console.log(err);
}
```

A later step uses these settings from the server.

### 3. Launch the server

With the configuration complete, launch the server from the `server` folder:

```
$ npm start
```

At this point, the server is running with an HTTPS endpoint, and the Dropbox credentials are available.

### 4. Start the plugin

Open the plugin in Photoshop, then click **Connect OAuth** to start it.

## Secure Storage Sample

This minimal plugin example stores a value through the SecureStorage UXP API. Running the plugin does not require any build step.

## UXP Plugin with Spectrum Web Component in React context

Use this starter to build a **React** based UXP plugin with Spectrum Web Component (SWC). It covers project setup, SWC component integration, and mounting the result in the Photoshop host application.

### Documentation

- [SWC in UXP](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc)
- [Adobe's list of SWC](https://opensource.adobe.com/spectrum-web-components/index.html)

### Getting started

**Requirements**

1. [NodeJS](https://nodejs.org/en) (>= v 16.0.0)
2. [Yarn](https://yarnpkg.com/getting-started/install) package manager
3. UXP Developer Tool (UDT)
4. UXP >= 7.2

**Build, then run**

1. Install the dependencies first with `yarn install`.
2. Build the Webpack bundle with `yarn build`. Afterward, a **dist** folder should be present.
3. (Optional) Use `yarn watch` to rebuild whenever a source file changes, and use `yarn start` to keep the plugin running while changes trigger automatic builds.

**Load the plugin into the application via UDT**

1. Confirm that the application is open and listed under 'Connected apps'.
2. Select the 'Add Plugin' button, then choose this plugin's `manifest.json`.
3. Set the plugin's `dist` folder through 'More' -> 'Advanced' in the action menu `â€¢â€¢â€¢`
4. Open the â€¢â€¢â€¢ menu for the matching plugin row. Choose 'Load' to display the plugin inside the application.
5. (Optional) Choose 'Watch' from the plugin actions â€¢â€¢â€¢ so the newest plugin changes load dynamically. A manifest change still requires unloading and loading the plugin again.

In Photoshop, the loaded plugin should show a banner.

### Add a new component

Use supported components from the [SWC component reference](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc) with this sequence:

1. Install each component and its supported version with `yarn add`.

```javascript
yarn add @swc-uxp-wrappers/link;
yarn add @swc-react/link@0.14.1-react.3029;
```

**Note:** UXP-SWC components ship as wrappers around particular SWC versions. For example, `@swc-uxp-wrappers/menu` is pinned to a wrapper for version **0.16.9** of `@spectrum-web-components/menu`. For React, include `@swc-react/menu:0.16.9-react.3029` too, because that React wrapper is the nearest match to SWC component version (0.16.9) in the dependency block. Components such as `icons`,`icons-workflow`, `icons-ui`, `theme`, `shared` , `base`,`styles` have no wrappers, so install those packages straight from npm under `@spectrum-web-components`.

2. In the `App.js` file, register the component.

```javascript

```

3. Place the component in that same file.

```html
   This is a <Link href="#">example link</Link>.
```

4. Add alias configuration to the webpack config file. This project already includes that configuration. In package.json, notice the `@swc-uxp-wrappers/utils` entry. That package provides the `alias.js` file for all supported components, and `webpack.config.js` imports it like this.

```

```

5. Run `yarn build` to create the distribution bundle.
   `yarn watch` can also rebuild the bundle whenever source files are saved. Pair it with Plugin -> Watch in UDT so the latest changes sync automatically.

### Deep dive

With the plugin running, the next sections describe the project details.

### webpack.config.js

Webpack bundles the project dependencies, so the project includes webpack.config.js for the basic configuration.

The package.json file includes `@swc-uxp-wrappers/utils`; the project uses it for [aliasing](https://webpack.js.org/configuration/resolve/#resolvealias) through a mapping. Removing this aliasing lets the same plugin run on the web too.

```
       resolve: {
            extensions: ['.js', '.json'],
            alias: aliases,
        }
```

Pro tip: To debug more easily, add `eval-cheap-source-map` in the webpack.config file so the UDT debug window receives the source map.

```javascript
devtool: "eval-cheap-source-map";
```

### .babelrc

This config file is for the `babel` library, which transpiles code, especially JSX syntax, to fit the target environment.

### package.json

After adding a component with `yarn add`, the component should appear under 'dependencies'.

### manifest.json

Set **enableSWCSupport** to true to turn on SWC.

```
"featureFlags": {
   "enableSWCSupport": true
}
```

### src/index.js

This file is the project's entry point.

Wrap the components in a `Theme` component. That wrapper supplies Spectrum design tokens inside the scoped context used by the HTML.

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);

```

### **src/index.html**

React app index.js enters the HTML structure here.

### **src/App.js**

The main React component is the root for the component tree. This file is another valid place for a `Theme` wrapper.

```
function App() {
  return (
    <div>
      <h1>Welcome</h1>
        <br />
        This is an <Link href="#">example link</Link>.
    </div>
  );
}

```

## UXP Plugin with Spectrum Web Component

Use this starter to create a UXP plugin based on Spectrum Web Component (SWC). It covers project setup, SWC component integration, and mounting in host applications such as Photoshop.

### Getting started

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
3. Set the plugin's `dist` folder through 'More' -> 'Advanced' in the action menu `â€¢â€¢â€¢`
4. Open the â€¢â€¢â€¢ menu for the matching plugin row. Choose 'Load' to display the plugin inside the application.
5. (Optional) Choose 'Watch' from plugin actions â€¢â€¢â€¢ so the newest plugin changes load dynamically. A manifest change still requires unloading and loading the plugin again.

In Photoshop, the loaded plugin should show a banner.

### Add a new component

Use supported components from the [SWC component reference](https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc) with this sequence:

1. Install each component and its supported version with `yarn add`.

```javascript
yarn add @swc-uxp-wrappers/link@1.0.0;
```

**Note:** UXP-SWC components ship as wrappers around particular SWC versions. For example, `@swc-uxp-wrappers/banner` is pinned to a wrapper for version **0.9.2** of `@spectrum-web-components/banner`. Install the newest `swc-uxp-wrappers`, and add the recommended SWC component version, such as 0.9.2, to the resolutions block too. Components such as `icons`, `icons-workflow`, `icons-ui`, `theme`, `shared`, `base`, `styles` have no wrappers, so install them with npm.

2. Import the component in `index.js` file. Choose one of two methods:

   a. Use `@swc-uxp-wrappers` as the import source

   ```javascript

   ```

   b. Use `@spectrum-web-components` for the import, with aliasing configured in the webpack.conf.js file.

   ```javascript

   ```

   Deep Dive describes the webpack.conf.js alias that maps `@swc-uxp-wrappers` to `@spectrum-web-components`. With that approach, the plugin remains cross-platform compatible; i.e, remove the aliasing and the plugin can run on Web as well.

3. Put the component markup into the HTML document.

   ```html
   This is an <sp-link href="#">example link</sp-link>.
   ```

4. Use `yarn build` to create the distribution bundle.
   `yarn watch` can also rebuild the bundle whenever source files are saved. Pair it with Plugin -> Watch in UDT so the latest changes sync automatically.

### Deep dive

With the plugin running, the details are next.

### webpack.config.js

Webpack bundles the project dependencies, so the project includes the webpack.config.js file for the basic configuration.

The project installs `@swc-uxp-wrappers/utils` in package.json and uses it for [aliasing](https://webpack.js.org/configuration/resolve/#resolvealias) by mapping. Removing this aliasing lets the same plugin run on web too.

```
       resolve: {
            extensions: ['.js', '.json'],
            alias: aliases,

        }
```

Pro tip: To debug more easily, add `eval-cheap-source-map` in the webpack.config file so the UDT debug window receives the source map.

```javascript
devtool: "eval-cheap-source-map";
```

### package.json

After adding a component with `yarn add`, the components should appear under 'dependencies'.

To resolve transitive dependencies, use [force resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/). Include all dependencies in the `resolutions` block as well to avoid incompatibility issues in sub components.

### manifest.json

Set **enableSWCSupport flag** to true to turn on SWC.

```
"featureFlags": {
   "enableSWCSupport": true
}
```

### src/index.html

This file includes index.js.

Note that `<sp-theme>` wraps the SWC components. Spectrum design tokens are delivered into that scoped HTML context.

### src/index.js

Bring in the components and themes so styling is applied correctly.

```javascript
//sp-theme
//themes to use classic and spectrum themes
```

### Troubleshooting

When the console reports this failure, try the checks below to clear it.

```
Failed to execute 'define' on 'CustomElementRegistry': the name "sp-icon-alert" has already been used with this registry
```

The usual cause is dependency resolution bringing in duplicate copies of a component, such as `sp-icon-alert`. Troubleshoot it this way:

- Confirm that `index.js` is not being invoked more than once by accident.
- Inspect `package.json` and verify the component is present in the resolutions block when needed.
- Use the recommended package version exactly, without the `^` prefix.

## Cross-Compatible JS Sample

Use this as a starting sample for building an Adobe Photoshop plugin with [Tailwind CSS](https://tailwindcss.com/).

### Run Sample

After moving your terminal to this project's root directory, launch it with the matching package manager.

For `yarn`:

```
yarn start
```

For `npm`:

```
npm start
```

## Photoshop TypeScript / Webpack Sample

This sample starts from the UXP Developer Tool "Starter Photoshop Plugin (Vanilla)" template and demonstrates Photoshop plugin work with TypeScript, webpack, and the `@types/photoshop` TypeScript definitions.

### Building the plugin

From the plugin folder, the one that includes `package.json`, install dependencies with:

```shell
npm install
```

or

```shell
yarn install
```

Next, generate the plugin's `dist/index.js`, which is loaded by `index.html`, with:

```shell
npm run build
```

or

```shell
yarn build
```

Behind that command, `webpack` compiles `src/index.ts` into `dist/index.js`.

Once the build is complete, load the plugin into Photoshop through the UXP Developer Tool:

## uxp-ui-kitchen-sink-plugin

Kitchen Sink plugin demonstrating UI elements

## Photoshop UXP Playground Plugin

This plugin makes UXP layout testing easier by letting you try simple HTML layouts inside Photoshop. Install it, link it into the Photoshop plugin directory, load it through File > Scripts > Load UXP Extension..., or use the developer tools.

> **Note:**
>
> To skip the build step, load the plugin directly from the `dist` folder. That folder contains a prebuilt copy.

### Usage

[Figure: Screenshot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/ui-playground/_assets/screenshot.png)

Two panels are included. Use "Edit HTML Playground" to change the HTML, then use "Run HTML Playground" to view the output.

The editor can switch among HTML, Styles, and JS modes from the dropdown in the panel's upper-left corner. In JavaScript mode, turn on "auto-run" or press the "Play" button to execute the snippet. Errors appear below the editor.

> **Note**
>
> JavaScript runs inside a function that receives the preview panel root node, named `rootNode`. That lets you keep your JS scoped to the preview panel.

Use the two buttons at the plugin's top right to copy editor text to the clipboard or paste clipboard text into the editor. Use the "paste" button carefully because it **replaces** the full editor contents.

"Run HTML Playground" displays a live preview of the HTML in a separate panel. Keeping editor and preview open together lets you watch edits update while you type.

### About

The UI is rendered with React, and React Portals are used to coordinate multiple panels. For implementation cues, study how the app uses `PanelController` with UXP events so each panel mounts in the correct place.

Portals are not required for managing several panels, but this approach can make the structure easier to reason about.

UXP v4.0 is covered by the current manifest in this version; the earlier manifest is kept as `manifest.v3.json` for comparison.

Handling `onChange` events on web components is another behavior shown here. Because React does not forward that event for web components, Spectrum UXP components can seem unresponsive unless you attach the listener directly. This is a known React issue that has not yet been fixed. See the `WC` component for a wrapper that might fit your project.

## React Starter Plugin

Use this React starter as a foundation for a Photoshop plugin. It already includes the dependencies needed for the first setup pass. Because it is a React project, some configuration is required before Photoshop can use it.

### What this plugin does

Although the plugin is minimal, it shows two Photoshop panels built with `entrypoints.setup`, along with flyout menu creation. The primary panel also uses several Spectrum UXP widgets for a simple color picker.

## Svelte Starter Plugin

Use this Svelte starter as the foundation for a Photoshop plugin. Required starter dependencies are already defined. Because it is a Svelte project, complete the initial configuration before using it in Photoshop.

### Build Process

Photoshop-ready builds can be produced in two modes:

- `yarn watch` or `npm run watch` creates a development build, writes it to `dist`, and recompiles whenever source files change.
- `yarn build` or `npm run build` creates a production build in `dist`; it does not rebuild automatically after source changes.

> Before attempting to use the plugin in Photoshop, run either `watch` or `build`.

### What this plugin does

This small plugin demonstrates a Photoshop panel created with `entrypoints.setup`; a basic Svelte component displays how many seconds have elapsed since launch.

## Vue Starter Plugin

Vue 3 variant:
https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-vue-starter
Composition API is used here rather than the Options API

### What this plugin does

This minimal plugin shows a Photoshop panel created with `entrypoints`, displaying a button click count together with a hello world message.

## Vue Starter Plugin

Use this Vue JS starter as the base for an Adobe Photoshop plugin. It includes the dependencies needed to begin. Since it is a Vue project, finish the initial setup before loading it in Adobe Photoshop.

## Unsplash Images Plugin Sample — What does it do?

This Photoshop sample lets the plugin window search Unsplash, present the top 10 image results in a grid, and save chosen images locally through the download button.

### Unsplash Images Plugin Sample — How to run the project?

The project is split into two main pieces:

1. Plugin
2. Server

Set them up separately. For the plugin setup, see [README](sample-jszip-sample.md). For the server setup, see [README](sample-jszip-sample.md).

### Unsplash Images Plugin Sample — Sample Preview

Sample preview:
https://drive.google.com/file/d/16E142uYx6zQhPgACU-LbqZwSycffzVFQ/preview

## Unsplash Images Plugin Sample

Use these steps to configure the plugin.

### Install dependencies

Start in this project's `plugin` folder before installing packages. Use:

```bash
cd /uxp-photoshop-plugin-samples/unsplash-plugin-sample/plugin
```

With `yarn`, install the dependency set by running:

```
yarn install
```

With `npm`, install the dependency set by running:

```
npm install
```

### Environment Variables Setup

Create a `.env` file and put every required variable in it. The [.env.sample](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/unsplash-plugin-sample/plugin/.env.sample) file shows the expected values. Add the variables:

```sh
{
        echo 'API_BASE_URL=http://localhost:8000'

} >> .env
```

`API_BASE_URL` points to the URL for the hosted backend.

## Unsplash Images Plugin Sample

Use these steps to prepare the plugin's server side.

### Install dependencies

Start in this project's `plugin` folder before installing packages. Use:

```bash
cd /uxp-photoshop-plugin-samples/unsplash-plugin-sample/server
```

With `yarn`, install the dependency set by running:

```
yarn install
```

With `npm`, install the dependency set by running:

```
npm install
```

### Environment Variables Setup

Create a `.env` file and put every required variable in it. The [.env.sample](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/unsplash-plugin-sample/server/.env.sample) file shows the expected values. Add the variables:

```sh
{
        echo 'PORT=8000'
        echo 'UNSPLASH_ACCESS_KEY='

} >> .env
```

`PORT` sets the port used by the local API server.

Generate `UNSPLASH_ACCESS_KEY` from the Unsplash Developers panel. Begin by creating an Unsplash developer account. In the navbar, choose `Your Apps`, then click `Create a new application`.
After the application is created, open its `Keys` section and copy the `ACCESS_KEY`.

### Starting The Project

Start the server with this command.

```
npm start
```
