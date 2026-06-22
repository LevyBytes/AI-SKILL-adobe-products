# Concepts, Usage

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Illustrator API Key Concepts; Authentication; Technical usage notes.

## Illustrator API Key Concepts

Keep these core ideas in mind when working with Illustrator APIs.

### Pre-signed URLs

### What is a pre-signed URL?

A pre-signed URL gives time-limited access to one particular resource, most often in cloud storage, under preset permissions and an expiration. With that URL, files can be uploaded or downloaded securely without exposing the storage service credentials directly.

For Illustrator APIs, input assets and output assets are represented with pre-signed URLs.

### Input assets

The platform accepts several input asset types. Each type tells the platform which storage location it can download from. Put the input asset details inside the `assets` array.

Illustrator APIs accept these input assets:

- **AWS S3**: [Provide a pre-signed GET/PUT/POST URL.][5]

- **Dropbox**: [Create temporary upload/download links.][6]

- **Azure**: [Authenticate with an Azure Storage Shared Access Signature (SAS)][7] for GET/PUT/POST operations.

```json
"assets" :[
    {
        "source" : {
            "url" : "https://xyz-blob.core.windows.net/Template.ai"
        },
        "destination" : "template1.ai"
    },
    {
        "source" : {
            "url" : "https://s3.eu-west-1.amazonaws/xyz/assets.zip"
        },
        "destination" : "assets.zip"
    }
]
```

The examples show the payload split between `source` and `destination`.

`source` identifies the download location for the asset. `destination` names the place where that asset should be downloaded.

### About Image Trace (beta)

The **Image Trace** public beta service converts raster artwork (PNG or JPEG) into **SVG-only** output (`image/svg+xml`) through server-side processing similar to Image Trace. No additional export formats are produced. Submit a job that includes an **`input`** object (`source.url` + `mediaType`) plus, when needed, **`settings.preset`** (`enhanced_general` or `high_fidelity_photo`). Processing is asynchronous; check completion by polling **`GET https://illustrator-api.adobe.io/v1/status/{jobId}`**, then use the presigned download URLs returned after a successful job.

For detailed walkthrough steps, see [Image Trace guide](api-custom-script-guide.md).

### About custom script bundles

Before a script can be used with the Custom Scripts API, package it as a script bundle, which is a ZIP file that follows a required layout.

### Custom script bundle structure

A basic custom script bundle uses this layout:

```text
custom-script-folder
|------ manifest.json
|------ script.jsx
```

| File | Description | Required |
| --- | --- | --- |
| manifest.json | Manifest for the custom script. This file contains all script details. | YES |
| script.jsx | Main executable for the script. The product script engine runs this script; when the product script engine allows it, the script may rely on additional files in nested directories inside the ZIP file. | YES |

### Custom Script manifest

The manifest is a plain JSON file with this structure:

