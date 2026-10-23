# Global, Sequence, & Frame Data - Persistence

Of the three, only sequence data gets written into the project file by After Effects; global and frame data do not. Any pointers inside sequence data that reference external data are almost certainly stale once the project reopens and have to be hooked back up. That round trip is what we label "flattening" and "unflattening" the sequence data.

Note

Contents of the Compute Cache aren't written to the project file. Whatever the cache holds has to be rebuilt while rendering.
