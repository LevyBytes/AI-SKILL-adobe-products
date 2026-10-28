# Simulate how colors will appear on a different output device

You'll frequently need to preview how a movie comes across on something other than your computer monitor. Keeping colors identical on every device is one aim of color management, yet color management in After Effects can't get past situations like these:

The output device you're building your movie for runs a smaller gamut than your project's working color space, leaving it unable to render some colors.

A device or piece of software showing your movie's colors does so without using color management to convert them.

Take building a movie on a computer monitor alongside a high-definition video monitor: you may need to preview how it'll look once moved to a particular film stock and projected under the standard viewing conditions of a theater.

In cases like those, you'll want to preview how colors come across when shown on a device other than your computer monitor. Display color management is a prerequisite for output simulation.

Throughout output simulation, colors travel from the project's working color space to the monitor's color space along this path:

1. From the project's working color space, colors move into output color space.

The output color profile — the very profile slated for rendering the final output — carries colors out of the working color space and into the output type's color space.

2. From output color space, colors move into the simulated playback device's color space.

When Preserve RGB is off, the simulation profile carries colors out of the output color space and into the presentation medium's color space. The assumption here is that the simulated device runs its own color management and will convert colors for display. Color appearance is held onto; the RGB numbers are not.

When Preserve RGB is on, this step leaves the color values unconverted. The numeric RGB color values are held onto instead and reread as sitting in the simulated device's color space. One reason to use this simulation is previewing how a movie will look on a device other than its intended one, or on a device that runs no color management.

Note

Reach for Preserve RGB when simulating a capture film stock paired with a print film stock.

3. From the simulated playback device's color space, colors move into your monitor's color space.

The monitor profile carries colors out of the presentation device's color space and into your computer monitor's color space.

Building an output simulation preset, you get to pick a profile for each of these steps.

Note

Even with a preset output simulation in play, picking the Custom option in the View > Simulate Output menu after you've selected the preset reveals a representation of which color conversions and reinterpretations that simulation type carries out.

Output simulation reaches only one specific viewer (Composition, Layer, or Footage panel) and functions for previews alone. The color conversions behind output simulation happen as values head to the display. The project's actual color numbers stay put.

As with every color space conversion, simulating output costs some performance, so you may want to leave it off while doing work that calls for real-time interaction.

Note

Applying the right profiles, by itself, can't make up for the differing color gamuts of different devices. Run-of-the-mill LCD monitors on personal computers, for one, lack the gamut to fully simulate HDTV output.

Shift + / (on the numeric keypad) (Windows) and Control + Option + / (macOS) will toggle display color management on or off for you. Turning display color management off turns output simulation off along with it. Simulation settings (including No Output Simulation) are remembered while display color management is off.
