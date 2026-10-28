# Pixel Aspect Ratio - Suggested Approach

Working start to finish in full-resolution square coordinates, and only then scaling by downsample factor and pixel aspect ratio as one last output step, is the cleanest path to correctness. Because point parameters always arrive in input-buffer coordinates, translate them into full-resolution square coordinates before you touch them. Take that route and sliders defining a size in pixels stop being a headache; simply read them as a size measured in full-resolution vertical pixels.

1. The instant your point parameters arrive, move them straight into floating point under a square pixel grid at full resolution, in this fashion.

This coordinate-conversion excerpt assumes floating-point `x` and `y`, a valid `PF_InData* in_data` and nonzero ratio numerators. It applies pixel aspect ratio and reverses the supplied downsample ratios.

```cpp
x *= in_data->pixel_aspect_ratio.num / (float)in_data->pixel_aspect_ratio.den;
x *= in_data->downsample_x.den / (float)in_data->downsample_x.num;
y *= in_data->downsample_y.den / (float)in_data->downsample_y.num;
```

1. Do every bit of setup within this coordinate space — laying out transformation matrices, producing coordinates for later scan conversion, deriving values from point-to-point distances, rotating things, and so on. Keep in mind you aren't touching pixels yet at this stage; you're only working with coordinates or coordinate transformations.
2. When it's time to return to a coordinate system that maps one-to-one onto the output buffer's pixels, reverse the transformations from the first step. Hold this off until the last possible moment, so that as little of your code as possible has to grapple with the non-square space. With matrices, that reversal becomes your closing output transformation. For an effect that draws something from each pixel's coordinate, walk the output pixels and convert each pixel coordinate into square coordinates before running any per-pixel processing.

It might look like make-work, yet most effects this elaborate already carry a coordinate-transformation step; and the ones that don't still require one to deal correctly with pixel aspect ratio and downsample factor.
