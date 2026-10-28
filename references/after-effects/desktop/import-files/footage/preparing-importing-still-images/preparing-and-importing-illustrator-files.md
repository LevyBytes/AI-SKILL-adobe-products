# Preparing and importing Illustrator files

Note

For guidance and steps covering every kind of still image file, see Preparing still-image files for importing and Import a single still image or a still-image sequence.

Ahead of saving an Illustrator file for import into After Effects, think about doing the following:

Start your Illustrator document from one of the Video And Film document profiles. Beyond sizing the document right for video or film work, this gives you a document with two artboards—one at the right frame size and one considerably larger. Bring such a document into After Effects and the region beyond the smaller artboard stays put outside the composition frame rather than being cropped away. This only applies to a multi-layer Illustrator document imported as a composition.

So Illustrator files show up correctly in After Effects, turn on Create PDF Compatible File in the Illustrator Options dialog box.

Want paths to travel between Illustrator and After Effects? Enable Preserve Paths, found under Clipboard Handling within the Illustrator Preferences dialog box.

For the most faithful rasterization in After Effects, save in AI format rather than Illustrator 8.x or 9.x EPS format.

Splitting an Illustrator file's objects onto separate layers is a job for the Release To Layers command in Illustrator. Once that's done, the layered file imports into After Effects where each layer animates independently.

Planning to shift objects and layers around in Illustrator via Edit Original? Then bring the Illustrator document in as a composition whose layers stay document-sized (leave the Retain Layer Size option off).

On importing an Illustrator file, After Effects makes every empty region transparent by turning it into an alpha channel.

After Effects doesn't read embedded color profiles out of Illustrator files. For color fidelity, give the Illustrator footage item an input color profile matching the one the Illustrator file was built with.

Note

- After an Illustrator file comes in, anti-aliasing can favor either higher quality or higher speed—your call. With the footage item selected in the Project panel, head to File > Interpret Footage > Main and click the More Options button down at the bottom of the dialog box.
- AI documents saved in any version past Illustrator CS2 won't have their blending modes read by After Effects. So to keep blending mode information intact on the way into After Effects, save back to the Illustrator CS2 format.

Learn how to continuously rasterize a layer containing vector graphics and preserve the sharpness of vector graphics (avoiding pixelation).
