# Using the Clipboard API

Use `navigator.clipboard` for clipboard operations. It exposes two primary methods:

- **`setContent()`**: puts data onto the clipboard.
- **`getContent()`**: retrieves data from the clipboard.

These methods accept MIME-type objects: each key identifies a format such as `"text/plain"`, and each value holds the content for that format.
