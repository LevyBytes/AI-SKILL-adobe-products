# Color Management

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Mar 27, 2026 Note

As of July 14, the Adobe Color themes panel is being retired in Photoshop, Illustrator, InDesign, and After Effects. See End of support for Adobe Color Themes panel for details.

Numbers are what carry color from one place to another. Trouble arises because each device captures and shows color its own way, so an identical set of numbers lands on our eyes as a different hue depending on the hardware. What a color management system does is record every one of those device-specific interpretations and translate among them, with the goal that an image holds steady no matter which screen or printer renders it.

Put broadly, a color profile spells out one device's color space by listing the transformations needed to move that device's color data into a space that doesn't depend on any device.

Within After Effects in particular, the role of ICC color profiles is to move color into and back out of the working color space, and the broad sequence runs like this:

- Each footage item is brought into the working color space from its own space by way of an input color profile. That profile may already be embedded in the footage item; otherwise you supply it through the Interpret Footage dialog box or via the interpretation rules file.

- Every color operation in After Effects happens inside the working color space. The working color space (project working space) is set on the Project Settings > Color tab.

- The monitor profile carries colors out of the working color space and into the color space of your computer display. Two correctly profiled monitors will therefore show your composition identically, and nothing in the composition's underlying data is altered by the step. Whether this monitor conversion happens is your call; the toggle for it is the View > Use Display Color Management menu command. Learn more about enabling or disabling display color management.

- After Effects can additionally lean on a simulation profile so your monitor previews how the finished output will look once it lands on some other device. You steer output simulation per view from the View > Simulate Output menu. Learn about how to simulate how colors will appear on a different output device.

- For every output module, an output color profile carries the rendered composition out of the working color space and into the color space of whatever medium you're delivering to. That output color profile is picked on the Output Module Settings > Color tab.

With color management active, After Effects by default rebalances colors so the gamma gap between scene-referred profiles and output-referred ones is compensated for. Learn more about gamma and tone response.

Note

There's another route to color management: hand-applying color transformations through color lookup tables (LUTs). Learn more about applying Color LUT effect.
