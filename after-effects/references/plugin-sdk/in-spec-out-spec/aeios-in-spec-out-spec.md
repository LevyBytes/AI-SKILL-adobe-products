# AEIOs - InSpec, OutSpec

Most import-related functions receive an `AEIO_InSpecH`. Most output-related functions receive an `AEIO_OutSpecH`.

What are these mysterious handles? They are opaque data handles used with `AEGP_IOInSuite5` and AEGPIOOutSuite4 to set or query information about import or output.

For example, during import you use `AEIO_InSpecH` when calling `AEGP_SetInSpecDimensions` in `AEGP_IOInSuite`.

During export, you use `AEIO_OutSpecH` when calling `AEGP_GetOutSpecDimensions` in `AEGP_IOOutSuite`. Use these handles to exchange input or output details with After Effects.
