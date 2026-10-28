# Importing and using 3D files from other applications

Tip

Starting with After Effects 24.1, 3D models can be brought straight into a project and dropped into a composite next to your other 2D and 3D layers.

Several 3D image formats are readable by After Effects: Softimage PIC, RLA, RPF, OpenEXR, and Electric Image EI. Files of these kinds carry red, green, blue, and alpha (RGBA) channels along with auxiliary channels that may hold extras like z depth, object IDs, texture coordinates, and so on.

Composited files carrying 3D information will import, yet building or editing 3D models inside After Effects itself isn't possible.

Any composited 3D file coming from another program is handled by After Effects as one flat 2D layer. You can hand that layer — taken as a whole — 3D properties and work with it as you would any After Effects 3D layer, but the individual objects packed inside the 3D file can't be moved around separately in 3D space. Reaching the 3D depth data and the rest of the auxiliary channel content within these files is done through the 3D Channel effects.

To open up the multiple layers and channels held in OpenEXR files, After Effects ships with 3D Channel effect plug-ins from fnord software.

Baked camera data — focal length, film size, and transformation values among it — can also be pulled by After Effects out of Maya project files, arriving as either one composition or two.

Camera data stored alongside RLA or RPF sequence files is imported as well.

A matching ZPIC file holds the z-depth channel data for any Softimage PIC file. The ZPIC itself won't import, but its extra channel information stays reachable provided you keep that ZPIC in the same folder as the PIC you brought in.

The same pattern applies to Electric Image (EI) files, which may pair with EIZ files holding z-depth channel data. Just like ZPIC files, EIZ files can't be imported into After Effects; you simply leave them sitting in the same folder as the EI files. Consult your Electric Image documentation if you need to learn how EIZ files get created.

One frequent trick while you're inside a 3D modeling program is to drop null objects — null lights or null locator nodes, say — at the spots where you intend to composite an image back in After Effects. Once the 3D file has been imported, those null objects then serve as reference points for positioning your other visual elements.
