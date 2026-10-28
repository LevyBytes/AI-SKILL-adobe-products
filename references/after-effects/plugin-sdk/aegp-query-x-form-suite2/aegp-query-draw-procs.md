# AEGP_QueryDrawProcs

`AEGP_QueryDrawProcs`

Sets the interactive drawing functions that After Effects calls while drawing camera and lighting handles into the context supplied by the artisan.

Suite argument declaration (not a standalone call):

```cpp
AEGP_QueryDrawProcs(
  PR_QueryContextH         query_contextH,
  PR_InteractiveDrawProcs  *window_refP);
```
