# Breaking schema changes

This API change is a major version update and includes _non-backwards-compatible_ behavior.
Every client needs a _structured migration_.

The new API changes payload and schema requirements substantially. Because these are breaking changes, requests that fail to match the new schema are rejected by the API.
