# Calling Sequence - Import

When users choose a file in the import dialog and the file type is handled by your AEIO, After Effects calls `AEIO_VerifyFileImportable`(); it calls the same function again for each imported file of that kind. `AEIO_InitInSpecFromFile`() follows for each file. Parse that file, describe it to After Effects with the relevant set functions, build any file-related options data, and store that data with `AEGP_SetInSpecOptionsHandle`().

After Effects then calls the plug-in's `AEIO_GetInSpecInfo`() function to obtain descriptive text for the file in the project window. As that function's description notes, folders can trigger it too. If no valid options data exists for the file, we recommend doing nothing and returning no error; that is what our AEIOs do.

`AEIO_CountUserData`() is sent next. If the AEIO reports that user data exists, `AEIO_GetUserData`() follows. After Effects then asks the plug-in to draw a video frame for the project window thumbnail by sending `AEIO_DrawSparseFrame`().

After the supported file has been added to a composition, user interaction generates calls to `AEIO_DrawSparseFrame`() and `AEIO_GetSound`().

When the project is saved, and options data is associated with the `AEIO_InSpec`, After Effects sends `AEIO_FlattenOptions`(). During that call, the AEIO parses the options data and creates a representation with no references to external memory. Likewise, when `AEIO_OutSpec` options data exists, `AEIO_GetFlatOutputOptions`() is sent.
