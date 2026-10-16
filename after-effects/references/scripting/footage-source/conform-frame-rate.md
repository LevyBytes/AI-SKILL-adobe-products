# FootageSource.conformFrameRate

app.project.item(index).mainSource.conformFrameRate

app.project.item(index).proxySource.conformFrameRate

### Description

Supplies a frame rate that overrides nativeFrameRate; leaving it at 0 falls back on nativeFrameRate. Setting it raises an error whenever FootageSource.isStill is true, and setting it to 0 is likewise an error if removePulldown is anything other than PulldownPhase.OFF. Should it be 0 at the moment you give removePulldown a value besides PulldownPhase.OFF, it gets reset automatically to whatever nativeFrameRate holds.

### Type

Floating-point value, in the range [0.0..99.0]; read/write.
