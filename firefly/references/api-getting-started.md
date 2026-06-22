# Changelog, Create Credentials, Dev Console, Help ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Changelog; [Admins only] Get Credentials; Adobe Developer Console; Best Practices for Adobe Firefly API; Firefly API Troubleshooting Guide; Authentication; Firefly API usage notes.

## Changelog

### April 24, 2026

### Upscale API: beta naming corrected for GA (Breaking Change)

During beta, documentation and naming presented `/v3/images/upscale` as the "creative upsampler", although calls always used the **precise upsampler** model underneath. The GA release fixes that mismatch. Runtime behavior stays the same; only the names now match the actual model.

### Breaking Changes

### 1. `creative_upsampler_v1` header value rejected

Requests that pass `creative_upsampler_v1` in the `x-model-version` header now receive **422 Unprocessable Entity**:

```json
{
  "error_code": "validation_error",
  "message": "Invalid x-model-version: creative_upsampler_v1. Only 'precise_upsampler_v1' is supported."
}
```

**Action required:** Change the `x-model-version` header to the new value or omit it. The default is now `precise_upsampler_v1`.

```http
x-model-version: precise_upsampler_v1
```

### 2. Schema and operation identifiers renamed

All `Creative*` upsampler identifiers are now `Precise*`, matching the actual underlying model. Update any generated SDK usage or direct schema `$ref` references accordingly.

| Old name (beta) | New name (GA) |
| --- | --- |
| `creativeUpsamplerV3Async` | `preciseUpsamplerV3Async` |
| `CreativeUpsamplerRequestV3` | `PreciseUpsamplerRequestV3` |
| `CreativeUpscaleAcceptResponseV3` | `PreciseUpscaleAcceptResponseV3` |
| `CreativeUpscaleTaskLink` | `PreciseUpscaleTaskLink` |
| `CreativeUpsamplerResponse` | `PreciseUpsamplerResponse` |

> **Note:** Request payloads and response structures stay the same; this rename does not add, remove, or change fields.

### Summary of all spec changes

| Area | Before (beta) | After (GA) |
| --- | --- | --- |
| `x-model-version` accepted values | `creative_upsampler_v1` | `precise_upsampler_v1` |
| `x-model-version` default | `creative_upsampler_v1` | `precise_upsampler_v1` |
| Invalid model version response | Undefined behaviour | `422` with `validation_error` |
| `operationId` | `creativeUpsamplerV3Async` | `preciseUpsamplerV3Async` |
| Request schema | `CreativeUpsamplerRequestV3` | `PreciseUpsamplerRequestV3` |
| Accept response schema | `CreativeUpscaleAcceptResponseV3` | `PreciseUpscaleAcceptResponseV3` |
| Task link schema | `CreativeUpscaleTaskLink` | `PreciseUpscaleTaskLink` |
| Result schema | `CreativeUpsamplerResponse` | `PreciseUpsamplerResponse` |
| Endpoint summary | `Upscale image (beta)` | `Upscale image` |
| `Upscale` tag description | `...creative upsampler (beta)` | `...precise upsampler` |

### Deprecation timeline

| Date | Event |
| --- | --- |
| Prior to 2026-04-24 | Beta: `creative_upsampler_v1` available; underlying model was always the precise upsampler |
| **2026-04-24** | **GA: `creative_upsampler_v1` removed; `precise_upsampler_v1` is the only supported value; all schema identifiers corrected** |

### March 25, 2026

**API updates**

