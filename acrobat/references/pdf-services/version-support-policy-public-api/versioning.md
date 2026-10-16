# Versioning

Per the [Public API
Docs](https://developer.adobe.com/document-services/docs/apis/),
every operation carries its own distinct assetId, supplied through Form Parameters. The usual approach is to extend an API while preserving backward compatibility. When a capability simply cannot grow without introducing breaking changes, a fresh version ships carrying its own unique assetId. Details about which older API versions remain supported are published on the [Public API
Docs](https://documentcloud.adobe.com/document-services/index.html)

One more thing to keep in mind: the PDF Extract API produces its output through a machine learning pipeline that gets retrained often to sharpen how it infers a document's layout and structure. Because of that, the shape of the output is not expected to shift from one version to the next, yet individual results can differ as the model's predictions get better.
