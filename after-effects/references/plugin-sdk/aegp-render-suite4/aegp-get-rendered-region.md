# AEGP_GetRenderedRegion

`AEGP_GetRenderedRegion`

Fetches an A_LRect holding the area of the AEGP_FrameReceiptH's AEGP_WorldH that has been rendered already.

Bear in mind that only the changed portions of an image may end up rendered, so being able to verify whether that covers the portion you require matters.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetRenderedRegion(
  AEGP_FrameReceiptH  receiptH,
  A_LRect             *regionP);
```