```json
{
    "manifestVersion": "1.0.0",
    "id": "<Unique ID for the custom script>",
    "name": "<Name of the custom script>",
    "version": "<x.y.z>",
    "host": {
        "app": "illustrator",
        "appVersionStrategy": "latest_version" | "fixed_major_version" | "fixed_major_and_minor_version",
        "majorAppVersion": 20,  // optional depending on strategy
        "minorAppVersion": 1  // optional depending on strategy
    },
    "apiEntryPoints": [
        {
            "type": "capability",
            "path": "script.jsx",
            "language": "extendscript"
        }
    ]
}
```

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| `manifestVersion` | string | Version for the manifest file format. At present, only 1.0.0 is supported. | YES |
| `name` | string | Script name used when invoking the capability. See [API Capability Naming Rules](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/getting-started/concepts/index.md#api-capability-naming-rules) for additional rules. | YES |
| `version` | string | Custom script version in x.y.z format. It must contain three segments, with every version component from 0 through 99. | YES |
| `host.app` | string | Host application that runs this script. The sole currently valid value is `illustrator`. | YES |
| `host.appVersionStrategy` | string | Controls app-version selection: latest_version, fixed_major_version, or fixed_major_and_minor_version. | NO |
| `host.majorAppVersion` | string | Major app version; for 20.0.34, this value is 20. It is required when appVersionStrategy is fixed_major_version or fixed_major_and_minor_version. | NO |
| `host.minorAppVersion` | string | Minor app version; for 20.0.34, this value is 0. It is required when appVersionStrategy is fixed_major_and_minor_version. | NO |
| `apiEntryPoints` | array | Array containing `<EntryPointDefinition>` objects. It defines the API entry points used by the custom script. | NO |

- If a customer registers a script and omits the strategy, latest_version is selected automatically as the default.
- The majorAppVersion parameter is required when appVersionStrategy is fixed_major_version.
- Both majorAppVersion and minorAppVersion are required when appVersionStrategy is fixed_major_and_minor_version.

### API Capability Naming Rules

In a custom script manifest, the `name` field is the script name. Registration and invocation use it to identify the capability. The rules below must be followed; names that violate them cannot be registered.

**Rules**

- **Length:** 3-255 characters.
- **Allowed characters** (characters outside this set are rejected):
  - **Alphanumeric:** a-z, A-Z, 0-9
  - **Hyphen (-), underscore (\_), period (.)**
  - **Forward slash (/):** Use it only between segments in hierarchical names (for example, `renditions/jpeg`). Names cannot start with a slash, end with a slash, or contain doubled slashes.

**Valid name examples**

| Example | Notes |
| --- | --- |
| `my-script` | Lowercase form with a hyphen and at least 3 characters. |
| `export_to_idml` | Uses permitted underscores. |
| `Rendition.v1` | Uses mixed case and a period. |
| `renditions/jpeg` | Uses a forward slash to separate hierarchy segments. |
| `com.acme.scripts/processor` | Uses both periods and a slash. |

**Names that are rejected**

| Example | Reason |
| --- | --- |
| `ab` | Fewer than 3 characters. |
| `my script` | Contains a space. |
| `script@work` | Contains an at sign (@). |
| `script#2` | Contains a hash (#). |
| `renditions//jpeg` | Contains consecutive slashes. |
| `/renditions/jpeg` | Begins with a slash. |
| `renditions/jpeg/` | Ends with a slash. |
| `café` or `naïve` | Contains accented characters. |

### The `apiEntryPoints` field

Inside the manifest file, `apiEntryPoints` is an array of `EntryPointDefinition` objects in this form:

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| `type` | string | Entry point type. Valid values are `capability`. | YES |
| `path` | string | File path used for this type. By default, files are expected at the ZIP file root, but nested ZIP paths are also valid. | YES |
| `language` | string | Script language. Accepted choices include extended script, UXP script, and JavaScript. | YES |

- Each entry point identifies either a custom script or a custom script specification.
- The array can contain no more than one entry for each type.
- The array size limit is 3.

When default values are used, defining an entry point is unnecessary.

### The `script.jsx` file

For a given endpoint, the script author places the custom attributes and values in the _script.jsx_ file within the custom script bundle.

Script execution uses these attributes:

| Attribute | Input Request Mapping | Description |
| --- | --- | --- |
| `assets` | assets->destination field | List of input assets, such as .ai, .pdf, .jpeg, and similar files. |
| `params` | params | User inputs or arguments consumed inside the script. |
| `jobID` | Auto-generated | Job ID. |
| `workingFolder` | Auto-generated | Job working folder. It serves as the base directory where all assets and scripts are downloaded (for example c:\\baseFolder\\assets). |

Examples are available in [Custom Script Guide](api-custom-script-guide.md).

### Zipping and updating a custom script bundle

When you create the ZIP, select the files directly rather than first putting them into a folder. After extraction, this makes the files appear at the top level instead of inside a folder.

To update the custom script bundle, increment the version in the script manifest. Then send the revised ZIP bundle through the submission endpoint.

[5]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html
[6]: https://dropbox.github.io/dropbox-api-v2-explorer/#files_get_temporary_link
[7]: https://learn.microsoft.com/en-us/azure/ai-services/translator/document-translation/how-to-guides/create-sas-tokens?tabs=Containers

## Authentication

Authentication for Illustrator API requests.

### Overview

Calls made to Illustrator API require an encrypted access token.

A secure server-side application sends your **Client ID** and **Client Secret** to the [Adobe Identity Management System (IMS)](https://www.adobe.com/content/dam/cc/en/trust-center/ungated/whitepapers/corporate/adobe-identity-management-services-security-overview.pdf) to obtain an access token.

### Prerequisites

This tutorial expects that your Adobe representative has already helped you obtain these items:

- An [Adobe Developer Console](https://developer.adobe.com/) account.
- A [project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/) configured with Illustrator API [OAuth Server-to-Server credentials](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/).
- Your **Client ID** and **Client Secret** from the [Adobe Developer Console project](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/#api-overview). Keep these credentials secure, and do not expose them in client-side code or public code.

### Retrieve an access token

A temporary access token authorizes API calls. You can [generate an access token in the Developer Console](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s#generate-token), or request one programmatically with the steps below.

1. In a secure terminal, export your **Client ID** and **Client Secret** as environment variables so later commands can read them:

```bash

```

2. Use this command to generate an access token:

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=ILLUSTRATOR_API_CLIENT_ID" \
--data-urlencode "client_secret=ILLUSTRATOR_API_CLIENT_SECRET" \
--data-urlencode 'scope=openid, AdobeID, ff_apis, firefly_enterprise, illustrator_services_beta'
```

The response has this shape:

```json
{
  "access_token": "exampleAccessTokenAsdf123",
  "token_type": "bearer",
  "expires_in": 86399
}
```

In the response, `expires_in` gives the access token lifetime in seconds. Once it expires, the application must ask for another token.

3. Export the access token as an environment variable:

```bash

```

## Technical usage notes

Use this page to understand current Illustrator API support, limits, workarounds, and service boundaries so API implementations can be optimized.

### Known limitations

The Illustrator API has these known limitations:

- CSV files support a maximum of 5000 rows.
- The file size for any asset (AI file, CSV file, font files) must be no more than 1GB.

### About retries

Automatic retries are not currently available in the service. If any failure occurs, users need to run the operation again.

### About auto-mapping for Data Merge

When variable-to-object mappings are absent from the Illustrator file, the service can create them automatically by reading the CSV header row, then matching each column name to an object with exactly the same name in the Illustrator Layers panel.

After an exact-name match is detected, the variable-to-object mapping is generated automatically. Matching is case-sensitive and must be exact.

### Illustrator API supported fonts

Illustrator API's current Postscript font set is:

| Font Name |
| --- |
| AcuminVariableConcept |
| AdobeArabic-Regular |
| AdobeInvisible2-Regular |
| AdobeMingStd-Light |
| AdobeMyungjoStd-Medium |
| AdobeSongStd-Light |
| EmojiOneColor |
| KozGoPr6N-Regular |
| MinionVariableConcept-Italic |
| MinionVariableConcept-Roman |
| MyriadHebrew-Regular |
| MyriadPro-Regular |
| MyriadVariableConcept-Italic |
| MyriadVariableConcept-Roman |
| SourceCodeVariable-Italic |
| SourceCodeVariable-Roman |
| SourceHanSansSC-Regular |
| SourceSansVariable-Italic |
| SourceSansVariable-Roman |
| SourceSerifVariable-Roman |
| TrajanColor-Concept |
