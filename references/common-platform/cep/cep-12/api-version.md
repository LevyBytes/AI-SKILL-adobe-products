# API version

The CEP JavaScript APIs change with each new CEP release, while retaining backward compatibility. Newly added APIs include a version tag such as "Since x.x.x" in their API comments to indicate the CEP version where the API first became available.

Compare that version tag with the CEP version integrated into the Adobe Product being used, so you can confirm the target API is available. Use `CSInterface.getCurrentApiVersion()` to retrieve the CEP version integrated by the Adobe Product. This API exists only starting in 4.2.0. If `getCurrentApiVersion` is undefined, the runtime is CEP 4.0 or 4.1. Otherwise, the returned value identifies the CEP version integrated into the Adobe product.
