# getGPUInfo

23.1

[_GPUInfo_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/returnobjects/gpuinfo.md)

Returns OpenGL and OpenCL details for the available graphics hardware.

```javascript
const { gpuInfoList, clgpuInfoList } = core.getGPUInfo();
console.log(JSON.stringify(gpuInfoList));
// > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]
console.log(JSON.stringify(clgpuInfoList));
// > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]
```
