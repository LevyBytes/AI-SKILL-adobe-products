# Ownership Of Collection Items

Once an `AEGP_StreamRefH` goes into a collection, the collection takes ownership of it, so leave the freeing to it.

`AEGP_EffectRefHs` behave differently: the collection won't adopt them, and the calling AEGP remains responsible for freeing them.
