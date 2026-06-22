# Uxp For Cep Devs, Uxp For Extendscript Devs, Uxp For Newbies, Uxp For Web Devs ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: New to UXP? Where to Go Next; UXP for CEP Developers — Goodbye CEP; UXP for ExtendScript Developers; UXP for Newbies; UXP for Web Developers; UXP in Photoshop vs Other Creative Cloud Applications.

## New to UXP? Where to Go Next

Which starting point fits depends on your current background.

- Already built UXP plugins for other Adobe applications (e.g., XD), and only need Photoshop-specific differences? [start here](uxp-for-you.md).
- Built Photoshop extensions with CEP (Common Extensibility Platform) but not UXP? [start here](uxp-for-you.md).
- New to both UXP and CEP, but you have written Adobe ExtendScript scripts? [start here](uxp-for-you.md).
- Know some HTML, CSS, and JavaScript, but have not scripted Photoshop with those technologies? [start here](uxp-for-you.md).
- Completely new to the whole area? [Start here to begin your awesome journey](uxp-for-you.md).

## UXP for CEP Developers — Goodbye CEP

The Common Extensibility Platform became the preferred route for plugin developers who needed more than a minimal UI. Photoshop will retain it for now, but the path is expected to move through deprecation and eventual removal.

CEP is being retired for several reasons:

- A full Chromium build acts as CEP's web host. That puts a heavy load on the host application, especially because _each_ CEP plugin runs inside its _own_ Chromium instance.
- Direct host-app communication is not available from CEP. Host scripts must be authored in ExtendScript and sent into the application through EvalScript calls, leaving two JavaScript engines in play. Practically, plugin logic gets split between ExtendScript and JavaScript, and moving anything beyond simple parameters across that boundary is clumsy and inefficient.
- CEP plugins cannot use native host controls, so matching host dialogs and panels requires a lot of CSS adjustment.
- CEP's ExtendScript layer is tied to a very old JavaScript version without many current language features. As a result, developers have to manage two JavaScript environments.

### UXP for CEP Developers — Hello UXP

UXP can use HTML and CSS for simple panels, or, with the React JavaScript framework added, more complex panels; it also supports dialogs and headless (no UI) plugins.

Since UXP talks to the host application directly, CEP/ExtendScript interface problems no longer apply. In general, UXP makes plugin development simpler.

A plugin loader and debugger ship with UXP, making development management easier than in CEP.

The [Spectrum CSS](https://opensource.adobe.com/spectrum-css/) components are available to UXP plugins for building theme-aware, cross-platform interfaces that look consistent across CC applications.

## UXP for ExtendScript Developers

Coming from ExtendScript plus ESTK (ExtendScript ToolKit), or from the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) that succeeded it on 64-bit systems, UXP will feel welcome in places, but it also introduces topics you will need to learn:

### Different DOM access

The Photoshop DOM is reached through UXP-specific access patterns. For details, see [Photoshop UXP API reference](uxp-ps-reference.md). Today the full DOM surface is not available yet, although each Photoshop release adds more access.

Until important Photoshop capabilities are exposed directly through UXP, [batchPlay](uxp-media.md) can serve as a workaround.

### Migration helper for ExtendScript developers

