# AEGP_ComputeIfNeededAndCheckout

`AEGP_ComputeIfNeededAndCheckout`

Think of this as the primary checkout entry point: it computes the entry when required and hands back an AEGP_CCCheckoutReceiptP receipt pointer into the cache.

Supply the very same AEGP_CCComputeClassIdP that you handed to the AEGP_ClassRegister method.

Whatever you stash in AEGP_CCComputeOptionsRefconP flows straight through to generate_key and compute inside AEGP_ComputeCacheCallbacks. Because its type is opaque to AEGP_ComputeCacheSuite1, your generate_key and compute code is responsible for casting it back.

How the boolean wait_for_other_threadB behaves matters only while the value still has to be computed. A true value forces the call to either run the compute step itself or surrender a finished receipt. A false value still runs the compute step, except when a different thread is mid-computation on that same entry, and then you get back A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING.

Further detail on this argument lives under Impact of wait_for_other_threadB on AEGP_ComputeIfNeededAndCheckout.

That opaque CCCheckoutReceiptP pointer is exactly what you feed to AEGP_GetReceiptComputeValue to obtain a pointer to the value computed in the cache.

```cpp
A_Err (*AEGP_ComputeIfNeededAndCheckout)(
  AEGP_CCComputeClassIdP    compute_classP,
  AEGP_CCComputeOptionsRefconP  opaque_optionsP,
  bool  wait_for_other_threadB,
  AEGP_CCCheckoutReceiptP   *compute_receiptPP);
```
