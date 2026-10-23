# Getting Started - Step 8 : Downloading the asset

When the poll API comes back with a `200` response code, its response body carries a `status` field whose value is `in progress`, `done` or `failed`.

A `status` of `in progress` means you should keep polling the location until it flips to `done` or `failed`.

When `status` reads `done`, the response body additionally includes a download pre-signed URI in the `dowloadUri` field; use it to pull the asset straight from the cloud provider with the API call below.

A fuller description of the API lives [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/asset.get).
