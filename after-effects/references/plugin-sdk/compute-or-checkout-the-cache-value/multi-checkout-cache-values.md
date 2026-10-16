# Multi-Checkout Cache Values

When a render call leans on several cache values, the multi-checkout pattern keeps the render threads busy and thereby stops the compute from serializing.

The idea behind multi-checkout is to let one render thread (say, the one rendering frame 3) ride on whatever other render threads (say, frames 1 and 2) happen to be computing the cache values it needs at the same time (frame 3, for example, depends on data from frames 1 and 2). Where no other thread is computing the requested cached value, the render thread (frame 3) runs the compute itself. After all the cache-value checkout calls are issued, that render thread (frame 3) can pause until any other threads (frames 1 and 2) wrap up their compute, then proceed to render the pixels. As soon as the pixel render finishes, be certain to check in whatever cache values were checked out (frames 1, 2 and 3).

Pseudo-code illustrating the approach follows.

Supply an acquired `AEGP_ComputeCacheSuite1`, a registered class ID, valid options and a consumer for the two borrowed values. Both initial requests are issued without waiting; pending requests are then retried with the complete arguments and `wait_for_other_threadB=true`. Every acquired receipt is checked in after use, including failure paths. The consumer must not retain borrowed values after returning.

[compute-cache-pair.hpp](../examples/compute-cache-pair.hpp)
