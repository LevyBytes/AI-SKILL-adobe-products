# PF_Interrupt_CANCEL

`PF_Interrupt_CANCEL`

Both effect and AEGP callbacks can return this to effects, if a user action aborts a render. If the effect gets this error from a callback, it should stop processing the frame and return the error to the host. Failure to pass the error back may result in misrendered frames being cached.
