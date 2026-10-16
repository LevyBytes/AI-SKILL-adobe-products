# Compute Cache API — Persistence of Cache

- The Compute Cache differs from flattened sequence data in that its contents never persist with the project, so whatever was computed has to be recomputed once the project is reopened.
- Whenever After Effects needs the memory for something else, cache entries purge on their own. Write any code that depends on a cached value as though the compute step might have to run afresh every time.
- Keep approx_size_value fast while still returning a fairly accurate gauge of how much data the cache entry holds. That accuracy lets After Effects choose more wisely what to purge and when.
- Unregistering a cache class wipes every bit of that class's data from the cache, firing a delete_compute_value callback for each entry tied to the class.
- Inside delete_compute_value, release every resource attached to the cache entry. Since the Compute Cache only keeps a void \* pointer to those resources, it has no way to free them for the effect.