- **Launch of Upscale API**: The Upscale API can now be used.
  - [Upscale API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

### March 24, 2026

**API updates**

- **Launch of Composite Operations APIs**: The Composite Operations APIs can now be used.
  - [Precise Composite API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
  - [Adaptive Composite API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
  - [Object Composite API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

### October 3, 2025

**API updates**

- **Removed deprecated non-synchronous API references** The non-synchronous APIs listed below have been removed. Use their async versions instead:
  - Generate Images v3
  - Generate Similar Images v3
  - Generate Object Composite v3
  - Expand Image v3
  - Fill Image v3

### September 10, 2025

**API updates**

- **Removed deprecated APIs**: These APIs are no longer offered:
  - Generate Images v2 API
  - Expand Image v1 API
  - Fill Image v1 API

### June 19, 2025

**API updates**

- **Launch of Generate Video API**: The [Generate Video API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) can now be used to turn text, still shots, or illustrations into live action clips.

### April 29, 2025

**API updates**

- **New Image Model 4**: Image Model 4 is available for the [Generate Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) and [Generate Similar Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) APIs.

### March 11, 2025

**API updates**

- **Launch of Custom Models support**: Custom model usage is now available through the Generate Images API; see [now supports custom models](api-concepts.md).

### November 18, 2024

### API services update: General availability

The APIs below have moved into general availability:

- [Generate Image Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Expand Image Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Fill Image Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Generate Object Composite Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Generate Similar Images Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

### October 12, 2024

### API services update: General availability

These APIs are generally available now, rather than remaining preview-only:

- [Generate Object Composite](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Expand Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Fill Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

### July 23, 2024

### API services update: General availability

The following APIs have graduated from preview to general availability:

- [Generate Similar Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Generate Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

### June 18, 2024

### Added

Firefly Image Model 3 (preview) APIs:

- References now cover two APIs introduced with this release: [Generate Similar Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) and [Generate Object Composite](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
- V3 references now cover [Generate Images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md), [Expand Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) and [Fill Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md), supporting Firefly Image Model 3 (preview).

Updated guides:

The Create your first Firefly APIs implementation guide now uses V3 for the [Generate Images API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

New guides:

- Firefly Image Model 3 (preview) - Overview
- Using Content Class and Style Presets
- Using Style and Structure Image References
- Using the Expand Image API
- Using the Fill Image API
- Getting Started with the Firefly Services SDK
- Firefly API Terminology

### April 18, 2024

### Added

Firefly Generate Images API now accepts `url` as a source for `referenceImage`. Request input through `url` is accepted only when the domain is on the allow list.

The allow-listed domains are:

- `amazonaws.com`
- `windows.net`
- `dropboxusercontent.com`

### December 13, 2023

### Added

- Generate Images API with generative match
- Generative Expand API
- Generative Fill API
- Upload API

### November 20, 2023

### Added

- Set the `x-api-variant` header to `v2` to use the latest image model. By default, `v2` is used.
- The API references now include styles, and a new styles guide documents them as well.

### October 26, 2023

### Overview

Generate Images API v1.0 is now released as the first major Firefly API version.

- Content classes and styles for the [v1 model](https://clio-assets.adobe.com/firefly/image-controls/v1/content.json)
- Image generation from a text prompt
- Output types:
  - `application/json` (image data represented as base64)
  - `multipart/mixed` (multi-part form data - image data represented as binary)

### Known Issues and Limitations

- Provide Async API pattern
- Return a tempUrl for each response
- Set defaults for `accept` and `mimetype` headers
- Support JPG quality selection
- Image rendering in API References sandbox

## [Admins only] Get Credentials

These admins use this page to create project keys for their teams. Developers who already have a valid key from an admin should go to the [quickstart guide](api-index.md).

### Access Adobe Developer Console

Open **API and services**, then look up **Adobe Firefly API**.

[Figure: API and services page - Firefly API card](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/images/firefly-api-card.png)

If the Adobe Firefly API card is not visible, wait a few minutes and search again. Contact your Adobe liaison if the Firefly API product card still does not appear.

### Create a new project

After the Firefly API product card appears, select **Create project**.

1. Begin by entering a project name so the project can be located later in the Developer Console. This name can be changed afterward.
2. In the next modal, choose **Save configured API**. The following screen shows your **client ID** (API key).
3. In the left navigation, choose **OAuth Server-to-Server**, then select **Retrieve client secret** to reveal the secret value.

[Figure: OAuth Server-to-Server credential page](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/images/credential-page.png)

**Firefly API calls require developer(s) to have a valid client ID (API key) and an access token**. Because only organization admins can access these Console projects, the **Generate access token** button on the credential overview page is not a good developer handoff path.

Rather than sharing access tokens, share the **client ID** and **client secret** with developers who need API access. Every access token lasts 24 hours, so developers can create replacements programmatically as needed.

Once the Developer Console project is configured:

- In the **Generate access tokens** block, choose **View cURL command**.
- Copy the command and provide it to developers in your org. The result should resemble:

```bash
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}&scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
```

For more detail on access token generation, see the [authentication guide](api-getting-started.md). That guide also covers programmatic client-secret rotation.

## Adobe Developer Console

Manage resources and credentials in Adobe Developer Console.

### Overview

Use **Adobe Developer Console** as the administration interface for Adobe APIs and services. Secure access to Adobe APIs, including the Firefly API, requires OAuth 2.0 authentication from your application. After authentication, an access token gives the application permission to work with Adobe services.

### Getting Started for Firefly APIs

Required items:

- A working [Adobe Developer Console](https://developer.adobe.com/) account.
- Firefly API [OAuth Server-to-Server credentials set up](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/) on a [project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/).
- The Client ID and Client Secret from Developer Console.

### Access Tokens

[Generating access tokens](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/#api-overview) is supported from either the Developer Console UI or a programmatic flow.

To create one programmatically, use the [Authentication guide](api-getting-started.md).

### Best Practices

- **Token Management:** Access tokens remain valid for 24 hours, so refresh them before expiration to avoid service interruptions.
- **Scope Limitation:** For least-privilege access, request only the scopes your application actually needs.
- **Secure Storage:** Protect your Client ID, Client Secret, and access tokens so unauthorized users cannot obtain them.

### Managing Secrets

### Rotating Secrets

Rotate your client secret on the cadence your situation requires: for some teams that is every few months; for others it is daily.

Secret rotation is strongly recommended after a leak or suspected unauthorized access. Periodic client-secret rotation is also an industry-standard way to improve an application's security posture. As with access tokens, rotation can be done in the Developer Console UI or through an API.

**Org admins**: Open your project in Adobe Developer Console. Select the **Add to Project** button, choose **API**, then add **I/O Management API** to the project. This API lets the credential read, delete, and create client secrets. Configure the credential name before saving.

For developers to rotate secrets successfully without asking the org admin, they need:

- `orgId`
- `projectId`
- `credentialId`
- Access token

Go to the OAuth server-to-server credential overview page. Compare its URL with the template below and copy `orgId`, `projectId`, and `credentialId` from it:

```bash
https://developer.adobe.com/console/projects/{orgId}/{projectId}/credentials/{credentialId}/details/oauthservertoserver
```

Then obtain an access token. Ensure the `scope` parameter contains the scopes required by the I/O Management API, and run this command:

```bash
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope=AdobeID,openid,read_organizations,additional_info.projectedProductContext,additional_info.roles,adobeio_api,read_client_secret,manage_client_secrets'
```

### List All Secrets

```bash
curl -X GET 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets' \
     -H 'Authorization: Bearer {ACCESS_TOKEN}' \
     -H 'x-api-key: {CLIENT_ID}'
```

### Generate a New Secret

Send this request. The response includes the `client_secret` newly added to the project and its `uuid`. You can view it again later in the Developer Console UI. After generating the new secret, point your application at it.

```bash
curl -X POST 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets' \
     -H 'Authorization: Bearer {ACCESS TOKEN}' \
     -H 'x-api-key: {CLIENT ID}'
```

### Delete a secret

Before deleting, call the listing endpoint for all client secrets on the credential. Take the `uuid` for the older secret you want removed. Then call this API, passing that `uuid` in the URL, to delete the old `client_secret` from the credential.

```bash
curl -X DELETE 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets/{uuid}' \
     -H 'Authorization: Bearer {ACCESS TOKEN}' \
     -H 'x-api-key: {CLIENT ID}'
```

After deletion, a client secret cannot be recovered. Confirm that every place using the old value has already been moved to the new secret.

## Best Practices for Adobe Firefly API

Developers can use Adobe Firefly API functionality to add creative tooling to their applications. Effective, efficient API use depends on following best practices. This document collects the primary recommendations for Adobe Firefly API usage.

### Authentication

- Use OAuth 2.0 authentication so API resources are accessed securely.
- Keep client credentials in secure storage, and do not expose them in client-side code.

### API Requests

- Send every API request over HTTPS so data stays private and protected.
- Use the API documentation to confirm which endpoint to call and how parameters must be formatted.
- For rate limits, add exponential backoff plus retry handling.

### Security

- Validate all user-supplied values before using them, reducing injection risk and preserving data integrity.
- Keep API client libraries and dependencies current so security fixes are applied promptly.

### Testing

- During development and testing, use sandbox or test environments so production data is not affected.
- Build thorough unit tests around API integrations to confirm behavior remains reliable and functional.

### Monitoring and Logging

- Add logging that records API usage, errors, and performance metrics.
- Watch API usage and performance trends so issues can be found and addressed early.

## Firefly API Troubleshooting Guide

This troubleshooting guide covers common problems that can arise while working with the Adobe Firefly API. For cases not listed here, consult the API documentation or ask Adobe support for help.

### Issue: Authentication Failure

### Solution:

- Confirm that authentication uses the intended client ID and client secret.
- Make sure the OAuth 2.0 token is still valid and unexpired.
- Verify that the API endpoint URL is the right one and that it accepts the authentication method in your request.

### Issue: Rate Limit Exceeded

### Solution:

- Add exponential backoff with retry logic so rate limiting is handled.
- Lower the API call frequency, or revise your code so it sends fewer requests.

### Issue: Unexpected API Response

### Solution:

- Use the API documentation to confirm the required request format and parameters.
- Confirm the request is well formed and contains every required parameter.
- Inspect the API response with logging and debugging tools to identify the source of the problem.

### Issue: Internal Server Error (HTTP 500)

### Solution:

- HTTP 500 points to a server-side problem. Wait several minutes, then send the request again.
- If it continues, look at the Adobe status page for reported service disruptions.

### Issue: Slow API Response Times

### Solution:

- Confirm the network connection is stable and fast enough.
- Reduce request payload size by optimizing the code.
- To lower latency for static resources, consider a CDN or caching strategy.

## Authentication

Authenticate requests sent to Firefly APIs.

### Overview

Firefly APIs require each request to carry an encrypted access token. A secure server-side application obtains that token by calling [Adobe Identity Management System (IMS)](https://www.adobe.com/content/dam/cc/en/trust-center/ungated/whitepapers/corporate/adobe-identity-management-services-security-overview.pdf) with your **Client ID** and **Client Secret**.

### Prerequisites

Before starting, make sure you have coordinated with your Adobe Representative and have these items:

- An account for [Adobe Developer Console](https://developer.adobe.com/).
- A [project](https://developer.adobe.com/developer-console/docs/guides/projects/projects-empty/) where Firefly API [OAuth Server-to-Server credentials](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/) are configured.
- Retrieve **Client ID** and **Client Secret** in the [Adobe Developer Console project](https://developer.adobe.com/developer-console/docs/guides/services/services-add-api-oauth-s2s/#api-overview). Store these credentials securely and keep them out of client-side or public code.

### Retrieve an access token

In a secure terminal, `export` the **Client ID** and **Client Secret** into environment variables for the commands you will run afterward:

```bash

```

Then request an access token with this command:

```bash
curl --location 'https://ims-na1.adobelogin.com/ims/token/v3' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode "client_id=$FIREFLY_SERVICES_CLIENT_ID" \
--data-urlencode "client_secret=$FIREFLY_SERVICES_CLIENT_SECRET" \
--data-urlencode 'scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
```

The response has this form:

```json
{ "access_token": "yourExampleTokenAsdf123", "token_type": "bearer", "expires_in": 86399 }
```

The `expires_in` value tells you how many seconds remain before the access token stops being valid. Tokens last 24 hours; once that period passes, the secure server-side application must ask for another token. Store the token securely, and refresh it ahead of expiration.

Put the access token into an environment variable:

```bash

```

After authentication is ready, continue with [Generate Images API][1].

[1]: ../guides/how-tos/firefly-generate-image-api-tutorial.md

## Firefly API usage notes

This document summarizes current Firefly API support, known limits, and available workarounds.

### Rate limits

Adobe Firefly API includes default limits for both call volume and call frequency. If your workload needs more capacity, ask your account manager about raising those limits.

### Summary of rate limits

The API applies these limits **per organization**:

- **4** requests **per minute (RPM)**
- **9,000** requests **per day (RPD)** (Applies when your account manager has raised limits above 4 RPM but the default daily cap remains unchanged.)

### What to do if you run into issues

When limits are exceeded, the API returns **HTTP 429 Too Many Requests**. To recover, use one or more of these approaches:

- Review usage patterns and remove requests that are not needed.
- Add retry behavior based on a [`retry-after` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) or an [exponential backoff strategy](https://en.wikipedia.org/wiki/Exponential_backoff).
- Ask your account manager to enable higher usage rates.

### Why do API rate limits exist?

Rate limits are a common API control used for several reasons:

- Preventing abuse: keeps APIs from being overloaded by too many requests.
- Protecting against downtime: lowers the chance of service interruptions.
- Controlling costs: manages resource use and related expenses.

### Image API usage

### Supported storage domains

For the Image Model 5 endpoint `/v4/images/generate-async`, image storage can use these domains:

- amazonaws.com
- windows.net
- dropboxusercontent.com
- storage.googleapis.com
- frontdoor.prod.azure.cxp.adobe.com

### Object Composite API usage

These notes describe technical details and known limits for the Object Composite API.

### Size limitations

The supported **Maximum image size** is 10MB.

### Generate Video API usage

These usage notes cover technical behavior for the Generate Video API.

### Supported aspect ratios

Generated videos may use dimensions from the supported aspect ratios below:

[Figure: Supported aspect ratios](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/getting-started/usage-notes/aspect-ratios.png)

| Aspect Ratio | Dimensions |
| --- | --- |
| 16:9 | 1920w x 1080h |
| 16:9 | 1280w x 720h |
| 16:9 | 960w x 540h |
| 9:16 | 1080w x 1920h |
| 9:16 | 720w x 1280h |
| 9:16 | 540w x 960h |
| 1:1 | 1080w x 1080h |
| 1:1 | 720w x 720h |
| 1:1 | 540w x 540h |

### Allowed storage domains

Images intended for the composite API can be uploaded through the /v2/storage/image API. When that upload path is used, an uploadId is returned. In those API requests, `source.url` contains a pre-signed URL for an image stored on a supported domain.

Storage URLs for the API may use only these domains:

| Domain | Provider |
| --- | --- |
| amazonaws.com | Amazon Web Services |
| amazonaws.com:443 | Amazon Web Services |
| windows.net | Microsoft Azure |
| windows.net:443 | Microsoft Azure |
| dropboxusercontent.com | Dropbox |
| dropboxusercontent.com:443 | Dropbox |
| storage.googleapis.com | Google Cloud |
| storage.googleapis.com:443 | Google Cloud |
| assets.frame.io | Frame.io |
| adobe.io | Adobe |

## See also

- [Style Presets](api-style-presets.md)
