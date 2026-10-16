# Versioning

Per the [Public API
Docs](https://documentcloud.adobe.com/document-services/index.html), every operation carries its own assetId, supplied through Form Parameters. The usual path is to grow an API while leaving it backward compatible. When an enhancement simply can't happen without breaking changes, a fresh version ships under a distinct assetId of its own. Details on which older API versions remain supported live on the [Public API
Docs](https://documentcloud.adobe.com/document-services/index.html).

One more thing: a machine learning pipeline produces the PDF Extract API output, and that pipeline gets retrained often to sharpen how it reads document layout and structure. The upshot is that exact results can shift as the model sharpens, even though the shape of the output isn't expected to change from one version to the next.
