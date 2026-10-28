# Optional parameters

The V2 endpoint includes extra parameters for improving output quality:

| Parameter | Type | Description |
| --- | --- | --- |
| `mode` | string | Chooses the result form: `cutout` returns the subject on a transparent background, while `mask` returns a grayscale mask. |
| `trim` | boolean | Removes transparent edges from the output image. |
| `backgroundColor` | object | Applies a background fill color (RGBA). |
| `colorDecontamination` | number | Lowers color bleed from the removed background (0–1). |

For current technical details, consult [the removeBackground API reference](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/removeBackground).

For deprecation timelines and support, see [Deprecation Announcement](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/getting-started/deprecation-announcement/index.md) and [Remove background](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/removeBackground) in the API reference.
