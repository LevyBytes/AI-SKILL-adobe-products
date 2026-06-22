# Guides, Index

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Custom Script Guide; Image Trace Guide; Illustrator API Guides; Template setup guide for Data Merge templates; Illustrator API.

## Custom Script Guide

Use this document as a guide for creating and executing files for the Illustrator Custom Scripts API.

Custom scripts are supported by Illustrator API. In the custom script bundle, the script author defines endpoint-specific custom attributes and values through _script.jsx_ files. Use the examples below as a model for constructing scripts.

If custom scripts are new to you, review the [Key concepts](https://raw.githubusercontent.com/getting-started/concepts/index.md) section for more background.

### Custom script ZIP structure

Package a custom script as a ZIP archive with this structure:

```text
my-capability.zip
  â”œâ”€â”€ script.jsx     â€” Script with main() function
  â””â”€â”€ manifest.json  â€” Capability metadata
```

- **script.jsx**: This script file must expose `main()` as the entry point.
- **manifest.json**: Provides the capability metadata. The capability name used in the execute URL comes from this file. For script-name requirements, see [API Capability Naming Rules](api-getting-started.md).

### Required input in a custom script

By default, the system passes a string argument named `"params"`; the script must parse it before reading its attributes.

- **params** - Details describing how the reserved input params should be handled.

| Parameter | Required | Description |
| --- | --- | --- |
| `targetDocument` | Yes | Illustrator document name to process. |
| `outputFolderPath` | Yes | Folder path where generated files are written. |
| `zip` | No | Use only for zipped assets. |
| `fontFolderPath` | No | Font folder location; requires the `zip` param. |

```json
{
    "assets": [
        {"path": "template.ai"},
        {"path": "assets.zip"},
        ...
    ],
    "params": {
        "targetDocument": "template.ai",
        "outputFolderPath": "results",
        "zip": "assets.zip",
        "assetDataFolderPath" : "assets/pngData"
        ...
    }
}
```

To use this argument, have the script parse `"params"` and pull out the values for `targetDocument` and `outputFolderPath`.

Revise existing scripts so argument handling works as expected:

**Fetching params passed to the script**

```javascript
var arg1 = paramsMap.targetDocument;
var arg2 = paramsMap.outputFolderPath;
// Some processing
```

Inside the script, every value supplied under `"params"` is available through `"paramsMap".<paramKey>`.

### Input examples

Below, a request body and script demonstrate opening a document and reading files from `"assets"`:

**Sample input request body**

```json
{
  "assets": [
    {
      "source": {
        "url": "<Pre-signed URL of the document>"
      },
      "destination": "template.ai"
    },
    {
      "source": {
        "url": "<Pre-signed URL of the document>"
      },
      "destination": "assets.zip"
    }
  ],
  "params": {
    "targetDocument": "template.ai",
    "outputFolderPath": "results",
    "zip": "assets.zip",
    "assetDataFolderPath": "assets",
    "someParam": "sampleValue"
  }
}
```

After `assets.zip` is expanded, the folder layout is:

```text
C:\\basefolder\\assets
                  â”œâ”€â”€ pngData/
                  â””â”€â”€ jpegData/
```

**Input request after transformation and before script execution**

```json
{
  "assets": [
    {
      "path": "template.ai"
    }
  ],
  "params": {
    "targetDocument": "C:\\basefolder\\template.ai",
    "outputFolderPath": "C:\\basefolder\\results",
    "assetDataFolderPath": "C:\\basefolder\\assets",
    "someParam": "sampleValue"
  }
}
```

Parameters whose names end in `"FolderPath"` are normalized into absolute paths; `"assetDataFolderPath"` shows that conversion.

**Sample code consuming the transformed input**

```javascript
var inputFile = new File(paramsMap.targetDocument);
var jpegDataPath = paramsMap.assetDataFolderPath + "/jpegData/";
var extraParam = paramsMap.someParam;

if (!inputFile.exists) {
  throw new Error("Input file not found: " + inputFile.fsName);
}

var doc = app.open(inputFile);
var outputFilePath = paramsMap.outputFolderPath + "/result_output.ai";

someProcessing(extraParam, jpegDataPath);

var outputFile = new File(outputFilePath);
doc.exportAsFormat(ExportFileType.ET_AI, outputFile);
doc.close(SaveOptions.DONOTSAVECHANGES);
```

Close the document without saving changes by calling `doc.close(SaveOptions.DONOTSAVECHANGES);`.

### Execute a custom script

Execution-request assets are downloaded to the local file system under the provided identifiers. Write the custom script so it operates on those locally available files.

The execution request carries a JSON dictionary parameter, and each parameter is delivered to the script while it runs.

Have the script export generated output into `outputFolderPath`. The exported assets are then uploaded to the destination.

Do not include `UI` code in the script, and do not invoke dialogs or popups such as `alert()`.

For complete API information, see [Custom Scripts API (public beta)](https://raw.githubusercontent.com/api/beta/index.md).

### Providing output from a custom script

The sections below show how a script should return data, files, and logs.

### If an execution succeeds

For a successful custom script run, the status API response reports `"status": "succeeded"`. That response also carries job metadata, any data the script returned, and pre-signed URLs for output assets.

**Sample success response**

```json
{
  "jobId": "<jobid>",
  "timestamp": "<timestamp>",
  "status": "succeeded",
  "data": {
    "conversionDetails": {
      "inputFile": "<Illustrator target document>",
      "outputFolder": "<outputFolderName>",
      "success": true
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<Pre-signed URL for the output asset>"
      },
      "source": "<outputFolderName>\\debug.log"
    },
    {
      "destination": {
        "url": "<Pre-signed URL for the output asset>"
      },
      "source": "<outputFolderName>\\outputResult.ai"
    }
  ]
}
```

### If an execution fails

For a failed custom script run, the status API response reports `"status": "failed"` and includes the associated error information.

**Sample failure response**

```json
{
  "jobId": "<jobId>",
  "timestamp": "<date-time>",
  "status": "failed",
  "errors": [
    {
      "error_code": "<error-code>",
      "message": "<error-message>"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `jobId` | Job's unique identifier. |
| `timestamp` | Completion time for the job. |
| `status` | Current job state. `failed` means script execution did not succeed. |
| `errors` | Array of error objects; each item includes `error_code` and a failure `message`. |

### Logging

For your own scripts, logging helps with debugging and with recording decisions made while a script runs.

Write log data to a `<debugFile>.log` file in `outputFolderPath`; the script creates that file.
If the run fails, those logs are still uploaded and the response provides a link.

## Image Trace Guide

This guide explains how to submit Image Trace jobs through the Illustrator API and monitor them afterward.

Image Trace workflows in the Illustrator API convert raster artwork into vector output. The service takes PNG/JPEG input, performs tracing in Illustrator, and, after a successful job, returns presigned URLs for SVG output.

For background on pre-signed URLs and job polling, start with [Key concepts](https://raw.githubusercontent.com/getting-started/concepts/index.md).

### Workflow

1. **Upload** the raster file to your storage service, then get a **presigned GET URL** or an equivalent temporary download URL supported by that platform.
2. **Submit** `POST https://illustrator-api.adobe.io/beta/images/vectorize`; include `input`, made up of the source URL and `mediaType`, and add optional `settings.preset` only when needed. See [Image Trace API (public beta)](https://raw.githubusercontent.com/api/beta/index.md) for schema details.
3. **Poll** `GET https://illustrator-api.adobe.io/v1/status/{jobId}` with the `jobId` or `statusUrl` returned by submission until `status` becomes `succeeded` or `failed`.
4. **Download** the SVG output from the presigned URLs listed in the `outputs` array after the job succeeds.

### Required input for Image Trace

Use this request structure:

| Parameter | Required | Description |
| --- | --- | --- |
| `input` | Yes | Details for the source file. |
| `input.source.url` | Yes | Pre-signed URL for the file supplied as input. |
| `input.mediaType` | Yes | MIME type for the supplied file; allowed choices: `image/png` or `image/jpeg`. |
| `settings` | No | Optional object that contains only `preset` (see below). |

### Example request body

```json
{
  "input": {
    "source": { "url": "https://example.blob.core.windows.net/container/art.png?sas..." },
    "mediaType": "image/png"
  },
  "settings": {
    "preset": "enhanced_general"
  }
}
```

### Request parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `settings.preset` | string | Optional. Supported values: **`enhanced_general`** for vector-style generated output and **`high_fidelity_photo`** for photorealistic tracing. Leave it out to use the service default. Any other value returns 400. |

### Status and outputs

Use `GET https://illustrator-api.adobe.io/v1/status/{jobId}` to poll Image Trace status. After `status` changes to `succeeded`, retrieve the generated SVG files through the presigned URLs in `outputs`. The same error schema used by other beta operations in this reference covers HTTP status codes and messages.

### Submit response (202 Accepted)

```json
{
  "jobId": "f7da0875-7919-486d-b915-7258c89f09e0",
  "statusUrl": "https://illustrator-api.adobe.io/v1/status/f7da0875-7919-486d-b915-7258c89f09e0"
}
```

### Status response (succeeded)

```json
{
  "jobId": "f7da0875-7919-486d-b915-7258c89f09e0",
  "status": "succeeded",
  "outputs": [
    {
      "destination": {
        "url": "<PRESIGNED_URL>"
      },
      "mediaType": "image/svg+xml"
    }
  ]
}
```

### Status response (failed)

```json
{
  "jobId": "fe0f4a1a-a213-44bd-b37b-8aa2f636449c",
  "status": "failed",
  "error_code": "<ERROR_CODE>",
  "message": "<MESSAGE>"
}
```

### Related links

- [**Image Trace API (public beta)**](https://raw.githubusercontent.com/api/beta/index.md) â€” OpenAPI reference (`submitImageVectorizeJob`, `vectorizeJobStatus`).
- [**Custom Script Guide**](https://raw.githubusercontent.com/guides/custom-scripts/index.md) â€” A separate beta flow that also relies on asynchronous job polling.

## Illustrator API Guides

For details that go beyond [API reference](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md) or [Getting Started](api-getting-started.md), use these workflow guides. They focus on specific workflows, file formats, and practical Illustrator API integration patterns.

### Available guides

### [Custom Script Guide](api-custom-script-guide.md)

This guide covers packaging and executing custom script bundles with the Custom Scripts API, including the `script.jsx` entry point, `manifest.json`, ZIP layout, and URL mapping for capability names. For request and response schemas, use it with the [Custom Scripts API (public beta)](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md) reference.

### [Image Trace guide](api-custom-script-guide.md)

For raster-to-vector (Image Trace) jobs, provide `input` (`source.url` + `mediaType`), add optional `settings.preset` when needed, poll through `GET https://illustrator-api.adobe.io/v1/status/{jobId}`, and download SVG output. Consult the [public beta API reference](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md) alongside it.

### [Template setup for Data Merge](api-custom-script-guide.md)

For the **Data merge** workflow, prepare `.ai` templates and CSV data by setting up variables, data sets, and the HelpX-linked desktop steps. Also consult the [Illustrator API](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md) reference and [Technical usage notes â€” Data Merge](api-getting-started.md).

### Related topics

- [**Authentication**](api-getting-started.md) â€” OAuth Server-to-Server credentials and access tokens used with Illustrator API.
- [**Key concepts**](api-getting-started.md) â€” Terminology, including Custom Script Guide references to API capability naming rules.
- [**Technical usage notes**](api-getting-started.md) â€” Data Merge limits and CSV auto-mapping details used by Template setup guide.

## Template setup guide for Data Merge templates

Use this guide while preparing the inputs for Data Merge jobs: an Adobe Illustrator (`.ai`) file, associated data, and the [Illustrator API](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md) workflow. It condenses the desktop-side Illustrator preparation work and links to official HelpX topics for detailed UI walkthroughs.

### When do API users need these instructions?

Before calling the [asynchronous Data merge operation](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md), create a template whose variables and bindings line up with the artwork population expected for each CSV row.

For service behavior and limits, see [Technical usage notes â€” About auto-mapping for Data Merge](api-getting-started.md), including asset size, CSV row count, and automatic variable-to-object mapping.

**Template authoring requires the Illustrator app.** Illustrator is where variables, data sets, bindings, and common CSV or XML preparation are set up, such as through the **Variables** panel. The cloud API merges **CSV** data into your uploaded template; it does not take over template creation or validation inside the product.

Use the Adobe product documentation on HelpX collected here for current guidance across these use cases:

### Merge data

**When you need this.** Use this topic when planning the complete data-driven design process in Illustrator: the template document, data file, variables, previews, and optional desktop batch export. Understanding desktop merge behavior helps you build templates that merge predictably at API scale.

The HelpX topic covers efficient data merging for dynamic, personalized design output:

- Build an Illustrator document that serves as the template.
- Create a source file using CSV or XML.
- When defining variables, save a **data merge template**; for **SVG**, use **Include Adobe Graphics Server Data** so downstream workflows can substitute variables.

[Merge data in Adobe Illustrator (HelpX)](https://helpx.adobe.com/illustrator/desktop/automate-visualize-data/automate-actions/merge-data.html)

### Set up data source files

**When you need this.** Use this topic while authoring or checking comma-delimited (`.csv`) or XML source files whose fields must match variable names and rules, especially the first row and special prefixes that tell Illustrator how each column should be interpreted.

Save data source files as comma-delimited (`.csv`) or XML. In CSV files, paragraph breaks separate records and commas or tabs separate fields; entries may contain text or image paths.

For XML, HelpX explains variable definition, the **Data Set** control in the **Variables** panel, loading and saving variable libraries, and XML changes in an external app.

[Set up data source files in Adobe Illustrator (HelpX)](https://helpx.adobe.com/illustrator/desktop/automate-visualize-data/automate-actions/set-up-data-source-files.html)

### Import data source files

**When you need this.** After the CSV or XML file is ready, use this topic to attach it to an open document, move between data sets, or refresh the artboard through the **Variables** panel prior to saving the `.ai` template that the API will use.

Import a data source through the **Variables** panel and bind variables to your data. A document can have only one selected data source file.

The HelpX page also discusses moving through data sets and notes UTF-8 CSV output from Excel for double-byte-character cases.

[Import CSV or XML data source files (HelpX)](https://helpx.adobe.com/illustrator/desktop/automate-visualize-data/automate-actions/import-data-source-files.html)

### Variable panel overview

**When you need this.** Choose this overview when you need to understand how the **Variables** panel connects data sources, variables, and multiple artwork variations from CSV or XML before using the same setup in an API-driven merge.

The article describes a design merge driven by CSV or XML data, creation of multiple artwork variations from the **Variables** panel, data set handling, and preview behavior. Pair it with the surrounding sections when variables-driven layouts are new to you.

[Variable panel overview (HelpX)](https://helpx.adobe.com/illustrator/desktop/automate-visualize-data/automate-actions/variable-panel-overview.html)

### Work with variables

**When you need this.** Refer to this page while setting variable types, binding or unbinding objects, locking variables, or using data to control visibility so the template lines up with the CSV content used during merge.

Illustrator lets you rename a variable, change its type, detach it from an object, or lock variables so some edits are blocked while binding updates remain possible.

[Work with variables in Illustrator (HelpX)](https://helpx.adobe.com/illustrator/desktop/automate-visualize-data/automate-actions/work-with-variables.html)

### Edit dynamic objects

**When you need this.** Use this reference when bound content must be updated, every object connected to variables must be selected, or object names need to remain valid for XML or SVG export flows used with an API template.

The linked topic covers:

- Setting **XML ID** in preferences.
- Selecting bound objects through the **Variables** panel menu.
- Editing artboard text, replacing linked images, changing graph data, or changing **Layers** panel settings for variables that control visibility.

[Edit dynamic objects in Adobe Illustrator (HelpX)](https://helpx.adobe.com/illustrator/desktop/automate-visualize-data/automate-actions/edit-dynamic-objects.html)

### Related topics

- [**API reference**](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md) - Job status and data merge endpoints.
- [**Technical usage notes**](api-getting-started.md) - Data Merge limits plus CSV-header-to-layer-name auto-mapping.
- [**Authentication**](api-getting-started.md) - Access tokens and credentials for Illustrator API.

## Illustrator API

[Figure: A firefly with its path traced by a marker pen](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/illustrator-hero.png)

Automate artwork scaling for many delivery contexts, from business cards and billboards to digital ads wherever your audience encounters them.

### Overview

Adobe Illustrator is the vector graphics application used to make logos, icons, drawings, typography, and complex illustrations for any medium.

Firefly's Illustrator API provides automation for Adobe Illustrator workflows such as rendition, preview, data merge, custom script, image trace, Recolor, Manifest, Document operations, and related tasks.

For service details, open the [Illustrator API reference](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md).

### Illustrator Data Merge service

Data merge uses Adobe Illustrator to build document variations by replacing placeholder variables with data from external sources.
For example, event badges can receive different participant names, and web banners or postcards can vary images without recreating the original artwork.

Start with one Illustrator document and a data source file; after importing names or images from that source, quickly generate the variations.

### Illustrator Rendition service

The Rendition service converts Adobe Illustrator files into several output formats. It handles .ai documents and returns one converted file for web-ready or print-ready use.

### Custom Scripts (beta)

<inlinealert variant="info" slots="heading, text"/>

Public beta

Custom Scripts services are public beta offerings. All users can access them, but APIs in this section may change.

Custom Scripts (beta) runs custom scripts for Adobe Illustrator and supports broad scripting workflows for processing and manipulating documents.

Operations:

- [Submit a custom script](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md#operation/registerCustomScriptCapability)
- [Execute a custom script](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md#operation/executeCustomScriptCapability)

For service details, see the [Custom Scripts API (public beta)](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md) reference.
For authoring and execution guidance, see the [Custom Script Guide](api-custom-script-guide.md).

### Image Trace (beta)

<inlinealert variant="info" slots="heading, text"/>

Public beta

Image Trace is available as a public beta service. All users can use it, but APIs in this section may change.

In the Image Trace workflow, you submit raster inputs (PNG or JPEG) and receive only **SVG** output (`image/svg+xml`). Inputs are supplied through presigned URLs, status is checked with `GET https://illustrator-api.adobe.io/v1/status/{jobId}`, and the completed SVG is downloaded from the presigned URL. No additional output formats are produced.

- [Submit a Image Trace job](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md#operation/submitImageVectorizeJob)

For request and response structures, consult the [Image Trace API (public beta)](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md) reference; for the complete workflow, use the [Image Trace guide](api-custom-script-guide.md).

### Discover

### Get started

[**Getting Started**](api-getting-started.md)

Begin with authentication and the other required setup items.

[**Try the API**](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md)

Use Swagger UI to try the API, inspect endpoint descriptions, and make calls.

### Custom Scripts and Image Trace API (public beta)

[**Try the Illustrator public beta API**](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md)

Browse the public beta reference covering Custom Scripts and Image Trace.

### Resources

- [What is Adobe Illustrator?](https://www.adobe.com/learn/illustrator/web/what-is-illustrator?learnIn=1&locale=en)
- [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)
- [Prepare a data source file](https://helpx.adobe.com/uk/illustrator/using/data-driven-graphics-templates-variables.html#prepare-data-source-file)
