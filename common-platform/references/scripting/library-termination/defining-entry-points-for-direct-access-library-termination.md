# Defining entry points for direct access - Library termination

Use the entry point ESInitialize() to release memory allocated by your code when the library is unloaded.

Each time a JavaScript function calls a library function, the library reference count is incremented. When that count reaches 0, the library unloads automatically; the termination function runs, and the ExternalObject instance is deleted. Deleting the ExternalObject instance still will not unload the library while other references remain.
