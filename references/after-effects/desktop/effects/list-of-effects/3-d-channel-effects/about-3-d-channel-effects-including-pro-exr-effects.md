# About 3D Channel effects, including ProEXR effects

What the 3D Channel effects act on are 2D layers—specifically the kind that carry 3D information tucked into auxiliary channels. Image sequences standing in for 3D scenes rendered out of a 3D application are the sources behind those 2D layers.

Lean on 3D Channel effects when you want to fold 3D scenes into 2D composites and tweak those scenes. The 3D image files you can import are saved in RLA, RPF, Softimage PIC/ZPIC, and Electric Image EI/EIZ formats. With PIC and EI files, the 3D channel data lives in the ZPIC and EIZ files respectively. There's no need to import the ZPIC and EIZ files themselves; so long as they sit in the same folder as the PIC and EI files, the 3D Channel effects can reach their 3D channels. Files of other types stay untouched by the 3D Channel effects.

The extra channels of data that 3D Channel effects read and work with include z-depth, surface normals, object ID, texture coordinates, background color, unclamped RGB, and material ID. That lets you stack 3D elements along the z-axis, drop other elements into a 3D scene, soften regions within it, single out 3D elements, layer on a depth-driven foggy look, and pull 3D channel data out to feed as parameters into other effects.

Turn a layer that has a 3D Channel effect into 3D and look at it from anywhere other than dead front and center, and it won't show up the way you'd expect.

Note

Want a pixel's depth and other channel readouts to show in the Info panel? Apply a 3D Channel effect first; then, while it stays selected, grab the Selection tool and click that pixel inside either the Composition panel or the Layer panel.
