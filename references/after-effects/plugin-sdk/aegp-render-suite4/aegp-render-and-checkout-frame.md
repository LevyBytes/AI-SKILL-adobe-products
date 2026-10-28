# AEGP_RenderAndCheckoutFrame

`AEGP_RenderAndCheckoutFrame`

Fetches an AEGP_FrameReceiptH (the pixels themselves don't come back) for the frame you asked for. Hand this receipt to AEGP_CheckinFrame to free its memory.

Build the AEGP_RenderOptionsH with the AEGP_RenderOptionsSuite4.

If it wants, the AEGP may supply a function for After Effects to invoke should the user cancel the running render, plus a refcon (a constant reference to opaque data) that function can use.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderAndCheckoutFrame(
  AEGP_RenderOptionsH             optionsH,
  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,
  AEGP_CancelRefcon               cancel_function_refconP0,
  AEGP_FrameReceiptH              *receiptPH);
```
