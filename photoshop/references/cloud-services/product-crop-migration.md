# Product Crop Migration

Migrate Product Crop calls off the v1 API's `/pie/psdService/productCrop` endpoint and onto the v2 API's `/v2/execute-actions` endpoint.

Product Crop's convenience API removes backgrounds automatically and applies adjustable padding, which suits e-commerce product photography workflows.

**Key benefits of the v2 API:**

- Exact server-side ActionJSON is available
- Every parameter can be customized
- The workflow can be modified and extended
- Behavior lines up with other action-based APIs
