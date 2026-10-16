# Polar Coordinates effect

What the Polar Coordinates effect does is warp a layer by mapping every pixel from the layer's (x,y) coordinate system over to its matching spot in the polar coordinate system, or vice versa. The distortions that result are odd and unexpected, shifting widely with the image and the controls you pick. In the standard coordinate system, a point is pinned down by how far it sits horizontally (x-axis) and vertically (y-axis) away from the origin, with each point given as (x,y). In the polar coordinate system, a point is fixed by the radius length out from the origin (r) together with its angle off the x-axis (), each point given as (r,).

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (upper-left), and with variations of Polar Coordinates applied (lower-left and right)

Interpolation

Sets how much distortion is applied. There's no distortion at 0%.

Type of Conversion

Which conversion process gets used:

Rect To Polar

Relocates pixels by treating each pixel's (x,y) coordinates as (r, ) coordinates. As an example, an (x,y) coordinate of (2,3) turns into a polar coordinate whose radius is 2 and whose degree is 3. This bends horizontal lines into circles and vertical lines into radial lines.

Polar To Rect

Relocates pixels by treating each pixel's (r,) coordinates as the (x,y) coordinates. As an example, polar coordinates of radius 10 and 45° turn into (x,y) coordinates of (10,45).
