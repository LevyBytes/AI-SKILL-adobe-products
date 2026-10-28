# Colorama effect

For converting and animating an image's colors, the Colorama effect is a flexible, potent tool. With it you can tint an image gently or overhaul its color palette outright.

The way Colorama operates, it first turns a chosen color attribute into grayscale and then remaps those grayscale values onto one or more cycles of the chosen output color palette. A single cycle of that output color palette shows up on the Output Cycle wheel. Black pixels land on the color sitting at the top of the wheel; progressively lighter grays land on the colors that follow clockwise around it. Take the default Hue Cycle palette: pixels that were black turn red, while pixels at 50% gray turn cyan.

Color depths of 8-bpc and 16-bpc are what it handles.

On his Video Copilot website, Andrew Kramer offers a video tutorial showing how the Colorama effect builds a procedural matte as the opening move in swapping out a sky.
