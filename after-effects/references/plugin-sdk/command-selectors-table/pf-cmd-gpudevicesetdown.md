# PF_Cmd_GPU_DEVICE_SETDOWN

`PF_Cmd_GPU_DEVICE_SETDOWN`

Let go of whatever resources gpu_data holds. Within AE this fires right before the GPU device is released.

```cpp
typedef struct {
  void              *gpu_data;  // effect must dispose.
  PF_GPU_Framework  what_gpu;
  A_u_long          device_index; // For use in conjunction with PrSDKGPUDeviceSuite
} PF_GPUDeviceSetdownInput;

typedef struct {
  PF_GPUDeviceSetdownInput  input;
} PF_GPUDeviceSetdownExtra;
```
