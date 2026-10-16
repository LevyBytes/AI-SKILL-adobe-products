# Compute Cache API — Generating a Key

Within its Registered Class, the generate_key callback has to hand back a key that is unique; that said, to stay safe down the road we'd urge you to make the key unique across every registered class globally. To help mint a GUID usable as that key, the AE SDK ships the `AEGP_HashSuite1` suite.

What generate_key produces has to be delivered as an `AEGP_CCComputeKey` object, a type defined from this struct:

```cpp
typedef struct AEGP_GUID {
    A_long bytes[4];
} AEGP_GUID;
```
