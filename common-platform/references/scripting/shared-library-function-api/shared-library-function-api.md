# Defining entry points for indirect access - Shared-library function API

Your shared-library C/C++ code presents its JavaScript interface through two groups of functions, gathered in the SoServerInterface and SoObjectInterface function-pointer structures.

Most functions return integer constants. The error code kESErrOK == 0 means success.
