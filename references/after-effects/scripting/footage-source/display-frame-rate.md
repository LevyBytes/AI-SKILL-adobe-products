# FootageSource.displayFrameRate

app.project.item(index).mainSource.displayFrameRate

app.project.item(index).proxySource.displayFrameRate

### Description

The working frame rate at which After Effects shows and renders the footage inside compositions. While removePulldown sits at PulldownPhase.OFF, it matches conformFrameRate when that is non-zero, or else nativeFrameRate when conformFrameRate is 0. Once removePulldown moves off PulldownPhase.OFF, the figure becomes conformFrameRate \* 0.8 — the rate left after one frame in every five is dropped.

### Type

Floating-point value, in the range [0.0..99.0]; read-only.
