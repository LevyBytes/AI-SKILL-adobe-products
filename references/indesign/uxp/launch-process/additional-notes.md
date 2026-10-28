# Additional notes

- Operations of this kind prompt the user for consent. Add a note so the user has more context, such as "Opening browser for testing purpose." in the example above.
- Handle the case where the user rejects the request.
- With `openExternal`, remember that URL schemes depend on the operating system. For example, `facetime` is unavailable on Windows, and custom schemes behave the same way. Add pre-checks and prefer standard URL schemes to reduce unexpected errors.
