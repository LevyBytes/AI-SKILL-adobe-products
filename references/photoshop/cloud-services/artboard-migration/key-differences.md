# Key differences

**Input structure:**

- V1: `inputs[].href` -> V2: `images[].source.url`
- V1: `inputs[].storage` -> V2: `outputs[].destination.storageType` (only for Azure/Dropbox)
- V2 includes optional `artboardSpacing` for horizontal spacing control

**Output structure:**

- V1: `outputs[].href` -> V2: `outputs[].destination.url`
- V1: `outputs[].type` -> V2: `outputs[].mediaType`
- V1: `outputs[].storage` -> V2: `outputs[].destination.storageType` (optional in V2)
- V2 can produce 6 output formats: JPEG, PNG, TIFF, PSD, PSDC
