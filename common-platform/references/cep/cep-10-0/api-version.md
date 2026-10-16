# API version

CEP JavaScript APIs evolve with each new CEP release. Those changes remain backward compatible. Newly added APIs include a version tag such as "Since x.x.x" in their API comments to show the CEP version where the API first appeared.

Compare that version tag with the CEP version integrated by the Adobe Product you target, so you can confirm that the API you need is available. Call `CSInterface.getCurrentApiVersion()` to retrieve the CEP version integrated into the Adobe Product. This API is itself available only since 4.2.0. If `getCurrentApiVersion` is undefined, the runtime is CEP 4.0 or 4.1. Otherwise, its return value reports the CEP version integrated into the Adobe product.
