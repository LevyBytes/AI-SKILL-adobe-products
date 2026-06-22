# Gopro Cineform Codec Settings, Dynamic Link Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Using the GoPro CineForm codec in After Effects; Dynamic Link and After Effects.

## Using the GoPro CineForm codec in After Effects

Search Last updated on Mar 27, 2026 | Also applies to Adobe Media Encoder

### About the GoPro CineForm codec

Film and television pipelines built on HD or higher-resolution media lean on the GoPro CineForm codec, a cross-platform intermediate codec, all the time.

QuickTime files (.mov) can be decoded and encoded natively by the GoPro CineForm codec in the newest After Effects and Adobe Media Encoder. That means no extra codecs to install before you create and work with QuickTime files.

### GoPro CineForm codec settings

When you reach for the GoPro CineForm codec, five compression quality settings plus two pixel format settings are on hand to shape your output. Export your After Effects projects through the GoPro CineForm codec like so:

Within the Render Queue, choose a project, then open its Output Module setting.

Inside the Output Module Settings dialog box, set the output format to QuickTime from the Format drop-down list, then choose Format Options.

2. Reach for the Format Settings option to fine-tune QuickTime settings like Video Codec and Bitrate Settings.
   Pick GoPro CineForm as the video codec inside the QuickTime Options dialog box. Tune the compression with the Quality slider sitting under Basic Video Settings. That slider travels from 1 to 5, where 1 stands for the Low setting and 5 for the Film Scan 2 setting. The default value is 4 (Film Scan).

- Low
- Medium
- High
- Film Scan
- Film Scan 2

For more information, see the GoPro CineForm website.

YUV 4:2:2 at 10 bits per channel, or RGBA 4:4:4:4 at 12 bits per channel, is how the GoPro CineForm codec can encode pixels.

Which pixel format gets encoded follows from the color depth and alpha channel choices you make within the Output Module Settings dialog box. Three Channels settings are available — RGB, Alpha, and RGB+Alpha:

- Set Channels to RGB or Alpha to encode to 10bpc YUV. In this case, Depth can only be set to Millions Of Colors.
- Set Channels to RGB+Alpha to encode to 12bpc RGBA. In this case Depth can be set to Millions of Colors+ or Trillions of Colors+.

After Effects renders the comp at whatever color depth the Project and Render Settings name, and the GoPro CineForm encoder then resamples the frames to 10-bit YUV or 12 bpc RGBA, whichever fits.

Kick off the render with your GoPro CineForm settings by choosing Render in the Render Panel.

### GoPro CineForm settings in Adobe Media Encoder

To produce QuickTime output through the GoPro CineForm encoder in Adobe Media Encoder, the Export Settings dialog box offers a choice of three presets:

1. GoPro CineForm RGB 12-bit with alpha at Maximum Bit Depth
2. GoPro CineForm RGB 12-bit with alpha
3. GoPro CineForm YUV 10-bit

Pick whichever of these QuickTime-format GoPro CineForm presets suits the job.

Pick whichever of these QuickTime-format GoPro CineForm presets suits the job. Note

Whether Adobe Media Encoder renders the frames at higher or lower quality hinges on the sources being processed and on whether Maximum Bit Depth is turned on. As needed, the GoPro CineForm encoder resamples the frames to either 10 bpc YUV or 12 bpc RGBA.

### Other considerations

- Clearing the checkbox beside a given setting lets you adjust the core video settings such as Frame Rate and Aspect ratio. When a size is unsupported, like GoPro 2.7K, adjust the resolution and either scale down to 1080, 2K, or 4K or scale up to 6K.
- Frame dimensions are constrained: irrespective of bit depth, the frame width must be a multiple of 16 and the frame height a multiple of 8. Take GoPro 2.7 at 2704x1524 as an example — it is presently unsupported because the 1524 width yields a partial frame size of 95.25.

### More like this

- CineForm codec support in Premiere

## Dynamic Link and After Effects

Search Last updated on Mar 27, 2026

### Use Dynamic Link to pass compositions back and forth — and edit them — across After Effects and Premiere.

### About Dynamic Link

Historically, moving media assets between post-production tools meant rendering and exporting from one program before bringing the result into the next. That approach wasted time and effort. Each time you needed to alter the original asset, another render-and-export cycle followed. Keeping several rendered and exported copies of one asset eats up disk space and tends to create file-management headaches.

Dynamic Link supplies a different path. Between After Effects and Premiere, you can establish dynamic links, and setting one up is no harder than importing any other kind of asset. To make them easy to spot, dynamically linked assets carry distinctive icons and label colors. Projects that these applications produce store their dynamic links.

Alert

Confirm that your After Effects and Premiere builds match before you set up Dynamic Link — a version mismatch will keep Dynamic Link from functioning. Those same rules hold when Dynamic Link is paired with Character Animator.

### Create and link to After Effects compositions with Dynamic Link

From Adobe Premiere you can spin up brand-new After Effects compositions and dynamically link to them. Existing After Effects compositions can likewise be dynamically linked from Adobe Premiere.

