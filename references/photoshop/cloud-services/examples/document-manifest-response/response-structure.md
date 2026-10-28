# Document manifest response

Open when interpreting a Photoshop document-manifest response with nested text and graphic layers.

`response-metadata.json` preserves the job, input, timestamps, document dimensions and status link. `headline-layer.json` contains the complete text group and both text children. `graphic-layers.json` holds the other complete layer records.

With `headline-layer.json` and `graphic-layers.json` saved from Adobe's [manifest guide](https://developer.adobe.com/firefly-services/docs/photoshop/guides/retrieve-manifest/) beside the bundled files, `node read-response.cjs` assembles the complete response in the original layer order. These are illustrative response values, not live job or signed-resource credentials.
