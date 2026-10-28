# Fractal effect

The Mandelbrot or Julia set gets rendered by the Fractal effect, yielding colorful textures. Apply it and what greets you first is the classic Mandelbrot sample; the set itself is the region colored black. Every pixel beyond the set picks up color according to how near it lies to the set.

Color depths of 8-bpc and 16-bpc are supported by this effect.

Spaceship layer (upper-left) composited over layer with Mandelbrot fractal with Lightness Gradient palette (lower-left) and Julia fractal (lower-right)

Set Choice

Picks which set is used. Mandelbrot is the standard Mandelbrot set. Mandelbrot Inverse is that set turned inside out mathematically. Julia keeps shifting with the center point taken from the Mandelbrot set and can yield the whole family of possible Julia sets. Julia Inverse is the Julia set inverted. To view a Julia set, you may need to push the magnification negative, since these sets tend to spill past the usual boundary across the complex plane. Mandelbrot Over Julia matches Mandelbrot, save that it shifts as the Julia center point shifts. Mandelbrot Inverse over Julia matches Mandelbrot Inverse, save that it shifts as the Julia center point shifts.

Mandelbrot, Julia

Set the parameters for the chosen set. X (Real) and Y (Imaginary) mark the pixels at the image's center for either the Mandelbrot or Julia set. Magnification sets how far the effect is magnified. Escape Limit fixes how many passes the calculation makes searching for a pixel's color before defaulting it to black; it likewise caps the count of line segments the Selection tool may use while tracing a point's path. Larger numbers cost more render time.

Color

Sets the effect's color:

Overlay

Shows a ghosted copy of the opposite set. While viewing the Julia set, for example, this control brings up a ghosted Mandelbrot set. Switch Overlay on and a white cross hair backed by a black drop shadow marks the precise center point of the opposite set. It earns its keep because the Julia set hinges on the Mandelbrot set's center point.

Transparency

Decides whether black pixels go transparent. If you've chosen Solid Color in the Palette menu, this instead decides whether everything inside or outside the set goes transparent.

Palette

Picks the palette used to draw the set. Lightness Gradient builds a gradient running black to white by way of the hue set in the Hue control, then lays that same gradient down eight more times, each shifted to the hue 45° around the color wheel. Cycle Steps sets how many colors fill the gradient. Hue Wheel draws on every color of the Hue color wheel at full brightness and saturation. Black And White alternates bands of black and white. Solid Color drops everything to transparent except the inside of the set, which takes the color from the Hue control; pick Transparent for the reverse outcome.

Hue

Sets the hue for solid colors and the opening hue for color gradients. It's well suited to producing smooth color shifts or cycling the palette. Cycle Steps sets how many bands of differing color show before the cycle restarts. Cycle Offset sets where a cycle begins other than at the start.

Edge Highlight

Brings out the edges between color bands. This control calls for low-quality mode. For high-quality edge highlighting, turn to the Find Edges effect instead.

High Quality Settings

Set the oversampling parameters for the effect:

Oversample Method

Sets which approach oversamples the effect. Edge Detect-Fast-May Miss Pixels runs a quick edge detection and oversamples only those pixels; it's the quickest, above all across large flat-color regions such as black, and it usually turns out results you can't tell apart from Brute Force. Brute Force-Slow-Every Pixel oversamples every single pixel in the image, slow but exact.

Oversample Factor

Sets how much oversampling runs. A value of 4, for instance, means each pixel is sampled 16 times (4x4=16) and the average color stands in. Larger values sharpen output quality at the cost of longer render times.
