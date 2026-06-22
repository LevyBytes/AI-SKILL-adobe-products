# Concepts, Deprecation Announcement, Storage Solutions, Technical Usage Notes ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Photoshop API Key Concepts; V1 deprecation announcement; Authentication; Storage Solutions; Technical Usage Notes; UXP Scripts.

## Photoshop API Key Concepts

These Photoshop app concepts are important background for major Photoshop API features.

### Overview

The Photoshop API uses several ideas that also appear in the Photoshop app when images are created or enhanced. New users, or anyone needing a stronger mental model of the Photoshop API, should review this page.

### About layers and the target layer

In the Photoshop app, **layers** let separate image elements sit in a stack. Think of them as clear sheets placed over one another, so each part of an image can be edited on its own. Paint, placed photos, or vector content can go on one layer without changing material on the others. The Photoshop app shows these layers in the Layers Panel.

An example image helps illustrate the concept. This version contains three layers:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/all-layers.png?raw=true)

When the image is broken apart by layer, it appears this way:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/decompose-layers.png?raw=true)

Viewing a single layer, such as the earth layer in the image, gives this result:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/layers-earth.png?raw=true)

The **target layer** exists in both the Photoshop app and the API. It is the selected layer, so operations affect only that layer.

For instance, if the astronaut is the target layer and you resize it, only that astronaut layer changes, producing this outcome:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/astronaut-resize.png?raw=true)

Layers created in the Photoshop app break an image into practical parts. With the Photoshop API, edits can then be scoped to a target layer for isolated image changes.

Layer background: [Photoshop, layer basics](https://helpx.adobe.com/photoshop/using/layer-basics.html).

### About selections

In the Photoshop app, a **selection** marks the portion of an image intended for enhancement or adjustment. Like a target layer, an operation is limited to the selected area.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/astronaut-selection.png?raw=true)

In the image above, the pink region is the selection created in the Photoshop app. The Photoshop API can then adjust that exact region, such as by inserting a new background or expanding the selection.

Selection background: [Photoshop, Getting started with selections](https://helpx.adobe.com/photoshop/using/making-selections.html).

### About masks

In the Photoshop app, **masks** control which parts of layer content remain visible while leaving the underlying content intact. They show or hide selected parts of a layer, which provides more flexibility than removing pixels.

After creating a mask in the Photoshop app, Photoshop API can work with that portion of the image. Masking is useful for:

- Building image composites.
- Changing background colors.
- Removing or cutting out objects.
- Restricting image adjustments so only selected areas are affected instead of the whole layer.

For example, this image uses earth and space as the background layer, with the moon layer in front.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-background.png?raw=true)

For the moon layer, an area can be marked for masking:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-outline.png?raw=true)

Once the mask is applied, the earth and space background on the lower layer becomes visible through the masked area:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-applied.png?raw=true)

Selections and layers differ from masks because enhancements target the mask itself rather than the image under it. This supports advanced image changes while preserving the original images.

