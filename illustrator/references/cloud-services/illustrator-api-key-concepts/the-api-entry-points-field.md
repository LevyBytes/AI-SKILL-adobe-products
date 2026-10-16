# The `apiEntryPoints` field

Inside the manifest file, `apiEntryPoints` is an array of `EntryPointDefinition` objects in this form:

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| `type` | string | Entry point type. Valid values are `capability`. | YES |
| `path` | string | File path used for this type. By default, files are expected at the ZIP file root, but nested ZIP paths are also valid. | YES |
| `language` | string | Script language. Accepted choices include extended script, UXP script, and JavaScript. | YES |

- Each entry point identifies either a custom script or a custom script specification.
- The array can contain no more than one entry for each type.
- The array size limit is 3.

When default values are used, defining an entry point is unnecessary.
