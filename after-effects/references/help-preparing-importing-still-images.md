# Preparing Importing Still Images

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Follow best practices to prep and bring still images into Adobe After Effects, so previews stay accurate and compositing runs efficiently.

Single supported still images can come into After Effects on their own, or a run of still images can arrive together as a sequence.

Internally, After Effects operates in an RGB color space, though it is able to bring in CMYK images and convert them. Even so, whenever you can, stay in an RGB color space inside tools like Illustrator and Photoshop while building imagery for video, film, and other non-print destinations. RGB hands you a wider gamut and tracks your final output more faithfully.

To trim rendering time, get a still image as ready as you can before it ever reaches After Effects. Prepping a still in the program that made it is generally quicker and simpler than reworking it later in After Effects. Before bringing an image in, think about applying the following to it:

- Confirm that the operating system you intend to use actually supports the file format.
- Trim away whatever portions of the image you don't want showing up in After Effects.

Note

Illustrator files may carry fractional dimensions (216.5x275.5 pixels, say). On import, After Effects deals with those fractions by rounding each up to the next full pixel (so 217x278 pixels, for instance). That rounding leaves a black line along the right (width) or bottom (height) edge of the brought-in image. So when you crop in Illustrator, see that the cropped region's dimensions land on whole pixel counts.

To mark regions as transparent, build an alpha channel or reach for the transparency tools in programs such as Photoshop or Illustrator.

When broadcast video is the end product, steer clear of thin horizontal lines (1-pixel lines, for instance) in imagery or text, since interlacing can make them flicker. If thin lines are unavoidable, add a slight blur; that way the image or text registers across both video fields instead of flickering. Learn more about interlaced video and separating fields and best practices for creating text and vector graphics for video.

When the end product is broadcast video, keep the image's key elements inside the action-safe and title-safe zones. Starting a document in Illustrator or Photoshop from a film-and-video preset draws those safe zones in as guidelines. Learn more about safe zones, grids, guides, and rulers.

When broadcast video is the destination, hold your colors inside the broadcast-safe ranges. Learn more about broadcast-safe colors.

Store the file under the proper naming convention. As an example, a three-character filename extension is the way to go if you'll import the file into After Effects on Windows.

Match the pixel dimensions to whatever resolution and frame aspect ratio you intend to use in After Effects. Planning to scale the image across time? Then choose image dimensions that hold enough detail at the biggest size the image ever reaches in the project. For importing and rendering files, After Effects tops out at an image size of 30,000x30,000 pixels. How large an image you can import or export hinges on how much physical RAM After Effects has on hand. Composition dimensions likewise cap at 30,000x30,000 pixels.

Note

What counts when prepping image data for After Effects import is the image size or pixel dimensions setting in Photoshop (or another image-editing program)—not the dpi (dots per inch) or ppi (pixels per inch) values. Image size sets how many pixels span an image in width and height, no matter whether those are the minuscule pixels of a phone or the huge ones on a motion billboard. The dpi or ppi figures matter for printing an image and for sizing copied-and-pasted paths.

## Import a single still image or a still-image sequence

Still image files can come in as separate footage items, or a run of still image files can arrive as a still-image sequence—one footage item where every still serves as a single frame.

For several image files to import as one still-image sequence, they have to share a folder and follow a common numeric or alphabetic filename pattern (Seq1, Seq2, Seq3, for example).

Once you bring in a file that strikes After Effects as belonging to a still-image sequence, it goes ahead by default and pulls in every other file in that folder that seems to be part of the same sequence. The same holds when you pick several files that look sequential: After Effects, by default, brings them in as a sequence. Check the bottom of the Import dialog box to see what After Effects is poised to import. Dragging files and folders into the Project panel is another way to bring in images and sequences.

Note

So After Effects won't pull in files you didn't ask for when you only want a single file, or won't read several files as a sequence, clear the Sequence option in the Import dialog box. After Effects keeps that choice and applies it as the default from then on.

Several sequences from one folder can be imported at once: pick files belonging to different sequences and choose Multiple Sequences at the bottom of the Import dialog box.

