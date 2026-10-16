# createCloneTrackItemAction

25.0

_Action_

Creates an insert or overwrite edit action that duplicates a trackItem onto a destination track. An offset from the original trackItem position determines both the target track and the copied item's start time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItem | [_VideoClipTrackItem_](../../video-clip-track-item/reference-index.md) or [_AudioClipTrackItem_](../../audio-clip-track-item/reference-index.md) | - |
| timeOffset | [_TickTime_](../../tick-time/reference-index.md) | - |
| videoTrackVerticalOffset | _number_ | - |
| audioTrackVerticalOffset | _number_ | - |
| alignToVideo | _boolean_ | - |
| isInsert | _boolean_ | - |
