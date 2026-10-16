# Compute Cache API — `AEGP_ComputeCacheCallbacks`

Your effect is required to supply implementations of each of these callbacks.

Function

Purpose

generate_key

Fires both while a cache entry is created and during a cache lookup, and it ought to run quickly. Every input that pins down the address of a cache entry has to be folded into the key. Should computing the value require a layer checkout — a histogram being one case — that input's hash belongs in the key too; consult `PF_ParamUtilsSuite`::`PF_GetCurrentState` for the hash of a layer param. Keep in mind this hashes the inputs that produce the frame rather than the frame's pixels, so calling it triggers no render. The `AEGP_CCComputeOptionsRefconP` holds whatever was supplied to `AEGP_ComputeIfNeededAndCheckout` or `AEGP_CheckoutCached`. Via the `AEGP_CComputeKeyP` out_keyP you get the hashed key back; the `AEGP_CCComputeKey` definition for that type sits in `AE_ComputeCacheSuite`.h.

Note

Both generate_key and compute receive the `AEGP_CCComputeOptionsRefconP` parameter, and it has to carry every input required to derive the hash key for a cache value and to compute the value itself.

In practice that often means most or all effect parameters plus whatever layer parameters feed the cache value. The Real-world Integration Example covers this further.

```cpp
A_Err (*generate_key)(
  AEGP_CCComputeOptionsRefconP   optionsP,
  AEGP_CCComputeKeyP   out_keyP);
```

compute

AEGP_ComputeIfNeededAndCheckout invokes this whenever a value has to be computed.

The data handed to AEGP_ComputeIfNeededAndCheckout arrives inside the AEGP_CCComputeOptionsRefconP.

Aim out_valuePP at your computed result, cast over to the AEGP_CCComputeValueRefconP type.

For example:

```cpp
*out_valuePP = reinterpret_cast<AEGP_CCComputeValueRefconP>(myComputedResultP);
```

```cpp
A_Err (*compute)(
  AEGP_CCComputeOptionsRefconP   optionsP,
  AEGP_CCComputeValueRefconP   *out_valuePP);
```

approx_size_value

The cache machinery calls this to gauge the overall memory footprint of the computed value, which need not be a flat structure.

That size feeds into the heuristic that decides what gets purged.

You derive the size to return from the AEGP_CCComputeValueRefconP, which is the computed value itself.

```cpp
size_t (*approx_size_value)(
  AEGP_CCComputeValueRefconP   valueP);
```

delete_compute_value

Invoked to release the value when its cache entry is being purged; free everything the value owns right here.

```cpp
void (*delete_compute_value)(
  AEGP_CCComputeValueRefconP   valueP);
```