Mask background: [Photoshop, Mask Layers](https://helpx.adobe.com/photoshop/using/masking-layers.html).

## V1 deprecation announcement

Photoshop API v1 reaches **end-of-life (EoL) on July 31 of 2026**.

If you currently use v1 endpoints, begin planning a move to Photoshop API v2. Version 2 offers these benefits:

- API contracts that are modern and consistent
- Better reliability and scalability
- A foundation designed to support future workflows more easily.

To avoid service disruptions, migrate to Photoshop API v2 before **August of 2026**. The FAQs below provide guidance for the transition.

### What should I do?

Move to Photoshop API v2 before **August of 2026** so service interruptions are avoided.

### Why is Adobe making this change?

Photoshop API v1 is the first-generation, Firefly-powered Photoshop API set that customers used for automating Photoshop operations and image workflows. Because v1 depends on legacy infrastructure, Adobe is retiring it during the move toward Photoshop API v2's modern architecture.

### When is this happening?

Deprecation Notice: April 20, 2026.

End of Life (EOL): July 31, 2026.

### Where can I find resources?

Current broad Photoshop API information appears via the [API Reference page](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/index.md).

Find Photoshop API v2 migration guides through the [Photoshop API v2 guides page](https://raw.githubusercontent.com/guides/photoshop-v2/index.md).

### Who can help me with migration?

For migration questions and transition guidance, contact your Adobe Customer Success Manager and Support Team.

## Authentication

Server-to-server authentication credentials let an application's server create access tokens and call APIs.

### Overview

An application can generate an access token without asking an end user to sign in or consent. It authenticates with its own credentials, the Client ID and Secret, and uses those credentials to create access tokens. Those tokens allow the application to call Adobe APIs and services for itself.

This pattern is also called "two-legged OAuth".

For automated token generation, call the endpoint with standard OAuth2 libraries. Industry-standard libraries are the fastest and safest way to integrate OAuth. Choose the OAuth 2.0 library for your application carefully. Your team's projects probably already use OAuth libraries to connect to other APIs. Use those libraries to regenerate tokens automatically when they expire.

### Prerequisites

Coordinate with your Adobe representative to obtain these items:

- An account for [Adobe Developer Console](https://developer.adobe.com/).
- A current Enterprise contract that includes Firefly Services.
- A [project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/) with completed Photoshop API [OAuth Server-to-Server credentials set up](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/).
- Access to **Client ID** and **Client Secret** values in the [Adobe Developer Console project](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/#api-overview). Keep these credentials secure, and never place them in client-side or public code.

### Retrieve an access token

API calls are validated with a temporary access token. Use the Developer Console to [generate this token directly](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s#generate-token),
or follow the process below.

1. In a secure terminal, make **Client ID** and **Client Secret** available as environment variables so later commands can read them:

```bash

```

2. Send a POST request to generate access tokens programmatically:

```bash
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=client_credentials' \
-d "client_id=$PS_FF_SERVICES_CLIENT_ID" \
-d "client_secret=$PS_FF_SERVICES_CLIENT_SECRET" \
-d 'scope=openid,AdobeID,read_organizations'
```

These parameters are required:

- `client_id`: Use the Client ID.
- `client_secret`: Use the Client secret.
- `scope`: Use `openid`, `AdobeID`, and `read_organizations` as the scopes.

The response resembles this example:

```json
{
  "access_token": "exampleAccessTokenAsdf123",
  "token_type": "bearer",
  "expires_in": 86399
}
```

Access tokens remain valid for 24 hours. For OAuth best practices, create a replacement token every 23 hours.

3. Export the access token as an environment variable:

```bash

```

### Execute an API call

After the token exists, make the first API request:

```shell
curl --request GET \
  --url https://image.adobe.io/pie/psdService/hello \
  --header "Authorization: Bearer $PS_FF_SERVICES_ACCESS_TOKEN" \
  --header "x-api-key: $PS_FF_SERVICES_CLIENT_ID"
```

The response is:

```bash
Welcome to the Photoshop API!
```

Congratulations! The first Photoshop API request is complete.

## Storage Solutions

Review the storage options required when working with the Photoshop API.

### Set up your storage

The Photoshop API requires user-owned storage, such as Amazon S3 buckets. Your media files and edited transcripts stay in that storage, while pre-signed URLs provide API input access.

### Using Amazon S3 buckets

1. Log in to your AWS account.
2. Open S3.
3. Create a new bucket, such as _AdobeApiTesting_.
4. Upload the media file to the bucket.
5. When the upload is finished, choose the file and open **Actions**.
6. Select **Share with pre-signed URL**, then set how long the URL lasts.
7. Use the generated pre-signed URL in API calls.

### Using a Frame.io account

1. Sign in to Frame.io.
2. Start a project, such as _AdobeApiTesting_.
3. Open the browser **Inspect** view; in Chrome, press F12 and switch to the **Network** tab.
4. Add the media file.
5. Choose the file and click **Download**.
6. In the **Network** tab, find the GET request that uses a pre-signed URL.
7. Use that URL in API calls.

### Using Frame.io Developer API

For asset creation and pre-signed URL retrieval, use the [Frame.io API guide](https://developer.frame.io/api/reference/).

### Using Google's direct link service

Generate downloadable public file links with the Google direct-link service at [direct-link page](https://sites.google.com/site/gdocs2direct/?authuser=1&pli=1). Before creating links, set Google Drive visibility for the file to **Anyone with the link**.

### Ready-to-use workflows

A standard workflow calls the Photoshop API to edit _.psd_ or other image files, then produces new image variations. The Photoshop API accepts either public URLs or signed URLs.

The common storage services and programmatic URL generation flows are documented.

### AWS S3

Use a pre-signed GET/PUT URL. S3 details are in [more information about pre-signed URLs on S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html).

Workflow samples:

- [Node.js](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/aws-s3/presignedURLs.js) - AWS S3 samples must sign pre-signed URLs with signature version S3V4.
- [Python](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/azure/presignedURLs.py)
- [Python application](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/aws-s3/example.py) sample showing API calls with assets kept in AWS S3.

### Google Drive

Use a signed GET/PUT URL. Google Drive setup details are in [setting up your Google Drive account for signed URLs](https://www.labnol.org/google-api-service-account-220404).

Workflow samples:

- [Node.js](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/googledrive/presignedURLs.js)

### Azure

Use a SAS (Shared Access Signature) for upload/download. Azure details are in [generating a Shared Access Signature](https://azuresdkdocs.blob.core.windows.net/$web/python/azure-storage-blob/12.9.0/index.html).

Workflow samples:

- [Node.js](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/azure/presignedURLs.js)
- [Python](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/storage-app/azure/presignedURLs.py)

### Dropbox

Use temporary upload/download URLs. Dropbox details are in [generating upload/download URLs](https://www.dropbox.com/developers/documentation). You can also [create a file upload link for Dropbox](https://www.dropbox.com/developers/documentation/http/documentation#files-get_temporary_upload_link).

### Test your URLs

Run these commands to verify that a public URL or pre-signed URL works.

Input file path test:

```bash
curl -X GET "<your_file_path>" \
--output <some-file.jpg>
```

Output file path test:

```bash
curl -X PUT "<your_file_path>" \
-d <some-file.txt>
```

## Technical Usage Notes

This document explains current Photoshop API support, limitations, workarounds, optimization guidance for API implementations, and service boundaries.

### Known limitations

Current Photoshop API constraints include:

- Multi-part uploads and downloads are not supported yet.
- Each endpoint accepts only one file input.
- Error handling is still being improved, so returned messages may sometimes be less useful than expected.

### Compatibility with Photoshop versions

- The APIs can open PSD files created with Photoshop 1.0 or later.
- When the API writes PSD output, the resulting PSDs are compatible with the current Photoshop version.
- For "maximize compatibility", the APIs default to "yes"; the related reference is [Photoshop file formats documentation](https://helpx.adobe.com/photoshop/using/file-formats.html#maximize_compatibility_for_psd_and_psb_files).

### About retries

Every API call is covered by a retry mechanism intended to improve reliability and stability:

- The service retries `429`, `502`, `503`, and `504` status codes three times.
- Retry client requests only when a 5xx response code is returned, since that class signals a server-side processing problem. Do not retry requests for other response codes.
- Use an exponential back-off strategy with three retry attempts.

### Rate limits

Adobe limits API call volume, frequency, and concurrency for Firefly APIs to keep peak performance equitable, and it monitors usage so risks can be addressed proactively.

If usage goes beyond these limits, an HTTP 429 "Too Many Requests" error may be returned. Use the 'retry-after' header to find the wait time in seconds before sending another request.

The limits cover **your entire organization**.

API usage limits are:

### General service limits

**Hard limit**

- POST: 16 requests/3 secs or 320 requests/minute.
- GET: 310 requests/3 secs.

**Soft limit**

- POST: 15 requests/3 secs or 300 requests/minute.
- GET: 300 requests/3 secs.

### Remove background service limits

**Hard limit**

- POST: 3 requests/3 secs.
- GET: 1000 requests/3 secs.

**Soft limit**

- POST: 2 requests/3 secs.
- GET: 500 requests/3 secs.

### Masking service limits

- 60 requests/min.
- 9000 requests/day.

### Photoshop API supported fonts

The Photoshop API currently supports the Postscript fonts listed below. Users can also use fonts they are authorized to access through [Adobe Fonts](https://fonts.adobe.com/fonts). OAuth tokens currently support this path; service-token support is planned.

|---------------------------------- |
| AcuminVariableConcept |
| AdobeArabic-Bold |
| AdobeArabic-BoldItalic |
| AdobeArabic-Italic |
| AdobeArabic-Regular |
| AdobeDevanagari-Bold |
| AdobeDevanagari-BoldItalic |
| AdobeDevanagari-Italic |
| AdobeDevanagari-Regular |
| AdobeFanHeitiStd-Bold |
| AdobeGothicStd-Bold |
| AdobeGurmukhi-Bold |
| AdobeGurmukhi-Regular |
| AdobeHebrew-Bold |
| AdobeHebrew-BoldItalic |
| AdobeHebrew-Italic |
| AdobeHebrew-Regular |
| AdobeHeitiStd-Regular |
| AdobeMingStd-Light |
| AdobeMyungjoStd-Medium |
| AdobePiStd |
| AdobeSongStd-Light |
| AdobeThai-Bold |
| AdobeThai-BoldItalic |
| AdobeThai-Italic |
| AdobeThai-Regular |
| CourierStd |
| CourierStd-Bold |
| CourierStd-BoldOblique |
| CourierStd-Oblique |
| EmojiOneColor |
| KozGoPr6N-Bold |
| KozGoPr6N-Medium |
| KozGoPr6N-Regular |
| KozMinPr6N-Regular |
| MinionPro-Regular |
| MinionVariableConcept-Italic |
| MinionVariableConcept-Roman |
| MyriadArabic-Bold |
| MyriadArabic-BoldIt |
| MyriadArabic-It |
| MyriadArabic-Regular |
| MyriadHebrew-Bold |
| MyriadHebrew-BoldIt |
| MyriadHebrew-It |
| MyriadHebrew-Regular |
| MyriadPro-Bold |
| MyriadPro-BoldIt |
| MyriadPro-It |
| MyriadPro-Regular |
| MyriadVariableConcept-Italic |
| MyriadVariableConcept-Roman |
| NotoSansKhmer-Regular |
| NotoSansLao-Regular |
| NotoSansMyanmar-Regular |
| NotoSansSinhala-Regular |
| SourceCodeVariable-Italic |
| SourceCodeVariable-Roman |
| SourceSansVariable-Italic |
| SourceSansVariable-Roman |
| SourceSerifVariable-Roman |
| TrajanColor-Concept |

## UXP Scripts

For Photoshop automation and extension work, UXP (Unified Extensibility Platform) Scripts provide a modern JavaScript-based path. They run on modern JavaScript (ES6+) and expose current web APIs.

### What are UXP Scripts?

A UXP Script is a JavaScript file that talks directly to Photoshop's application layer through the UXP scripting API. It executes in a modern JavaScript environment, can perform complex operations, make document-state-based decisions, and can reach outside resources such as web APIs or local files.

### UXP Script Structure

Photoshop's UXP APIs pair with modern JavaScript in these scripts.

### Basic Script Template

```javascript
// Import required modules
const { app } = require("photoshop");
const { storage } = require("uxp").storage;
const fs = require("fs");

// Main async function
async function main() {
  try {
    // Your Photoshop automation code here
    console.log("Document name:", app.activeDocument.name);

    // Perform operations
    await app.activeDocument.flatten();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Execute main function
main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
```

### Common Modules

| Module | Import | Purpose |
| --- | --- | --- |
| `photoshop` | `require("photoshop")` | Core Photoshop app and document API |
| `uxp.storage` | `require("uxp").storage` | File system access |
| `fs` | `require("fs")` | Node.js-style file operations |
| `batchPlay` | `app.batchPlay()` | Execute action descriptors (same as Actions) |

### Running UXP Scripts

Photoshop can launch UXP scripts in two main forms:

### Method 1: UXP Plugin

Use a UXP plugin package when the script needs distribution, marketplace deployment, or visible UI.

### Plugin Structure

```
my-plugin/
├── manifest.json         # Plugin metadata and configuration
├── index.html            # UI (optional)
├── index.js              # Main plugin code
└── icons/
    └── icon.png          # Plugin icon
```

### Basic manifest.json

```json
{
  "id": "com.yourcompany.myplugin",
  "name": "My Automation Plugin",
  "version": "1.0.0",
  "host": {
    "app": "PS",
    "minVersion": "23.0.0"
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "runAutomation",
      "label": "Run My Automation"
    }
  ],
  "manifestVersion": 5
}
```

### Plugin Code (index.js)

```javascript
const { app } = require("photoshop");
const { entrypoints } = require("uxp");

entrypoints.setup({
  commands: {
    runAutomation: async () => {
      try {
        // Your automation code
        await app.activeDocument.flatten();
        console.log("Automation complete!");
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
});
```

### Loading Your Plugin

1. **Enable Developer Mode**:

   - **Mac**: use Photoshop → Preferences → Plugins → Enable Developer Mode
   - **Windows**: use Edit → Preferences → Plugins → Enable Developer Mode

2. **Load Plugin**:

   - Open **Plugins → Development → UXP Developer Tool**
   - Choose **Add Plugin** and select your plugin folder
   - Choose **Load**

3. **Run Plugin**:
   - Open it from the **Plugins** menu or through an assigned keyboard shortcut

### Method 2: Direct Script Execution

Run a UXP script without wrapping it as a plugin; this works well for quick automation and testing.

### Using the File Menu

1. Create the script file using the `.psjs` extension (Photoshop JavaScript)
2. Launch Photoshop
3. Choose **File → Scripts → Browse...**
4. Select your `.psjs` file
5. Photoshop starts running it right away

```javascript
// Example: resize.psjs
const { app } = require("photoshop");

async function main() {
  const doc = app.activeDocument;

  await app.batchPlay(
    [
      {
        _obj: "imageSize",
        width: { _unit: "pixelsUnit", _value: 1920 },
        constrainProportions: true,
      },
    ],
    {},
  );

  console.log("Resize complete!");
}

main();
```

### Drag and Drop (Windows)

On Windows, the drag-and-drop path is:

1. Save the script as `.psjs`
2. Drag the file onto the Photoshop application
3. Photoshop starts the script automatically

### Examples

### Example 1: Flatten Document and Export Metadata

```javascript
const { app } = require("photoshop");
const fs = require("fs");

async function main() {
  try {
    const doc = app.activeDocument;

    // Collect document info before flattening
    const metadata = {
      originalName: doc.name,
      width: doc.width,
      height: doc.height,
      resolution: doc.resolution,
      originalLayerCount: doc.layers.length,
      colorMode: doc.mode,
    };

    // Flatten document
    await doc.flatten();

    // Add processing info
    metadata.processedAt = new Date().toISOString();
    metadata.finalLayerCount = doc.layers.length;

    // Write metadata to output
    fs.writeFileSync("<YOUR_OUTPUT_DIRECTORY>/metadata.json", JSON.stringify(metadata, null, 2));

    console.log("Processing complete!");
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
```

### Example 2: Conditional Processing Based on Image Size

```javascript
const { app } = require("photoshop");
const fs = require("fs");

async function main() {
  try {
    const doc = app.activeDocument;

    const width = doc.width;
    const height = doc.height;

    let resizeNeeded = false;
    let blurApplied = false;

    // Resize if image is too large
    if (width > 2000 || height > 2000) {
      await app.batchPlay(
        [
          {
            _obj: "imageSize",
            width: {
              _unit: "pixelsUnit",
              _value: Math.min(width, 2000),
            },
            height: {
              _unit: "pixelsUnit",
              _value: Math.min(height, 2000),
            },
            constrainProportions: true,
            interfaceIconFrameDimmed: {
              _enum: "interpolationType",
              _value: "bicubic",
            },
          },
        ],
        {},
      );

      resizeNeeded = true;
    }

    // Apply blur for very high-resolution images
    if (width > 3000 || height > 3000) {
      await app.batchPlay(
        [
          {
            _obj: "gaussianBlur",
            radius: {
              _unit: "pixelsUnit",
              _value: 2,
            },
          },
        ],
        {},
      );

      blurApplied = true;
    }

    // Export processing report
    const report = {
      originalSize: { width, height },
      finalSize: { width: doc.width, height: doc.height },
      resizeApplied: resizeNeeded,
      blurApplied: blurApplied,
      timestamp: new Date().toISOString(),
    };

    fs.writeFileSync("<YOUR_OUTPUT_DIRECTORY>/report.json", JSON.stringify(report, null, 2));
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
```
