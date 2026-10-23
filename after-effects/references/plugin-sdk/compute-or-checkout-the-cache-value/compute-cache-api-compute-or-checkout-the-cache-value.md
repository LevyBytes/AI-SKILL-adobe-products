# Compute Cache API - Compute or Checkout the Cache Value

An early decision when wiring up cache support is whether one render call must check out more than a single cache value. Where a render depends on several cache values, the multi-checkout pattern lets you compute those caches in parallel across multiple render calls, so the compute never serializes.
