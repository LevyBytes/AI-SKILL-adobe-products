# getCPUInfo

23.1

[_CPUInfo_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/returnobjects/cpuinfo.md)

Returns host CPU details.

```javascript
const { logicalCores, frequencyMhz, vendor } = core.getCPUInfo();
const isAMD = vendor === "AMD";
const isARM = vendor === "ARM";
```
