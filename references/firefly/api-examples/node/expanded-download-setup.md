# Expanded Download example setup

Open when running the Firefly expanded download example.

Use a Node.js runtime with global fetch and AbortSignal.timeout support. Install axios and qs for the axios examples; the fetch examples use Node built-ins. Keep every linked .cjs dependency in the same directory.

Set FIREFLY_SERVICES_CLIENT_ID and FIREFLY_SERVICES_CLIENT_SECRET to credentials authorized for these operations. Run `node download-expanded-images.cjs` from a directory containing the required resources.

Provide source.jpg in the working directory. The retained 2500x2500, 3000x3000 and 3500x3500 expansions download to source_&lt;dimensions&gt;.jpg. All three downloads are awaited, and dimensions are sent as numbers.

The example retains the source authentication scope and request payload. Polling is bounded; request and job failures propagate. Output URLs and downloaded files are API results, not bundled assets.

[Official Firefly Services documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/)
