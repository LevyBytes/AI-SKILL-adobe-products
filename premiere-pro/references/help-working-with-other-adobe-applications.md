# Transfer Of Information From Premiere To Audition, Edit Premiere Sequences In Audition, Edit Premiere Audio Clips In Audition, Import After Effects Compositions ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Transfer of information from Premiere to Audition; Edit Premiere Sequences in Adobe Audition; Edit Premiere audio clips in Audition; Import After Effects compositions; Replace clips with a dynamically linked After Effects composition; Delete dynamically linked compositions or clips; Make a dynamically linked composition offline; Relink a dynamically linked composition; Copy clips from Premiere to After Effects; Copy from After Effects to Premiere; Import Photoshop files into Premiere; Create a Photoshop file in a project; Edit still images in Premiere using Photoshop.

## Transfer of information from Premiere to Audition

### Learn how audio effects, settings, and sequences move from Adobe Premiere to Adobe Audition.

Adobe Audition and Adobe Premiere include many of the same audio effects, so information about those effects can move between the applications. Audition can re-create compatible audio effects without requiring the audio clip to be rendered again.

When effect information is sent for an effect Audition does not provide, Audition places it in Effects Rack as an offline effect. Details from Third-party effect plug-Ins (VST/VST3) are transferred too. If Audition has loaded that plug-In, the effect is instantiated correctly. If that exact effect is unavailable in Audition, it is added to the clip effects rack as Offline Effect.

To send a sequence from Premiere to Audition, choose Edit > Edit in Adobe Audition > Sequence, then set the options in the Edit in Adobe Audition dialog box.

### Audio clip effects

- Transfer Settings: sends every clip effect setting to Audition.
- Render Clips with Non-Transferable effects: when a clip uses effects that Premiere and Audition do not share, all effects on that clip are rendered into the clip while creating the wave file for Audition.
- Render All: renders every clip effect into the clips during asset creation for Audition.
- Remove All: removes every clip effect before the assets are rendered for Audition.

### Audio track effects

- Transfer Settings: sends all track effect settings to Audition.
- Remove All: removes every track effect before the assets are rendered for Audition.

### Pan and volume information

When selected, Pan and Volume information moves to Audition. When cleared, that information is rendered into the clip.

### Open in Audition

When selected, Audition starts and opens the generated project immediately. This option is available only when Audition is installed.

## Edit Premiere Sequences in Adobe Audition

### Learn the workflow for sending Adobe Premiere sequences to Adobe Audition for detailed audio editing.

Adobe Premiere can hand sequences to Adobe Audition for detailed audio refinement. Sending a Premiere sequence preserves keyframes, effects, markers, and other audio metadata, letting the work continue smoothly in Audition. After Audition is installed, the Edit in Adobe Audition command can modify a full sequence.

Moving a sequence to Audition keeps the composition at full fidelity, retaining keyframes, effects, Essential Sound settings, markers, and metadata. This transfer supports additional refinement, mixing, and advanced composition in the Multitrack Editor.

### Working with Adobe Audition

In a Project panel, choose a sequence with audio. Another option is to choose a clip in the Timeline, or to right-click the clip or sequence in the Project panel.

Choose Edit > Edit in Adobe Audition, then choose Sequence from the submenu.

### Editing Sequences in Adobe Audition

When a sequence is edited in Audition, Premiere sends the selected sequence with rendered audio to Audition for additional compositing. Audition opens the sequence as a Multitrack session.

Follow these steps to send a Premiere sequence to Audition:

Choose Edit > Edit in Adobe Audition > Sequence to open the Edit in Adobe Audition dialog box.

Use the settings in the Edit in Adobe Audition dialog box to define the transfer, including the content to send and the audio/render settings used for export.

- Name: project name generated for Audition; by default, it uses the sequence name sent to Audition.
- Path: location for the generated project.
- Selection: sets which part of the sequence is exported, based on the selected choice, Entire Sequence or Sequence In/Out.

  - Send through Dynamic Link: streams video from Premiere to Audition without rendering. When Premiere projects are sent to Audition with this choice, Audition can display the video at native resolution.
  - Export DV Preview Video: renders one file containing the sequence video for Audition.
  - None: does not create video, so Audition has no video available.

