# Localized Image example setup

Open when running the Firefly localized image example.

Use a Node.js runtime with global fetch and AbortSignal.timeout support. Install axios and qs for the axios examples; the fetch examples use Node built-ins. Keep every linked .cjs dependency in the same directory.

Set FIREFLY_SERVICES_CLIENT_ID and FIREFLY_SERVICES_CLIENT_SECRET to credentials authorized for these operations. Run `node create-localized-images.cjs` from a directory containing the required resources.

The retained Paris/fr-FR and Tokyo/ja-JP requests use their original localized prompts, dimensions and style presets. The example prints the returned image responses.

The example retains the source authentication scope and request payload. Polling is bounded; request and job failures propagate. Output URLs and downloaded files are API results, not bundled assets.

[Official Firefly Services documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/)
