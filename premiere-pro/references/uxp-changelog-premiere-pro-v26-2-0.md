# Changelog, Index, Introduction

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Changelog — Premiere Pro v26.2.0; Premiere UXP API; Essential Development Tools for UXP; Extensibility Nomenclature; Tech Stack Foundations; Premiere & the Unified Extensibility Platform.

## Changelog — Premiere Pro v26.2.0

### UXP Hybrid Plugin Support

Premiere Pro now has official support for [UXP Hybrid Plugins](uxp-plugins.md). Developers can pair a UXP plugin with native C++ libraries, so performance-sensitive work such as audio/video processing, ML inference, or native SDK integration can run as compiled code beside the JavaScript UI and logic.

- **UXP Hybrid Plugin SDK**: available from the [Adobe Developer Console](https://developer.adobe.com/console). The package includes C++ headers, helper utilities, and native-addon templates for `.uxpaddon` output.
- **New documentation**: start with [Overview](uxp-plugins.md), then continue to [Building Hybrid Plugins](uxp-plugins.md) and [FAQ](uxp-plugins.md).

### Changelog — Premiere Pro v25.6.0

### Official Release of UXP extensibility in Premiere Pro

### New Features

Premiere Pro UXP APIs are moving close to the older CEP and ExtendScript capability set. The sample plugins do not cover every API call or message listener yet, but the foundation is ready and the samples will continue to grow.

### Documentation update

- **Comprehensive overhaul** of the full documentation site.
- **New distribution section** covering Adobe Marketplace submission, enterprise distribution, independent distribution, packaging, installation, listing setup, and review guidance.
- **Expanded tutorials and recipes** adding deeper coverage for modal dialogs, panels, TypeScript support, filesystem access, external processes, and communication between plugins.
- **Content reorganization** through cleaner navigation, consolidation, and full rewrites.
- **New Premiere API Reference** refreshed for v25.6.

### Changelog — Premiere Pro v25.2.0

### Initial Public Beta Release for UXP in Premiere Pro

**Release Date:** December 4, 2024

### New Features

- **Unified Extensibility Platform (UXP) Integration:** Premiere Pro Beta now supports UXP as a modern plugin-development model.
- **Enhanced Performance:** UXP is intended to make plugins in Premiere Pro more responsive and efficient.
- **Developer Tools:** The available APIs support creation and management of UXP plugin projects.

### Known Issues

- **Limited Third-Party Support:** Some third-party development workflows may be outside the first beta's supported range. Later updates are expected to broaden coverage.
- Spectrum Web Component support in UXP remains incomplete for Premiere Pro
- Command Plugins cannot yet operate as standalone plugins
- Unloading or reloading a plugin from the UXP Developer Tool [UDT] fails while execution is paused on a breakpoint

### Getting Started

- **Community Support:** Use the [Creative Cloud developer forums](https://forums.creativeclouddeveloper.com/) for feedback, questions, and collaboration with other developers.

## Premiere UXP API

Premiere UXP API is a current extensibility platform for building custom tools and workflow features tailored to specific Premiere environments.

### Resources

- [What's new](uxp-changelog-premiere-pro-v26-2-0.md)
- [UXP Plugins](uxp-plugins.md)
- [Share & Distribute](uxp-distribution-2.md)
- [UXP APIs](uxp-api.md)
- [Premiere DOM APIs](uxp-ppro-reference.md)
- [Developer Forums](https://forums.creativeclouddeveloper.com/)

### Overview

UXP (**U**nified e**X**tensibility **P**latform) is an integration layer inside Premiere and other Adobe Creative Cloud apps. It uses a modern JavaScript engine and exposes many Premiere functions for programmatic control. With UXP, developers can build focused tools for demanding workflows, reduce repetitive actions, improve efficiency, and shape Premiere around the needs of a project.

Premiere adds product-specific APIs on top of the base UXP features. This site documents both API sets.

[Figure: UDT Interface](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/u-d-t-sample-image-01-cropped.png)

### Get Started

### New to UXP?

[Introduction & Setup](uxp-changelog-premiere-pro-v26-2-0.md)

Start with the basics, prepare the development environment, and learn the stack.

[Build Your First Plugin](uxp-plugins.md)

Use guided tutorials to build panels, commands, and modal dialogs.

### Building Plugins

[Plugin Concepts](uxp-concepts.md)

Learn about manifests, entrypoints, panels, and plugin behavior.

[Tutorials](uxp-tutorials-2.md)

Follow practical guides for panels, commands, lifecycle hooks, and related features.

[Hybrid Plugins](uxp-plugins.md)

Add high-performance native C++ libraries to plugins.

[Code Recipes](uxp-recipes-2.md)

Use examples for common tasks including filesystem access, network requests, and styling.

### API References

[Premiere DOM API](uxp-ppro-reference.md)

Work programmatically with sequences, tracks, clips, markers, project items, and app settings.

[UXP JavaScript API](uxp-reference-js.md)

Reference file system, networking, shell execution, and core UXP behavior.

[UI Components (Spectrum)](uxp-api-2.md)

Use Adobe design-system components for plugin interfaces.

[HTML & CSS References](uxp-api.md)

Review supported HTML elements and CSS properties for UXP.

### Additional Resources

- **[Share & Distribute](uxp-distribution-2.md)**: packaging, Adobe Marketplace, enterprise distribution, and installation choices.
- **[FAQ](uxp-faq.md)**: answers for common problems and questions.
- **[Starters & Samples](uxp-starters-samples.md)**: template projects for getting started quickly.
- **[What's New](uxp-changelog-premiere-pro-v26-2-0.md)**: recent API changes and updates.

### Join the community

Join the global Creative Cloud Developer community building plugins and integrations that support creative work.

Other ways to participate:

- Join the [Creative Cloud Developer Forums](https://forums.creativeclouddeveloper.com/) to meet developers, ask questions, and help others.
- Use the [Adobe Creative Cloud Developer Newsletter](https://www.adobe.com/subscription/ccdevnewsletter.html) signup to receive developer updates.

## Essential Development Tools for UXP

Review the core tools needed to begin building UXP plugins.

### Code Editor

A dependable Code Editor helps keep plugin work organized and efficient. Any modern editor can be used, but [Visual Studio Code](https://code.visualstudio.com) is common because of its extension ecosystem, formatting and linting support, and smooth fit with UXP-related workflows. [Cursor](https://www.cursor.com/) is another option for developers who want a more AI-assisted coding environment.

### UXP Developer Tool (UDT)

The UXP Developer Tool (UDT) helps create, load, manage, debug, and package plugins for Adobe applications powered by UXP. UXP plugins are supported in **Premiere v25.6** and later with **UDT v2.2** or later.

[Figure: UDT](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/introduction/essentials/dev-tools/img/dev-tools-udt.png)

The UXP Developer Tool also:

- Includes a **Code Playground** for fast API testing and exploration.
- Packages plugins as `.ccx` [installable file](uxp-distribution-2.md) assets for distribution.
- Provides **Starter Templates** and Sample Projects to help development begin faster.

Admin privileges are required to use UDT.

UDT needs administrator-level privileges to run correctly. If you cannot elevate permissions, this tool may not be usable on that system.

### Installation

UDT can be installed [from Creative Cloud](https://creativecloud.adobe.com/apps/download/uxp-developer-tools), or by following this sequence:

1. Open the Adobe Creative Cloud desktop app. If it is missing, use the installer at [Creative Cloud download](https://creativecloud.adobe.com/apps/download/creative-cloud).
2. Sign in with your Adobe ID if needed.
3. Open **All apps**. Find "UXP Developer Tools" in the list, or type "UXP Developer Tools" in the search bar.
4. Click **Install** on the UXP Developer Tools card.
   [Figure: Creative cloud](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/introduction/essentials/dev-tools/img/dev-tools-ccd-udt.png)

Team and Enterprise customers do not yet receive the UXP Developer Tool as a Package in the Adobe **Admin Console**.

### First launch

At first launch, Developer Tool asks to enable Developer Mode. Development plugins cannot be loaded until that mode is active. Selecting **Enable** requests elevated permissions, and the system may ask for a password or approval from Developer Tool.

[Figure: Enable Developer Mode](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/introduction/essentials/dev-tools/img/dev-tools-enable-developer-mode2.png)

If this step causes problems, Developer Mode can also be configured manually, but Administrative privileges are still required.

1. Quit the UXP Developer Tool
2. Open `/Library/Application Support/Adobe/UXP/Developer` on macOS, or `%CommonProgramFiles%/Adobe/UXP/Developer` on Windows. Create the folder if it is absent; administrative rights are required.
3. Create a new file named `settings.json` with this content; administrative rights are required to save it:

   ```json
   \{ "developer" : true }
   ```

4. Launch the UXP Developer Tool again.

At this point, a successful UDT installation is enough. UDT is covered in more detail after the first plugin is built.

## Extensibility Nomenclature

A short history of terminology

Adobe Creative Cloud applications have used several extension models over time, including ExtendScript **Scripts**, Flash **Panels**, CEP **Extensions**, UXP **Plugins** (either _regular_ or _hybrid_), and UXP **Scripts**. Adobe Express is unusual because it uses **add-ons**.

Most desktop applications also support another category of _compiled_ plugins, often written as **Plug-ins**; examples include Effects in Premiere and Filters in Photoshop.

Premiere still recognizes those distinctions, but **plugins**[^1] is the broad term for _panels_, _extensions_, and eventually _scripts_. That wording keeps Premiere aligned with Adobe Creative Cloud applications that have already adopted, or are adopting, the UXP standard.

[^1]: In the UXP ecosystem, more precisely, a _plugin_ is a container for _panel(s)_, _command(s)_, or both. This mirrors the CEP model of _extensions_ containing _panel(s)_ and broadens it.

## Tech Stack Foundations

Get oriented to the core technologies needed when building UXP plugins.

### Programming Languages

Before you build plugins, get comfortable with **JavaScript, HTML, and CSS**. Online learning material covers the fundamentals well; the links below are useful starting points, and other sources can work just as well.

Many tutorials teach Web technologies in a browser or in a server-side JS runtime such as Node.js. UXP accepts modern JavaScript syntax, but **UXP is not a standard browser environment**: only part of the usual HTML Elements, CSS classes, and JavaScript APIs exist there.

### Reading Materials

Begin with the fundamentals of JS, HTML, and CSS.

- [Introduction to JavaScript](https://javascript.info/intro) and its [basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JavaScript versions](https://www.w3schools.com/js/js_versions.asp) and [ECMAScript 2015 (ES6)](https://www.w3schools.com/js/js_es6.asp)
- [HTML Basics](https://www.w3schools.com/html/html_intro.asp)
- [CSS Basics](https://www.w3schools.com/css/css_intro.asp), [syntax](https://www.w3schools.com/css/css_syntax.asp), and [selectors](https://www.w3schools.com/css/css_selectors.asp)

The extra topics below will also be useful. You do not need to study them all immediately, but saving them for later will make the code examples easier to follow.

- [Document Object Model or HTML DOM](https://eloquentjavascript.net/14_dom.html) and the global [window](https://www.w3schools.com/jsref/obj_window.asp) and [document](https://www.w3schools.com/jsref/prop_win_document.asp) object
- [DOM Events](https://javascript.info/introduction-browser-events)
- [Adding CSS](https://www.w3schools.com/css/css_howto.asp)
- [CSS layout using Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Promises](https://javascript.info/promise-basics)
- [Async/await](https://javascript.info/async-await)
- Different ways of declaring JavaScript functions: [traditional style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) vs. [fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Debugging

CDT, the Chrome browser's Debug Tool, is a practical starting point for tracking down issues in these technologies. The [UXP Developer Tool](uxp-changelog-premiere-pro-v26-2-0.md) (UDT) uses that same debugging engine, so knowing CDT at a high level is useful.

Review the [Chrome Debug tool](https://developer.chrome.com/docs/devtools/overview/), then practice DOM inspection through [access DOM](https://developer.chrome.com/docs/devtools/dom/), style changes through [modify CSS](https://developer.chrome.com/docs/devtools/css/), and breakpoint work through [debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/).

### Frameworks

Beyond JavaScript, HTML, and CSS, many teams use **frameworks that act as an abstract layer on top of Web technologies** so reusable code can be written faster and with less repetition.

[React](https://react.dev/), [Vue](https://vuejs.org/), [Angular](https://angular.io/), and [Svelte](https://svelte.dev/) are widely used choices. Whether to use one is optional and depends on your project preferences.

Any extra tool that extends Vanilla (i.e., plain) JavaScript needs supporting software to run:

- [Node.js](https://nodejs.org/en/): a **JavaScript runtime environment** that is also commonly used as a backend server for Web projects. Visit the [Node.js download page](https://nodejs.org/en/download/), get the installer for your platform, and run it; `npm` is installed as part of that setup.
- [`npm`](https://www.npmjs.com): a **Package Manager** included with Node that manages project dependencies, meaning the external code and files your plugin relies on.
- [`yarn`](https://yarnpkg.com): an **alternative Package Manager** for Node. Install `npm` first as described above, then run:

  ```bash
  npm install yarn --global
  ```

### Static Analysis Tooling

When writing UXP plugins, **static analysis tools** such as [ESLint](https://eslint.org/) can detect common JavaScript mistakes. ESLint works well with continuous integration (CI) systems and many popular [code editors](uxp-changelog-premiere-pro-v26-2-0.md), helping you catch and correct issues earlier.

ESLint includes recommended rule sets for code analysis, and it also supports many plugins and configuration styles that can be added to your project. That flexibility is especially useful with web frameworks because it helps keep the plugin aligned with framework best practices.

### System Requirements

Before proceeding, confirm that your computer satisfies the minimum requirements for running [Premiere](https://helpx.adobe.com/premiere-pro/system-requirements.html).

## Premiere & the Unified Extensibility Platform

UXP opens a newer extensibility path for Premiere.

### Overview

UXP is a **JavaScript-based extensibility platform** (ES6/ECMAScript 2015 compliant) for automating, improving, and extending Adobe Creative Cloud products. It gives Desktop applications a way to gain new tools and features built with Web technologies.

Examples of what UXP can support include:

1. **Automate repetitive, time-consuming tasks** in day-to-day workflows.
2. **Unlock creative effects** that would be hard, or even impossible, by other means.
3. **Customize Premiere** around preferred layouts and individual working habits.
4. **Build intuitive User Interfaces** that improve the experience for users.

To develop with UXP, you need basic familiarity with Web technologies such as JavaScript, HTML, and CSS. The pages that follow introduce the essentials for getting started.

### UXP is not a Browser

Even though UXP uses Web technologies, it is not intended to behave as a normal browser environment or a browser replacement. Some capabilities that browsers provide natively are absent in UXP, while the platform supplies features designed for powerful, creative Desktop application extensions.

### Support and Features

UXP is the current extensibility standard for Adobe Creative Cloud applications, and support continues to expand across hosts including **Premiere** (version 25.6), **Photoshop**, and **InDesign**.

A plugin can provide a **persistent User Interface that blends seamlessly** with the host application as a `panel`, or expose an **actionable command** that runs a predefined function as a `command`. Users trigger commands through menu items, and the choice depends on the interaction model you want. Native-code-heavy scenarios can use [Hybrid Plugins](uxp-plugins.md), which combine the standard UXP plugin model with C++ libraries. Later sections cover those plugins in detail.

You can also [easily share UXP plugins](uxp-distribution-2.md) with other people. One route is [Adobe Creative Cloud Marketplace](uxp-distribution.md), which can put the plugin in front of millions of Adobe users; other routes are [within your own organization](uxp-distribution.md) or [third-party channels](uxp-distribution.md).

Welcome back to UXP. The next sections go deeper into the platform and prepare you to set up the required developer tools.

## See also

- [User Interfaces](uxp-user-interfaces.md)
- [Known Issues](uxp-known-issues.md)