- Audio Handles: Audio Handles are clip content outside the clip boundaries. For example, if the sequence clip is 10 seconds long and Audio Handles is set to 1 second, the rendered file is 12 seconds long, with 1 second added at the beginning and at the end.

Choose OK. Premiere builds a project limited to the chosen sequence and its audio clips. The sequence audio is extracted and copied to the destination path, which creates a self-contained Premiere project without dependencies on the source project, except when Video: Send Through Dynamic Link was selected.

If the Open in Adobe Audition checkbox was selected, Audition starts and opens the exported sequence automatically.

## Edit Premiere audio clips in Audition

### Learn the Adobe Premiere audio-clip workflow for detailed editing in Adobe Audition.

Adobe Audition supports advanced post-production editing for audio transferred from Adobe Premiere. After Audition is installed, Edit In Adobe Audition can be used to edit an audio clip.

Sending a clip to Audition renders its audio data so the Waveform Editor in Audition can be used for more advanced audio work.

### Working with Audition

In a Project panel, choose a sequence with audio. You may also choose a Timeline clip, or right-click that clip in the Project panel.

Choose Edit > Edit in Adobe Audition, then choose Clip from the submenu.

### Editing clips in Audition

Applying Edit in Adobe Audition to an audio clip renders the clip and replaces it with a new Wave file that opens directly in Audition. Editing in Audition leaves the original file intact and changes only the copied version.

If Premiere has an In/Out range marked, those markers appear in Audition. After the clip is edited and saved in Audition, the changes appear directly in the Premiere Timeline panel. Effects or Markers from the original clip remain in the edited clip.

You can reopen the audio in Audition for editing as often as needed. Each time Edit Clip in Adobe Audition is chosen, Premiere creates a newly rendered audio file and substitutes it for the earlier one for continued editing. The Clear command removes the extracted audio clip that was edited in Audition.

Note

Edit In Audition is unavailable for Adobe dynamic link clips.

## Import After Effects compositions

### Learn how the Import command or Dynamic Link brings After Effects compositions into an Adobe Premiere project.

After Effects compositions can be brought into Premiere so motion graphics, visual effects, and animations become part of video projects. Premiere handles imported compositions like standard assets, and they update automatically when modified in After Effects.

Import After Effects compositions to include motion graphics or visual effects authored in After Effects. The approach covers both standard importing and Adobe Dynamic Link workflows. If an After Effects project includes several compositions, you can choose the specific compositions to import. Dynamic Link functionality requires After Effects to be installed on the system.

For projects made on another computer, confirm before importing that the current system has all related After Effects project files and assets.

### Import compositions from After Effects

Choose File > Import > Import Adobe Premiere Project to browse to the After Effects project (.aep) file, or use File > Adobe Dynamic Link > Import After Effects Composition.

Use the File menu, either Import or Adobe Dynamic Link, to bring Premiere content into After Effects.

From the File menu, import Premiere content into After Effects by using Import or Adobe Dynamic Link.

Choose the .aep file, then choose Open.

If the project includes multiple compositions, choose the compositions to import in the Import After Effects Composition dialog box. Shift-click selects contiguous compositions, while Ctrl-click (Windows) or Command-click (macOS) selects non-contiguous compositions.

Choose OK.

Premiere adds the imported compositions to the Project panel. When several compositions are imported, Premiere creates a bin named after the .aep file and stores all chosen compositions in that bin. Compositions can be dragged from the Project panel to the timeline like other assets.

Edits made to compositions in After Effects appear automatically in Premiere through Dynamic Link, so updated versions do not need to be re-imported or rendered. To edit a linked composition in After Effects, double-click it in the Project panel.

## Replace clips with a dynamically linked After Effects composition

### Learn how Dynamic Link can convert selected clips into an editable After Effects composition in Adobe Premiere.

For advanced visual effects or motion graphics work, selected clips can be replaced with a dynamically linked After Effects composition.

The composition takes on the sequence settings, including dimensions, pixel aspect ratio, frame rate, and audio sample rate, while keeping a dynamic link. To bring in existing After Effects compositions, choose File > Adobe Dynamic Link > Import After Effects Composition.

