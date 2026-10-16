# app.availableGPUAccelTypes

app.availableGPUAccelTypes

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

Pair this with app.project.gpuAccelType to drive the value under Project Settings > Video Rendering and Effects > Use.

### Type

Array of GpuAccelType enums, or null if no viewers are open; read-only. One of:

- CUDA
- Metal
- OPENCL
- SOFTWARE

### Example

Below, the snippet reads which GPU acceleration types this machine offers, then switches to Metal when that option is present.

```javascript
// app.availableGPUAccelTypes returns GPU acceleration types available on the current system.
// You can use this to check before setting the GPU acceleration type.
var newType = GpuAccelType.METAL;

// Before trying to set, check which GPU acceleration types are available on the current system.
var canSet = false;
var currentOptions = app.availableGPUAccelTypes;
for (var op in currentOptions) {
    if (currentOptions[op] === newType) {
        canSet = true;
    }
}

if (canSet) {
    // Set the GPU acceleration type.
    app.project.gpuAccelType = newType;
} else {
    alert("Metal is not available on this OS.");
}
```
