# AEGP_GetLastErrorMessage

`AEGP_GetLastErrorMessage`

Reads back the most recent error message shown to the user along with its error number. Supply the size of the character buffer you want returned.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLastErrorMessage(
  A_long  buffer_size,
  A_char  *error_string,
  A_Err   *error_num);
```
