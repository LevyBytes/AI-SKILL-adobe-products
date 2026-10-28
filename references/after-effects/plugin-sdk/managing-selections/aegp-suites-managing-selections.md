# AEGP Suites - Managing Selections

Selection state is tracked through this suite, which leans on the same behaviour the C++ Standard Template Library's vectors provide.

After Effects lets you select many kinds of items at the same time; an `AEGP_CollectionItem` is a union across layers, masks, effects, streams, mask vertices, and keyframes.

Grab the present collection first, then walk each of its entries so your AEGP applies its work to every one of them.

To let selected dynamic streams be driven through the `AEGP_CollectionSuite`, we introduced `AEGP_Collection2H` along with `AEGP_CollectionItemV2`.
