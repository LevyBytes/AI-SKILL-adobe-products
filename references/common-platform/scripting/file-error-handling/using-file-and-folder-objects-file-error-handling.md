# Using File and Folder objects - File error handling

Each object exposes an error property. When property access or a method call fails, this property stores a message naming the error type. After success, the property contains the empty string. Scripts may assign to the property, but assignment only clears the error message. If a file is open, assigning any value to error also resets its error flag.

For the complete set of supported messages, see File access error messages.
