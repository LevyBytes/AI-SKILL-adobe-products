# V2 behavior

V2 routes all action types through `/v2/execute-actions`. The `options` block now carries an array of action objects, each with a `type` discriminant: `"photoshopActions"`, `"actionJSON"`, or `"uxp"`. UXP scripts, written as ES6+ JavaScript, are newly available beside the existing action types. V1 convenience API action files are now published and can be supplied through `additionalContents`.

Depth Blur (`/pie/psdService/depthBlur`) is **not yet supported in V2**; the required Neural Filters support has not landed. Status details are in [Depth Blur Migration](../../depth-blur-migration/reference-index.md).
