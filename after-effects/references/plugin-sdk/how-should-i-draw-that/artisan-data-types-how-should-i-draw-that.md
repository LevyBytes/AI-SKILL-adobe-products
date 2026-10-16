# Artisan Data Types — How Should I Draw That?

After Effects depends on Artisans to draw 3D layer handles. When your Artisan does not respond to this call, the default Artisan draws the 3D layer handles instead. Querying transforms matters because it helps optimize After Effects' caching.

The coordinate system has positive x to the right, positive y downward, and positive z into the screen. The upper-left corner is the origin. Rotations happen in x, then y, then z order. In matrices, translation lives in the bottom row. Orientations are quaternions, applied first, followed by any x-y-z rotation. As a general rule, use either orientation or rotation, but not both. Use rotations when angular velocity control is required.
