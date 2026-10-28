# Generate shape fills

Use Generative Shape Fill to add detailed vector graphics inside shapes.

Powered by Adobe Firefly, Generative Shape Fill fills shapes with detail and color in your own style.

Create unique fills that follow shape outlines and optional text prompts.

Use the Selection tool to choose the shape you want to fill with vector graphics.

Supported selections include open and closed paths, basic shapes, grouped objects, and compound paths. Multiple shapes can also be selected.

When the Contextual Task Bar appears, choose Generative Shape Fill.

You can also open Generative Shape Fill from the right-click menu, the Generative Shape Fill icon in the Control panel, the Quick Actions section of the Properties panel, and Object > Generative.

In the prompt field, describe the fill to generate. The prompt is optional; without one, the fill is created entirely from the shape outline.

If prompt suggestions are unwanted, choose View all settings, then switch off Suggestions.

In the Contextual Task Bar, open the model dropdown menu, then choose Firefly Vector 3 or one of the Partner models.

Use Shape strength and detail as needed:

- Shape Strength: Move the slider to control how tightly the fill follows the shape outline. High makes the fill conform to the outline; Low allows contours that feel closer to real objects and may not fully follow the outline.
- Detail: Move the slider to set the amount of detail required in the fill.

Set Shape Strength according to the result you need.

Use Style Reference as needed:

- Style reference: Leave Auto enabled when the fill should match the style of surrounding vector or image objects. To sample a particular artwork object, choose Choose asset or Replace asset, then identify it by selecting the object or drawing a lasso around it.
- Effects: Apply one or more preset effects. Choose Clear all to remove the effects.

Choose Clear all next to Styles to discard both effects and any style reference.

Note

Partner models currently do not provide Style Reference.

To adjust colors, choose View all settings. In the Generative Shape Fill dialog box, choose Color and Tone:

- Color Presets: Applies a color preset.
- No. of colors: Leave Auto selected or enter the number of colors wanted in the fill.
- Specify Colors: Set up to 12 colors. To change or remove a color, select it and adjust the menu that appears. Choose Clear all next to Specify Colors to remove every color.

To discard color settings, choose Clear all at the top of Color and Tone; to discard every setting, choose Clear all in the Generative Shape Fill dialog.

Choose Generate in the Generative Shape Fill dialog box:

Fill variations appear in the Properties panel. The first variation is placed on the canvas automatically as a Generative Object, marked on its bounding box, filling the shape. If a partner model was selected, only one output variation is generated. The original shape stays on the canvas independently of the fill. The Layers panel also gets a Generative Object layer.

Use the arrows in the Contextual Task Bar to preview variations, then choose the one that best fits your artwork.

Manage generated variations in the Generated Variations panel or the Properties panel. Other options include copying the Generative Object with linked variations, running Generative Shape Fill again, and choosing how it should be re-run.
