# Project.gpuAccelType

app.project.gpuAccelType

Note

This functionality was added in After Effects 13.8 (CC 2015.3)

### Description

Reads or assigns the current project's GPU Acceleration option. see app.availableGPUAccelTypes

### Type

A GpuAccelType enumerated value; read/write. One of:

- GpuAccelType.CUDA
- GpuAccelType.Metal
- GpuAccelType.OPENCL
- GpuAccelType.SOFTWARE

### Example

```javascript
// access via scripting to Project Settings -> Video Rendering and Effects -> Use

var currentGPUSettings = app.project.gpuAccelType; // returns the current value
var type_str = "";

// check the current value and alert the user

switch (currentGPUSettings) {
    case GpuAccelType.CUDA:
        type_str = "CUDA";
        break;
    case GpuAccelType.METAL:
        type_str = "Metal";
        break;
    case GpuAccelType.OPENCL:
        type_str = "OpenCL";
        break;
    case GpuAccelType.SOFTWARE:
        type_str = "Software";
        break;
    default:
        type_str = "UNKNOWN";
}

alert("Your current setting is " + type_str);

// set the value to Metal
app.project.gpuAccelType = GpuAccelType.METAL;
```
