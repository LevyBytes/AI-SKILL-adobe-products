# Importing Interpreting Footage Items (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Source files come into a project as the foundation for footage items, which then act as sources for layers. A single file can feed several footage items, each carrying its own interpretation settings. Every footage item, in turn, can source one or more layers. Inside a composition, what you work with are collections of layers.

The Project panel is where you'll handle footage items most of the time. The Footage panel comes in for evaluating footage and quick edits — trimming a footage item's duration, for instance.

Plenty of file kinds, file collections, or file components can be imported as sources for individual footage items: moving image files, still-image files, still-image sequences, and audio files among them. You can even manufacture footage items inside After Effects, such as solids and precompositions. Importing footage items into a project can happen whenever you like.

On import, the actual image data isn't copied into your project; After Effects lays down a reference link back to the footage item's source, which keeps project files fairly compact.

Delete, rename, or move an imported source file and you sever that file's reference link. A broken link shows the source file's name in italics in the Project panel, and the File Path column flags it as missing. As long as the footage item is around, the link can be remade — typically just by double-clicking the item and pointing it at the file once more.

Note

Footage items whose source items have gone missing can be tracked down by typing missing into the Project panel's search field. There's more to learn about searching and filtering across the Timeline, Project, and Effects & Presets panels.

Prepping footage before it lands in After Effects often pays off in shorter render times and better performance. Scaling or cropping a still image in Photoshop before bringing it across, for example, usually beats doing that scaling and cropping inside After Effects. Running an operation a single time in Photoshop is preferable to making After Effects repeat it many times a second — once for every frame the image shows up in.

To save time while keeping a project small and uncomplicated, import a source item once as a single footage item and then reuse it throughout a composition. Now and then, though, it helps to duplicate a footage item and interpret each copy differently — running the same footage at two separate frame rates, say.

Modify a footage item in another application while it's in use in a project, and the changes show up in After Effects the next time you open the project or select the footage item and choose File > Reload Footage.

Swapping a layer's source footage item for a different one without disturbing the layer property changes you've made is done by selecting the layer and then Alt-dragging (Windows) or Option-dragging (macOS) the new footage item onto it in the Timeline panel.

Want every use of certain footage items pointed at a replacement? In the Project panel, select those items, and with Alt-drag (Windows) or Option-drag (macOS) drop the replacement onto one of them right there in the panel.

For video and audio in certain formats, After Effects processes and caches versions on import that it can pull up fast when building previews. That caching boosts preview performance considerably, since the video and audio no longer have to be reprocessed for each preview.

## Importing and interpreting footage items — Native encoding and decoding of QuickTime files

On both macOS and Windows, After Effects can decode and encode QuickTime (.mov) files natively by way of the GoPro CineForm codecs. So working with and producing such files calls for no extra codec installs.

For MOV, native import is built in for these uncompressed formats:

- DV, IMX, MPEG2, XDCAM, h264, JPEG, Avid DNxHD, Avid DNxHR, Apple ProRes, AVCI, and GoPro CineForm

Native export covers these uncompressed formats:

- Avid DNxHD, Avid DNxHR, DV, and GoPro CineForm

Note

Since After Effects imports and exports so many codecs natively (those listed above), Windows doesn't need QuickTime.

## Importing and interpreting footage items — Supported import formats

A handful of filename extensions — MOV, AVI, MXF, FLV, and F4V among them — name a container file format rather than one specific audio, video, or image data format. The data packed inside a container file may be encoded with all sorts of compression and encoding schemes. After Effects will import the container files themselves, but whether it can import the data they hold turns on which codecs (decoders, specifically) you've got installed.

Adding more codecs widens the range of file types After Effects can import. A lot of codecs have to go into the operating system (Windows or macOS), where they operate as a component within the QuickTime or Video for Windows formats. Reach out to whoever makes your hardware or software for details on codecs that suit the files your particular devices or applications turn out.

Some files need extra import plug-ins installed before you can import and use them.

Adobe Premiere can capture and import a good number of formats that lie beyond what After Effects handles on its own. Getting that data from Adobe Premiere across to After Effects can be done in many ways. The topic of using Adobe Premiere together with After Effects has more to offer.

