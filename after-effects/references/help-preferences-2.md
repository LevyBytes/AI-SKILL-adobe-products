# Preferences (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Import Defaults

- Use Dropframe: Takes any NTSC footage to be timed with drop frame timecode.

  - Use Non-Dropframe: Takes any NTSC footage to be timed without drop frame timecode.

  - Ask User: With each import of footage carrying an unlabeled alpha channel, After Effects checks with you first so the interpretation is your call.
  - Guess: After Effects has a go at working out on its own whether the alpha is straight or premultiplied; lacking certainty, it either asks you or settles on its best guess.
  - Ignore Alpha: The alpha channel gets disregarded and After Effects handles the footage as wholly opaque, with no transparency.
  - Straight (Unmatted): Reads the alpha as straight, confining transparency to the alpha channel alone.
  - Premultiplied (Matted with Black): Reads the alpha as premultiplied over a black background.
  - Premultiplied (Matted with White): Reads the alpha as premultiplied over a white background.

  - Footage: Builds a single footage layer.
  - Composition: Builds a composition out of the footage.
  - Composition - Retain Layer Sizes: Builds a composition while holding each layer's original dimensions.

Footage Interpretation on Replacement: Governs what happens to interpretation settings as you swap footage inside a project:

- Reset: Wipe every interpretation setting back to its default for the incoming footage.
- Remember: Carry over the frame rate, alpha interpretation, and the rest of the settings from the footage being swapped out.

## Still Footage

- Use Composition Length: Stretch still images (JPEG, PNG, TIFF, PSD, etc.) so they run the entire length of the composition.
- Use Custom Duration: Give still images a set length you define yourself, expressed in frames or time.

## Sequence Footage

- Frames Per Second: The frame rate handed to image sequences once they're imported.
- Report Missing Frames: Flags any image sequence that turns up gaps or absent files.
- Verify Individual Files: Inspects every file within a sequence — slower to run, but the validation it does is more exhaustive.

## Video Footage

- Enable hardware accelerated decoding: Leans on the GPU to speed up H.264 decoding, provided the hardware can do it.

## Automatic Footage Reloading

Whenever you come back from a different application, any footage that was modified reloads on its own. The default reloads everything except image sequences automatically. That behavior is yours to adjust through the Auto Reload drop-down.

- All Footage Types: Brings image sequence footage into the reload too.
- Non-sequence Footage: Covers every footage kind apart from the image sequence.
- Off: Shuts off footage auto-reloading altogether.

## Export preferences

The render queue together with export behavior is governed from the Export panel.

## Export Defaults

- Use Default File Name and Folder: Derives sensible output file names on its own from the names of your compositions.
- Preview output during render queue output: Pipes the composition through a viewer as it exports, by way of Mercury Transmit.
- Play Sound When Render Finishes: Sounds an audible cue the moment a render wraps up.
- Enable ProRes hardware accelerated encoding, if available: Puts the GPU to work on ProRes export where the hardware allows; toggling it means restarting the application.

## Segment Output

- Segment Sequences At: Spin off fresh folders on the fly while rendering image sequences once they pass a set file count. Decide the ceiling on files per folder, the point past which After Effects starts a new subfolder.
- Segment Video-only Movie Files At: Break oversized video-only movie files into smaller pieces automatically. Decide the largest file size, in MB, allowed for each movie segment.

## Render Notifications

- Automatically enable notifications when you add a composition to the Render Queue: Set up render notifications on their own, keyed to how long the render runs and to your Creative Cloud notification settings. Switched on, this has After Effects push notifications out to the Creative Cloud desktop and mobile apps the moment a composition lands in the Render Queue.

## Audio preferences

Audio hardware setup along with playback settings are governed from the Audio panel.

## Audio Hardware

- Built-in Audio

  - Third-party Audio Interfaces
  - ASIO Drivers (Windows)
  - Core Audio Devices (macOS)

