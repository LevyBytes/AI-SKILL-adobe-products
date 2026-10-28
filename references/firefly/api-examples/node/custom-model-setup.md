# Custom Model example setup

Open when running the Firefly custom model example.

Use a Node.js runtime with global fetch and AbortSignal.timeout support. Install axios and qs for the axios examples; the fetch examples use Node built-ins. Keep every linked .cjs dependency in the same directory.

Set CUSTOM_MODELS_CLIENT_ID and CUSTOM_MODELS_CLIENT_SECRET to credentials authorized for these operations. Run `node generate-custom-images.cjs` from a directory containing the required resources.

No local image is uploaded. The first available custom model is used with the retained Laika prompt, seeds, style and 2048-by-2048 size.

The example retains the source authentication scope and request payload. Polling is bounded; request and job failures propagate. Output URLs and downloaded files are API results, not bundled assets.

[Official Firefly Services documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/)