Dynamic Link avoids rendering intermediate files between applications. After Effects starts automatically if it is not already running and creates a new project file that must be saved. The original clips stay in the Project panel, while the linked composition replaces them in the sequence.

### Replace sequence clips with a linked composition

In the sequence, select the clips to include in the After Effects composition.

Right-click any selected clip in the Timeline panel.

Choose Replace With After Effects Composition from the context menu.

If After Effects opens a Save As dialog box, provide the name and location for the new After Effects project file, then choose Save.

After Effects builds a composition from the selected clips, and Premiere swaps those clips in the sequence for the dynamically linked composition. The composition appears in the Project panel. Changes made in After Effects update automatically in Premiere without rendering.

## Delete dynamically linked compositions or clips

### Learn how to select a linked composition or clip in a project and remove it from Adobe Premiere.

Dynamically linked assets keep a live connection to their source After Effects compositions and appear in the project with distinctive icons and label colors. These linked assets can be deleted at any time without changing the original After Effects project file.

Deleting linked compositions can help keep the project organized after specific After Effects content is no longer needed. Linked assets can be removed whether they are currently used in sequences or stored only in the Project panel.

### Remove a linked composition or clip

In the Project panel or the Timeline, choose the dynamically linked composition or clip that should be removed.

Use Delete to take that asset out of the project.

Premiere removes the dynamically linked item at once. The action breaks the dynamic link connection, while the original After Effects project file and its composition remain unchanged. To bring the connection back later, import the After Effects composition again.

## Make a dynamically linked composition offline

### Sever the dynamic link between Adobe Premiere and After Effects when playback trouble or editing slowdowns need to be isolated.

Complex dynamically linked After Effects compositions can make playback feel uneven or late. Setting the composition offline breaks the Dynamic Link connection to After Effects and leaves an offline placeholder for the linked composition in the Project panel.

Apply this workflow when dynamically linked compositions are causing playback latency. Performance can improve after the composition is taken offline, but the live After Effects connection is removed until you relink it. When you only need to pause a clip temporarily while keeping the link available, use Clip > Enable instead.

### Take the composition offline

Choose the dynamically linked composition in the Project panel.

Choose File > Make Offline.

Make Offline leaves the item in the project while detaching the selected media from its source file.

As a second reminder, Make Offline keeps the selected media present in the project and disconnects it from the original source file.

Afterward, the Project panel shows the composition with an Offline icon. Its dynamic link to After Effects is broken, and Premiere no longer uses preview files that had been rendered for that clip.

To bring the dynamic link back, right-click the offline composition and choose Link Media. In the dialog box, choose the After Effects project file that should relink the composition.

## Relink a dynamically linked composition

### Reconnect offline After Effects compositions so Dynamic Link works again inside an Adobe Premiere project.

Premiere can show dynamically linked compositions as offline after the source After Effects project is renamed, moved, or deleted. Relinking returns the connection without rebuilding the composition or discarding edits already made in the timeline. Use this procedure only for compositions that already have a Dynamic Link relationship; it does not create a new Dynamic Link.

An Offline icon in the Project panel identifies offline compositions. If required, reconnect them to the original After Effects project or point the link at a different composition.

### Reconnect the composition to its source project

In the Project panel, right-click the offline composition.

From the context menu, choose Link Media.

In the dialog box that appears, browse to the After Effects project file (.aep) and select it.

Choose Open.

Premiere reconnects the composition automatically and restores Dynamic Link. Changes made in the After Effects source project are reflected by the composition right away.

Tip

When the After Effects project includes more than one composition, choose the correct project file carefully. Premiere reconnects automatically to the composition with the same name.

## Copy clips from Premiere to After Effects

### Move video and audio material between applications while keeping Adobe Premiere effects and keyframes available.

Copying assets from Premiere into Adobe After Effects moves clips into compositions for motion graphics or visual effects work while preserving timeline edits, effects, and animation data.

