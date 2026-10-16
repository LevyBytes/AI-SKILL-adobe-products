# CompItem.resolutionFactor

app.project.item(index).resolutionFactor

### Description

The horizontal and vertical downsample factors used when the composition renders. Each array entry states how many pixels to skip while sampling — the first governs horizontal sampling and the second governs vertical. [1, 1] gives full resolution, [2, 2] gives half, and [4, 4] gives a quarter; [1, 1] is the default.

### Type

Array of two integers in the range [1..99]; read/write.
