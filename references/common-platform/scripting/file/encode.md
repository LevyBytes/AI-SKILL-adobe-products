# File.encode()

File.encode(name)

### Description

Encodes a string according to RFC 2396 requirements.

Special characters are encoded in UTF-8 and stored as escaped characters that begin with percent sign followed by two hexadecimal digits. For example, "my file" is encoded as "my%20file". A special character is any character with numeric value greater than 127 except:

Reference data, output or notation; not an executable JavaScript program.

```text
/ - _ . ! ~ * ' ( )
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | String to encode. |

### Returns

String
