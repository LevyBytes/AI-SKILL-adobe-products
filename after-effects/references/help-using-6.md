# Importing Interpreting Video Audio, Preparing Importing 3D Image Files

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Importing and interpreting video and audio; Preparing and importing 3D image files.

## Importing and interpreting video and audio

Search Last updated on Mar 27, 2026

### Interlaced video and separating fields

To send television signals over limited bandwidth, engineers came up with interlacing. Under an interlaced scheme, each video frame ships only half of its horizontal lines at any given moment. Yet thanks to how fast the transmission runs, the afterglow on displays, and persistence of vision, what the viewer takes in is each frame at full resolution. Interlacing underpins every analog television standard. Among digital television standards you'll find both interlaced and noninterlaced kinds. As a rule, interlaced scanning yields interlaced signals, while progressive scanning yields noninterlaced ones.

Two fields make up every interlaced video frame. A field holds half of the frame's horizontal lines—the upper field (Field 1) takes the odd-numbered lines, the lower field (Field 2) the even-numbered ones. To show a frame, an interlaced video monitor lays down all the lines of one field first, then all the lines of the other. Which field gets drawn first is set by field order. With NTSC video, fresh fields hit the screen roughly 60 times a second, which works out to a frame rate near 30 frames per second.

Fields don't enter into noninterlaced video frames at all. To display one, a progressive-scan monitor sweeps every horizontal line top to bottom in a single pass. Nearly every computer monitor is a progressive-scan monitor, and most video shown on one is noninterlaced.

That close kinship is why progressive and noninterlaced get swapped so freely, but the two aren't identical: progressive scanning is about how a camera or monitor records or draws the scan lines, whereas noninterlaced is about the video data itself not being split into fields.

Interlaced scanning of interlaced video fields compared with progressive scanning of noninterlaced video frame.

A. For interlaced video, entire upper field (odd-numbered lines) is drawn to screen first, from top to bottom, in one pass. B. Next, entire lower field (even-numbered lines) is drawn to screen, from top to bottom, in one pass. C. For noninterlaced video, entire frame (all lines in counting order) is drawn to screen, from top to bottom, in one pass.

Interlaced scanning of interlaced video fields compared with progressive scanning of noninterlaced video frame.

### Separate video fields

Planning to bring interlaced or field-rendered footage—NTSC video, say—into an After Effects project? You'll come out ahead by separating the video fields at import time. After Effects pulls the fields apart by building a full frame out of each one, holding on to all of the image data the original footage carried.

Where you intend to alter the image substantially, separating fields becomes essential. Scaling, rotating, or applying effects to interlaced video tends to drag in unwanted artifacts such as crossed fields. Separating fields lets After Effects turn the two interlaced frames in the video into noninterlaced frames accurately, all while holding onto as much image quality as it can. Noninterlaced frames are what let After Effects apply edits and effects evenly and at top quality.

To make field-separated footage out of a single once-interlaced frame, After Effects splits that frame into two standalone frames. Since each new frame keeps only half the original's information, a few frames can look lower in resolution than their neighbors at Draft quality. Come final render, After Effects rebuilds high-quality interlaced frames for output. Render a movie at Best quality and After Effects fills in between a field's scan lines to wring out maximum image quality.

When the output won't be interlaced, you're better off starting from noninterlaced source footage so there's nothing to separate. That said, if no noninterlaced version of your source footage exists, interlaced footage will do the job.

For interlaced footage, separate fields every time. For noninterlaced footage items, never separate fields.

Pulldown removal is available to you only once the fields have been separated.

Rendering a composition that holds field-separated footage calls for setting the Field Rendering option to match the field order of your video gear. Skip field-rendering the composition, or field-render it with the wrong settings, and the finished movie can come out too soft, jerky, or distorted.

Note

For a fast film-like look on video footage, import it twice and interpret each copy with a different field order. Drop both into one composition and blend them. The misread layer contributes a touch of film-like blur.

For D1 and DV video footage items, After Effects separates fields on its own. Every other kind of video footage you separate by hand in the Interpret Footage dialog box.

Select the footage item in the Project panel.

Select File > Interpret Footage > Main Options.

Choose an option from the Separate Fields menu.

Select Preserve Edges (Best Quality Only) to increase image quality in nonmoving areas when the image is rendered at Best quality. Then, select OK.

Note

Provided the input footage is matched by the field settings under Interpret Footage, and the output device is matched by the field settings under Render Settings, one composition can mix footage items whose field orders differ. Get either of those wrong, though, and while frame order holds up, field order may reverse—the result being jerky, unacceptable images.

### Determine the original field order

