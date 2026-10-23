# Compute Cache API`AEGP_HashSuite1`

To mint a unique key inside the generate_key() callback of `AEGP_ComputeCacheCallbacks`, lean on the `AEGP_HashSuite1`.

Once you've acquired the suite, fire `AEGP_CreateHashFromPtr`() with a buffer — a character array holding a memorable string is our suggestion, so the contents of the cache entry stay easy to identify. Follow that with `AEGP_HashMixInPtr`() for each effect parameter, layer-checkout hash result, and anything else that should push the cache toward a distinct key and entry.

Function

Purpose
