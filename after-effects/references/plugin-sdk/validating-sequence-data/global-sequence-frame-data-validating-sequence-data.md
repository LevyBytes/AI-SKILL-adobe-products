# Global, Sequence, & Frame Data — Validating Sequence Data

Validating sequence data carefully matters most for effects simulating across time, where frame N leans on frame N-1 and you keep a cache of computed data inside your sequence data. Change a parameter and some of that computed data may become invalid, yet mindlessly recomputing everything after each change would be wasteful too.

On being told to render frame N — supposing your cached data already runs up through frame N-1 — invoke `PF_GetCurrentState`() / `PF_AreStatesIdentical`() out of `PF_ParamUtilSuite3` to check whether your computed-data cache still holds up under the present parameter settings.

Across the supplied time span, every parameter's state is checked, layer parameters (param[0] included) among them, the lone exceptions being those carrying `PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED`.

Timestamps drive the change tracking, which keeps this efficient.

Should the inputs prove unchanged, your cache is safe to use, and on top of that the internal caching system will presume you hold a temporal dependency across the supplied range. That way, when something upstream shifts, the host's caches get invalidated correctly on their own.

To confirm it's behaving, apply your effect with a single parameter keyframed at every frame. Fill the cache with a RAM Preview, then nudge one of those keyframes. That frame and everything depending on it (e.g. the later frames, where a simulation is involved) ought to shed their cache marks and demand re-rendering. By the same token, upstream edits to the sources feeding layer parameters should trigger time-selective invalidation of the cache.
