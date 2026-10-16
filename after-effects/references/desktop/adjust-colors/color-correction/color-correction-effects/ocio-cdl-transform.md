# OCIO CDL Transform

With the OCIO CDL Transform effect you can run a CDL transform — or the inverse of one — across a layer or an entire composition.

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
