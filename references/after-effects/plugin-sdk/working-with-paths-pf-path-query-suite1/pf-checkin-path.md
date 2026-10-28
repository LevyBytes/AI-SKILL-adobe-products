# PF_CheckinPath

`PF_CheckinPath`

Releases the path back to After Effects. Always do this, regardless of any error conditions encountered.

Every checkout must be balanced by a checkin, or pain will ensue.

Suite argument declaration (not a standalone call):

```cpp
PF_CheckinPath(
  PF_ProgPtr         effect_ref,
  PF_PathID          unique_id,
  PF_Boolean         changedB,
  PF_PathOutlinePtr  pathP);
```
