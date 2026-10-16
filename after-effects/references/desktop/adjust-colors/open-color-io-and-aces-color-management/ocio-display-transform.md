# OCIO Display Transform

Built on the OpenColorIO engine, the OCIO Display Transform effect handles conversion from one color space to another.

OCIO Display Transform effect

OCIO Display Transform effect

These controls are available:

Input Color Space

Pick which input color space the transform should start from.

Display Device

Choose among the display devices on offer. What appears here is generated on the fly from whichever OCIO Configuration is active.

View Transform

Choose a view transform tied to the chosen display. The entries that show up vary with both the active OCIO Configuration file and the display device you picked.

Inverse Transform

Lets you reverse the transform — handy, for instance, during an import workflow.

Information

Details like which OCIO configuration is in use are surfaced in the Information section, along with any error reporting. As an example, swapping the OCIO Configuration over in Project Settings can leave the current effect invalid.

Note

The OCIO Display Transform effect lets you convert imported media into the working color space, or hand it a display view color space.

Tick the Show all check box on the Interpret Footage > Color tab and on Output Module Settings > Color tab to surface every color space from the OCIO configuration file plus the display view transform options.
