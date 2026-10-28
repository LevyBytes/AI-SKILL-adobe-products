# AEGP_CheckinComputeReceipt

`AEGP_CheckinComputeReceipt`

Once your effect has finished with a checked-out, computed value and before control goes back to the host, invoke this and pass the receipt from AEGP_ComputeIfNeededAndCheckout or AEGP_CheckoutCached.

An invalid receipt yields A_Err_STRUCT, and a dialog pops up reading, "Trying to check in invalid receipt. Please make sure you are not double checking in or checking in invalid receipts."

```cpp
A_Err (*AEGP_CheckinComputeReceipt)(
  AEGP_CCCheckoutReceiptP   compute_receiptP );
```
