# Step 8 : Downloading the asset

When the poll API answers with a `200` code, its body carries a `status` field whose value is one of `in progress`, `done` or `failed`.

A `status` of `in progress` means you should keep hitting the location until the value flips to either `done` or `failed`.

Once `status` reads `done`, the body additionally includes a download pre-signed URI under the `dowloadUri` field; use it to pull the asset straight from the cloud provider through the API call below.

You can dig deeper into this API [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/asset.get).
