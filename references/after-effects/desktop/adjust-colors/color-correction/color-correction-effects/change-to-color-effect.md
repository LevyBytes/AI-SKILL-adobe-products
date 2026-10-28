# Change To Color effect

Selecting one color in an image, the Change To Color effect (once called the Change Color HLS effect) swaps it for another by way of hue, lightness, and saturation (HLS) values, while the remaining colors stay put.

Compared with the Change Color effect, Change To Color brings flexibility and choices it lacks. Those include tolerance sliders covering hue, lightness, and saturation for precise color matching, plus the option to dial in the exact RGB values of the target color you're switching to.

Color depths of 8-bpc and 16-bpc are what this effect handles.

Original image (upper-left), with saturation removed in the planet (lower-left), and with light green changed to yellow in the planet (lower-right)

From

The midpoint of the color range you're changing.

To

The color that matched pixels become. Set keyframes or expressions on the To color to animate a color change.

Change

Which channels the effect touches.

Change By

The method for changing colors. Picking Setting To Color swaps affected pixels straight over to the target color. Picking Transforming To Color shifts affected pixel values toward the target color through HLS interpolation, with each pixel changing by an amount that hinges on how near its color sits to the From color.

Tolerance

The degree to which colors may stray from the From color yet still register as a match. Expand this control to expose individual sliders for Hue, Lightness, and Saturation values.

Note

Turn to the View Correction Matte option to get a clearer read on which pixels are matched and affected.

Softness

How much feathering the correction matte's edges receive. Larger values produce smoother handoffs between the regions the color change touches and those it doesn't.

View Correction Matte

Displays a grayscale matte marking how strongly the effect touches each pixel. White regions change the most, dark regions the least.
