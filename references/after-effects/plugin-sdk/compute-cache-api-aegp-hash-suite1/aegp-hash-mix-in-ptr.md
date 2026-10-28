# AEGP_HashMixInPtr

`AEGP_HashMixInPtr`

Fire this once per effect parameter, layer-checkout hash, or any other datum that factors into a cache entry's identity.

```cpp
A_Err(*AEGP_HashMixInPtr)(
  const A_u_longlong buf_sizeLu,
  const void *bufPV,
  AEGP_GUID *hashP);
```


Below, Levels2Histo_generate_key_cb() stands in as the callback wired to generate_key() and shows `AEGP_HashSuite1` in action:

Acquire `AEGP_HashSuite1` before registering the callback and keep it valid while the callback can run. The caller supplies it in `Levels2Histo_options` alongside the two demonstrated key fields. Add every other result-affecting parameter to the key when extending the options. The literal is hashed by its byte length, not the size of a pointer. No exception crosses the host callback boundary.

[compute-cache-key.hpp](../examples/compute-cache-key.hpp)
