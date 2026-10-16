# PropertyGroup.addVariableFontAxis()

app.project.item(index).layer(index).propertyGroupSpec.addVariableFontAxis(axisTag)

Note

This functionality was added in After Effects 26.0

### Description

Builds a Property object for one variable font axis, attaches it to this property group, and returns it. The call is restricted to the "ADBE Text Animator Properties" property group found within a text animator.

Frequently seen axis tags include, though are not limited to:

- "wght" - Weight (100-900 typical range)
- "wdth" - Width (percentage of normal width)
- "slnt" - Slant (angle in degrees)
- "ital" - Italic (0-1 range)
- "opsz" - Optical Size (point size)

Beyond these, fonts can carry custom axes identified by 4-character uppercase tags (e.g., "INFM" for Informality).
