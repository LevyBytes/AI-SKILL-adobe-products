# TextDocument.strokeOverFill

textDocument.strokeOverFill

### Description

Tells you which of the fill and stroke a Text layer draws first. With this true, the stroke sits on top of the fill.

A Text layer can supersede the per-character setting when it is configured for All Strokes Over All Fills or All Fills Over All Strokes in the Character Panel. For that reason, what you read here may diverge from the attribute value actually applied to the character. The Fill/Stroke render order can be assigned through the "Fill & Stroke" property beneath More Options on the Text layer via TextLayer.text("ADBE Text More Options")("ADBE Text Render Order").

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.
