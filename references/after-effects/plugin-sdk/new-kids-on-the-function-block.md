# New Kids On The Function Block

During its main entry point, each AEIO plug-in must fill an `AEIO_FunctionBlock` with pointers to the functions After Effects calls for different file-related tasks.

The table below identifies which functions are needed for input and which are needed for output. For a minimal implementation, begin with the functions marked "Required" in the right column. Often, you can get best-case behavior by returning `AEIO_Err_USE_DFLT_CALLBACK` so After Effects handles the call.

For a barebones AEIO that handles only video input, implement `AEIO_InitInSpecFromFile` or `AEIO_InitInSpecInteractive`, choosing based on whether the source is a file or generated interactively; also implement `AEIO_DisposeInSpec`, `AEIO_GetInSpecInfo`, `AEIO_DrawSparseFrame`, `AEIO_CloseSourceFiles`, and `AEIO_InqNextFrameTime`, where `AEIO_Err_USE_DFLT_CALLBACK` is acceptable.

When starting from the IO sample, it is best to keep the other functions defined as well and fill them in later as needed.
