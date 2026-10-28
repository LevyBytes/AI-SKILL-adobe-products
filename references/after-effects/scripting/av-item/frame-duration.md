# AVItem.frameDuration

app.project.item(index).frameDuration

### Description

Gives the duration of a single frame for this AVItem in seconds, which is simply 1 divided by frameRate. Assign it and the reciprocal is taken automatically as a new frameRate. The figure handed back is the reciprocal of frameRate, and that may differ from whatever you assigned if your value does not divide evenly into 1.0 (0.3, say). Owing to numerical precision, (1 / (1 / 0.3)) lands very near 0.3 but not exactly on it. Should the AVItem be a FootageItem, the value ties to the mainSource and is read-only; alter it by setting the mainSource object's conformFrameRate, which adjusts the FootageItem's frameRate and frameDuration together.

### Type

Floating-point value, in the range [1/99..1.0]; read-only for a FootageItem, otherwise read/write.
