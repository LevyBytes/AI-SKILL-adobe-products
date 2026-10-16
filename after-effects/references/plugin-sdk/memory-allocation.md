# Memory Allocation

For allocations of any meaningful size, route them through After Effects. Tiny allocations may go through new and delete, yet that should be treated as the exception rather than the norm. When memory runs short — RAM preview being one such situation — it is critical that plug-ins handle out-of-memory states cleanly and avoid contending with After Effects for OS memory. Relying on our allocation routines lets After Effects recognize the right moment to release cached images and thereby sidestep memory swapping. Skip our functions on large allocations and you invite lock-ups, crashes, and tech support calls. Don't do that.

When you are wrapping pre-existing C++ classes, build a base class that supplies new and delete for the class and inherit from it. As for the STL, overloading global new and delete is not something we advise; supply an allocator through the template definition instead.

Any handles After Effects hands to you arrive already locked, and they are unlocked again once you return.
