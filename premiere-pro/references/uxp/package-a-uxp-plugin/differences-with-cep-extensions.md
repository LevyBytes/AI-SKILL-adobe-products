# Differences with CEP Extensions

CEP extensions relied on `.zxp` files; UXP changes packaging and distribution in several ways. The key difference is that adding a **Digital Signature and Timestamp** to the package is no longer needed.

The Creative Cloud Desktop application installs the new `.ccx` format directly. This has been more reliable than the `ExManCmd` utility, makes installation easier for end users, and reduces errors.

UXP also no longer supports `MXI` files for advanced packaging configuration.
