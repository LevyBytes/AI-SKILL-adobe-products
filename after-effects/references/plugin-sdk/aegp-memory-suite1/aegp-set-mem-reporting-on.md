# AEGP_SetMemReportingOn

`AEGP_SetMemReportingOn`

If After Effects runs into problems with the memory handling, the error should be reported to the user.

Make use of this during development!

Only memory allocated and then leaked using this suite is reported using this call, so for example memory allocated using PF_HandleSuite1 will not be reported.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetMemReportingOn(
  A_Boolean  turn_OnB);
```
