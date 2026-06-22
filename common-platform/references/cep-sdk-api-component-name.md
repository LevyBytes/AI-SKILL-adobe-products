# .Meta, Code Of Conduct, Contributing, Client Side Debugging ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: <!SDK/API/COMPONENT NAME>; Adobe Code of Conduct — Our Pledge; Contributing; Client-side debugging; Exporting files from the host app; Submit an issue — Topic.

## <!SDK/API/COMPONENT NAME>

<!INTRODUCTORY BLURB (2-3 sentences about what you can do with this API.)>

![](<!IMAGE SRC URL HERE (optional image for UI components)>)

This guide covers <!OBJECTIVE>.

At completion, the <!ANDROID || IOS || WEB || ETC> app will:

1. <!DOES THIS>
1. <!DOES THIS>
1. <!DOES THIS>

### GitHub

A companion repo for this developer guide is available [on GitHub](<!LINK HERE>).

Follow every instruction in the `readme`.

### Technology Used

- Supported Host Applications: _(example: Photoshop, Illustrator, InDesign)_
- Libraries/Frameworks/APIs: _(example: Node JS, Express JS, jQuery, Dropbox Auth API)_

### Prerequisites

Before using this guide, make sure the software is installed and the steps in these guides are complete:

- [Getting Started](<!LINK HERE>)
- [Another Guide](<!LINK HERE>)

_**Note:**_ <!OPTIONAL LIST; REMOVE OR EDIT AS NECESSARY>

- _This API requires the user to be **logged in with their Adobe ID**._
- _Before your app is released, Adobe must [approve your API Key for **Production Mode**](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/!LINK)._

### Configuration

<!BUILD SETTINGS SPECIFIC TO THIS COMPONENT>

### Troubleshooting and Known Issues

Common-issue articles are available [here](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/!LINK).

For bugs and feature requests, submit tickets [here](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/!LINK).

### Other Resources

- [<!NAME>](<!LINK HERE>)
- [<!NAME>](<!LINK HERE>)
- [<!NAME>](<!LINK HERE>)

## Adobe Code of Conduct — Our Pledge

Contributors and maintainers commit to an open, welcoming project. Participation in the project and community must remain harassment-free for everyone, including people of any age, disability, body size, ethnicity, nationality, level of experience, personal appearance, race, religion, gender identity and expression, sexual orientation, or sexual identity.

### Adobe Code of Conduct — Our Standards

Behavior that helps create a positive environment includes:

- Choosing language that is welcoming and inclusive
- Respecting viewpoints and experiences that differ from your own
- Receiving constructive criticism with grace
- Keeping the community's best interests central
- Showing empathy toward other community members

Participant behavior that is unacceptable includes:

- Sexualized language or imagery, plus unwelcome sexual attention or advances
- Trolling, insulting/derogatory remarks, and personal or political attacks
- Harassment in public or private contexts
- Sharing another person's private information, such as a physical or electronic address, without explicit permission
- Any other conduct that would reasonably be viewed as inappropriate in a professional setting

### Adobe Code of Conduct — Our Responsibilities

Maintainers of the project define what counts as acceptable behavior and should respond to unacceptable behavior with corrective action that is both fair and appropriate.

When contributions conflict with this Code of Conduct, comments, commits, code, wiki edits, issues, and other contributions may be removed, edited, or rejected by maintainers. They may also ban a contributor temporarily or permanently for other conduct they consider inappropriate, threatening, offensive, or harmful.

### Adobe Code of Conduct — Scope

This Code of Conduct governs both project spaces and public spaces when someone represents the project or community. Representation includes use of an official project e-mail address, posts from an official social media account, or service as an appointed representative at an online or offline event. Project maintainers may define and clarify additional cases of representation.

### Adobe Code of Conduct — Enforcement

Report abusive, harassing, or otherwise unacceptable behavior by contacting the project team at Grp-opensourceoffice@adobe.com. Every complaint will be investigated and reviewed, with a response chosen according to what the circumstances require. The project team must keep the reporter of an incident confidential. Additional enforcement-policy details may be published separately.

