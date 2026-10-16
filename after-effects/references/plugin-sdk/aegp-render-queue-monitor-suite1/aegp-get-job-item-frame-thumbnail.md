# AEGP_GetJobItemFrameThumbnail

`AEGP_GetJobItemFrameThumbnail`

Gets a buffer containing a JPEG-encoded thumbnail for the job item frame.

Supply the maximum width and height; the function returns the actual dimensions.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetJobItemFrameThumbnail(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  AEGP_RQM_FrameId    frameid,
  A_long              *widthPL,
  A_long              *heightPL,
  AEGP_MemHandle      *thumbnailPH0);
```
