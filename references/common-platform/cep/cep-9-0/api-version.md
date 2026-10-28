# API version

Across CEP releases, the CEP JavaScript APIs continue to evolve, with changes guaranteed to remain backward compatible. Newly added APIs include a comment tag such as "Since x.x.x" that identifies the CEP version where the API first appears.

Compare that version tag with the CEP version integrated by the Adobe Product you are targeting, so you know whether the wanted API is available. Use `CSInterface.getCurrentApiVersion()` to read the CEP version integrated by the Adobe Product. This API itself exists only since 4.2.0. If `getCurrentApiVersion` is reported as undefined, the runtime is CEP 4.0 or 4.1. Otherwise, the returned value identifies the CEP version embedded in the Adobe product.
