# File.decode()

File.decode(uri)

### Description

Decodes a string according to RFC 2396 requirements.

Characters needing escaping must be encoded in UTF-8 and stored as escaped characters that begin with percent sign followed by two hexadecimal digits. A special character is any character with numeric value greater than 127 except:

Reference data, output or notation; not an executable JavaScript program.

```text
/ - _ . ! ~ * ' ( )
```

For example, "my%20file" decodes as "my
file".

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uri | String | Encoded URI string. |

### Returns

String
