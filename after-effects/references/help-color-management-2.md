# Color Management (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Enable or disable display color management

While color management is on, the standard behavior converts RGB pixel values out of the project's working color space and into your computer monitor's color space. What's held onto is color appearance, not the RGB numbers. That suits most purposes, though now and then you need to see how colors will truly look through a system that runs without color management. You might, for instance, need to check how colors come across inside a web browser.

With display color management off, RGB color values travel straight to your monitor, skipping any conversion through the monitor profile. Here the RGB numbers are held onto; color appearance is not.

Once display color management is on for a viewer, the Show Channel And Color Management Settings button down at the viewer's lower edge sprouts a yellow plus sign.

Managing display colors — that is, converting them out of the working color space and into the monitor's color space — is a per-viewer choice across the Composition, Layer, and Footage panels.

Make a Composition, Layer, or Footage panel active.

Down at the viewer's lower edge, click the Show Channel And Color Management Settings button and pick Use Display Color Management.

From the menu bar, choose View > Use Display Color Management.

On Windows, the shortcut is Shift + / (on the numeric keypad); on macOS, Control + Option + /.

Output simulation settings (including No Output Simulation) are remembered.

## Simulate how colors will appear on a different output device

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

## Simulate output for previews

Turn on a Composition, Layer, or Footage panel.

Head to View > Simulate Output, then settle on an output type to simulate.

Display color management, on by default, is what output simulation rests on. Should it be off, select View > Use Display Color Management.

No Output Simulation

With display color management on, no conversion runs to mimic any output type here.

Legacy Macintosh RGB (Gamma 1.8)

Reveals how colors come across when a non–color managed application shows them on a Macintosh computer running a gamma of 1.8 — the figure macOS used ahead of macOS X 10.6. With Linearize Working Space selected, this option isn't available.

Internet Standard RGB (sRGB)

Reveals how colors come across when a non–color managed application shows them at a gamma of 2.2. With Linearize Working Space selected, this option isn't available.

Kodak 5218 To Kodak 2383

Reveals how colors come across once output to Kodak 5218 negative film stock and then projected off Kodak 2383 positive film stock in a theater setting.

The Kodak 2383 and Kodak 5218 profiles paired with the Simulate Output command have taken the place of the DPX Theater Preview and DPX Standard Camera profiles that After Effects 7.0 supplied for use with the Proof Colors command.

Custom

Missing an entry for the output type you'd like to simulate, you can roll your own output simulation preset by choosing Custom. For each of the conversion or reinterpretation steps, you can name a profile to use.

To preview how a movie will look if you output it to a device and view it on that same device, set Output Profile and Simulation Profile to the same value.

To preview how a movie will look if you output it to one device and then view it on a second, color-managed device, give Output Profile and Simulation Profile different values, and clear Preserve RGB.

To preview how a movie will look if you output it to one device and view it on another, give Output Profile and Simulation Profile different values, and select Preserve RGB.

An output simulation preset can be chosen per view. Custom output simulation settings, though, are shared across every view.

Note

To flip between no output simulation and the one used most recently, click the Show Channel And Color Management Settings button along the viewer's lower edge and pick Simulate Output.

## Simulate an output type in a movie rendered for final output

Output-simulation color management covers previews only, yet rendering a movie whose look mimics a given output type is still on the table. You might, for example, render an HDTV movie that mimics a film look — handy in particular for turning out dailies during film work.

At the top of your composition, add a fresh adjustment layer via Layer > New > Adjustment Layer.

Onto that adjustment layer, apply the Color Profile Converter through Effect > Utility > Color Profile Converter.

Duplicate that effect with Edit > Duplicate.

Over in the Effect Controls panel, give the effect's first instance these option values:

Input Profile

Project Working Space

Output Profile

Whichever output you're simulating — a film printing density profile, for instance, like Kodak 5218/7218 Printing Density

Intent

Absolute Colorimetric

Over in the Effect Controls panel, give the effect's second instance these option values:

Input Profile

Whichever playback you're simulating — a theater preview profile, say

Output Profile

The output medium's color space — HDTV (Rec. 709), for one

Intent

Relative Colorimetric

To switch this kind of output simulation on and off, toggle the adjustment layer by selecting and deselecting its Video switch in the Timeline panel.

## Broadcast-safe colors

The amplitude of an analog video signal gets measured in IRE units (PAL video states it in volts instead). Whatever falls between 7.5 and 100 IRE counts as broadcast-safe, meaning such colors won't trigger problems like audio noise or color smearing. (Realistically a few spikes past 100 IRE still pass, yet treating 100 IRE as the hard ceiling keeps things simple here.) Mapped to a black-to-white span, that 7.5-100 IRE window matches 64-940 in 10-bpc values for Y' in Y'CbCr, which equals 16-235 once you drop to 8-bpc. Because of this, plenty of video hardware and software read black as 16 and white as 235 rather than 0 and 255. No direct mapping ties these figures to RGB values.

Should imported footage strike you as off — blacks that aren't dark enough, whites that aren't bright enough — double-check that the right input color profile has been assigned. Among the standard video color profiles that ship with After Effects, you'll find versions built for these narrowed ranges, the HDTV (Rec. 709) 16-235 color profile being one, since it treats 16 as black and 235 as white.

Note

- Certain video cards and encoders presume the output spans 0-255, in which case clamping the colors of your composition and rendered movie becomes pointless and may squeeze the color range in a way you don't want. When an output movie ends up looking dull, try an output color profile that draws on the full color range instead.
- Footage that looks washed out is worth checking with the Levels effect: open the histogram and see whether the lowest and highest color values sit at or close to 16 and 235. When they do, interpret that footage with one of the 16-235 input color profiles.

To pull luminance or saturation down to a safe level you can reach for the Broadcast Colors effect, though limiting output to the broadcast-safe range works best when you simply build your composition to stay inside that range from the start.

Bear these pointers in mind:

Steer clear of pure black and pure white values.

Hold back on heavily saturated colors.

Render a test movie and watch it on a video monitor to confirm the colors reproduce faithfully.

Note

Instead of leaning on the Broadcast Colors effect to drop luminance or saturation, pair that effect with either the Key Out Unsafe or Key Out Safe option. Drop the effect onto an adjustment layer sitting at the top of the layer stack to reveal which regions of the image fall outside the broadcast-safe range.

Bundled with After Effects, the Color Finesse plug-in carries first-rate tools for keeping colors inside the broadcast-safe range. Consult the Color Finesse documentation located in the folder that holds the Color Finesse plug-in for further detail. Learn more about color correction, color grading, and color adjustment.

Note

In After Effects 7.0, the Interpret Footage dialog box offered an Expand ITU-R 601 Luma Levels option. Open such a project in After Effects CS3 or later and any footage items created with that option get a matching profile assigned.

### More like this

- Interpret footage items
- Output modules and output module settings
- Color models and color spaces
- Color depth and high dynamic range color
