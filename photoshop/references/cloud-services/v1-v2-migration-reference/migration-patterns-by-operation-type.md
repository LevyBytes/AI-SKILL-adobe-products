# Migration patterns by operation type

**Depth Blur:** V2 currently has no Depth Blur support. Because Neural Filters are unavailable there, continue to use the V1 `/pie/psdService/depthBlur` endpoint for this capability. Treat the parameters below as reference material only.

- **Action count**: 1 action step (Neural Gallery Filter)
- **Extra images**: No
- **Primary parameters**: 11 customizable parameters, each with a default
  - `spl::focalSelector`: "auto" - chooses the focus point
  - `spl::selectSubjectUsage`: 1 - controls subject-selection behavior
  - `spl::slideAperture`: 50 - sets blur amount (0-100)
  - `spl::slideFocalDist`: 50 - sets focus distance (0-100)
  - `spl::slideFocalRange`: 50 - controls focal span size (0-100)
  - `spl::sliderBrightness`: 0 - adjusts brightness (-100 to 100)
  - `spl::sliderHaze`: 0 - controls haze (-100 to 100)
  - `spl::sliderNoise`: 0 - adds or removes grain/noise (0-100)
  - `spl::sliderSaturation`: 0 - adjusts saturation (-100 to 100)
  - `spl::sliderTint`: 0 - controls tint (-100 to 100)
  - `spl::sliderWarmness`: 0 - adjusts warmth/color temperature (-100 to 100)
- **Effect**: applies a neural depth-of-field blur effect
- **Use case**: portrait and product photos with bokeh-style results
