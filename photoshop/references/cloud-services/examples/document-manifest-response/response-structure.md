# Document manifest response

Open when interpreting a Photoshop document-manifest response with nested text and graphic layers.

`response-metadata.json` preserves the job, input, timestamps, document dimensions and status link. `headline-layer.json` contains the complete text group and both text children. `graphic-layers.json` holds the other complete layer records.

Run `node read-response.cjs` to assemble the exact complete response, including the original layer order. These are illustrative response values, not live job or signed-resource credentials. Every field from the source response is retained.
