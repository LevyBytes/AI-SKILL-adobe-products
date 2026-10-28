# AEGP_CheckoutCached

`AEGP_CheckoutCached`

Reach for this method to discover whether the value is already computed, in which case the AEGP_CCCheckoutReceiptP receipt comes back to you.

When nothing has been computed yet, the return code is A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING.

```cpp
A_Err (*AEGP_CheckoutCached)(
  AEGP_CCComputeClassIdP    compute_classP,
  AEGP_CCComputeOptionsRefconP    opaque_optionsP,
  AEGP_CCCheckoutReceiptP   *compute_receiptPP);
```
