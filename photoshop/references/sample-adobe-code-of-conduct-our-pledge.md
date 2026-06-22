# .Github, Readme, Cross Compatible Js Sample, Desktop Helper Sample ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adobe Code of Conduct — Our Pledge; Contributing; Plugin Samples; Cross-Compatible JS Sample; Desktop Helper Example; Starter Photoshop Plugin (Vanilla); Firebase Integration Plugin; UXP Invisible Plugin Sample; Websocket Example.

## Adobe Code of Conduct — Our Pledge

To support an open, welcoming project environment, contributors and maintainers commit to keeping participation in the project and community free from harassment for everyone. That commitment applies regardless of age, body size, disability, ethnicity, gender identity and expression, experience level, nationality, personal appearance, race, religion, sexual identity, or sexual orientation.

### Adobe Code of Conduct — Our Standards

Behavior that helps create a positive environment includes:

- Using language that is welcoming and inclusive
- Respecting different viewpoints and lived experiences
- Accepting constructive criticism with grace
- Prioritizing what serves the community best
- Showing empathy toward other community members

Participant behavior that is not acceptable includes:

- Sexualized language or imagery, plus unwelcome sexual attention or advances
- Trolling, insulting or derogatory remarks, and personal or political attacks
- Harassment in public or private spaces
- Publishing another person's private information, including a physical or electronic address, without explicit permission
- Other behavior that could reasonably be viewed as inappropriate in a professional setting

### Adobe Code of Conduct — Our Responsibilities

Project maintainers must clarify acceptable behavior standards and should respond to unacceptable behavior with corrective action that is appropriate and fair.

Maintainers are authorized and responsible for removing, editing, or rejecting comments, commits, code, wiki edits, issues, and other contributions that conflict with this Code of Conduct. They may also apply a temporary or permanent ban to a contributor for other conduct they consider inappropriate, threatening, offensive, or harmful.

### Adobe Code of Conduct — Scope

The Code of Conduct governs behavior inside project spaces and also in public spaces when someone is acting on behalf of the project or its community. Representation can include using an official project e-mail address, posting through an official social media account, or serving as an appointed representative at an online or offline event. Project maintainers may define and clarify additional cases where project representation applies.

### Adobe Code of Conduct — Enforcement

Report abusive, harassing, or otherwise unacceptable conduct to the project team at Grp-opensourceoffice@adobe.com. Each complaint will be reviewed and investigated, and the response will match what the team considers necessary and appropriate for the circumstances. The project team must keep the incident reporter's identity confidential. Separate materials may provide more specific enforcement-policy details.

Project maintainers who fail to follow or enforce the Code of Conduct in good faith can receive temporary or permanent consequences, as determined by other members of the project's leadership.

### Adobe Code of Conduct — Attribution

