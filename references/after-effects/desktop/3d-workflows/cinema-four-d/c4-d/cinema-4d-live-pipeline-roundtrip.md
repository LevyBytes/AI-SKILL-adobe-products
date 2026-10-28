# Export to Maxon Cinema 4D and roundtrip your edits using Live 3D Pipeline

By way of the After Effect Live 3D pipeline, compositions carrying 3D animated text and shape layers can be exported to Maxon Cinema 4D for a round-tripped 3D workflow.

When 3D Shape layers go across, they become extruded spline objects and carry the animation of their shape layer properties.

Pick the Extrude Text as Shapes option and 3D text layers are written into the .c4d file as extruded spline objects. Going this route preserves the layer's fidelity — its character and paragraph formatting plus the animation of text layer properties. What you cannot do afterward is alter the font and text content over in Cinema 4D.

Pick the Preserve Editable Text option instead and 3D text layers become extruded text objects inside the .c4d file. That lets you adjust the font and text in Cinema 4D; the trade-off is thin support for character and paragraph formatting and for the animation of text layer properties. Several text animation features fall outside that support: text animators; kerning and tracking; vertical text; paragraph text; and text on the path.

For 3D text and shape layers, strokes are written out into the .c4d file. Even though After Effects' Ray-traced 3D renderer won't render strokes on 3D text layers, those strokes still export when they are enabled. If you want to see 3D text layer strokes before the export, set the composition renderer to Classic 3D.
