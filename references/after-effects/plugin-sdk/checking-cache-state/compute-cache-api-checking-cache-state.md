# Compute Cache API - Checking Cache State

- An effect might want to test whether a cache value has been computed yet without actually running the compute or stalling while it waits on a different thread to finish. `AEGP_CheckoutCached`() is how you do that.
- One use is a polling arrangement in which some other code is meant to fill the cache. A UI thread, say, could keep polling for a histogram being produced over on a render thread.
- When the value is ready, a checkout receipt comes back in the `AEGP_CCCheckoutReceiptP` parameter, and you pass it along to `AEGP_GetReceiptComputeValue`() to fetch the value. When it isn't ready, the call hands back an `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING` error code.
