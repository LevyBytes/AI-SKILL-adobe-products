# AEGP_CreateHashFromPtr

`AEGP_CreateHashFromPtr`

Kick off hash creation with this; the result lands in hashP, ready to return out of generate_key.

```cpp
A_Err (*AEGP_CreateHashFromPtr)(
  const A_u_longlong buf_sizeLu,
  const void *bufPV,
  AEGP_GUID *hashP);
```
