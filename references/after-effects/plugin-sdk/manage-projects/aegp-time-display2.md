# `AEGP_TimeDisplay2`

Note

Values in unused fields persist when After Effects is using a different display type.

| Member | Descrpition |
| --- | --- |
| `AEGP_TimeDisplayType` type; | One of the following: - `AEGP_TimeDisplayType_TIMECODE` - `AEGP_TimeDisplayType_FRAMES` - `AEGP_TimeDisplayType_FEET_AND_FRAMES` |
| A_char timebaseC; | 0 - 100. Only used for `AEGP_TimeDisplayType_TIMECODE`. |
| `A_Boolean` non_drop_30B; | When the timebase is 30 and the item's framerate is 29.97, determines whether to display as non-drop frame. |
| A_char frames_per_footC; | Only used for `AEGP_TimeDisplayType_FEET_AND_FRAMES`. |
| A_long starting_frameL; | Usually 0 or 1. Not used when type is usually 0 or 1, not used for `AEGP_TimeDisplayType_TIMECODE`. |
| `A_Boolean` auto_timecode_baseB; | If TRUE, the project timecode display setting is set to auto. |