After Effects changes Premiere assets into layers and brings source footage into its Project panel. Effects that both applications support arrive with their settings and keyframes still attached. For work that should remain connected without repeated copy-and-paste steps, use Adobe Dynamic Link. Dynamic Link creates live relationships that refresh automatically after the source composition changes.

Common Premiere assets are supported in After Effects, including video clips, audio tracks, color mattes, still images, and nested sequences. Copied Photoshop files keep their layer information.

Note

Premiere titles do not paste into After Effects, although text from the Legacy Title Designer can move over with its attributes intact.

### Copy assets to After Effects

In the Premiere Timeline panel, choose the clips you need to transfer.

Choose Edit > Copy.

Before moving into After Effects, copy the selected clip or properties in Premiere.

Premiere must have the chosen clip or properties copied before they can be pasted into After Effects.

Switch to After Effects. Open the target composition in its Timeline panel.

Activate the Timeline panel, then choose Edit > Paste.

Use the Edit menu to paste Premiere layers or properties that were copied into an After Effects composition.

The Edit menu command places the copied Premiere layers or properties into the open After Effects composition.

The pasted assets become the uppermost layers in the After Effects Timeline panel and are placed at the composition's current time.

Tip

To put pasted assets at a particular time in the composition, move the current-time indicator first. You can also use Ctrl + Alt + V (Windows) or Command + Option + V (macOS) for a playhead-position paste.

### What transfers between applications

Most Premiere clip properties map to matching After Effects layer properties. Motion and Opacity data become Transform properties, and interpolation choices stay intact for Bezier, Auto Bezier, Continuous Bezier, or Hold keyframes. Speed property values become Time Stretch values; because the two work inversely, 50% speed in Premiere becomes 200% stretch in After Effects.

When an effect exists in both applications, its full settings and keyframes transfer. Unsupported effects are ignored by After Effects and do not appear in the Effect Controls panel. Audio tracks become audio layers, but 5.1 surround and tracks above 16-bit are unsupported. Mono tracks import as one layer, and stereo tracks import as two layers.

Nested sequences turn into nested compositions, while color mattes become solid-color layers. Sequence markers transfer only when the whole sequence is copied or the complete Premiere project is imported as a composition; otherwise, those markers are placed on a new solid-color layer. Video and audio transitions become opacity keyframes for cross dissolves only, or they become solid-color layers. Frame Hold is converted to the Time Remap property, and Time Remapping moves directly between the applications.

Items without conversion include bars and tone, titles, universal counting leaders, and some audio filters. Volume and Channel Volume are exceptions because they map to the Stereo Mixer effect. Blending modes and clip markers transfer successfully to their After Effects equivalents.

### Results of pasting into After Effects

Adobe Premiere asset

Converted to in After Effects

Notes

Audio track

Audio layers

Audio in 5.1 surround, or audio above 16-bit, is unsupported. Mono becomes one layer; stereo becomes two layers.

Bars and tone

Not converted

Blending modes

Converted

Clip marker

Layer marker

Color mattes

Solid-color layers

Crop filter

Mask layer

Frame Hold

Time Remap property

Motion or Opacity values and keyframes

Transform property values and keyframes

The Bezier, Auto Bezier, Continuous Bezier, or Hold keyframe type is preserved.

Sequence marker

Markers on a new solid-color layer

Sequence markers move only when the sequence itself is copied or the full Premiere project is imported as a composition.

Speed property

Time Stretch property

Speed and time stretch move in opposite directions; for example, Premiere 50% speed maps to After Effects 200% stretch.

Time Remapping effect

Time Remap property

Titles

Not converted

Universal counting leaders

Not converted

Video and audio transitions

Opacity keyframes (Cross dissolve only) or solid-color layers

Video effect properties and keyframes

Effect properties and keyframes, if the effect also exists in After Effects

After Effects omits unsupported effects from Effect Controls.

Volume and Channel Volume audio filters

Stereo mixer effect

No conversion is applied to other audio filters.

Source settings for R3D source files

Source settings for R3D source files

| --- | --- | --- |

Note

Importing a Premiere project into After Effects uses the same conversion behavior as copying from Premiere to After Effects.

## Copy from After Effects to Premiere

### Bring layers from After Effects into Premiere, understand the supported conversions, and know which layer types cannot be imported.

