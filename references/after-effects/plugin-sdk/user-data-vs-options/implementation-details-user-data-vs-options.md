# Implementation Details - User Data vs. Options

Metadata about a file can be stored through either user-data allocations or options handles.

We use user data for information embedded in the file when the file format supports it, such as marker data, field labels, and similar data.

We use option handles for information about the file, including output settings, dimensions, and compression-setting details.
