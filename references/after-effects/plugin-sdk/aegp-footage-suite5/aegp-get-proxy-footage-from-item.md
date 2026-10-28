# AEGP_GetProxyFootageFromItem

`AEGP_GetProxyFootageFromItem`

Returns an error if item has no proxy. Returns the proxy footage handle.

Note: a composition can have a proxy.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetProxyFootageFromItem(
  AEGP_ItemH     itemH,
  AEGP_FootageH  *proxy_ftgPH);
```