For an interlaced video footage item, the field order fixes which of the two video fields (upper and lower) shows first. Draw the upper lines ahead of the lower and the system is termed upper-field first; draw the lower lines ahead of the upper and it's termed lower-field first. On the standard-definition side, lower-field first is common (DV NTSC, for one), whereas plenty of high-definition formats run upper-field first (1080i DVCPRO HD being one example).

Which field shows first carries real weight, all the more so when the fields hold motion. Separate the video fields with the wrong field order and motion stops looking smooth.

Certain programs, After Effects included, tag the field order when they render interlaced video files. Import a tagged video file and After Effects respects the field order tag on its own. That field order can be overridden by applying different footage interpretation settings.

Where a file carries no field order tag, you can match your footage's original field order yourself. When you're unsure which field order interlaced a footage item, the procedure below will tell you.

Select the item in the Project panel.

Select File > Interpret Footage > Main Options.

Select Upper Field First from the Separate Fields menu, and then select OK.

In the Project panel, press Alt (Windows) or Option (macOS) as you double-click the footage to open it in the Footage panel.

If the Preview panel isn't visible, select Window > Preview.

In the Footage panel, find a segment that contains one or more moving areas.

Using the Next Frame button in the Preview panel, step forward at least five frames in the Footage panel. Moving areas should move consistently in one direction. If the moving areas move backward every other frame, the wrong field-separation option has been applied to the footage.

### Remove 3:2 or 24Pa pulldown from video

Moving 24-fps film over to 29.97-fps video relies on a technique called 3:2 pulldown, which lays the film frames across video fields in a recurring 3:2 pattern. Film frame one copies into fields 1 and 2 of video frame one, and also into field 1 of video frame two. Film frame two then stretches across the following pair of video fields—field 2 of video frame two plus field 1 of video frame three. The 3:2 pattern keeps going until four film frames cover five video frames, at which point it begins again.

Out of 3:2 pulldown come whole frames (marked W) and split-field frames (marked S). Two fields from one and the same film frame make up each of the three whole video frames. The other two split-field frames each carry a video frame drawn from two separate film frames. Those two split-field frames always sit next to one another. Where the two split-field frames land inside the footage's first five frames is what the phase of 3:2 pulldown refers to.

Phase arises out of two conversions taking place during 3:2 pulldown: 24-fps film is spread back through 30-fps video, so each set of four 24-fps film frames stretches over five frames of 30(29.97)-fps video. To start, the film is slowed by 0.1% so it tracks the speed gap between 29.97 fps and 30 fps. Then every film frame is repeated in a particular pattern and matched to video fields.

When you apply 3:2 pulldown to footage, one frame of the film (A) is separated into two or three interlaced video fields (B) which are grouped into video frames containing two fields each.

When you apply 3:2 pulldown to footage, one frame of the film (A) is separated into two or three interlaced video fields (B) which are grouped into video frames containing two fields each.

As you bring in interlaced video that began life on film, you can strip out the 3:2 pulldown that the film-to-video transfer introduced—doing it while you separate fields—so that effects you apply in After Effects won't look distorted.

Stripping 3:2 pulldown out of video footage that started as film matters, because it lets effects you add in After Effects line up exactly with film's native frame rate. Taking out 3:2 pulldown cuts the frame rate by 1/5—from 30 down to 24 fps or from 29.97 down to 23.976 fps—which trims the count of frames you have to work on. Removing 3:2 pulldown also means you have to specify the phase of that 3:2 pulldown.

There's support in After Effects, too, for Panasonic DVX100 24p DV camera pulldown, known as 24P Advance (24Pa). Certain cameras rely on this format to record 23.976 progressive-scan imagery onto standard DV tapes.

Get the fields separated first—choosing upper-field first or lower-field first—and only then remove 3:2 pulldown. Once that separation is done, After Effects can study the footage and work out the right 3:2 pulldown phase and field order. Already know the phase and field order? Set them yourself using the Interpret Footage dialog box, via its Separate Fields and Remove menus.

Within the Project panel, click the footage item you want stripped of 3:2 pulldown.

Select File > Interpret Footage > Main Options.

Under the Fields and Pulldown section, set the Separate Fields menu to either Upper Field First or Lower Field First.

Do one of the following and select OK:

If you know the phase of the 3:2 or 24Pa pulldown, choose it from the Remove menu.

To have After Effects determine the correct settings, select Guess 3:2 Pulldown or Guess 24Pa Pulldown.

Should your footage file pull frames from more than one source, the phase can vary from one to the next. With an inconsistent phase, import the footage several times—once per phase—and interpret each copy with its own setting. Then add each footage item to your composition and trim every layer down to just the frames it should use. Put differently, an asset carrying multiple pulldown phases has to be cut into pieces, with pulldown removed separately on each piece. This tends to crop up when the asset is a movie stitched together from several sources inside an NLE.