- Default Input: Which device captures audio when recording.
- Default Output: Which device plays audio back.
- I/O Buffer Size: Tune the audio buffer size to trade off latency against stability. Settle on the smallest value that still keeps audio dropouts away. Because the sweet spot tracks how fast your system is, expect to test a few options.
- Sample Rate: Pick the sample rate the audio hardware runs at — 44.1 kHz, 48 kHz, 96 kHz, and so on. Adobe Audition Help walks through the rates that suit various output mediums.

## Output Channel Mapping

Route the stereo output of After Effects to particular hardware channels:

- Left Channel: Picks which hardware output carries the left audio.
- Right Channel: Picks which hardware output carries the right audio.

## Export

- Audio Block Duration: Audio renders in chunks too, and the Audio Block Duration value fixes how long each one runs. Set the size of the audio chunks handled during playback and rendering. Shrinking the value sharpens responsiveness at the cost of efficiency, whereas enlarging it boosts efficiency while dulling responsiveness.

## Disk preferences

Settings for the disk cache, the media cache, and the database are all handled from the Disk panel.

## Disk cache

- Enable Disk Cache: This option ships turned on. Toggle disk caching on or off here, and pick the folder that will hold the cache. With it active, rendered frames get stored to disk by After Effects so playback runs faster.

  - Choose Folder: Pick the destination folder for disk cache files.
  - Empty Disk Cache: Wipe every disk cache file by hand.

- Enable Preview from Disk Cache: When RAM runs out, lets RAM previews play straight from the disk cache.
- Enable Compressed Frames (Lossless): Shrinks the disk cache footprint through lossless compression. Turning it on lets you preview a longer stretch of the timeline while taking up far less disk space, and image quality stays intact.

## Conformed Media Cache

Point to folders, or relocate the media cache database or the media cache files themselves.

- Database: Choose the spot where After Effects keeps its index of conformed media; this index is what lets After Effects find and handle cached audio and video data fast.
- Cache: Choose where cache files for imported media live (shared with Adobe Media Encoder and Premiere).
- Clean Database & Cache: Strip conformed and indexed media files out of the cache and erase their matching database records. Only files tied to footage whose original sources can no longer be found are touched by this.

## XMP Metadata

- Write XMP IDs to Files on Import: Stamps an XMP ID onto files as they are imported, planting unique identifiers within the metadata of the footage brought in. Media cache files and previews become easier to share and reuse as a result.
- Create Layer Markers from Footage XMP Metadata: Build a layer from a footage item carrying XMP metadata, and After Effects turns that metadata into layer markers on its own.

## Memory & CPU preferences

Memory allocation together with multi-frame rendering is governed by the Memory & CPU preferences panel. Through its options you dictate memory preferences and steer how After Effects hands out and consumes memory and CPUs.

## Memory

- RAM reserved for other applications: Raise or lower this figure to dictate how much of the free RAM goes to After Effects versus the apps you keep running in the background.
- RAM available for: Reports the amount of RAM on hand for After Effects alongside your other Creative Cloud apps.
- Show Memory Usage Details: Brings up the Memory Details dialog, a detailed breakdown of how memory allocation is spread out.
- GPU Information: Pops open a dialog laying out GPU capabilities, the driver version, and which OpenGL features are supported.

## CPU

- Enable Multi-Frame Rendering: With Multi-Frame Rendering on, After Effects works on several frames in parallel during both preview and render queue export. The behavior carries over when After Effects compositions get rendered out of Media Encoder and Premiere too.
- % CPU reserved for other applications: Pick this to cap the share of CPU power held back so apps besides After Effects stay usable.

## Video preferences

Mercury Transmit settings, which route video output to external monitors, are configured from the Video panel.

## Video Options

- Enable Extended Display Range / High Dynamic Range preview (when available): Lets HDR content be viewed on displays that support it.

## Mercury Transmit

Tune how video is fed out to external displays, broadcast monitors, or capture devices.

- Enable Mercury Transmit: Switches on video output to external hardware; you can flip the video preview through Mercury Transmit on or off. To toggle it, press / on the numeric keypad. If you're on macOS without a numeric keypad, the combination is Control + Shift + / on the main keyboard.
- Disable video output when in the background: Tick this to stop video frames from reaching the external monitor whenever After Effects isn't the app in front.