- Adobe Sound Document (ASND; multi-track files imported as merged single track)
- Advanced Audio Coding (AAC, M4A)
- Audio Interchange File Format (AIF, AIFF)
- MP3 (MP3, MPEG, MPG, MPA, MPE)
- Video for Windows (AVI; requires QuickTime on Mac OS)
- Waveform (WAV)

- Adobe Illustrator (AI, AI4, AI5, EPS, PS; continuously rasterized)
- Adobe PDF (PDF; first page only; continuously rasterized)
- Adobe Photoshop (PSD)
- Bitmap (BMP, RLE, DIB)
- Camera Raw (TIF, CRW, NEF, RAF, ORF, MRW, DCR, MOS, RAW, PEF, SRF, DNG, X3F, CR2, ERF)
- Cineon/DPX (CIN, DPX with 8-, 10-, 12-, and 16-bpc DPX files, including those with an alpha channel and timecode)
- Discreet RLA/RPF (RLA, RPF; 16 bpc ; imports camera data)
- EPS
- GIF
- JPEG (JPG, JPE)
- Maya camera data (MA)
- Maya IFF (IFF, TDI; 16 bpc )
- OpenEXR (EXR, SXR, MXR; 32 bpc )
- PICT (PCT)
- Portable Network Graphics (PNG; 16 bpc)
- Radiance (HDR, RGBE, XYZE; 32 bpc)
- SGI (SGI, BW, RGB; 16 bpc)
- Softimage (PIC)
- Targa (TGA, VDA, ICB, VST)
- TIFF (TIF)

- To reach the various layers and channels inside OpenEXR files, After Effects bundles 3D Channel effect plug-ins from fnord software. There's more to learn about working with channels in OpenEXR files.
- ZPIC files that match imported PIC files are readable by After Effects too. There's more to learn about importing and working with 3D files from other applications.
- Files in any still-image format can be brought in as a sequence. Learn about preparing and importing still images.

- Animated GIF (GIF)
- Avid DNxHR
- HEVC (H.265) MPEG-4
- Support for ARRIRAW files from the ARRI ALEXA or ARRIFLEX D-21 cameras For more information on ARRIRAW files, see the ARRIRAW FAQ on the ARRI Group website.
- CinemaDNG

Note: CinemaDNG is a subset of Camera Raw. A subset of Camera Raw settings can be accessed via More Options in the Interpret Footage dialog box. Color management for CinemaDNG includes the same color spaces as After Effects existing Camera Raw: Adobe RGB, sRGB IEC619662.1, ColorMatch RGB, and ProPhoto RGB.

