# AEGP_GetReceiptComputeValue

`AEGP_GetReceiptComputeValue`

This is how you pull the value produced by the compute method back out.

Hand it the receipt that either AEGP_ComputeIfNeededAndCheckout or AEGP_CheckoutCached gave you.

Cast the CCComputeValueRefconP that comes back to whatever object type your compute method actually produced.

```cpp
A_Err (*AEGP_GetReceiptComputeValue)(
  const AEGP_CCCheckoutReceiptP   compute_receiptP,
  AEGP_CCComputeValueRefconP    *compute_valuePP);
```