## 3D preferences

Behavior of the 3D camera tool plus the 3D model cache is governed by the 3D panel.

## Camera Navigation

Settings under Camers Navigations let you configure the keyboard and mouse for smooth navigation as you work with 3D elements.

- Camera Navigation and Transform Gizmos: Press number keys 1-6 to flip between camera views and move through 3D space with Gizmos.
- Go To Markers: Press number keys 1-9 to add or jump between layer markers.

Note

While the override is on, marker actions shift over to Shift+Number keys.

- Activate Camera Navigation: Assign Alt/Option + drag for steering the 3D camera.
- Duplicate Layers: Assign Alt/Option + drag to duplicate layers the usual way.

Note

While the override is on, the alternate behavior has to be reached another way.

- Camera manipulation point: Pick one of None, Indicator, and Directional indicator.

## Camera Navigation - Dolly

- Mouse scroll wheel behavior: Pick one of Magnify composition, Dolly camera, and Reverse dolly camera.
  - Normal: A drag shifts the camera.
  - Reverse: A drag shifts the scene, while the camera travels the other way.

## 3D Cache

Empty 3D Cache: Clear out and delete the cached data for imported 3D models (OBJ, C4D, etc.), reclaiming disk space.

## Scripting & Expressions preferences

How the expression editor looks, along with scripting security, is governed by the Scripting & Expressions panel.

## Application Scripting

- Allow Scripts to Write Files and Access Network: Grants scripts the ability to touch files and reach the network. Switch it off to stay secure in environments you don't trust.
- Enable JavaScript Debugger: Opens up debugging for ExtendScript (.jsx) scripts.
- Warn User When Executing Files: Have After Effects alert you whenever you reach for the Run Script File option in the File menu to launch a script file.
- Show Scripting Progress Dialog: Turns on a modal progress dialog whose progress bar tracks the time elapsed from the moment script execution started.

## Expressions

- Expression Pick Whip Writes Compact English: Switching this on sets the format used for expressions the pick whip generates.
- Show Warning Banner When Project Contains Expression Errors: Should an expression fail to evaluate, a warning banner along the bottom of the Composition and Layer panels surfaces the expression errors. Switch this off and that banner stays out of sight even as fresh expression errors crop up.

## Expression Editor

- Font Size: Dial the editor text size anywhere from 8-24 points.
- Syntax Highlighting: Turn on color coding driven by syntax (keywords, strings, etc.).
- Show Line Numbers: Put line numbers along the left margin.
- Show Indent Guides: Render vertical lines that mark indentation levels.
- Highlight Matching Braces: With the cursor next to a brace/bracket/parenthesis, its partner gets highlighted.
- Auto Insert Braces: Tack on closing braces, brackets, and parentheses for you.
- Auto Indent Braces: Indent the code following an opening brace automatically.
- Folding: Decide whether blocks of script code can be collapsed or expanded within the editor to ease navigation.
- Word Wrap: Switch word wrap off, break lines at word boundaries, or break them at any character boundary.
- Use Tabs: Indent with tab characters rather than spaces.
- Tab Width: State how many spaces make up a tab or one indentation level, anywhere from 2 to 8 spaces.
- Backspace Unindents: Decide whether hitting Backspace on a blank line strips away one indentation level.
- Inline Errors: Surface error indicators right inside the expression editor.
- Auto Complete: Offer suggestions as you type property names and methods.

## Theme

- Theme: Pick whichever of the editor's preset color schemes you want applied.
  - Default Text
  - Background
  - Line Numbers
  - Keywords (if, for, while, etc.)
  - Identifiers (variable names)
  - Comments
  - Numbers
  - Strings
  - Operators
  - Indent Guides
  - Good Brace
  - Bad Brace
  - Selection

### Related resources

- Workspaces, panels, and viewers
- Memory and storage
- 3D animation settings

### Talk to us

Got questions about After Effects? Come find us over in our After Effects community. We would love to help.

## See also

- [Application](script-application.md)