The [Contributor Covenant][homepage], version 1.4, is the basis for this Code of Conduct; see [http://contributor-covenant.org/version/1/4][version].

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

## Contributing

Thank you for contributing.

Use these guidelines when contributing to this project.

### Code Of Conduct

This project follows the Adobe [code of conduct](sample-adobe-code-of-conduct-our-pledge.md). Participation means agreeing to honor that code. Send reports about unacceptable conduct to [Grp-opensourceoffice@adobe.com](mailto:Grp-opensourceoffice@adobe.com).

### Have A Question?

Begin by opening an issue. Existing committers work toward consensus on project direction and issue resolutions inside issue threads when that venue is appropriate.

### Contributor License Agreement

Any third-party contribution to this project must include a signed contributor license agreement. Through that agreement, Adobe may redistribute submitted work with the project. [Sign our CLA](http://opensource.adobe.com/cla.html). An Adobe CLA only needs to be submitted once; if you have already completed one, no further CLA action is required.

### Code Reviews

Send submissions as pull requests so project committers can review them. For pull-request submission details, use [GitHub documentation](https://help.github.com/articles/about-pull-requests/).

When submitting a pull request, follow the [pull request template](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/.github/`PULL_REQUEST_TEMPLATE`.md).

### From Contributor To Committer

Community contributions are welcome. To move beyond contributor status and become a committer with full write access plus a voice in the project, you need an invitation to the project. Existing committers use an internal nomination process that requires lazy consensus (silence is approval) before invitations are sent. If you believe you qualify and want deeper involvement, contact existing committers to discuss it.

### Security Issues

Do not report security issues in this issue tracker. Instead, use the [Adobe security issue page](https://helpx.adobe.com/security/alertus.html) to contact the security experts.

## Plugin Samples

This repository provides sample Photoshop plugins for learning and starting plugin work. Use the samples to study how UXP plugins are built for Photoshop.

### Samples list

**When you add another sample to the repo, you may include it in this list.**

| Extension | Main APIs Used | Description | Minimum Version |
| --- | --- | --- | --- |
| cross-compatible-js-sample | Spectrum UXP, BatchPlay, XD Scenegraph, Cross Compatibility | Demonstrates bundling a plugin that is compatible for both PS and XD development | UXP 4.1 / PS 22.0.0 / XD 36.0.0 |
| desktop-helper-sample | Spectrum UXP, React Spectrum, Electron, React, socket.io | Demonstrates using Electron and socket.io to communicate with a UXP plugin from a helper app | UXP 4.1 / PS 22.0.0 |
| direct-action-js-sample | Spectrum UXP, File I/O | Shows how to create a file containing the names of all layers in an active Photoshop document | UXP 4.1 / PS 22.0.0 |
| hello-world-js-sample | Photoshop API | Shows how to create basic UXP entrypoints in Photoshop using vanilla JS | UXP 4.1 / PS 22.0.0 |
| hello-world-panel-js-sample | Spectrum UXP | Shows how to create basic UI panels in Photoshop using vanilla JS | UXP 4.1 / PS 22.0.0 |
| io-websocket-example | Spectrum UXP, Websocket | Shows how to use a websocket server & client in Photoshop | UXP 4.1 / PS 22.0.0 |
| jszip-sample | Spectrum UXP, JSZip | Uses JSZip to manipulate artboards through importing and exporting zip files | UXP 4.1 / PS 22.0.0 |
| layer-creation-js-sample | Spectrum UXP, File I/O, BatchPlay | Creates a text layer using input from a local file in Photoshop | UXP 4.1 / PS 22.0.0 |
| oauth-workflow-sample | Spectrum UXP, Express | Implements a simple OAuth workflow using a server to interface a web API | UXP 4.1 / PS 22.0.0 |
| plugin-info-vue-full-app | Spectrum UXP, Vue, File I/O, Local Storage | Example of a fully developed UXP plugin with multiple entrypoints, application/platform specific UXP features, and File I/O best practices | UXP 4.1 / PS 22.0.0 |
| secure-storage-sample | Spectrum UXP, UXP Secure Storage | Demonstrates using UXP's Secure Storage API to store and retrieve local data | UXP 4.1 / PS 22.0.0 |
| typescript-webpack-sample | Spectrum UXP, HTML, TypeScript, Webpack | A sample on using the `@types/photoshop` TypeScript definitions with TypeScript and Webpack | PS 23.0.0 |
| ui-kitchen-sink | Spectrum UXP, HTML | The kitchen sink example includes all of the available UI components, along with some sample usages | UXP 4.1 / PS 22.0.0 |
| ui-playground | Spectrum UXP, React | Playground for testing HTML, CSS, and JS snippets in Photoshop | UXP 4.1 / PS 22.0.0 |
| ui-react-starter | Spectrum UXP, React | Shows how to use React in a simple plugin | UXP 4.1 / PS 22.0.0 |
| ui-svelte-starter | Spectrum UXP, Svelte | Shows how to use Svelte in a simple plugin | UXP 4.1 / PS 22.0.0 |
| ui-vue-starter | Spectrum UXP, Vue | Shows how to use Vue in a simple plugin | UXP 4.1 / PS 22.0.0 |
| wasm-rust-sample | Spectrum UXP, Rust, WebAssembly | Uses wasm-bindgen and Rust to leverage WebAssembly in a UXP plugin | UXP 4.1 / PS 22.0.0 |
| web-service-call-js-sample | Spectrum UXP, Fetch, BatchPlay | Creates a text layer in Photoshop containing data fetched from a web API | UXP 4.1 / PS 22.0.0 |

### Recommended development setup

1. Clone this repository to whichever location you want to use:

```
git clone git@github.com:AdobeDocs/uxp-photoshop-plugin-samples.git
```

2. Open the [UXP Developer Tool](https://www.adobe.io/photoshop/uxp/devtool/) and choose "Add Plugin..." for each plugin you want in the workspace. Select the `manifest.json` identified by that plugin's README; commonly, that file is in the root, `plugin`, or `dist` folders.

3. In Photoshop, load plugins with **â€¢â€¢â€¢ > Load**.

## Cross-Compatible JS Sample

For a cross-compatible Adobe Photoshop and Adobe XD plugin built with vanilla Javascript, this plugin offers a starting point. The project uses Webpack to simplify targeting both platforms. Because Webpack is part of the setup, some initial configuration is required before the plugin can run in Adobe Photoshop or Adobe XD.

### Install dependencies

Before installing packages, make sure your terminal is at the root of this project. Then:

For `yarn` users, install dependencies with:

```
yarn install
```

For `npm` users, install dependencies with:

```
npm install
```

### Build Process

### Development

For development builds, `package.json` defines two usable scripts. Both rely on the `host` key in the plugin's `manifest.json` file. In that location, an array lists the required versions for Photoshop and XD. When the plugin is loaded, the UXP Developer Tool can create one plugin entry per specified application automatically. With that setup, the same manifest and `dist` folder support testing in both applications.

The two scripts are:

- `yarn watch` or `npm run watch` builds a development version of the plugin, recompiling whenever source files change. Output goes to `dist`.
- `yarn build` or `npm run build` builds a development version of the plugin and writes it to `dist`. It does not rebuild after each source-file change.

### Production

For production builds, `package.json` defines another set of scripts. Unlike development, production allows only one application in the `manifest.json` file. Each script handles that limitation by naming a target application for Webpack to use during the build. Before the build finishes, the `host` key in the manifest file under `dist` is updated to the selected target application.

The two scripts are:

- `yarn build-ps` or `npm run build-ps` builds a production version of the plugin for Adobe Photoshop and writes it to `dist`.
- `yarn build-xd` or `npm run build-xd` builds a production version of the plugin for Adobe XD and writes it to `dist`.

> Run either `watch` or `build` before attempting to use the plugin in Photoshop or XD!

### Launching in Photoshop and XD

The UXP Developer Tools handle loading the plugin into Photoshop and XD.

If the workspace does not already include the plugin, click "Add Plugin..." and choose `dist/manifest.json`. **DO NOT** choose the `manifest.json` file inside the `plugin` folder.

After it is added, UXP Developer Tools creates two entries: one for Photoshop and one for XD. To load either one, open the â€¢â€¢â€¢ button on the row for that application and click "Load".

### Photoshop

For Photoshop, open the â€¢â€¢â€¢ button on its row and click "Load". Switch to Photoshop, where the sample panel should appear.

### XD

For XD, open the â€¢â€¢â€¢ button on its row and click "Load". Switch to XD, then choose "Plugins" → Cross Compatible JS Sample → Cross Compatible JS Sample. That menu path opens the plugin panel.

### What this plugin does

The plugin is intentionally small, but it shows how one panel can interact with both Photoshop and XD. Its main behavior creates a simple text label: enter text in the box under "Enter Text", then click "Create Label". You can also click the "?" button in the upper-right corner to view information about the current application.

## Desktop Helper Example

This sample is split into two parts: a UXP plugin and an Electron application built in React.

Developers familiar with `create-react-app` should recognize the Electron application's folder structure and tooling.

Run both components at the same time so the example works correctly.

### Configuration

Use the steps below to load the plugin into Photoshop and start the Electron app.

### Configuration — UXP Plugin

### 1. Install Node.js dependencies

```
$ cd uxp
$ yarn install   # or npm install
```

### 2. Run plugin in watch or build mode

```
$ cd uxp
$ yarn watch     # or npm run watch

### OR

$ yarn build     # or npm run build
```

- `yarn watch` or `npm run watch`: creates a development build of the plugin, recompiling whenever the source files change. The output goes to `uxp/dist`.
- `yarn build` or `npm run build`: creates the production build and writes it to `uxp/dist`; source-file changes do not trigger automatic updates.

> Before using the plugin in Photoshop, run either `watch` or `build`.

### OR — Electron Helper

### 1. Install Node.js dependencies

```
$ cd helper
$ yarn install   # or npm install
```

### 2. Run helper app

```
$ cd helper
$ yarn start
```

### 3. (Optional) Build the helper app

```
$ cd helper
$ yarn build
```

**Warning:** Expect this command to need a long time before it completes.

Electron production builds package JavaScript as a binary executable for the target platform, suitable for distribution or personal use. Build for production once development work is finished.

After the build completes, go to `helper/dist` and double-click the `UXP Helper App Setup 1.0.0` installer. After installation, the helper app can run locally. Future production changes require rebuilding the Electron project and installing it again.

### Load the Plugin

Use UXP Developer Tools when loading the plugin into Photoshop.

If the plugin is not already in your UXP Developer Tools workspace, choose "Add Plugin..." and select `uxp/dist/manifest.json`. **DO NOT** choose the `manifest.json` file located in `uxp/plugin`.

After it appears in the list, use the ••• button for that row and choose "Load". Move to Photoshop; the sample panel should be visible.

### Using the Plugin

The Electron helper app and UXP talk through an embedded websocket server in this plugin.

Server files and Electron configuration live in `helper/public`; build output uses them as Electron entrypoints.

When both parts are running, each side should show the `'Connected'` status. If either side drops off, the other side should detect the disconnect too, and both displays should change to `'Disconnected'`.

[Figure: Plugin Screenshot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/desktop-helper-sample/images/connection.png)

Because the server is embedded, it runs only on `localhost` and brokers communication for one helper-app instance with one UXP plugin instance. The websocket server defaults to port `4040`, while the Electron helper app is served from port `3000`.

Besides maintaining the connection, the two components can exchange text strings, which appear in the `Received data from the helper` and `Received data from UXP` sections.

### Using the Plugin — Note On socket.io

At present, this sample connects to the socket server through `127.0.0.1` so it works across platforms.

On Windows, switching that value to `localhost` does not cause errors.

On Mac, update the socket connection in both `uxp/src/index.js` and `helper/src/components/SocketContext.jsx` so the client 'polling' phase is skipped:

```
let socket = io('http://localhost:4040', { transports: ['websocket'] });
```

This lets UXP connect to the socket server through `localhost`.

## Starter Photoshop Plugin (Vanilla)

For Photoshop development, this starter plugin gives a minimal starting point. The "Vanilla" name reflects that it has no framework dependency and needs no build step.

### Loading in Photoshop

UXP Developer Tools can load this plugin directly into Photoshop. Start the app, click "Add Plugin...", and browse to the "manifest.json" file in this folder. Next, use the ••• button beside the matching developer-tools entry and click "Load". After you switch to Photoshop, the plugin panel will be active.

## Firebase Integration Plugin

This plugin demonstrates integration with the `Firebase` library. It reads data from the configured database and shows that data in the plugin window.

### Firestore Setup

Next, create a `.env` file that contains every variable. Fill it with the values from the matching Firebase setup:

```sh
{
        echo 'API_KEY='
        echo 'AUTH_DOMAIN='
        echo 'PROJECT_ID='
        echo 'STORAGE_BUCKET='
        echo 'MESSAGING_SENDER_ID='
        echo 'APP_ID='
        echo 'COLLECTION_NAME='

} >> .env
```

### Build Process

Photoshop can use the plugin after either of these build paths:

- `yarn watch` or `npm run watch`: creates a development build and recompiles whenever source files change. The resulting files are placed in `dist`.
- `yarn build` or `npm run build`: creates a production build and writes it to `dist`. It does not refresh automatically after source files change.

> Before attempting to use the plugin in Photoshop, run either `watch` or `build`.

### Launching in Photoshop

Load the plugin into Photoshop through UXP Developer Tools.

If it has not been added to your UXP Developer Tools workspace yet, click "Add Plugin..." and choose `dist/manifest.json`. **DO NOT** choose the `manifest.json` file inside `plugin`.

After adding it, click the ••• button on its row and choose "Load". Switch back to Photoshop; the starter panels should appear.

## Starter Photoshop Plugin (Vanilla)

This sample plugin displays a panel that queries Photoshop for layer names in the active document. It also demonstrates adding text to the panel's `html` at runtime.

## UXP Invisible Plugin Sample

This is an invisible UXP plugin example. During its entire lifecycle, an invisible plugin stays hidden, with no UI and no persistent menu options.

The plugin opens an alert dialog. The alert appears when `entrypoints.plugin.create()` runs; that method runs only when the plugin is installed. To make the alert appear again, uninstall the plugin and install it again.

## Websocket Example

This repository has two parts: a Ps plugin and a Node Websocket server. The example works correctly only when both are running.

### Install Node Dependencies

```
cd server
npm install
```

### Start the Node Websocket Server

```
cd server
npm run start
```

After starting it, the terminal should show output similar to this:

```
Wed Sep 09 2020 17:23:04 GMT-0400 (Eastern Daylight Time) Hi!
Wed Sep 09 2020 17:23:04 GMT-0400 (Eastern Daylight Time) Server is listening on port 8080
```

> Note: when another process is already using port 8080, edit `server/index.js` and manually change the port number.

### Load the plugin

No dependency installation is needed for the plugin, and UXP Developer Tools can run it. In UXP Developer Tools, click "Add Plugin..." and select `plugin/manifest.json`; then click the ••• button and choose "Load...".

### Using the plugin

This plugin shows panel-to-server communication; it does not perform useful Photoshop document work.

[Figure: Plugin Screenshot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/io-websocket-example/_imgs/screenshot.png)

### Server Connection

By default, this uses `127.0.0.1:8080`, matching where the server should be running. If you changed the server port, update this setting too.

To open the server connection, click `Connect`. When it succeeds, a "Hello!" message should appear.

[Figure: Plugin Screenshot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/io-websocket-example/_imgs/connected.png)

### Server Status

Server Status reports whether the plugin is connected and shows the most recent text received from the server.

### Interaction

The server can be exercised from the plugin in several ways.

- Send the server a message. It is only a text string, but the server accepts a specific format only; see the protocol section below.
- Check "Random Numbers (250ms)" to have the server send the plugin a new random number every quarter second. The value appears in the Server Status section.
- Check "Incremental Numbers (1-4ms)" to make the server send rapidly incrementing numbers to the plugin.

### Control

To confirm that the server and plugin agree about sent and received messages, click "Validate". When the check passes, Server Status shows "received everything ok". When messages are missing, Server Status shows "missed messages", and the server writes both states to the console so you can compare them.

Click "Disconnect" to close the socket connection.

### Protocol

The protocol uses simple text messages. The plugin and server exchange these messages:

- Sent from the server to the plugin:
  - `text=string-to-display`: makes the plugin display the text that follows.
  - `err=error-to-display`: makes the plugin show a server error.
- Sent from the plugin to the server:
  - `echo=string-to-echo`: asks the server to reply with the requested string via the `text` command.
  - `rand=on`: asks the server to begin sending random numbers every quarter second.
  - `rand=off`: asks the server to stop the random-number stream.
  - `fast=on`: asks the server to send incrementing numbers quickly.
  - `fast=off`: asks the server to stop the incrementing-number stream.
  - `validate=received-messages`: asks the server to compare the messages it sent with `received-messages`. On a match, the response is `text=received everything ok`. Otherwise, the response is `text=missed messages`, and the server logs what it sent alongside what the plugin believes it received so the two can be compared.

Any other input generates an error message.