### Import assets in Panasonic P2 format

Slotting into the PCMCIA slot of a Panasonic P2 video camera, a P2 card is a solid-state memory device. The camera writes its digital video and audio data onto the card in a structured, codec-independent format called MXF (Media eXchange Format). To be precise, the Panasonic Op-Atom variant of MXF is what Adobe Premiere and After Effects support, carrying video in AVC-Intra 50, AVC-Intra 100, DV, DVCPRO, DVCPRO50, and DVCPRO HD formats. A clip counts as P2 format when its audio and video sit inside Panasonic Op-Atom MXF files and those files occupy a specific folder structure.

At the top of the P2 folder structure is a CONTENTS folder. Every essence item (a piece of video or audio) lives in its own MXF wrapper file; the video MXF files go in the VIDEO subfolder and the audio MXF files in the AUDIO subfolder. Tracking how essence files relate to their associated metadata are the XML files in the CLIP subfolder.

Note

Proxies that Panasonic P2 camcorders record into P2 card PROXY folders aren't supported by Adobe Premiere or After Effects.

Since the video and audio on a P2 card already exist in digital form—as though the card were a hard disk—importing its media involves no capture step. Reading that data off the card and turning it into a project-usable format sometimes goes by the name ingest.

Before your computer can read P2 cards, you have to install the right driver, downloadable from the Panasonic website. Panasonic supplies the P2 Viewer application as well, which lets you browse and play media held on a P2 card.

Owing to the FAT32 file system that Panasonic P2 cards use, no single file can exceed 4 GB. Record a shot needing more than 4 GB and a P2 camera spins up another file, carrying on with the shot into it seamlessly. The term for this is clip spanning, since the shot spans more than one file or clip. A camera can likewise span a shot across files on different P2 cards: with more than one P2 card loaded, it records the shot until the first P2 card fills, then opens a new file on the next P2 card that has space and keeps recording into it. Even though one shot may end up recorded as a group of several spanned clips, that multiple-file shot is meant to be handled as a single clip or footage item inside a video editing application. For After Effects to import a group of spanned clips together automatically and reassemble them into one footage item, all of them must have been recorded to the same P2 card and not one file—including the matching XML metadata file—can be missing.

Although you can import assets into Adobe Premiere Pro or After Effects straight off a P2 card, copying the card's contents onto a hard disk first is usually the more efficient path.

Select File > Import.

Navigate to the CONTENTS folder.

To import a video essence item and its associated audio essence items, select the MXF files from the VIDEO folder.

To import only the audio essence items, select the MXF files from the AUDIO folder.

To import a group of spanned clips for a shot that was recorded onto the same P2 card, select only one of the MXF files in the group from the VIDEO folder. The group is imported as a single footage item with a duration equal to the total duration of all the spanned clips it includes. If you select more than one of these spanned clips, you import duplicates of the whole group of spanned clips as duplicate footage items in the Project panel.

Spanned clips from a shot that straddles two different cards can't be imported as one footage item. Instead, pick one MXF file belonging to the shot off each card, which creates a separate footage item for the portion of the shot recorded on that card. Say a group of spanned clips for one shot itself straddles two cards—you would then take, off card 1, one clip out of its group, and off card 2, one clip out of that group. The shot's contents land as two footage items in the Project panel.

When each source clip was captured shows up in the Date column of the Project panel. Once spanned clips are imported, that Date value lets you sort out their proper chronological order inside the shot.

Note

Exporting straight to the P2 format isn't something After Effects can do. For rendering and exporting to P2 format, turn to Adobe Media Encoder or Premiere.

### More like this

- Converting movies
- Importing and interpreting footage items
- Importing assets from tapeless formats
- Export video

## Preparing and importing 3D image files

Search Last updated on May 5, 2026

### Bring 3D image files into Adobe After Effects the right way—lean on the recommended formats and settings so depth and alignment stay accurate and compositing runs efficiently.

### 3D object layers in PSD files

Several well-known formats of 3D models (3D objects) can be imported and worked with in Adobe Photoshop. Photoshop is also able to build 3D objects out of basic, primitive shapes.

3D objects held in PSD files can't be imported by After Effects.

### Vanishing Point exchange

With the Vanishing Point feature in Photoshop Extended, the File > Export For After Effects (.vpe) command lets you write the results out as a set of PNG files—one per plane—together with a .vpe file describing the scene's geometry. That .vpe file can then be imported into After Effects. From the data in the .vpe file, After Effects rebuilds the scene as a composition holding one camera layer plus a perspective-corrected 3D layer for every PNG file.

