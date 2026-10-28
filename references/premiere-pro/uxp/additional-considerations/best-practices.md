# Best Practices

1. **Choose the right permission level**: begin with `"plugin"`, move to `"request"` when needed, and reserve `"fullAccess"` for cases that truly require it.
2. **Handle errors gracefully**: wrap file operations in try-catch blocks every time.
3. **Validate file paths**: confirm that a file exists before reading it.
4. **Use appropriate encoding**: pass `"utf-8"` for text files so characters are interpreted correctly.
5. **Provide user feedback**: display progress indicators for operations that take time.
6. **Clean up temporary files**: remove temporary files once they are no longer required.
