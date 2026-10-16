# Removed fields

The following fields that older APIs accepted are removed by the new Image5 model API:

- `aspectRatio` - The new API supports size only.
- `generationMetadata` - Clients cannot supply this value anymore.
- `modelVersion` - Callers can no longer select an API version.
- `modelSpecificPayload` - The extension payload block has been removed.
- `output.cai` - CAI directives cannot be configured. If downstream logic depends on CAI or storage controls, move that handling into the service layer.
- `output.storeInputs` - Storage toggle fields are unavailable.

There are no direct substitutes for these fields, so omit them from API request payloads.
