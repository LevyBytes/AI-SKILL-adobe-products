# Compute Cache API - Real-world Integration Example

After Effects ships with the Auto Color plugin, an effect that has begun leaning on the Compute Cache plus the HashSuite1 suite to cache histogram and level data whenever its Temporal Smoothing parameter exceeds 0.

Getting started with the Cache and Hash suites meant first pinning down what Auto Color's Temporal Smoothing actually computes, which parts of that are slow, and which effect parameters would force a recompute.

Note

The data each effect computes and caches differs, so run this analysis specifically for your own effect.

Temporal Smoothing in Auto Color needs both histogram and level data drawn from the frames around the one being rendered. How many neighboring frames are required depends on the value of the temporal smoothing parameters. Although both histogram and levels data can be costly to compute, each can usually be worked out a single time per frame, cached, and then reused on demand.

That said, Auto Color carries several additional parameters that feed into the cache values, among them Black Clip, White Clip, Mid Tones and the Auto Color mode. Those parameters therefore have to be part of the generate_key and compute methods.

Armed with that, we set about integrating the Compute Cache:

- `PF_Cmd_GLOBAL_SETUP` is where the `AEGP_ClassRegister` call runs.
- `PF_Cmd_GLOBAL_SETDOWN` is where the `AEGP_ClassUnregister` call runs.

- generate_key leans on `AEGP_HashSuite1` to mint a unique key. Into that key go four parameters — black clip, white clip, mid tones and auto levels mode — plus the frame time and time step, the latter pair guaranteeing a distinct cache for whichever frame is under computation.
- compute works out the histogram and levels, packing both data structures into one struct that becomes the out_valuePP parameter returned from the compute callback.
- approx_size_value sums the sizeof() the histogram and level data structures held in the cached value to report how much memory the cache entry consumes.
- delete_compute_value releases the memory occupied by the histogram and level data structures for the entry.

- Calls to `AEGP_ComputeIfNeededAndCheckout` were folded into the Temporal Smoothing code. Each frame time / time step the algorithm requires triggers one, drawing on results from other render threads that are computing the histogram and levels of surrounding frames.

- With every cache value for a frame computed, the effect code then checks out the values it needs through `AEGP_GetReceiptComputeValue`.
- Those cache values then drive the temporal smoothing algorithm as it tweaks the frame's color.
- The moment the current frame no longer needs a cache value, `AEGP_CheckinComputeReceipt` is invoked for each cache-value receipt.
- For now, Auto Color makes no use of `AEGP_CheckoutCached`.

- Previously Auto Color kept its histogram and levels data in sequence data, which meant a separate copy of sequence_data on each render thread before the Compute Cache existed. As a result every histogram and level a frame needed had to be rendered on every thread.
- After the switch to the Compute Cache, each rendered frame picked up the speed gains of other render threads computing the histogram and levels data and saving it for later reuse.
- Rendering the Auto Color effect across a stretch of footage with the Compute Cache turns out to be at minimum 3x quicker than the sequence_data approach.
