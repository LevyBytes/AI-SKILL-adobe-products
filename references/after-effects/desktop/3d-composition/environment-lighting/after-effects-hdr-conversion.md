# Convert image file to HDR file using After Effects

Although environment lights accept only HDR-format files as environment maps, After Effects makes it easy to turn other image formats into HDR.

Pull in an image with File > Import > File.

Highlight that file in the Project panel, then choose File > New Comp from Selection.

Open the Project Settings dialog box via File > Project Settings.

On the Color tab, within the Color Settings section, set Bit Depth to 32 bits per channel (float) and click OK.

Make the composition or timeline active, then go to Composition > Save Frame As > File.

Over in the Render Queue panel, click the linked text beside the Output Module option.

When the Output Module Settings dialog box opens, set Format to Radiance Sequence and click OK.

Hit Render.
