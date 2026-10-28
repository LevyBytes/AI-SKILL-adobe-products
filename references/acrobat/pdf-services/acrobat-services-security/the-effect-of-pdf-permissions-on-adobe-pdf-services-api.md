Permission checks depend on the operation. Adobe's [secured-PDF guidance](https://developer.adobe.com/document-services/docs/overview/security#processing-secured-pdf-files) documents these exceptions to the general rejection of permission-restricted input:

| Operation | Required permissions |
| --- | --- |
| PDF Extract | `copying` must be `true`. |
| Export PDF to images | `copying`, `page_extraction` and `document_assembly` must be `true`, and printing must be permitted. |

The PDF Properties schema represents `printing` as a string, so testing `printing == true` is incorrect. `"none"` denotes denied printing; the schema does not enumerate all allowed strings. Read [the actual response fields](detecting-pdf-permissions.md) and handle a service rejection rather than treating a truthy string as authorization.

These are permission prerequisites, not guarantees that an otherwise unsupported PDF will process successfully. Permission-restricted inputs can produce HTTP `400`; Extract's copying restriction uses `DISQUALIFIED_PERMISSIONS`. Use [authorized protection removal](user-password-protection.md) when required before the intended operation.
