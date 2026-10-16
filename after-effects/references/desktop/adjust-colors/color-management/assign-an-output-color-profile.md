# Assign an output color profile

The Output Module Settings dialog box is where you manage color for each output item.

Note

Exporting to SWF format routes you through the Export menu rather than the Render Queue panel, so output module settings don't apply to this output type. If the project has color management on, After Effects converts colors from the project's working color space to the sRGB IEC61966-2.1 color space on its own when exporting to SWF.

What calculations run when a rendered composition's colors convert from the project's working color space to the output medium's color space is decided by a render item's output color profile. With no project working space set — meaning color management isn't on for the project — assigning an output color profile isn't possible.

Picture building a movie in an HDTV (Rec. 709) working color space meant for film output: a film output color profile pushing it into a log-encoded Cineon/DPX color space is probably what you'll reach for. Building a movie for high-definition television instead, you should pick an HDTV (Rec. 709) output profile.

A render item's output color profile rides along inside an output module and turns up in the output module group within the Render Queue panel. One render item can take several output modules, each carrying its own output color profile, which lets you turn a single rendered movie into output movies for assorted media.

Whether colors go out to a linear color profile (gamma equals 1.0) rests on one setting: Convert To Linear Light, found on the Output Module Settings dialog box's Color tab. Outputting to linear light rarely pays off for 8-bpc or 16-bpc color, so Convert To Linear Light defaults to On For 32 bpc. Learn more about gamma and tone response.

Certain file formats — Photoshop (PSD), PNG, TIFF, and JPEG among them — permit a color profile to be embedded. Embed a color profile in an output file and you raise the odds that programs using the file will read its color information correctly.

Which rendering intent After Effects picks follows from the output color profile you choose. Most output types get relative colorimetric (with black point compensation) as the rendering intent; output to film negative gets absolute colorimetric.

For a single output item, checking Preserve RGB on the Output Module Settings dialog box's Color tab blocks its colors from converting out of the working color space. RGB numbers survive under this option; color appearance does not. Switching color management off for one footage item helps when that item isn't bound for visual display but instead serves as a control layer — a displacement map, say.

In the Render Queue panel, click the underlined text beside the render item's Output Module heading.

On the Output Module Settings dialog box's Color tab, choose a value from the Output profile menu.

To confirm the conversion is the one you're after, check the dialog box's Description area, then click OK.

## See also

- [Application](../../../scripting/application-object.md)
