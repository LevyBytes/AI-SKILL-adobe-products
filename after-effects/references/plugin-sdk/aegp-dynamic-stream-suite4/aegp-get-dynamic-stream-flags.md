# AEGP_GetDynamicStreamFlags

`AEGP_GetDynamicStreamFlags`

Hands back the flags for a given AEGP_StreamRefH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetDynamicStreamFlags(
  AEGP_StreamRefH      streamH,
  AEGP_DynStreamFlags  *flagsP);
```

What the `AEGP_DynStreamFlags` hands back is one among these: - `AEGP_DynStreamFlag_ACTIVE_EYEBALL` signals that you can both read and write the stream. - `AEGP_DynStreamFlag_HIDDEN` signals that the stream stays readable and writable yet might not show in the UI right now. - `AEGP_DynStreamFlag_DISABLED` A read-only flag. Tells you whether the `AEGP_StreamRefH` appears grayed out in the UI. - Be aware that from CS5 onward this flag won't come back for a disabled parameter. - Look at `PF_PUI_DISABLED` in Parameter UI Flags instead. - `AEGP_DynStreamFlag_ELIDED` A read-only flag. Marks the `AEGP_StreamRefH` as read-only and never shown to the user. Even so, its children remain visible and sit un-indented in the Timeline panel. - `AEGP_DynStreamFlag_SHOWN_WHEN_EMPTY` New in CS6. A read-only flag. Says this stream group ought to appear even when it holds nothing. - `AEGP_DynStreamFlag_SKIP_REVEAL_WHEN_UNHIDDEN` New in CS6. A read-only flag. Says this stream property won't be revealed on its own once it is un-hidden.
