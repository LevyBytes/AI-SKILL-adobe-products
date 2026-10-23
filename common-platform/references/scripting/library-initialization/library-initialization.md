# Defining entry points for direct access - Library initialization

ExtendScript invokes ESInitialize() during library initialization.

This function receives an argument vector that contains the extra arguments supplied to the ExternalObject constructor.

The function may return an array of function name-signature strings. Those strings support the ExtendScript reflection interface and allow function arguments to be cast to particular types. A function does not need a defined signature to be callable from JavaScript.