A footage-based layer from an Adobe After Effects composition can be copied and pasted into an Adobe Premiere sequence. Premiere inserts it as a sequence clip and adds the source footage item to the Project panel. If Premiere supports an effect on that layer, the effect and all of its settings and keyframes are converted. Nested compositions, Adobe Photoshop layers, solid-color layers, and audio layers can also be copied. Premiere turns nested compositions into nested sequences and solid-color layers into color mattes. Shape, text, camera, light, and adjustment layers cannot be copied into Premiere.

Open Premiere before copying the layer in After Effects.

In the After Effects Timeline panel, select one or more layers. Multiple nonoverlapping layers from After Effects land on the same track in Premiere. When layers overlap, their selection order controls their track placement in Premiere. Each layer is placed on its own track, and the layer selected last appears on Track 1. For example, selecting layers from top to bottom makes them appear in the opposite order in Premiere, with the bottom layer on Track 1.

In the After Effects menu, choose Edit > Copy.

In Premiere, open a sequence in the Timeline panel.

Place the current-time indicator where the pasted material should begin, then choose Edit > Paste.

### How Premiere converts pasted layers

When an Adobe Premiere sequence receives a pasted layer, these conversions apply to its keyframes, effects, and other properties:

After Effects item

Converted to Premiere

Notes

Audio volume property

Channel Volume filter

Blending modes

Premiere-supported blending modes convert.

Effect properties and keyframes

Effect properties and keyframes, if the effect also exists in Premiere

Unsupported effects are listed by Premiere as offline in the Effect Controls panel. Some effects in After Effects and Premiere have matching names but are separate effects, so they do not convert.

Expressions

Not converted

Layer markers

Clip markers

Masks and mattes

Not converted

Stereo Mixer effect

Channel Volume filter

Time Remap property

Time Remapping effect

Time Stretch property

Speed property

The relationship is inverse; for example, 200% stretch in After Effects maps in Premiere to 50% speed.

Transform property values and keyframes

Motion or Opacity values and keyframes

Premiere keeps Bezier, Auto Bezier, Continuous Bezier, or Hold keyframe types.

Source settings for R3D source files

Source settings for R3D source files

| --- | --- | --- |

## Import Photoshop files into Premiere

### Use layered or flattened PSD files in Adobe Premiere video projects with import choices that fit the edit.

Prepare or create the image in Adobe Photoshop for video use.

Choose File > New, then choose a Film & Video preset in the New File dialog box so the PSD matches the intended video output size.

Another option is File > New > Photoshop File in Premiere, which creates the PSD there.

Use PSD format when saving so quality and layers are preserved.

In Premiere, choose File > Import.

In the Import Layered File dialog box, use the Import As menu to choose how the file should come in.

Based on how you expect to edit it, bring the file in as a flattened image or as separate layers.

Add the imported file or imported layers to the timeline and continue the video edit.

Note

Because Photoshop gives detailed control over masks, graphics, and text design, preparing the still image before import can reduce render time.

## Create a Photoshop file in a project

### Create a new Photoshop file from inside an Adobe Premiere project so it matches the video frame settings and is ready to edit.

In Adobe Premiere, choose File > New > Photoshop File.

Adobe Photoshop opens a blank still image sized to the project's video frame dimensions and shows guides for title-safe and action-safe areas.

Create or edit the still image in Photoshop.

In Photoshop, choose File > Save and save the file in the location you want.

Note

When the PSD is imported back into Premiere, choose either a flattened image or separate preserved layers, depending on what the edit requires.

## Edit still images in Premiere using Photoshop

### Refine still images from an Adobe Premiere project by opening them in Photoshop.

Inside a project, most image formats supported by Adobe Photoshop can be opened for editing. Adobe Premiere does not import files that use CMYK or LAB color formats.

Select the still image clip in the Project or Timeline panel.

Choose Edit > Edit In Adobe Photoshop.

Photoshop opens the file. After you save it, Premiere can use the updated version in the project.

Make the needed Photoshop edits with any available tools, filters, or adjustments.

In Photoshop, choose File > Save to store the changes.
