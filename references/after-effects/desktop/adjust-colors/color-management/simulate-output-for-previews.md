# Simulate output for previews

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
