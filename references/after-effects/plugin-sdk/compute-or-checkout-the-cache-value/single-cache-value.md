# Single Cache Value

Should a render call require just one cache value to render a frame, hand `AEGP_ComputeIfNeededAndCheckout` a wait_for_other_threadB of true. A receipt comes back from the checkout call, which may run the compute callback to fill the cache, or instead wait on a thread that already kicked off the needed computation.
