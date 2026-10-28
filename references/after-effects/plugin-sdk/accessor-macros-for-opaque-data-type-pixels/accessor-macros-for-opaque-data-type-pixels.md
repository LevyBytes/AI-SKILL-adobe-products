# `PF_EffectWorld` / `PF_LayerDef` - Accessor Macros For Opaque (Data Type) Pixels

Reach into the contents of (opaque) `PF_PixelPtrs` through the macros listed below.

Bluntly: casting a pointer of one type straight into another is unsafe. Getting it to compile at all demands a cast, and nothing stops you from writing that cast wrong. The underlying implementation may shift in some future release — and when that day comes, you'll be glad this abstraction was forced on you.
