# ResampleMethod

22.5

Interpolation method for document resizing

Supply to [Document.resizeImage](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#resizeimage)()

| Name | Description |
| --- | --- |
| AUTOMATIC | Automatically chooses the best bicubic option |
| BICUBIC | Uses bicubic interpolation |
| BICUBICSHARPER | Applies a sharpening mask |
| BICUBICSMOOTHER | Applies a smoothing mask |
| BILINEAR | Interpolates bilinearly |
| DEEPUPSCALE | Uses deep learning to predict how the picture should appear at a larger size. |
| NEARESTNEIGHBOR | Chooses values from the nearest neighbor |
| NONE | Alters the image resolution value without changing document dimensions **Currently unsupported** |
| PRESERVEDETAILS | Uses machine-learning detail preservation |
