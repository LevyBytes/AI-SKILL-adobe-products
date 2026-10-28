# Employee Background example setup

Open when running the Firefly employee background example.

Use a Node.js runtime with global fetch and AbortSignal.timeout support. Install axios and qs for the axios examples; the fetch examples use Node built-ins. Keep every linked .cjs dependency in the same directory.

Set FIREFLY_SERVICES_CLIENT_ID and FIREFLY_SERVICES_CLIENT_SECRET to credentials authorized for these operations. Run `node update-employee-backgrounds.cjs` from a directory containing the required resources.

Provide source-person-photo-1.png, mask-person-photo-1.png, source-person-photo-2.png and mask-person-photo-2.png in the working directory. The original sample names and corporate-background prompt are illustrative inputs. Each employee is attempted; any failures are reported after the batch.

The example retains the source authentication scope and request payload. Polling is bounded; request and job failures propagate. Output URLs and downloaded files are API results, not bundled assets.

[Official Firefly Services documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/)