If project maintainers fail to follow or enforce the Code of Conduct in good faith, other members of the project's leadership may decide on temporary or permanent repercussions.

### Adobe Code of Conduct — Attribution

Basis for this Code of Conduct: [Contributor Covenant][homepage], version 1.4.

Version page: [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

## Contributing

Thank you for contributing.

Use these guidelines when contributing to this project.

### Contribution guidelines

This repo accepts issues and pull requests for _exactly 2 types of things_:

1. Issues/PRs about the guides included in this repo.
1. Issues/PRs about the samples included in this repo.

For issues or pull requests about anything else, including CEP itself, use the related repo instead.

Before making a major change or adding a new contribution, open an issue so we can discuss it first.

### Code Of Conduct

The project follows the Adobe [code of conduct](cep-sdk-api-component-name.md). Participation means agreeing to uphold that code. Send reports of unacceptable behavior to Grp-opensourceoffice@adobe.com.

### Contributor License Agreement

Third-party contributions to this project require a signed contributor license. With that license, Adobe can redistribute your contributions within the project.

Sign our [CLA](http://adobe.github.io/cla.html). An Adobe CLA only has to be submitted once; if you already completed one, you are likely all set.

### Code Reviews

Send contributions as pull requests; project committers review them before acceptance. For submission details, consult [GitHub guidance for pull requests](https://help.github.com/articles/about-pull-requests/).

## Client-side debugging

Use this guide to configure client-side debugging for CEP panels.

### Contents

1. [Prerequisites](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#prerequisites)
1. [Set the Debug Mode](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#set-the-debug-mode)
1. [Create a `.debug` File](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#create-a-debug-file)
1. [Write Contents for the `.debug` File](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#write-contents-for-the-debug-file)
1. [Debugging in Chrome](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#debugging-in-chrome)
1. [Troubleshooting common issues](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#troubleshooting-common-issues)
   1. [Getting a "not properly signed" alert](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#getting-a-not-properly-signed-alert)
   1. [Getting a blank debug console](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#getting-a-blank-debug-console)
1. [Next Steps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#next-steps)
1. [Other Resources](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#other-resources)

### Prerequisites

Before using these steps, complete every step in the [Getting Started with CEP Extensions Guide](cep-readme.md).

### Set the Debug Mode

Begin by changing the Adobe preference below so the host application, such as Photoshop or InDesign, does not warn when extensions are unsigned. For the same setup, see the [HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md), especially its [unsigned-extension debugging section](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions):

> Windows: In regedit, open `HKEY_CURRENT_USER`/Software/Adobe/CSXS.8, then create `PlayerDebugMode` as type `string` and set it to `1`.

> Mac: Run this in Terminal: `defaults write com.adobe.CSXS.8 PlayerDebugMode 1`

[Figure: This is what Regedit looks like in Windows 10. You can access it using CMD, too.](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/RegistryEditor.png) _On Windows, Regedit is located in (C:\Windows\regedit). You can access it using CMD, too._

[Figure: Here's what Terminal looks like in MacOS Sierra.](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/Terminal.png)_On macOS, Terminal is located in (Applications > Utilities > Terminal)._

### Create a `.debug` File

After that, add a `.debug` file to the extension. Place the `.debug` file at the root level of the extension folder.

[Figure: Your panel's directory](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/yourpaneltree.png)

For this file to function, it has to be hidden. Starting the file name with `.` marks it as hidden. A simple approach is to open your preferred code editor, such as Sublime Text or Brackets, and save a new file named `.debug`.

On MacOS Sierra and later, hidden files can be shown with the `Command Shift +` shortcut.

On Windows 10, open File Explorer view options and enable the Hidden Files checkbox.

[Figure: How to see your hidden files in Windows 10.](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/HiddenItems.png)_How to see your hidden files in Windows 10._

### Write Contents for the `.debug` File

Add the elements below to the `.debug` file; notes **#1-2** describe what each placeholder represents:

```html

```

1. In the sample `.debug` file, the Extension ID must be identical to the Extenstion ID declared in `manifest.xml`; [CEP setup guidance](https://github.com/Adobe-CEP/Getting-Started-guides/blob/master/readme.md) explains the surrounding setup.

1. For every supported app, include its _Host IDs_ and pair each one with the debugging port you want to use. This sample uses Photoshop Host IDs. [The CEP Cookbook lists all host application ports](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md).

### Debugging in Chrome

In Chrome, open `http://localhost:8088/`, or use the port you specified earlier in the `.debug` file.

[Figure: CEF Remote Debugging in Chrome](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/CEFdebugger.png)
_CEF Remote Debugging in Chrome_

When the panel is running correctly, Chrome shows the extension name as a clickable link, matching the image above. Selecting that link opens the JavaScript Console in Chromium DevTools. Logs, errors, and other extension output appear in the JavaScript Console.

[Figure: The JavaScript Console in Chrome](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/DeveloperTools.png)_The JavaScript Console in Chrome_

In the following sample, `console.log()` writes `"I can't believe you clicked!"`. That output comes from the `<script>` element inside `index.html`:

```html
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>

    <button id="myButton">Click this!</button>

    <script type="text/javascript">
      /* Add a click handler to the button */
      document.getElementById("myButton").addEventListener("click", function () {
        /* When the button is clicked, output a string to the JavaScript Console */
        console.log("I can't believe you clicked!");
      });
    </script>
  </body>
</html>
```

### Troubleshooting common issues

### Getting a "not properly signed" alert

A successful change from [Set the Debug Mode section](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#set-the-debug-mode) does not show any visible confirmation. If the setting is wrong, the host displays this unsigned-extension error:

[Figure: _The “Your Panel Name” extension could not be loaded because it was not properly signed._](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/debugging_assets/UnsignedError.png)**The “Your Panel Name” extension could not be loaded because it was not properly signed.**

Extension signing can wait until the extension is ready for users; see the Cookbook's [extension-signing notes](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#signing-extensions) when that time comes.

If debug mode is already set and the same error still appears, [quit the **cfprefsd** process](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#special-notes-for-mac-109-and-higher). Another useful reference is an Adobe forums [debug-mode troubleshooting thread](https://forums.adobe.com/thread/2444749).

### Getting a blank debug console

When Chrome opens an empty debug console, [review the contents of your `.debug` file again](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging/readme.md#write-contents-for-the-debug-file):

- Is the extension ID in `.debug` identical to the one in `manifest.xml`?
- Did you list each supported host app with the correct Host ID(s)?
- Is `localhost` being opened on the same port named in the debug console?

If the issue continues, follow the process in [this Adobe forum discussion](https://community.adobe.com/t5/exchange-discussions/debug-console-not-working-correctly/m-p/9608300).

### Next Steps

After the basic workflow, use these guides and samples to move into common intermediate and advanced CEP extension topics:

- [Exporting files from the host app](cep-sdk-api-component-name.md)
- [Network requests and responses with Fetch](cep-network-requests-and-responses-with-fetch.md)

### Other Resources

- [CEP Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_11`.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md)
- [CEP Samples repo](https://github.com/Adobe-CEP/Samples)
- [Adobe Photoshop Scripting Reference Docs](https://github.com/Adobe-CEP/CEP-Resources/tree/master/Documentation/Product%20specific%20Documentation/Photoshop%20Scripting)
- [Adobe Illustrator Reference Doc](https://ioconsolerykerprodcdn.azureedge.net/static/installers/ai/scripting/2021/scripting_guide/Illustrator%20Scripting%20Guide.pdf)
- [InDesign Reference Guide](https://github.com/Adobe-CEP/CEP-Resources/blob/master/Documentation/Product%20specific%20Documentation/CEP%20for%20InDesign%20Developers.pdf)

## Exporting files from the host app

This walkthrough uses CEP (Common Extensibility Platform) with ExtendScript to export a saved asset from Adobe Creative Cloud applications.

At completion, the CEP extension will:

1. Offer several export choices through buttons in a panel
1. Save the active document in one of these formats:
   - PDF
   - JPG
   - PNG
   - Original

### Contents

1. [Technology Used](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#technology-used)
1. [Prerequisites](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#prerequisites)
1. [Configuration](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#configuration)
1. [Client-side: HTML Markup](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#client-side-html-markup)
1. [Client-side: Creative Cloud host app interaction](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#client-side-creative-cloud-host-app-interaction)
1. [Host app: Automation with ExtendScript](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#host-app-automation-with-extendscript)
1. [Other Resources](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app/readme.md#other-resources)

### Technology Used

- Supported Host Applications: Photoshop, Illustrator, InDesign
- Libraries/Frameworks/APIs:
  - Adobe-specific: [CEP](https://github.com/Adobe-CEP/CEP-Resources/), ExtendScript for Photoshop, Illustrator, and InDesign

### Prerequisites

Read and finish these resources before continuing with this guide.

- [Getting Started with CEP Extensions](cep-readme.md)
- [Debugging your Adobe panel](https://medium.com/adobe-io/debugging-your-adobe-panel-cf73f00f6961)

### Configuration

### Set up the sample extension

Use the following steps to install and start the sample extension for this guide:

1. Put the `./com.cep.export/` directory into your `extensions` folder. If the location of `extensions` is unclear, consult the Cookbook's [extension-folders section](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders).

1. Copy `CSInterface.js` from the [CEP resources repository](https://github.com/Adobe-CEP/CEP-Resources/) into `./com.cep.export/client/js/lib/CSInterface.js`

### Configure `manifest.xml`

As described in the [Getting Started guide](cep-readme.md), `manifest.xml` is where the extension declares supported Creative Cloud host apps and versions, among other settings.

This sample targets three Adobe applications: Photoshop, Illustrator, and InDesign.

Inside `<HostList>`, include these entries:

```

```

The version values in the example above deliberately cover only one version of each host app to keep the demo simple. Real extensions often target a range of host app versions. For multiple-version support, use the Cookbook's [extension-manifest section](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-manifest).

### Client-side: HTML Markup

CEP extension interfaces are built with HTML. In this sample, the HTML lives at `./com.cep.export/client/index.html`; its code is below, with comments **#1-2**:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Export Example App</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
  </head>
  <body>
    <h1>Export Example App</h1>

    <div id="button-group">
      <button id="export-original" class="btn btn-primary btn-block">Original</button>
      <button id="export-pdf" class="btn btn-primary btn-block">PDF</button>
      <button id="export-jpg" class="btn btn-primary btn-block">JPG</button>
      <button id="export-png" class="btn btn-primary btn-block">PNG</button>
    </div>

    <script type="text/javascript" src="js/lib/CSInterface.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>
```

This guide does not explain CSS styling, but the sample panel stylesheet is available at `./com.cep.export/client/styles/style.css`.

### Client-side: Creative Cloud host app interaction

### Create references to the UI elements

Create variables for the button group container `div` and for each button added to `index.html`:

```javascript
var buttonGroup = document.querySelector("#button-group");
var pdfButton = document.querySelector("#export-pdf");
var jpgButton = document.querySelector("#export-jpg");
var pngButton = document.querySelector("#export-png");
var originalButton = document.querySelector("#export-original");
```

The next step uses these UI element references.

### Add click handlers to the buttons

Next, attach click handlers to all four buttons:

```javascript
pdfButton.addEventListener(
  "click",
  function () {
    exportWithType("pdf");
  },
  false,
);
jpgButton.addEventListener(
  "click",
  function () {
    exportWithType("jpg");
  },
  false,
);
pngButton.addEventListener(
  "click",
  function () {
    exportWithType("png");
  },
  false,
);
originalButton.addEventListener(
  "click",
  function () {
    exportWithType();
  },
  false,
);
```

Each handler binds an anonymous function to the click event, and that function calls `exportWithType()`. A later section creates this helper.

### Instantiate `CSInterface`

Every CEP panel needs a `CSInterface` instance; one of its jobs is communication with the host app scripting engine:

```javascript
var csInterface = new CSInterface();
```

The following step uses the `csInterface` variable.

### Communicate with the host app

Use `csInterface.evalScript()` to call into the host app scripting engine. For a reminder about `.evalScript()`, see the [Getting Started guide](cep-readme.md).

In this extension, the user can export the current asset to its existing directory as any of four file types. The `exportWithType(type)` helper below sends the request through `evalScript()`:

```javascript
function exportWithType(type) {
  csInterface.evalScript(`exportFile("${type}")`, function (path) {
    alert("File saved at " + path);
  });
}
```

The `.evalScript()` call can be read this way:

> Host app, run the `exportFile()` function from my ExtendScript file.

The next section must define that ExtendScript function.

### Host app: Automation with ExtendScript

ExtendScript can automate Photoshop, Illustrator, InDesign, and other CC host apps, and it exposes many features for host-app scripting; the Scripting Guides cover additional ExtendScript capabilities.

For this extension, the ExtendScript file is `./com.cep.export/host/index.jsx`.

### Create an ExtendScript function

Only one function is needed in this sample extension's `index.jsx` file:

```javascript
function exportFile(type) {
  // Code will go here
}
```

The function receives the `type` string argument passed earlier by the client-side `.evalScript()` call.

### Keep the common elements at the top

ExtendScript can work with the host app DOM and elements inside an open document, among other capabilities. DOM methods and properties differ by host app. Still, this extension targets three host applications that share several useful elements.

Put the shared code at the beginning of the function, as shown here with comments **#1-4**:

```javascript
function exportFile(type) {
	/* 1) get the full file path */
	var filePath = app.activeDocument.fullName;

	/* 2) split the path to get the extension of the file */
	var splitPath = filePath.toString().split('.');
	var originalExtension = splitPath[splitPath.length-1];

	/* 3) split the path to get the folder path */
	var folderPath = filePath.toString().split('/').slice(0,-1).join('/') + '/';

	/* 4) sanitize the full path */
	var sanitizedFilePath = File(filePath).fsName;
	...
}
```

### Add logic to distinguish between different host apps

Because host-side scripting APIs vary across applications, branch the work according to the app running the extension:

```javascript
if (app.name == "Adobe Illustrator") {
  // ...
} else if (app.name == "Adobe Photoshop") {
  // ...
} else if (app.name == "Adobe InDesign") {
  // ...
}

// ...
```

With that branch in place, the extension can behave differently in Illustrator, Photoshop, and InDesign.

### Export the file formats

Inside every `if` block, add more logic for the requested export type.

The Photoshop example below is marked with comments **#1-6**:

```javascript
if (type == "pdf") {
  /* 1) Set PDF save options */
  pdfSaveOptions = new PDFSaveOptions();
  pdfSaveOptions.optimization = true;

  /* 2) Use saveAs() to export the PDF document (note that you cannot use exportFile() for a PDF) */
  app.activeDocument.saveAs(File(sanitizedFilePath), pdfSaveOptions);
} else if (type == "jpg") {
  /* 3) Set JPEG save options */
  var exportOptions = new ExportOptionsJPEG();
  exportOptions.blurAmount = 2;
  exportOptions.matte = true;
  exportOptions.qualitySetting = 100;

  /* 4) Use exportFile() to export the JPEG document */
  app.activeDocument.exportFile(File(sanitizedFilePath), ExportType.JPEG, exportOptions);
} else if (type == "png") {
  /* 5) Set PNG save options */
  var exportOptions = new ExportOptionsPNG8();
  exportOptions.matte = true;

  /* 6) Use exportFile() to export the PNG document */
  app.activeDocument.exportFile(File(sanitizedFilePath), ExportType.PNG8, exportOptions);
}
```

This example is specific to Photoshop. ExtendScript methods and properties can change with the host app, but the same logic applies. For additional patterns, inspect this guide's sample extension code.

### Other Resources

For more ExtendScript exploration, use these reference documents:

- [Adobe Photoshop Reference Doc](https://www.adobe.com/devnet/photoshop/scripting.html)
- [Adobe Illustrator Reference Doc](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf)
- [InDesign Reference Guide](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/indesign/sdk/cs6/scripting/InDesign_ScriptingGuide_`JS_JP`.pdf)

## Submit an issue — Topic

Issue category:

- [ ] Guides included in this repo.
- [ ] Samples included in this repo.

### Submit an issue — Versions

- [ ] CEP version(s) used [must be `8.x+` for this repo]:
- [ ] Supported CC app(s) and version(s):
