# AEGP_GetProjectTimeDisplay

`AEGP_GetProjectTimeDisplay`

Retrieves the current time display settings.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetProjectTimeDisplay(
  AEGP_ProjectH      projH,
  AEGP_TimeDisplay3  *time_displayP);

typedef struct {
  AEGP_TimeDisplayMode            display_mode;
  AEGP_SourceTimecodeDisplayMode  footage_display_mode;
  A_Boolean                       display_dropframeB;
  A_Boolean                       use_feet_framesB;
  A_char                          timebaseC;
  A_char                          frames_per_footC;
  AEGP_FramesDisplayMode          frames_display_mode;
} AEGP_TimeDisplay3;

enum {
  AEGP_TimeDisplay_TIMECODE = 0,
  AEGP_TimeDisplay_FRAMES
};

typedef char AEGP_TimeDisplayMode;

typedef char AEGP_FramesDisplayMode;
```
