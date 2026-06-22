# Index, Introduction

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UXP for Adobe InDesign; InDesign Server; Developer Tools; Programming languages; InDesign and Unified Extensibility Platform (UXP); Distribution Options; Share your work with others; Packaging; UXP Scripts and Plugins.

## UXP for Adobe InDesign

This section introduces UXP (**U**nified E**x**tensibility **P**latform) for Adobe InDesign.

### Resources

- [What's new](uxp-changelog.md)
- [UXP APIs](https://raw.githubusercontent.com/reference/uxp-api/index.md)
- [InDesign APIs](https://raw.githubusercontent.com/dom/api/index.md)
- [Scripts](uxp-advanced-topics.md)
- [Plugins](uxp-plugins.md)
- [Creative Cloud Developer Forums](https://forums.creativeclouddeveloper.com/c/indesign/)

### Getting started

With UXP, document tasks and content changes can be completed quickly.
To begin, read [learning about UXP](uxp-for-adobe-indesign.md) and prepare the environment with [essential tools](uxp-for-adobe-indesign.md).

### Scripts and plugins

UXP supports two extension paths for the application: scripts and plugins. First review the [difference between them](uxp-for-adobe-indesign.md), then choose the path that fits your use case. After that, write your first [script](uxp-advanced-topics.md) or [plugin](uxp-plugins.md).

### Resources and API references

Build UXP scripts and plugins by studying the needed [fundamental concepts](uxp-resources.md) and using bite-size [recipes](uxp-recipes-2.md) for common use cases.

Because UXP continues to evolve, watch the [latest APIs](uxp-changelog.md) in recent releases, and consult [UXP APIs](https://raw.githubusercontent.com/reference/uxp-api/index.md) plus [InDesign APIs](https://raw.githubusercontent.com/dom/api/index.md) for the corresponding references.

The [sample repository](https://github.com/AdobeDocs/uxp-indesign-samples) provides ready-made plugins and scripts that make popular framework setup easier.

### Share & Distribute

Distribute your work through Adobe Marketplace to share it with family, friends, and a wider user base. Learn more [here](uxp-for-adobe-indesign.md).

### Migration

Use [guides for migrating](uxp-resources.md) when moving from other extensibility platforms to UXP.

### Join the community

Connect with the global Creative Cloud Developers community building creativity-focused plugins and integrations. Need support? [Click here](uxp-advanced-topics.md).

Other ways to participate:

- Use the [Creative Cloud Developer Forums](https://forums.creativeclouddeveloper.com/c/indesign/) to meet developers, ask questions, and help others.
- Get updates through the [Adobe Creative Cloud Developer Newsletter](https://www.adobe.com/subscription/ccdevnewsletter.html).

## InDesign Server

Adobe InDesign Server software provides the layout and composition engine behind automated publishing workflows. It is derived from desktop InDesign, but it does not include a built-in user interface.

Begin with [InDesign Server background](https://helpx.adobe.com/in/indesign/using/indesign-server.html), then use [get started with UXP scripts](uxp-advanced-topics.md) for the local setup.

## Developer Tools

These tools make UXP script and plugin authoring smoother.

### Code Editor

Use a capable text editor so the project stays organized. Any current editor aimed at developers is suitable; [Visual Studio Code](https://code.visualstudio.com) is a common pick because it integrates well with the rest of the UXP toolchain and supports many plugins for formatting code, checking syntax, parsing JSON, and related tasks.

### UXP Developer Tool (UDT)

The Adobe UXP Developer Tool (UDT) supports the main plugin and script workflow for UXP-powered applications: creating projects, loading them, managing them, and debugging them.

For plugins, it also provides:

- A playground for trying APIs and experimenting with them
- A way to build a `.ccx` - A UXP plugin package ready for distribution.
- A set of approachable templates and samples for starting new work.

**IMPORTANT**:
The Adobe UXP Developer Tool needs elevated privileges in order to work correctly. If an administrator has not allowed you to elevate to Administrator privileges, this tool cannot be used.

### Installation

Install UDT from [here](https://creativecloud.adobe.com/apps/download/uxp-developer-tools), or use this sequence:

1. Open Adobe Creative Cloud Application. If it is not present, [get Creative Cloud](https://creativecloud.adobe.com/apps/download/creative-cloud) and install it.
2. Sign in with your Adobe account if you have not signed in already.
3. Select the `All apps` section; "UXP Developer Tools" should appear in the list.
   [Figure: Creative cloud](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/essentials/dev-tools/ccd-allapps-udt.png)
4. Select `Install` on the `UXP Developer Tools` card to begin installing it.

### Launching for the first time

The first launch of the Developer Tool asks you to turn on Developer Mode. This setting is necessary before development plugins can be loaded into the application.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/essentials/dev-tools/devmode.png)

After you select `Enable`, the tool requests elevated permissions, and the flow may ask for a password or a Developer Tool approval.

[Figure: Elevated Permissions request](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/essentials/dev-tools/macos-elevated-permissions.png)

If that step does not work, Developer Mode can be configured by hand, provided you have Administrative privileges:

1. Quit the UXP Developer Tool
2. On macOS, open `/Library/Application Support/Adobe/UXP/Developer`; on Windows, open `%CommonProgramFiles%/Adobe/UXP/Developer`. Create the folder with administrative rights if it is missing.
3. Create a new file named `settings.json` containing the JSON below. Saving the file requires administrative rights:
   ```json
   { "developer": true }
   ```
4. Start the UXP Developer Tool again.

For the moment, having UDT installed successfully is enough. Later, after you create your first script or plugin, UDT is covered in more detail.

## Programming languages

As noted earlier, UXP is an extensibility platform built on modern JavaScript (ECMA2015 or ES6).

To get started, you need some familiarity with web technologies such as JavaScript, HTML, and CSS. The web has many strong learning resources for those fundamentals; the following recommendations are a useful starting set. Other sources are fine too when you want to study these topics.

Keep in mind that JavaScript, HTML, and CSS tutorials usually target browser work or server-side JS engines because those are the core web technologies.

Do not treat UXP as a complete browser or as a server-side JS runtime such as NodeJS. It uses familiar syntax, but it is not designed to act like a browser, so only part of the web API surface is available. In practice, some HTML Elements, CSS classes, and JavaScript APIs do not exist in the UXP world.

### System requirements

Check that the machine meets the required baseline for [InDesign system requirements](https://helpx.adobe.com/in/indesign/system-requirements.html). For the server product, also review [InDesign Server requirements](https://helpx.adobe.com/indesign/kb/system-requirements-indesign-server.html).

### Reading material

Start with core web fundamentals.

- [JavaScript introduction](https://javascript.info/intro) and [JavaScript fundamentals](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JS version overview](https://www.w3schools.com/js/js_versions.asp) and [ES6 reference](https://www.w3schools.com/js/js_es6.asp)
- [HTML Basics](https://www.w3schools.com/html/html_intro.asp)
- [CSS Basics](https://www.w3schools.com/css/css_intro.asp), [syntax](https://www.w3schools.com/css/css_syntax.asp), and [selectors](https://www.w3schools.com/css/css_selectors.asp)

Beyond the fundamentals, these extra subjects are useful later. You do not need to study all of them immediately, but bookmarking them will make future code examples easier to follow.

- [HTML DOM overview](https://eloquentjavascript.net/14_dom.html) and the global [window object](https://www.w3schools.com/jsref/obj_window.asp) plus [document object](https://www.w3schools.com/jsref/prop_win_document.asp)
- [Browser DOM events](https://javascript.info/introduction-browser-events)
- [CSS inclusion guide](https://www.w3schools.com/css/css_howto.asp)
- [CSS layout using flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Promise](https://javascript.info/promise-basics)
- [Async/await](https://javascript.info/async-await)
- Different ways of declaring JS functions - [traditional style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) vs using the [fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Chrome debug tool (CDT)

Chrome Debug Tool is one of the simplest ways to troubleshoot these technologies. UDT, the UXP Developer Tool, uses the same approach, so a broad understanding of CDT will help later.

Review the [Chrome DevTools overview](https://developer.chrome.com/docs/devtools/overview/), then use the guides for [inspecting DOM](https://developer.chrome.com/docs/devtools/dom/), [adjusting CSS](https://developer.chrome.com/docs/devtools/css/), and [debugging JavaScript](https://developer.chrome.com/docs/devtools/javascript/) with breakpoints.

### Frameworks

The discussion so far has focused on plain JS, HTML, and CSS. Many frameworks sit above those web technologies and provide a higher-level layer. Their purpose is to help developers write reusable code faster and with less friction.

React, Vue, and Svelte are widely used examples that many developers like. Using one is optional and depends on your preference. Because these frameworks add a layer on top of the basic web stack, they also require extra tooling.

- [Node.js](https://nodejs.org/en/): a JavaScript runtime environment. In web projects, it is frequently used for backend server work. Visit the [Node.js download page](https://nodejs.org/en/download/), get the installer for your platform, and run it. This installation also includes `npm`.
- [npm](https://www.npmjs.com): a "package manager" included with Node that manages project dependencies, meaning the additional code and files required for the plugin to run.
- [yarn](https://yarnpkg.com): a Node package manager used as an alternative to npm. Install npm first (see above), then run this command:

  ```bash
  npm install yarn --global
  ```

## InDesign and Unified Extensibility Platform (UXP)

InDesign and InDesign Server both support UXP.

UXP is a JavaScript ES6 (ECMA2015) extensibility platform for automating, improving, and extending Adobe Creative Cloud products. It gives developers a broad way to use web technologies when building controls for desktop applications.

One **IMPORTANT** point: although UXP lets you use web technologies, it is not a browser. Some browser concepts are not present in the UXP world, but the platform still exposes many capabilities for building powerful creative solutions.

With UXP you can:

1. Automate many small, repetitive tasks that come up every day.
2. Produce creative effects that would be hard or impossible through other approaches.
3. Adapt InDesign to fit your preferred working habits and layouts.
4. Build a fluent user interface for users to interact with.

UXP is available in other apps too, including XD and Photoshop. More applications will add it later.

To develop with UXP, you need basic JavaScript, HTML, and CSS knowledge. If you are not there yet, use the suggested courses and materials to get started and to understand the APIs.

You may write one JavaScript file and run it as a script, or you may create a larger plugin with persistent, fluent UI. Plugin projects can also be written as a 'command' plugin or a 'panel' plugin, depending on how users should interact with them. The following section explains these choices so you can pick the approach that fits your needs.

You can also share UXP plugins and scripts with other people. Plugins may be distributed through Adobe's Marketplace, which gives access to millions of application users at once, or through your own distribution channels.

Welcome again to UXP. The next sections go further into the UXP world; continue reading and set up the required developer tools.

## Distribution Options

After your code is packaged correctly, distribution can begin.

### Distributing scripts

A UXP script can be shared directly. Send the `.idjs` file to family and friends, and they can run it after importing it from the Scripts panel.

### Distributing plugins

Plugins can be shared in more than one way:

### Distribute on Creative Cloud Plugin Marketplace

Submit the plugin through the Developer Distribution portal when you want a Plugin Marketplace listing that can reach many users. Downloads are then available from the desktop Creative Cloud app.

- [Developer Distribution docs](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/)

### Share directly using `.ccx` files

You can send the plugin to family, friends, and coworkers. Email the `.ccx` file, or more commonly, place it in a cloud folder so they can download it. Installation only requires double-clicking the `.ccx` file, which opens the Creative Cloud application. This direct route does show "Do you trust this?" warning dialog boxes after the double-click, so recipients must click through them.

## Share your work with others

If the script/plugin is not only for your own use, sharing it is probably part of the plan. This section covers moving the plugin beyond your machine and informing other users about it.

## Packaging

Start by getting the script or plugin ready for sharing.

### Scripts

Scripts do not need any extra preparation before sharing. You can give the `.idjs` file as-is to other developers and users.

### Plugins

UXP plugins are delivered as `.ccx` files. Internally, a `.ccx` is a zip file.

**IMPORTANT notes**:

- Unless special requirements apply, do not create this zip file manually.
- Before packaging a plugin for use outside your computer, obtain a plugin ID that is valid by using the [plugin ID portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/)
  . If the plugin's `manifest.json` file does not include an id in the `id` field, distribution through the Creative Cloud Marketplace is not available.

### Packaging a plugin

Packaging plugin code is now a straightforward step.

In the [UXP Developer Tool](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/devtool/index.md), select `Package` from the Actions menu, represented by the ellipsis on the far right of the row containing the plugin name:

[Figure: Package Menu](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/udt-package-menu.png)

A "Select target directory" dialog appears. Pick the directory where the built plugin `.ccx` file should be placed.

When creation of the `.ccx` file succeeds, UDT displays this message along the bottom of its window:

[Figure: Package Success](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/package-success.png)

If the tool shows this instead:

[Figure: Package Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/package-failed.png)

Select `Details` to open a window explaining the packaging failure.

After the `.ccx` file is built, test it locally before taking any next step. A .ccx file is installed in a Creative Cloud application by double-clicking it. Creative Cloud opens and displays a warning that Adobe has not verified the plugin:

[Figure: Verify Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/verify-failed.png)

Because you created this plugin, installing it is probably safe. Select `Install`, then another warning appears:

[Figure: Install Warning](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/introduction/next-steps/distribution/images/install-warning.png)

In this situation, _you_ are the third-party developer, so clicking OK is safe. If someone else sends you a `.ccx` file and this dialog appears, verify that you trust the sender first.

With the plugin installed, test it again so the packaged version is confirmed to work. Then continue to [Options for Distribution](uxp-for-adobe-indesign.md) and share the plugin more broadly.

## UXP Scripts and Plugins

UXP provides two approaches for extending an application's capabilities: scripts and plugins.

A script is one JavaScript file with an application-specific extension. In InDesign the extension is `.idjs`; in Photoshop, it is `.psjs`. A plugin, by contrast, can include multiple JS, HTML, or CSS files, much like a web project, and it also needs a manifest containing the required configuration.

Use the table below to compare the remaining differences.

|  | Scripts | Plugins |
| --- | --- | --- |
| **Compatibility** | InDesign, and InDesign Server (since InDesign v18.0) | InDesign only (since InDesign v18.5) |
| **Files** | A single JavaScript file. | Javascript \\ + HTML and CSS (optional) \\ + manifest.json |
| **Manifest values** | The application has predefined values for the manifest that cannot be altered | Requires you to specifically configure manifest.json and provides flexibility |
| **Extensions** | `.idjs` | `.ccx` for sharing, otherwise a regular folder can be used to load and test with the help of UDT. |
| **User interface** | You can ask users for input only via modal dialogs. | Along with modal dialogs, you can build elaborate UI within persistent panels |
| **Distributable** \\ _(Privately, own distribution channel or via Adobe Marketplace)_ | \\ You can share your `.idjs` file with others who can include it in the scripts panel. \\ However, scripts are **not** distributable via Adobe Marketplace.\\ | Once you create a packaged plugin with a `.ccx` extension, you can share it with others in multiple ways - privately, or via Adobe Marketplace or your own distribution channel.\\ |
| **Setup** | Quickest and easiest to set up. | We offer multiple starter templates for you to get the setup up and running in no time. However, it requires some amount of understanding of the plugin `manifest`. \\ Also, if you wish to use popular frameworks such as React, Vue etc, it is possible only within plugins and may require additional setup steps. |
| **Miscellaneous** | - | You have three flavors within plugins - command, panel and hybrid plugins. \\ A **command plugin**, also referred to as a modal plugin sometimes, is almost like a headless plugin that can occasionally ask for user inputs with the help of modal dialogs (like scripts). It is the best way to convert your existing script into a plugin to make it distributable. \\\\ A **panel plugin** has a persistent UI. \\\\ **Hybrid plugins**, which will be available in the future, can let you use the power of C++ libraries alongside JavaScript. |

Use this comparison to pick the path that fits your use case. As a next step, build a starter [script guide](uxp-advanced-topics.md) or [plugin guide](uxp-plugins.md).