### Create a composition from clips in Premiere

Within Premiere, a chosen set of clips can be swapped for a dynamically linked After Effects composition built from those very clips, and the resulting composition picks up Premiere's sequence settings.

In Premiere, highlight the clips you intend to swap out.

2. Right-click any clip in that selection.
   Select Replace With After Effects Composition.

Should After Effects not already be running, it now starts, and a fresh linked composition appears.

### Create a dynamically linked composition from Premiere

Spinning up a new dynamically linked composition from within Premiere starts After Effects, which builds a project and composition that adopt the originating project's dimensions, pixel aspect ratio, frame rate, and audio sample rate. (Where After Effects is already open, the composition lands in the current project instead.) Its name draws on the Premiere project name, trailed by Linked Comp [x].

In Premiere, select File > Adobe Dynamic Link > New After Effects Composition.

Where the After Effects Save As dialog box shows up, supply a name and a location for the After Effects project, then select Save.

A dynamically linked After Effects composition starts out with a duration of 30 seconds. To set a different length, pick the composition inside After Effects, select Composition > Composition Settings, open the Basic tab, and enter a new Duration value.

### Link to an existing composition

You will get the best results by matching the composition settings — dimensions, pixel aspect ratio, frame rate, and the like — to whatever Premiere uses.

- In Adobe Premiere, select File > Adobe Dynamic Link > Import After Effects Composition. Pick an After Effects project file (.aep), followed by one or several compositions.
- In Adobe Premiere, highlight an After Effects project file and select Open. From the dialog box that appears, settle on a composition and select OK.
- From the After Effects Project panel, drag one or several compositions over to the Premiere Project panel.
- Drag an After Effects project file onto the Premiere Project panel. The Import Composition dialog box will open whenever that project file holds more than one composition.

Note

A single After Effects composition can be linked more than once inside one Adobe Premiere project.

### Modify a dynamically linked composition in After Effects

Reaching for the Edit Original command in Adobe Premiere is how you revise a linked After Effects composition. After it opens in After Effects, further edits no longer require invoking Edit Original a second time.

In Adobe Premiere, pick the After Effects composition (or a linked clip on the timeline), then select Edit > Edit Original.

Edit the composition over in After Effects, and return to Adobe Premiere to see how it now looks.

Your After Effects edits then show up in Adobe Premiere, which discards any preview files it had rendered for that clip prior to the edits.

Note

Renaming the composition in After Effects is allowed even after you have dynamically linked to it from Adobe Premiere. The Project panel name in Adobe Premiere Pro stays as it was, yet Adobe Premiere holds onto the dynamic link all the same.

### Delete a dynamically linked composition or clip

A linked composition can be removed from an Adobe Premiere project whenever you like, even while that composition is in use within a project.

Linked clips, too, can be cleared from an Adobe Premiere sequence or timeline at any moment.

Within Adobe Premiere, highlight the linked composition or clip, then press the Delete key.

### Link to a new sequence

Generating an Adobe Premiere sequence from within After Effects fires up Adobe Premiere, which then builds a project and sequence carrying the originating project's dimensions, pixel aspect ratio, frame rate, and audio sample rate. (Should Adobe Premiere already be open, it drops the sequence into whichever project is active.)

From After Effects, select File > Adobe Dynamic Link > New Premiere Sequence.

### Link to an existing sequence

For the cleanest outcome, align Adobe Premiere's sequence and project settings — dimensions, pixel aspect ratio, frame rate, and so on — with what the After Effects project uses.

Do one of the following:

- In After Effects, select File > Adobe Dynamic Link > Import Premiere Sequence. Point to an Adobe Premiere project, then pick one or several sequences within it.
- From the Adobe Premiere Project panel, drag one or several sequences across to the After Effects Project panel.

### Dynamic Link performance

The source composition a linked clip points to may be intricate, so any action you take on it needs extra processing time scaled to that complexity. After Effects carries out the action and then hands the finished data to Adobe Premiere by way of the global performance cache and persistent disk cache. Those caches lift After Effects performance, supplying already-cached frames whenever Premiere asks for them.

Cut down on playback lag through any one of these:

- Set the linked composition offline
- Switch off a linked clip so it briefly quits pointing at a composition
- In Premiere, use the Render and Replace feature (Clip > Render and Replace) to substitute the rendered file for the dynamically linked composition.

When intricate source compositions are part of your routine, add more RAM or move to a quicker processor.

### Export to Adobe Media Encoder

Encoding After Effects compositions starts by placing the item in the Adobe Media Encoder queue and then picking an encoding preset or building your own custom render settings. After Effects gives you two ways to push a composition into the Media Encoder queue:

- File > Export > Add to Media Encoder Queue
- Composition > Add to Media Encoder Queue

Sending a composition or project to the Adobe Media Encoder queue prompts After Effects to open Adobe Media Encoder with those compositions shown in the queue, where encoding can proceed via presets or custom settings.

### More like this

- Working with Adobe Premiere and After Effects
- Importing from After Effects and Adobe Premiere
