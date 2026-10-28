# Variable Font Spacing

As Variable Font axes animate, the width of individual characters can shift. To compensate for those width shifts, After Effects relies on the Variable Font Spacing property — which lives in the "More Options" section of a text animator — to govern character spacing.

You reach the Variable Font Spacing property through its matchName "ADBE Text Variable Font Spacing"; it is a dropdown control property and only surfaces once the animator has at least one active variable font axis.

Tip

An axis has to be present on the font before it does anything. Use FontObject.designAxesData to find out which axes a given font supports.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| axisTag | String | The 4-character tag identifying the variable font axis (e.g., "wght", "wdth", "slnt", "ital"). |

### Returns

Property object representing the variable font axis.

### Examples

```javascript
// Create a comp
var comp = app.project.items.addComp("Create Axis Comp", 1920, 1080, 1, 30, 30);
comp.openInViewer();

// Create a text layer
var textLayer = comp.layers.addText("Hello World!");

// Set the font to variable font
var textDocument = textLayer.property("Source Text").value;
textDocument.font = 'ShantellSans'; // Must be a variable font
textLayer.property("Source Text").setValue(textDocument);

// Get the text property and animators group
var textProp = textLayer.property("Text");
var animators = textProp.property("Animators");

// Add a new animator
var animator = animators.addProperty("ADBE Text Animator");
var animatorProps = animator.property("ADBE Text Animator Properties");

// Add the Weight axis
var axisProp = animatorProps.addVariableFontAxis("wght");

// Set a static value
axisProp.setValue(700);

// Set keyframes
axisProp.setValueAtTime(0, 300);  // Light at 0 seconds
axisProp.setValueAtTime(2, 900);  // Heavy at 2 seconds
```