- DV (in MOV or AVI container or as containerless DV stream)
- Electric Image (IMG, EI)
- FLV, F4V
- QuickTime (MOV; 16 bpc, only for codecs that don't have any native decoders)
- Video for Windows (AVI, WAV; requires QuickTime on Mac OS)
- Windows Media File (WMV, WMA, ASF; Windows only)
- XDCAM HD and XDCAM EX
- RED (R3D)
- Media eXchange Format (MXF): being a container format, MXF yields only certain kinds of its data to After Effects on import. Among what does come in is the Op-Atom flavor of MXF that Panasonic video cameras write to Panasonic P2 media. From those MXF files, After Effects pulls video encoded with the AVC-Intra 50, AVC-Intra 100, DV, DVCPRO, DVCPRO50, and DVCPRO HD codecs. XDCAM HD files in MXF format also import — the MXF OP1format, holding MPEG-2 video that meets the XDCAM HD format.
- MPEG-1, MPEG-2, and MPEG-4 formats: MPEG, MPE, MPG, M2V, MPA, MP2, M2A, MPV, M2P, M2T, M2TS (AVCHD), MP4, M4V, M4A
- SWF (continuously rasterized)

- Adobe Premiere 1.0, 1.5, 2.0, CS3, CS4, CS5, CS6, and CC (PRPROJ; 1.0, 1.5, and 2.0 Windows only), and later projects
- Adobe After Effects 6.0 and later binary projects in After Effects CS5 (AEP, AET)
- After Effects 7 can open projects from After Effects 3.0 through After Effects 7.
- Adobe After Effects CS4 and later XML projects (AEPX)

Bundled with the application these days is the Automatic Duck Pro Import AE plug-in, here named Pro Import After Effects. Through it you can pull in AAF and OMF files off an Avid system, XML files from Final Cut Pro 7 (or older), plus Motion 4 (or older) project files. To dig into using Pro Import After Effects, reach its User Guide by choosing File > Import > Pro Import After Effects and then clicking the Help button.

Final Cut Pro projects can also be imported into Premiere, after which that project's pieces can travel on into After Effects.

Note

- EIZ files matching imported EI files are something After Effects can read as well. There's more to learn about importing and working with 3D files from other applications.
- Certain MPEG data formats live inside container formats whose filename extensions After Effects doesn't recognize. The .vob and .mod extensions are examples. Sometimes renaming such a file's extension to one After Effects does recognize lets you import it. Given how unevenly these container formats get implemented, though, compatibility can't be promised.
- MPEG format details are covered on the MPEG website.
- Ahead of any work with QuickTime, look over the alert that the United States Computer Emergency Readiness Team put out in April 2016, which advises Windows users to remove Apple QuickTime from their machines.
- R3D files come interpreted as carrying 32-bpc color within a non-linear HDTV (Rec. 709) color space. Overbright values aren't preserved by the RED R3D Source Settings color adjustments. Color adjustments performed inside After Effects do hold onto overbright colors when you're in 32-bpc (bits per channel) color. Keep clipping at bay by adjusting exposure inside After Effects rather than over in the RED R3D Source Settings dialog box during footage interpretation.
- Sony XDCAM HD assets will import into After Effects provided they were recorded to MXF files; XDCAM HD assets in IMX format won't. Sony XDCAM EX assets held as essence files carrying the .mp4 filename extension inside a BPAV directory import too.
- An alpha channel comes along when SWF files import. Audio drops out. So do interactive content and scripted animation. What survives is animation set by keyframes in the main, top-level movie.

## Importing and interpreting footage items — Import footage items

Bringing media files into your project happens either through the Import dialog box or by dragging them in. Whatever you import shows up as footage items in the Project panel.

Say the Interpret Footage dialog box pops up after you import a footage item. That means it holds an unlabeled alpha channel, and you'll have to pick an alpha channel interpretation method — or choose Guess and let After Effects work out how to read it. Learn more about Alpha channel interpretation: premultiplied or straight.

## Importing and interpreting footage items — Import footage items using the Import dialog box

Select File > Import > File or File > Import > Multiple Files. Double-clicking an empty spot in the Project panel works too.

Choosing Multiple Files lets you repeat the next step as often as you need without picking an Import command over and over.

Want supported footage files shown but project files hidden? In the Files Of Type (Windows) menu — Enable (macOS) — choose All Footage Files.

Pick a file, then select Open.

Ctrl-click (Windows) or Command-click (macOS) several files to select them, then select Open.

Pick a file and Shift-click another to grab a range of files, then select Open.

(Windows only) Pick a whole folder, then select Import Folder.

When the Sequence option is on, a folder's multiple files come in as a still-image sequence.

## Importing and interpreting footage items — Import footage items by dragging

Note

For layered still-image files dragged into After Effects to land as a composition every time, head to Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (macOS); in the Drag Import Multiple Items As dropdown menu, choose either Composition or Composition - Retain Layer Sizes. Learn more about importing a still-image sequence as a composition.

- To bring in a single file, drag it out of Windows Explorer (Windows) or the Finder (macOS) and into the Project panel.

- You can also right-click any folder in your project and select Import to send files straight to a particular folder in the Project panel. With the folder selected, the keyboard shortcut Cmd + I or Ctrl + I does the same.

- For a folder's contents to arrive as a still-image sequence — one footage item in the Project panel — drag that folder out of Windows Explorer (Windows) or the Finder (macOS) and drop it in the Project panel.
- For those contents to arrive instead as separate footage items tucked into a folder in the Project panel, Alt-drag the folder from Windows Explorer (Windows), or Option-drag it from the Finder (macOS), into the Project panel.
- Bringing a rendered output file across from the Render Queue panel means dragging its output module out of that panel and into the Project panel.

Note

Should you drag an output module out of the Render Queue panel and into the Project panel ahead of rendering, After Effects stands up a placeholder footage item. Once the output module renders, references to that placeholder get swapped in automatically, while the placeholder footage item itself stays put.

## Importing and interpreting footage items — Interpret footage items

As each footage item arrives, internal rules let After Effects guess at four things about the source file: its frame rate, its alpha channel type, its color profile, and its pixel aspect ratio. A wrong guess — or a wish to put the footage to different use — leaves you two options: rewrite the rules covering all footage items of a given kind by editing the interpretation rules file (interpretation rules.txt), or tweak just one footage item's interpretation in the Interpret Footage dialog box.

Here's what the interpretation settings tell After Effects about each footage item:

- The way the alpha channel should play against the other channels
- Which frame rate to take the footage item as having
- Whether fields get separated, and the field order to assume if they do
- Whether 3:2 or 24Pa pulldown should be stripped out
- That footage item's pixel aspect ratio
- That footage item's color profile

Note

Every one of these cases uses the information to settle how data in the imported footage item gets interpreted — to brief After Effects on the incoming footage. Match the interpretation settings in the Interpret Footage dialog box to whatever was used to create the source footage file. Don't reach for the interpretation settings as a way to dial in settings for your final rendered output.

As a rule, interpretation settings won't need changing. That said, an uncommon footage item may leave After Effects needing more information to interpret it right.

The controls under the Color Management section of the Interpret Footage dialog box are how you brief After Effects on reading a footage item's color information. You usually only need this step when the footage item carries no embedded color profile.

Preview the footage in the Footage panel and you'll see what the footage interpretation operations produced.

Note

Before you commit the changes, select Preview in the Interpret Footage dialog box to see the results of the settings you've made there.

## Importing and interpreting footage items — Interpret a single footage item using the Interpret Footage dialog box

Pick a footage item in the Project panel, then do one of these:

Select the Interpret Footage button down at the lower-left of the Project panel.

Drag the footage item onto the Interpret Footage button.

Select File > Interpret Footage > Main.

Press Ctrl+Alt+G (Windows) or Command+Option+G (macOS).

## Importing and interpreting footage items — Interpret a proxy using the Interpret Footage dialog box

Pick the original footage item in the Project panel, then do one of these:

- At the Project panel's lower-left, Alt-click (Windows) or Option-click (macOS) the Interpret Footage button.
- Drop the footage item onto the Interpret Footage button using Alt-drag (Windows) or Option-drag (macOS).
- Select File > Interpret Footage > Proxy.

## Importing and interpreting footage items — Apply Interpret Footage settings to multiple footage items

Getting different footage items onto the same settings is a matter of copying one item's interpretation settings and applying them to the rest.

In the Project panel, pick the item whose interpretation settings you want to spread.

Select File > Interpret Footage > Remember Interpretation.

Back in the Project panel, pick one or several footage items.

Select File > Interpret Footage > Apply Interpretation.

## Importing and interpreting footage items — Edit interpretation rules for all items of a specific kind

Holding the rules for how After Effects interprets footage items is the interpretation rules file. Customizing it isn't something you'll usually need to do. As a footage item comes in, After Effects hunts for a match within the interpretation rules file and from that works out the footage item's interpretation settings. After import, the Interpret Footage dialog box lets you override those settings.

Generally the interpretation rules file goes by the name interpretation rules.txt; some After Effects updates, though, drop in a fresh interpretation rules file whose name flags the new version number, and the updated application turns to that new file. If you'd edited the old interpretation rules file, you might have to carry those edits over to the new one as well.

Where the file sits in current After Effects:

- Windows: <drive>\Users<username>\AppData\Roaming\Adobe\After Effects/<version>
- macOS: <drive>/Users/<username>/Library/Preferences/Adobe/After Effects/<version>

Where it sat in earlier After Effects releases:

- Windows: <drive>\Users<username>\AppData\Roaming\Adobe\After Effects<version>
- macOS: <drive>/Users/<username>/Library/Preferences/Adobe/After Effects/<version>

1. Quit After Effects.
2. As a precaution, make a backup copy of the interpretation rules file. By default, this file is in the same location as the After Effects application.
3. Open the interpretation rules file in a text editor.
   For each footage type or codec you'll have to supply a four-character file-type code. Unsure which code a given file or codec uses? Hold Alt (Windows) or Option (macOS) while selecting that file in the Project panel. Up at the Project panel's top, the file description's bottom line then shows the file-type code, along with a codec code if the file happens to be compressed.

4. Save interpretation rules.txt.

## Importing and interpreting footage items — Alpha channel interpretation: premultiplied or straight

Transparency information in image files with alpha channels is held one of two ways: straight or premultiplied. The alpha channels match in both; where they part ways is the color channels.

Straight (or unmatted) channels keep transparency information in the alpha channel alone, never in the visible color channels. With them, you won't see the effect of transparency until the image opens in an application that supports straight channels.

Premultiplied (or matted) channels keep transparency information in the alpha channel and in the visible RGB channels too, those being multiplied against a background color. That's why premultiplied channels are sometimes described as matted with color. Across semitransparent regions — feathered edges, for one — the colors shift toward the background color by an amount tied to how transparent they are.

Certain software lets you name the background color the channels get premultiplied with; otherwise that background color tends to default to black or white.

More accurate color information survives in straight channels than in premultiplied ones. Premultiplied channels, on the other hand, play nicely with a broader set of programs — Apple QuickTime Player among them. The decision to use straight versus premultiplied channels has frequently already been made by the time the assets reach you to edit and composite. Both straight and premultiplied channels are recognized by Adobe Premiere and After Effects, though only the first alpha channel they hit in a file with several.

Getting the alpha channel interpretation right heads off trouble on import — unwanted colors at an image's edge, say, or quality loss along the alpha channel's edges. As an example, channels read as straight when they're really premultiplied will leave semitransparent areas holding some background color. If a color inaccuracy like a halo turns up along the semitransparent edges in a composition, give the interpretation method a change.

A footage item with premultiplied channels (top) appears with a black halo when interpreted as Straight-Unmatted (lower-left). When the footage item is interpreted as Premultiplied-Matted With Color and the background color is specified as black, the halo does not appear (lower-right).

A footage item with premultiplied channels (top) appears with a black halo when interpreted as Straight-Unmatted (lower-left). When the footage item is interpreted as Premultiplied-Matted With Color and the background color is specified as black, the halo does not appear (lower-right).

The Remove Color Matting effect is one way to strip the fringes off a layer's semi-transparent areas, by unmultiplying it.

## Importing and interpreting footage items — Set the alpha channel interpretation for a footage item

In the Project panel, pick a footage item.

Select File > Interpret Footage > Main.

To flip the image's opaque and transparent regions, select Invert Alpha.

Over in the Alpha section, pick an interpretation method:

Guess

Tries to work out which channel type the image uses. When After Effects can't guess with confidence, it beeps.

Ignore

Throws out the transparency information held in the alpha channel.

Straight - Unmatted

Reads the channels as straight.

Premultiplied - Matted With Color

Reads the channels as premultiplied. Reach for the eyedropper or color picker to name the background color the channels were premultiplied with.

## Importing and interpreting footage items — Set the default alpha channel preferences

Select Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (macOS).

From the Interpret Unlabeled Alpha As dropdown menu, pick your options. This menu's options resemble those in the Interpret Footage dialog box. Picking Ask User means the Interpret Footage dialog box opens every time a footage item carrying an unlabeled alpha channel comes in.

## Importing and interpreting footage items — Frame rate

How many frames show up each second is governed by the composition frame rate, which also dictates the way the time ruler and time display carve time into individual frames. Put differently, that rate fixes the sampling cadence at which source footage gets read each second, and it pins down the time intervals where keyframes are allowed to land.

Note

A dropdown for choosing between Drop Frame and Non-Drop Frame timecode lives inside the Composition Settings dialog box in After Effects.

Whatever output you are aiming at tends to dictate the composition frame rate you pick. NTSC video runs at 29.97 frames per second (fps), PAL video at 25 fps, and motion picture film generally at 24 fps. DVD video varies with the broadcast standard—it may mirror NTSC, mirror PAL, or sit at 23.976. For cartoons and material bound for CD-ROM or the web, 10–15 fps is common.

Note

Should you double the composition frame rate relative to the output format, After Effects treats each field of interlaced source footage as a standalone frame within the Composition panel. That technique opens the door to keyframing individual fields, sharpening the precision you get when animating masks.

At final-output render time, either the composition frame rate or a different rate is yours to pick. Being able to dial in a separate frame rate per output module pays off whenever one composition feeds output across several different media.
