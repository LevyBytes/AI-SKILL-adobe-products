# AVItem.frameRate

app.project.item(index).frameRate

### Description

The AVItem's frame rate in frames per second, which is simply 1 divided by frameDuration. Assign it and the reciprocal is taken automatically as a new frameDuration.

- For a CompItem this tracks the composition's own frameRate and you may write to it.
- For a FootageItem it follows the mainSource object's frameRate and is read-only. Adjust it instead through the mainSource object's conformFrameRate, which updates both frameRate and frameDuration on the FootageItem at once.

### Type

Floating-point value, in the range [1.0..99.0]; read-only for a FootageItem, otherwise read/write.
