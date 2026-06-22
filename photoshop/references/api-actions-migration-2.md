# Actions Migration (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## JPEG quality and pixel fidelity

V1 and V2 rely on different JPEG encoders. Semantically matching quality settings can still yield sub-1% pixel variation between JPEG outputs from the two APIs, and that variation should not be treated as a migration failure. When pixel fidelity matters, use `"photoshop_max"` as the baseline quality setting. During comparisons between V1 reference outputs and V2 outputs across worker versions, consider sub-1% diffs normal.

## Complete V1 parity reference

For a field-by-field comparison between every V1 field and its V2 counterpart, including breaking changes, removed options, and features only present in V2, use:

**[Execute Actions - Complete V1 Migration Reference](api-v1-to-v2-2.md)**

That reference covers the five V1 endpoints replaced by `/v2/execute-actions`:
`photoshopActions`, `actionJSON`, and `productCrop`.

## Next steps

- Review [storage solutions guide](api-getting-started.md) to compare storage options
- Check [composite migration guide](api-v1-to-v2.md) for layer-operation migration details
- Exercise action workflows against development endpoints
