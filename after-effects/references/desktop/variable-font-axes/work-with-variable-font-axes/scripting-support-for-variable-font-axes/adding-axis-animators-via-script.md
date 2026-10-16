# Adding Axis Animators via Script

Create a composition and text layer

```javascript
// Create a composition and text layer
var comp = app.project.items.addComp("Variable Font Demo", 1920, 1080, 1, 30, 30);
var textLayer = comp.layers.addText("Hello World");
```

Set the font to a variable font

```javascript
// Set the font to a variable font
var textDocument = textLayer.property("Source Text").value;
textDocument.font = "ShantellSans";  // or any variable font name
textLayer.property("Source Text").setValue(textDocument);
```

Get the text property and animators group

```javascript
// Get the text property and animators group
var textProp = textLayer.property("Text");
var animators = textProp.property("Animators");
```

Add a new animator

```javascript
// Add a new animator
var animator = animators.addProperty("ADBE Text Animator");
var animatorProps = animator.property("ADBE Text Animator Properties");
```

Add a variable font axis using its 4-character tag

```javascript
// Add a variable font axis using its 4-character tag
// Common tags: "wght" (Weight), "wdth" (Width), "ital" (Italic), "slnt" (Slant)
var weightAxis = animatorProps.addVariableFontAxis("wght");
```

Set a value with no keyframe

```javascript
// Set a value (no keyframe)
weightAxis.setValue(700);
```

Create keyframes

```javascript
// Or create keyframes
var italicAxis = animatorProps.addVariableFontAxis("ital");
italicAxis.setValueAtTime(0, 0);
italicAxis.setValueAtTime(2, 1);
```
