# Deprecated endpoints

**`/lrService/mask`**

- Status: Deprecated; standalone endpoint removed
- V2 Migration: Use the XMP feature in `/v2/edit` for mask functionality
- Usage details are in the [Apply XMP with Masks](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/edit-operations.md#apply-xmp-with-masks-advanced) section above
- Supply masks in the `edits.xmp.masks` array together with XMP metadata

**`/lrService/predict`**

- Status: Deprecated; removed
- Reason: See the deprecation notice for details

**`/lrService/depthRefinement`**

- Status: Deprecated
- Reason: Feature is no longer supported