When your code frequently calls `executeAction` and `executeActionGet`, migration can be helped by [ExtendScript batchPlay logger](https://github.com/adobe-uxp/ps-es-to-uxp). Add the `ps-es-to-uxp` jsx code to your ExtendScript project; it prints your `executeAction` and `executeActionGet` methods in a format usable with the UXP equivalent API, [batchPlay](uxp-media.md).

### Development environment

For many years, ExtendScript Toolkit ("ESTK") served as the usual development environment, and many Windows developers still use it. macOS lost ESTK gradually as 32-bit code was deprecated. More recently, a Visual Studio Code plugin, built for a widely-used editor, has replaced ESTK.

UXP source code is just HTML, CSS, and JavaScript, so you can use whatever programming editor you prefer. Many UXP developers still choose VS Code because its extension ecosystem is strong.

### User interface

Some ExtendScripts have little or no UI: the user chooses a script from the File->Scripts menu, then it runs without a visible interface. If an ExtendScript _does_ need UI, simple JavaScript `alert()`, `confirm()`, and `prompt()` calls are typical. For complex dialogs, the full-featured but involved [ScriptUI](https://creativepro.com/files/kahrel/indesign/scriptui.html) is another option. Once you move from ExtendScript into CEP, panels become more available.

In UXP, by contrast, UI can be as simple or complex as needed. HTML and CSS produce the visual layer, while JavaScript handles the underlying behavior, such as "what should I do when this button is clicked".

### Modern JavaScript

ExtendScript is based on an old JavaScript level, ES3, from an era the source jokes about with punched cards. UXP instead uses the V8 JavaScript engine and supports ES6. That newer baseline includes many features that ExtendScript lacks. UXP examples do not always use every newer capability, and UXP does not necessarily support every one, but an ExtendScript developer will encounter enough unfamiliar syntax that learning ECMAScript ES6, the standards-body name for JavaScript, is worthwhile for reading samples.

This documentation does not provide a full ES6 tutorial. ES6 is covered by many sites; [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is one example. At minimum, make sure you recognize the following language features because UXP code found around the web commonly uses them:

- ["const" and "let" declarations vs "var"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Promises and asynchronous functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [Anonymous functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### What's Missing in UXP

UXP includes an HTML interpreter that resembles Chromium but is more constrained than a complete browser. As a result, some common web CSS and HTML patterns are unavailable. For the UXP HTML environment's supported and unsupported behavior, use [this document](https://raw.githubusercontent.com/guides/uxp-guide/unsupported/index.md).

## UXP for Newbies

If you have not worked with JavaScript, HTML, or CSS before and want to build UXP plugins, expect a learning curve. It is manageable rather than impossible, and many people have already made the climb. Start experimenting now, then return to these pages when you are ready.

A few points are worth handling before you begin:

You will need some knowledge of the host application. Here that means basic familiarity with Photoshop. Photoshop is broad and deep with a long history, but trying to learn all of it first is a trap. A starting foundation includes layers, selections, and basic tools such as the pen and type tools.

Then learn basic JavaScript. The Internet can be overwhelming here. Typing "learn JavaScript" into Google can produce "About 2,040,000,000 results." That is **Two billion** pages to sort through. At that point, quantum physics may look easier, with only 123 million results for that search.

Do not let that stop you. Begin with [Mozilla Developers Network tutorials](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) if that learning path fits. Learning styles vary: documentation works for some people, YouTube videos for others, and some prefer to jump in and learn by making mistakes. Choose the approach that fits you.

Learning HTML and CSS (Cascading Style Sheets) follows the same pattern, though both are arguably simpler than JavaScript. Avoid going too deep at first, because UXP needs a much smaller subset of HTML, CSS, and JavaScript than a typical website requires.

The apocryphal Picasso line "good artists borrow, great artists steal" suggests that once you are ready to code, borrowing sample code into your own projects is usually acceptable. Later, read through that code carefully until you understand how it works. Start with sample code at [look here](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples).

As a last point, _ask questions_. The [Adobe forums](https://forums.creativeclouddeveloper.com) have many helpful participants, and you will often find answers there.

## UXP for Web Developers

At first, UXP development in Adobe applications can look familiar to web developers. It uses HTML, CSS, and JavaScript structures that resemble web pages, but the result is actually Photoshop dialogs and panels.

Knowing those three technologies is not enough for UXP plugin work; you also need familiarity with the host application's API. That is the point where Web and UXP separate sharply. Websites have no equivalent to an application API, while useful work in XD, Photoshop, or any other Creative Cloud application with UXP support requires app knowledge.

The Adobe Photoshop API docs are [here](uxp-ps-reference.md). The Adobe XD API docs are [here](https://developer.adobe.com/xd/uxp/develop/reference/).

UXP plugin directories are organized differently from ordinary websites. A required [manifest file](uxp-misc.md) sits at the directory root. An icon set containing png images is also used when a panel is minimized in Photoshop. These icons are optional during development, but distribution makes them _mandatory_; submission will fail if the plugin lacks the correct icon structure.

## UXP in Photoshop vs Other Creative Cloud Applications

At this writing, [Adobe XD](https://developer.adobe.com/xd/uxp/) is the only other Creative Cloud application with UXP support. The main Photoshop-versus-XD differences are below.

### Manifest JSON

Before XD version 34, XD plugins used manifest.json 3.x. Photoshop UXP uses manifest versions 4.x and later, so those older XD manifests differ in several ways. XD versions 35 and later use the same manifest versions.

When porting an XD plugin to Photoshop, review the current [manifest.json](https://raw.githubusercontent.com/guides/uxp-guide/uxp-misc/manifest-v4/index.md) structure.

### Host Application API

Photoshop and XD are obviously different applications, so their DOMs and APIs differ substantially. Photoshop also covers many distinct use cases, each with its own objects and properties, making it much more complex than XD.

Currently, the [Photoshop API](https://raw.githubusercontent.com/ps-reference/index.md) is less mature than the API available in XD, though that changes quickly with each Photoshop release. Until UXP directly exposes every needed Photoshop object, [batchPlay](https://raw.githubusercontent.com/ps-reference/media/batchplay.md) lets you reach objects, properties, and actions that do not yet have direct UXP coverage.