While importing a run of still images, the Force alphabetical order option in the Import dialog box lets you bring in a sequence whose numbering skips values (Seq1, Seq2, Seq3, Seq5, for example). Import such a gapped sequence without that option and After Effects flags the missing frames and swaps in placeholders (provided the Report Missing Frames option is on under After Effects > Settings > Import).

After Effects reads the first image in the sequence to decide how the rest of the sequence's images get interpreted.

Should the sequence's image files be a layered type—Adobe Photoshop or Adobe Illustrator documents, say—you get to bring the sequence in either as an ordinary footage item or as a composition, where every layer of every file imports as its own sequence and shows up as its own layer in the Timeline panel.

Note

Rendering a composition that holds a numbered sequence has the output module treat the start frame number as the first frame number. So if rendering kicks off at frame 25, the file is named 00025.

## Verify individual image sequence files

Bringing image sequence files into After Effects skips a file-by-file check of the whole sequence. That speeds the image sequence import along, particularly when the source is network storage. The trade-off: if the sequence holds aliases or shortcuts that fail to resolve—say the drive is offline—After Effects won't flag those files as missing.

Run into unexpected missing frames while importing an image sequence? Then switch on the Verify Individual Files option; it runs slower by comparison but checks every file in the sequence (Select After Effects > Settings > Import > enable the Sequence Footage and Verify Individual Files (slower) options.

## Import a still-image sequence as a single footage item

Select File > Import > File.

Pick any file within the sequence. To bring in only some files of a sequence, click the first one, hold Shift, then click the last file you want.

Choose Footage from the Import As dropdown menu.

Select Open.

Should you later want to get at the footage item's separate pieces, you can turn it into a composition.

## Import a still-image sequence as a composition

Importing a Photoshop or Illustrator file as a composition gives you access to the separate layers, blending modes, adjustment layers, layer styles, masks, guides, and other things made in Photoshop or Illustrator. The Project panel then shows the imported composition alongside a folder that holds each of its layers as footage items.

Select File > Import > File.

Pick any file within the sequence. To bring in only some files of a sequence, click the first one, hold Shift, then click the last file you want.

From the Import As dropdown menu, pick one of these:

Composition - Retain Layer Sizes

Bring the layers in, each keeping its own original dimensions.

Importing as a composition with layers at their native dimensions—rather than sizing each layer to the composition frame—has an advantage: every layer's anchor point sits at the center of the cropped graphic object instead of at the center of the composition frame. When you animate the individual layers of an imported graphic, that tends to make transformations behave more the way you'd want and expect. Picture a car built with a separate layer per wheel: importing as a composition with layers at their native sizes drops each wheel's anchor point right at the wheel's center, so spinning the wheels works the way you'd expect.

Composition

Bring layers in and size each one to match the composition frame's dimensions.

Select Open.

## Convert a merged footage item into a composition

Importing a layered file—a Photoshop or Illustrator file, say—as footage flattens all its layers together. Should you later want to get at the footage item's separate pieces, you can turn it into a composition.

- Converting every instance of a footage item: select it within the Project panel, then use File > Replace Footage > With Layered Comp.
- Converting one instance only: highlight the layer in the Timeline panel, then use Layer > Convert To Layered Comp.

Note

Turning a merged footage item into a layered composition can take a moment or two.

## Change the frame rate of a sequence

A run of still images you import takes on the frame rate set by the Sequence Footage preference in the Import category. That rate defaults to 30 frames per second (fps). After importing, you can adjust the frame rate by reinterpreting the footage item:

With the sequence selected in the Project panel, head to File > Interpret Footage > Main and enter a new number under Assume This Frame Rate.

## Preparing and importing Photoshop files

Note

- For guidance and steps covering every kind of still image file, see preparing still-image files for importing and importing a single still image or a still-image sequence.
- After Effects has no support for video layers inside Photoshop .psd documents.

Since the Photoshop rendering engine ships inside After Effects, every attribute of a Photoshop file comes across on import—position, blending modes, opacity, visibility, transparency (alpha channel), layer masks, layer groups (which arrive as nested compositions), adjustment layers, layer styles, layer clipping paths, vector masks, image guides, and clipping groups.

Prep a layered Photoshop file well before importing it into After Effects to cut preview and rendering time. Sidestep trouble importing and updating Photoshop layers with these practices:

Organize and name layers. Rename a layer in a Photoshop file after importing it into After Effects and the link back to the original layer survives. Delete a layer, though, and After Effects loses the original and shows it as Missing in the Project panel.

Give every layer a name of its own. The software doesn't demand this, but it keeps confusion at bay.

Expecting to add layers to the Photoshop file later in Photoshop once it's already imported? Then go ahead and put in a few placeholder layers before importing the file into After Effects. Refreshing the file in After Effects won't bring across any layers added after the original import.

Unlock layers in Photoshop ahead of importing them into After Effects. Most layer types don't need this, but a few do. Background layers slated for conversion to RGB, for instance, may import wrong while they remain locked.

A handy command inside After Effects, Layer > New > Adobe Photoshop File, drops a layer into a composition and then opens that layer's source over in Photoshop so you can start building a visual element—a movie's background layer, perhaps. That Photoshop layer arrives set up correctly for your After Effects composition. Like many Creative Suite programs, After Effects lets you run Edit Original to open a PSD file in Photoshop, make and save edits, and watch those edits show up right away in the movie that points to the PSD source. Skip Edit Original and the Reload Footage command still works, pushing After Effects to update its layers from whatever version the PSD file is at now. Learn more about creating a layer and new Photoshop footage item and editing footage in its original application.

Note

One solid way to head off interlace flicker caused by thin horizontal lines in still images is to run Photoshop's Interlace Flicker Removal action on them before they come into After Effects. Photoshop bundles several video actions for utility jobs like this.

## Color modes

For After Effects to bring layered Photoshop (PSD) files in as a composition and split the layers apart, the files have to be saved in RGB or Grayscale color mode. Layered files don't support CMYK, LAB, Duotone, Monotone, and Tritone color modes—a file in any of those comes into After Effects as one flattened image. As for Photoshop's remaining color modes, like Bitmap and Indexed, Photoshop itself doesn't allow layers in them.

Note

To check or switch a document's color mode in Photoshop, select Image > Mode. The color mode also shows in the document window's title bar.

## Masks and alpha channels

Adobe Photoshop allows a transparent area plus one optional layer mask (alpha channel) per layer in a file. Those layer masks let you set which parts of a layer stay hidden or get revealed. Import a single layer and After Effects folds its layer mask (when there is one) into the transparent area, bringing that layer mask in as a straight alpha channel.

Bring a layered Photoshop file in as a merged file and After Effects fuses every layer's transparent areas and layer masks into a single alpha channel premultiplied with white.

Importing a Photoshop file as a composition turns vector masks into After Effects masks. From there you can edit and animate those masks right inside After Effects.

## Photoshop clipping groups, layer groups, and Smart Objects

When the layered Photoshop file holds clipping groups, After Effects brings each clipping group in as a precomposition nested inside the main composition. To hold the transparency settings, After Effects applies the Preserve Underlying Transparency option on its own to every layer in that clipping-group composition. Those nested precompositions share the main composition's dimensions.

Photoshop layer groups come in as separate compositions.

Grouping layers into Smart Objects in Photoshop often pays off, since it lets you import sensible bundles of Photoshop layers as single layers in After Effects. Say you spent 20 layers building your foreground object and 30 on your background object in Photoshop—if all you mean to do is animate the foreground flying ahead of the background, you likely don't need every one of those individual layers in After Effects; think about bundling them into one foreground Smart Object and one background Smart Object before importing the PSD file into After Effects.

## Photoshop layer styles and blending modes

Blending modes and layer styles applied to the file are supported in After Effects too. Importing a Photoshop file that carries layer styles, you can pick the Editable Layer Styles option or the Merge Layer Styles Into Footage option:

Editable Layer Styles

Keeps the Photoshop look and leaves the supported layer style properties editable.

Note

A layer carrying a layer style gets in the way of 3D layer intersection and shadow casting.

Merge Layer Styles Into Footage

Layer styles fold into the layer to speed up rendering, though the result may not line up with how the image looks in Photoshop. This choice leaves 3D layer intersection and shadow casting alone.

## Preparing and importing Illustrator files

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

## Importing camera raw files with Camera Raw

Bringing in a run of camera raw frames works the same way as pulling in any other numbered run of still images.

For every frame in the sequence that lacks its own XMP sidecar, After Effects falls back on whatever settings belong to the first camera raw image and applies those across the rest. Image settings stored in the Camera Raw database are never consulted.

Note

Because camera raw files carry no compression, they tend to be bulky, and that heft can push render times up.

Select File > Import > File.

2. Select the camera raw file, and select Open.
   Make necessary adjustments in the Camera Raw dialog box, and select OK.

Once a camera raw image is in the project, it remains adjustable. Reopening it in the Camera Raw dialog box is a matter of picking the footage item in the Project panel, then choosing File > Interpret Footage > Main, and finally selecting More Options.

Note

For a color-managed project, there's no way to attach an input color profile to a camera raw image. Learn more about automatic color interpretation.

## Cineon and DPX footage items

Scanning developed film and writing each frame out as Cineon or DPX is a routine stage in producing motion-picture film. DPX, short for Digital Picture Exchange, is a standardized format that sits very close to Cineon.

Either Cineon 4.5 or Digital Picture Exchange (DPX) files can be brought straight into an After Effects project, whether as single frames or as a numbered run of stills. With a Cineon or DPX file imported, you can drop it into a composition and afterward render that composition out as an image sequence.

So that the entire dynamic range of motion-picture film survives, Cineon files hold their color in logarithmic 10-bpc form. Internally, though, After Effects runs on 8-bpc, 16-bpc, or 32-bpc color, whichever matches the project's color bit depth. Handle Cineon files inside a 16- or 32-bpc project—out of the box, After Effects expands the logarithmic values across the whole range of values on offer.

In Cineon data the 10-bit white point sits at 685 and the 10-bit black point at 95. Anything past 685 is kept but handled as highlights. Instead of clipping highlights hard to white, After Effects eases them in along a gentle ramp governed by the Highlight Rolloff value. Both the 10-bit white point and 10-bit black point input levels, along with the output (converted) white point and black point levels, can be adjusted to suit your particular footage items or creative aims.

Set a project color depth of 32 bpc for Cineon footage items, which keeps highlights intact and removes any need to roll them off.

Picking DPX/Cineon Sequence from the Format menu within the Output Module Settings dialog box lets you then bring up the Cineon Settings dialog box to set output options. In the File Format section of the Cineon Settings dialog box, decide whether the output goes to DPX (.dpx) files or FIDO/Cineon 4.5 (.cin) files.

There are three fundamental approaches After Effects offers for handling the colors in Cineon footage items:

Simplest—and the recommended route—is to turn on color management and, in the Color Management tab of the Interpret Footage dialog box, give the Cineon footage item an input color profile that matches the film stock the footage was shot on. When the goal is film output, point the output color profile at that same profile so the output file lines up with the film stock. A side benefit of leaning on color management for Cineon footage items is that combining them with images from other footage types becomes simpler.

- Should the interpretation settings for the Cineon footage item need to shift over time, apply the Cineon Converter effect to a layer whose source is that Cineon footage item.

- When the settings for a Cineon footage item have to be tweaked by hand, or when color management isn't something you want to use, reach for the Cineon Settings dialog box. To bring it up, head to the Interpret Footage dialog box, open its Color Management tab, and click the Cineon Settings button there.

Manual settings in the Cineon Settings dialog box:

Converted Black Point

Sets which black point the layer uses inside After Effects.

Converted White Point

Sets which white point the layer uses inside After Effects.

10 Bit Black Point

Sets the black level (minimum density) applied when a 10-bit Cineon layer is converted.

10 Bit White Point

Sets the white level (maximum density) applied when a 10-bit Cineon layer is converted.

Current Gamma

Sets the gamma value you're aiming for.

Highlight Rolloff

Sets the rolloff value that tames bright highlights. For over-range values while working in 32 bpc, drop this to 0.

Logarithmic Conversion

Takes the Cineon sequence out of log color space and into the target gamma named by the Current Gamma setting. Once you're set to generate output from the Cineon file, reversing that conversion matters. (Going from logarithmic back to linear means setting Current Gamma to 1.)

Units

Sets which units After Effects shows for dialog values.

### More like this

- Memory and storage
- Copy a path from Illustrator,Photoshop, or Fireworks
- Output modules and output module settings
- Import footage items
