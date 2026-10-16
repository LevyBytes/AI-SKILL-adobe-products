# Combine style and source text

Combining Style and Source Text

Combining Style and Source Text

When you want both the style and the live Source Text returned at time, you'll need to bring the getStyleAt and setText functions together. Two ways of writing that expression follow.

```javascript
// To return the values of both the style and the actual Source Text at time (short hand)

var sourceTextProperty = thisComp.layer("MAIN TEXT").text.sourceText;

var newStyle = sourceTextProperty.getStyleAt(0,0);

newStyle.setText(sourceTextProperty);
```

```javascript
// To return the values of both the style and the actual Source Text of the previous layer in the layer stacking order

var sourceTextProperty = thisComp.layer(index - 1).text.sourceText;

var newStyle = sourceTextProperty.getStyleAt(0,0);

newStyle.setText(sourceTextProperty);
```
