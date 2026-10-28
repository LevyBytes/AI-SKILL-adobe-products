# SupportsPixelLayoutBGRA

SupportsPixelLayoutBGRA

A given Drawbot implementation can support multiple channel orders, but will likely prefer one over the other.

Use the following four callbacks to get the preferred channel order for any API that takes a DRAWBOT_PixelLayout (e.g. NewImageFromBuffer).

Suite argument declaration (not a standalone call):

```cpp
SupportsPixelLayoutBGRA(
  DRAWBOT_SupplierRef  in_supplier_ref,
  DRAWBOT_Boolean      *out_supports_bgraPB);
```
