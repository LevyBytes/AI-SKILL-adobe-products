# Key differences

- **Request Structure:** Put document parameters in the `image` object.
- **Parameter Names:** Some names differ, including `fill` options.
- **Enhanced Options:** V2 exposes finer document-property controls.
- **Initial Content:** Layers can be added while creating the document (creating a new document with a group layer is not yet supported; this is an upcoming feature. To add layers inside a group, run create-composite on an existing document with placement `type: "into"` and `referenceLayer`).
