# Folder.decode()

Folder.decode(uri)

### Description

Decodes the supplied string according to RFC 2396.

Special characters are UTF-8 encoded and stored as percent escapes followed by two hexadecimal digits. For example, "my%20file" becomes "my file". Characters with numeric values above 127 are special, except for this set:

Reference data, output or notation; not an executable JavaScript program.

```text
``/ - _ . ! ~ * ' ( )``
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uri | String | String containing encoded text. |

### Returns

String
