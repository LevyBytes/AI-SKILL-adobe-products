# AEGP_GetMemStats

`AEGP_GetMemStats`

Obtain information about the number of currently allocated handles and their total size.

Only memory allocated using this suite is tracked and reported using this call, so for example memory allocated using PF_HandleSuite1 will not be reported here.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMemStats(
  AEGP_PluginID plugin_id,
  A_long *countPL,
  A_long *sizePL);
```
