# Folder.encode()

Folder.encode(name)

### Description

Encodes the supplied string according to RFC 2396.

Special characters are UTF-8 encoded and stored as percent escapes followed by two hexadecimal digits. The documentation illustrates the escaped form with "my%20file" and the plain form "my file". Characters with numeric values above 127 are special, except for this set:

Reference data, output or notation; not an executable JavaScript program.

```text
``/ - _ . ! ~ * ' ( )``
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | String to encode. |

### Returns

String
