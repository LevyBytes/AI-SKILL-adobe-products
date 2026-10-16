# API version

The CEP JavaScript APIs evolve with each CEP release, with backward compatibility preserved. Newly introduced APIs include comments such as "Since x.x.x" to show the first CEP version where that API exists.

Compare that version tag with the CEP version embedded in the Adobe Product you are targeting before depending on an API. Call `CSInterface.getCurrentApiVersion()` to read the integrated CEP version for the Adobe Product. This method itself exists only from 4.2.0 onward. If `getCurrentApiVersion` is reported as undefined, the runtime is CEP 4.0 or 4.1; otherwise, the returned value identifies the CEP version inside the Adobe product.
