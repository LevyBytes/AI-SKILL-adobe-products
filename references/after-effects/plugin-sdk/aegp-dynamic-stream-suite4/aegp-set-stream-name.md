# AEGP_SetStreamName

`AEGP_SetStreamName`

Assigns a name to the given AEGP_StreamRefH. Undoable. nameZ points to a null terminated UTF-16 string.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP.

NOTE: Pull the name back with force_englishB set to TRUE and what you receive is the stream's canonical, UNchanged name.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetStreamName(
  AEGP_StreamRefH    streamH,
  const A_UTF16Char  *nameZ);
```

Note: Apply this to the group of an effect stream when you want to rename an effect's display name.
