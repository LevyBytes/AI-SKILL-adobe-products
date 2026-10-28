# AEGP_IsSeparationFollower

`AEGP_IsSeparationFollower`

Applies to leaf streams alone.

Returns true when this stream is a one-dimensional property standing in for one of a Leader's dimensions.

The stream can be fetched from the Leader by way of AEGP_GetSeparationFollower().

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsSeparationFollower(
  AEGP_StreamRefH streamH,
  A_Boolean *followerPB);
```
