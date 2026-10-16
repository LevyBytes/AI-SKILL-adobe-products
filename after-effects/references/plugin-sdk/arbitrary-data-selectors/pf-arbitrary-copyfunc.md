# PF_Arbitrary_COPY_FUNC

`PF_Arbitrary_COPY_FUNC`

Duplicate an instance that already exists. Two handles arrive, yet only the source one holds a real instance; build a fresh instance, transfer the values across from the source, and store it in the destination handle. Should the handle you receive be NULL, hand back a default instance of your arb data instead.
