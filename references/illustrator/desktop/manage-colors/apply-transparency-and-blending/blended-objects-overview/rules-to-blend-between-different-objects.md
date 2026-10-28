# Rules to blend between different objects

These rules govern blended objects and the colors associated with them:

- You cannot blend between mesh objects.
- Blending colors:
- Blending a process color object with a spot color object creates steps that use process colors.
- Blending two different spot colors produces intermediate steps in process colors.
- Blending tints from one spot color creates steps expressed as percentages of that same spot color.
- For a blend between two patterned objects, the intermediate steps use only the fill from the object on the topmost layer.
- If objects blended together have Blending Mode set in the Transparency panel, the resulting steps use only the top object's blending mode.
- When objects with multiple appearance attributes are blended, including effects, fills, or strokes, Illustrator tries to interpolate those options.
- Symbol instances:
- Blending two instances of the same symbol shows the symbol pattern across the generated steps.
- Blending two instances of different symbols makes the steps show a mixed pattern drawn from both symbols.
- Illustrator initially creates blends as transparency knockout groups. When any steps contain overlapping transparent objects, those objects do not show through each other. To modify that behavior, select the blend and deselect Knockout Group in the Transparency panel.
