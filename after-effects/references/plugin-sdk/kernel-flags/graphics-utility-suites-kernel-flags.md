# Graphics Utility Suites — Kernel Flags

Routines like convolve or gaussian kernel operate on kernels — that is, matrices holding filter-weight values — and those matrices may take any format. How a matrix gets built and applied is governed by the kernel flags, which you OR together as needed.

Whichever flags apply to a particular routine are listed beside that routine's prototype.The left column's first entry is always the default and carries the value 0.

| Kernel Flags | Indicates |
| --- | --- |
| `PF_KernelFlag_2D` `PF_KernelFlag_1D` | Specifies a one or two dimensional kernel. |
| `PF_KernelFlag_UNNORMALIZED` `PF_KernelFlag_NORMALIZED` | NORMALIZED equalizes the kernel; the volume under the kernel surface is the same as the volume under the covered area of pixels. |
| `PF_KernelFlag_CLAMP` `PF_KernelFlag_NO_CLAMP` | CLAMP restricts values to the valid range for their data type. |
| `PF_KernelFlag_USE_LONG` `PF_KernelFlag_USE_CHAR` `PF_KernelFlag_USE_FIXED` `PF_KernelFlag_USE_UNDEFINED` | `USE_LONG` defines the kernel as an array of longs valued from 0 to 255. `USE_LONG` is the only implemented flag. `USE_CHAR` defines the kernel as an array of unsigned chars from 0 to 255. `USE_FIXED` defines the kernel as an array of fixeds from 0 to 1. |
| `PF_KernelFlag_HORIZONTAL` `PF_KernelFlag_VERTICAL` | Specifies the direction of the convolution. |
| `PF_KernelFlag_TRANSPARENT_BORDERS` `PF_KernelFlag_REPLICATE_BORDERS` | Use `TRANSPARENT_BORDERS` to treat pixels off the edge as alpha zero (black). Use `REPLICATE_BORDERS` to replicate border pixels when sampling off the edge. `REPLICATE_BORDERS` is not implemented and will be ignored. |
| `PF_KernelFlag_STRAIGHT_CONVOLVE` `PF_KernelFlag_ALPHA_WEIGHT_CONVOLVE` | Use `STRAIGHT_CONVOLVE` to indicate straight convolution. Use `ALPHA_WEIGHT_CONVOLVE` to tell the convolution code to alpha-weight the contributions of pixels to the resulting convolved output. `ALPHA_WEIGHT_CONVOLVE` is not implemented and will be ignored. |
