# API version

CEP JavaScript APIs evolve with each CEP release, while maintaining backward compatibility. Newly added APIs receive a version tag such as "Since x.x.x" in their API comments to identify the CEP version where they became available.

Compare that version tag with the CEP version embedded in the Adobe Product you are using to confirm that the desired API is available. Use `CSInterface.getCurrentApiVersion()` to retrieve the CEP version integrated by the Adobe Product. This API is available only since 4.2.0. An error that says `getCurrentApiVersion` is undefined means the runtime is CEP 4.0 or 4.1. Otherwise, the returned value identifies the CEP version integrated by the Adobe product.
