# AEIOs - Registering Your AEIO

During the plug-in entry point, fill an `AEIO_ModuleInfo` that describes the file type or types supported by the AEIO, and fill an `AEIO_FunctionBlock` structure pointing to the file-handling functions. Some functions can rely on After Effects default behavior by returning `AEIO_Err_USE_DFLT_CALLBACK`. You still must provide a function with the required signature that returns that value. After both structures are filled, call `AEGP_RegisterIO`() from `AEGP_RegisterSuite5`.

The `AEIO_ModuleInfo` passed to the registration call supplies the file type and description data After Effects shows in the Import dialog, in the "Files of type" drop-down on Windows, or in the Enable drop-down on MacOS. As of CS6, file extensions cannot exceed three characters, even though a few built-in importers have longer extensions.
