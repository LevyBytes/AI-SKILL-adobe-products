# Compute Cache API - Impact of wait_for_other_threadB on `AEGP_ComputeIfNeededAndCheckout`

Across almost every combination of the parameters, `AEGP_ComputeIfNeededAndCheckout` will give you back a checkout receipt for the cache value; the lone exception is a false wait_for_other_threadB while another thread is already rendering that requested value.

| Cache State | wait_for_other_threadB set to False | wait_for_other_threadB set to True |
| --- | --- | --- |
| No cache for key | Compute and checkout receipt returned | Compute and checkout receipt returned |
| Being computed by another thread | Returns `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING` Note that After Effects will not report this error to the user, it is only for the effect to respond to. | Wait for another thread and return checkout receipt upon completion |
| Cached | Checkout receipt returned | Checkout receipt returned |
