# AEIOs - What Would After Effects Do?

For many AEIO hook functions, After Effects can be asked to perform the default processing; each hook description notes when this is available.

If you do not have a strong reason to handle the work yourself, return `AEIO_Err_USE_DFLT_CALLBACK` from the function and let After Effects do it.

This also helps you learn the calling sequence before starting the implementation.
