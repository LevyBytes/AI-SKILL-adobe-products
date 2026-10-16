# Photoshop v1 masking examples

Open when calling Fill Masked Areas or Refine Mask with signed source and mask image URLs.

Install `axios` in a Node.js project and keep these modules together. Import `fillMaskedArea` or `refineMask`; pass your signed image URLs and an options object containing a valid `accessToken` and `apiKey`. Await the returned promise and handle rejection in your caller. Authentication is supplied by the caller, so these modules do not implement an OAuth token flow.

`fillMaskedArea(sourceImageUrl, maskUrls, options)` accepts one or more mask URLs and returns the completed image URL. `refineMask(sourceImageUrl, maskUrl, options)` preserves `colorDecontamination: false` and returns the completed response object.

The default service base URL is the production server declared by the captured Adobe v1 API contract. Set `serviceBaseUrl` only for an explicitly provisioned alternative environment. The helper requires HTTP 202 with `statusUrl`, polls `not_started` or `running`, returns `succeeded`, and propagates `failed`, unknown status and HTTP errors. `attempts` defaults to 120; individual requests time out after 60 seconds.

The source-image and mask-image resources must already be accessible through a supported storage provider. For Fill Masked Areas, a mask identifies the region to inpaint. Refine Mask improves the supplied mask; the returned fields depend on the operation. These examples do not download output assets.

[Official masking API contract](https://developer.adobe.com/firefly-services/docs/photoshop/api/)