Sitting on the negative z axis at (x,y)=(0,0) is the camera. Its point of interest lands at the center of the composition. How far the camera zooms is set from the field of view in the Vanishing Point scene.

A parent layer anchored at the center of the composition holds the 3D layers for the scene's planes, which lets the entire scene be transformed as a unit.

Only with images whose pixels are square in Photoshop does Vanishing Point exchange work well.

### Illustrator 3D effects

Within Illustrator's 3D and Materials category you'll find effects — among them Extrude & Bevel, Revolve, and Rotate — that lend a three-dimensional look to any vector object, text and artwork alike. Want depth on your vector graphics and lettering? One route is to build the piece in Illustrator, apply those 3D effects there, and bring the finished result over into After Effects.

### Importing and using 3D files from other applications

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

### Import RLA or RPF data into a camera layer

Camera data saved with RLA or RPF sequence files gets imported by After Effects. It's folded into camera layers — one per camera in the sequence — which After Effects generates in the Timeline panel. The camera data from an imported RLA or RPF sequence is yours to reach, and you can build a camera layer that holds it.

Drop the sequence into a composition, then select its layer over in the Timeline panel.

Select Animation > Keyframe Assistant > RPF Camera Import.

Generating an RLA or RPF file that carries the camera data in 3D Studio Max means saving your rendering in RPF format with the Coverage, Z Depth, and Alpha Channels options turned on.

### Baking and importing Maya data

Camera data from Maya project files is something After Effects can import. That Maya camera information has to be baked first. Baking the camera data makes later keyframe animation in your project simpler. What baking does is drop a keyframe on every frame of the animation. For each camera or transform property you might end up with 0, 1, or some fixed count of keyframes. Take a property that isn't animated in Maya: either it gets no keyframes at all, or just one at the animation's start. Should a property carry more than a single keyframe, its keyframe count has to match that of every other animation property holding more than one.

Cut import time down by building or saving the leanest Maya file you can. Inside Maya, trim keyframes by stripping out static channels ahead of baking, and keep a version of the Maya project holding nothing but the camera animation.

Note

These transformation flags go unsupported: query, relative, euler, objectSpace, worldSpace, worldSpaceDistance, preserve, shear, scaleTranslation, rotatePivot, rotateOrder, rotateTranslation, matrix, boundingBox, boundingBoxInvisible, pivots, CenterPivots, and zeroTransformPivots. After Effects passes over these unsupported flags silently — no warnings, no error messages.

Linear units called out in the Maya file are read by After Effects as pixels unless you say otherwise.

Camera data imported from Maya project files(.ma) can be worked with as either a single composition or a pair of compositions.

Per Maya file imported, After Effects produces one composition or two:

A square pixel aspect ratio in the Maya project yields a single square-pixel composition holding the camera data and transformations.

A nonsquare pixel aspect ratio in the Maya project yields two compositions instead. The first — its filename carrying a Square prefix — is a square-pixel composition that holds the camera data. The second, the parent composition, is a nonsquare-pixel composition that keeps the original file's dimensions and contains the square-pixel composition within it. As you work with imported camera data, put 3D layers and square-pixel footage in the square-pixel composition, and route every piece of nonsquare-pixel footage into the containing composition.

Import a Maya file built on a 1-node camera and After Effects makes a camera in the square-pixel composition carrying that camera's focal length, film size, and transformation data.

Import one built on a 2-node or targeted camera and After Effects makes a camera plus an extra parent node in the square-pixel composition. That parent node holds only the camera's transformation data. 2-node cameras come in automatically with the locator node serving as the point of interest, the camera's Auto-Orientation option set to Orient Towards Point Of Interest.

3-node cameras aren't read by After Effects.

Note

Only the rendering cameras in Maya files get read by After Effects; the orthographic and perspective cameras are ignored. So always produce a rendering camera out of Maya, even when it matches the perspective camera exactly. Applying the FilmFit camera setting? Be sure you pick horizontal or vertical FilmFit rather than fill.

Maya locator nodes are readable by After Effects, letting you track objects from the Maya scene as that scene crosses into After Effects. When a Maya locator node's name carries the word Null, NULL, or null, After Effects spins up a null layer and hands it the matching transformations. Steer clear of parenting locator nodes to one another in Maya; parent them to geometry instead.

Note

World and Underworld coordinates inside the LocatorShape don't get read by After Effects. Position them with a transform node.

### Working with Cinema 4D and Cineware

For the full story on handling MAXON Cinema 4D files and Cineware — a complete workflow bridge tying Adobe After Effects CC to Cinema 4D — refer to CINEMA 4D and Cineware.

### More like this

- 3D layers
- Cameras, lights, and points of interest
