# Readme

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

CEP (Common Extensibility Platform) is used to create extensions for Adobe Creative Cloud applications such as Photoshop, Illustrator, InDesign, After Effects, and others. CEP-built extensions let users adapt their Creative Cloud environment to fit specialized workflows.

This guide introduces the basics for building a CEP extension through 6 quick steps.

The finished walkthrough produces a CEP extension that uses a local-folder file to open a new document.

[Figure: Example extension: opening a new file in Photoshop](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/extension.gif?raw=true)

After completing the guide, review the [Next Steps section](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#next-steps) for guides and samples on debugging and other intermediate or advanced work, including host-app export flows and network-request patterns.

## Contents

- [Technology Used](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#technology-used)
- [Prerequisites](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#prerequisites)
- [Development Steps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#development-steps)
  - [1. Decide the folder structure](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#1-decide-the-folder-structure)
  - [2. Configure Your Extension in `manifest.xml`](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#2-configure-your-extension-in-manifestxml)
  - [3. Download `CSInterface.js`](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#3-download-csinterfacejs)
  - [4. Write Your Front-end Code](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#4-write-your-front-end-code)
    - [Create HTML Markup](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#create-html-markup)
    - [Write Your JavaScript Code](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#write-your-javascript-code)
  - [5. Write Your ExtendScript Code](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#5-write-your-extendscript-code)
  - [6. Launch your extension in the host app](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#6-launch-your-extension-in-the-host-app)
- [Next Steps](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#next-steps)
- [Other Resources](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/readme.md#other-resources)

## Technology Used

- Supported Host Applications: Photoshop
- Libraries/Frameworks/APIs:
  - Adobe-specific: [CEP](https://github.com/Adobe-CEP/CEP-Resources), [ExtendScript for Photoshop](https://www.adobe.com/devnet/photoshop/scripting.html)

## Prerequisites

Familiarity with HTML, CSS, and JavaScript basics.

## Development Steps

### 1. Decide the folder structure

Start by choosing where the extension code will live. You can install the extension at the root level or user level, based on who should have permission to use it; the [CEP 8 HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders) lists the actual paths.

Aside from the required `CSXS` folder that holds `manifest.xml`, you can organize the remaining folders flexibly. One recommended layout is:

[Figure: Extension structure](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/.meta/readme-assets/extension-structure.png?raw=true)

- `/CSXS` -- stores `manifest.xml`, which holds the extension configuration data. As mentioned earlier, this folder is required before the extension can appear in the host app.

- `/client` -- contains front-end HTML, JavaScript, and CSS, along with Adobe's required `CSInterface.js` library and any third-party libraries you choose to include, such as jQuery.

- `/host` -- contains ExtendScript files for the extension, such as `index.jsx` in this example. These files are used to reach and control most host-app features.

This layout separates responsibilities clearly by assigning client-side code and host-app code to different folders.

### 2. Configure Your Extension in `manifest.xml`

`manifest.xml` supports many configuration choices, but this guide keeps the focus on the minimum needed setup. For more detail, review the [manifest schema](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/ExtensionManifest_v_7_0.xsd).

For a minimal configuration, review these XML elements and attributes in `manifest.xml`. Match them to comments (**#1-7**) in the following code:

1. **ExtensionBundleId**: The bundle ID for the extension, for example `com.my.test`
1. **Extension Id**: The extension's ID. A common pattern combines `ExtensionBundleID` + `.panel` = `com.my.test.panel` (the manifest contains this ID in two places)
1. **Host Name & Version**: The host application IDs and versions the extension is designed to support. For details, see the [Adobe CEP HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep)
1. **MainPath**: The path to `index.html`, written relative to the top level directory of the code base
1. **ScriptPath**: The path to `index.jsx`, written relative to the top level directory of the code base
1. **Menu**: The extension name displayed in the host app(s) dropdown menu
1. **Size**: The starting dimensions for the extension

```xml
<?xml version='1.0' encoding='UTF-8'?>








```

With this configuration, Photoshop v19 displays a panel-type extension named "My First Panel" at 500px x 350px.

### 3. Download `CSInterface.js`

Download the latest [CEP `CSInterface.js` library](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/CSInterface.js). This library lets the extension be controlled and communicate with the application.

The library can be placed anywhere in the codebase, provided that `index.html` includes it as a `<script>` dependency.

For this example workflow, put the downloaded `CSInterface.js` file directly under `/client`.

### 4. Write Your Front-end Code

Next, use HTML, CSS, and JavaScript to build the extension interface around your own goals. The basic files are shown below.

### Create HTML Markup

CEP extension interfaces are written in HTML. In this example, put the HTML document at `/client/index.html` and use this HTML; comments **#1-3** identify the pieces:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Your First Panel</title>
  </head>
  <body>
    <h1>Your first panel</h1>

    <button id="open-button">Open</button>

    <script type="text/javascript" src="CSInterface.js"></script>
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
```

In the code above, `index.html` loads the `CSInterface.js` library as a `<script>` dependency.

### Write Your JavaScript Code

Create a `CSInterface` instance. That `CSInterface` instance provides methods and properties used while building the extension.

One useful method is `evalScript()`, which passes communication between client-side JavaScript and ExtendScript code, covered in the next section. Comments **#1-3** identify each part:

```javascript
/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* 2) Make a reference to your HTML button and add a click handler. */
var openButton = document.querySelector("#open-button");
openButton.addEventListener("click", openDoc);

/* 3) Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
  csInterface.evalScript("openDocument()");
}
```

For more `CSInterface` capabilities, consult [the CEP Github repo](https://github.com/Adobe-CEP/CEP-Resources).

### 5. Write Your ExtendScript Code

ExtendScript differs from client-side JavaScript because it can work directly with host application functionality, including opening, editing, and exporting documents, along with almost anything else available in the host application.

This example defines a function that opens a single file in the host application. Replace the sample file name and path with a file that exists on your local system.

```javascript
function openDocument() {
  var fileRef = new File("~/Downloads/myFile.jpg");
  var docRef = app.open(fileRef);
}
```

When client-side JavaScript invokes `csInterface.evalScript("openDocument()")`, it calls this `openDocument()` helper function.

### 6. Launch your extension in the host app

The Creative Cloud host app supported by the extension determines where users find and open it.

Because this guide's sample extension supports Photoshop, the extension is available at:

> Window > Extensions > My First Panel

If launching the extension shows an unsigned-extension alert, use the Client-side debugging guide's ["Set the Debug Mode" section](cep-sdk-api-component-name.md).

## Next Steps

After learning the basics, use these guides and samples to explore common intermediate and advanced CEP topics:

- [Client-side debugging](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Client-side%20Debugging)
- [Package Distribute Install](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Package%20Distribute%20Install)
- [Exporting files from the host app](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Exporting%20files%20from%20the%20host%20app)
- [Network requests and responses with Fetch](https://raw.githubusercontent.com/Adobe-CEP/Getting-Started-guides/master/Network%20requests%20and%20responses%20with%20Fetch)

## Other Resources

- [CEP Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_8`.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md)
- [CEP Samples repo](https://github.com/Adobe-CEP/Samples)
- [Adobe Photoshop Reference Doc](https://www.adobe.com/devnet/photoshop/scripting.html)
- [Adobe Illustrator Reference Doc](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf)
- [InDesign Reference Guide](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/indesign/sdk/cs6/scripting/InDesign_ScriptingGuide_JS.pdf)
