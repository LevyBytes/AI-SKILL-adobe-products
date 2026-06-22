# Basics Rendering Exporting (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Mar 27, 2026

Get a handle on what rendering and exporting your projects in After Effects really involves. You'll learn to pick the rendering options that suit you, render compositions, manage export settings, and more.

Topics in this article:

- Rendering and exporting overview
- What is rendering?
- Render and export with the Render Queue panel
- Receive remote notifications when the render completes
- Render and export with Adobe Media Encoder
- Supported output formats
- Collect files in one location

- Specify filenames and locations for rendered output
- Render settings
- Output modules and output module settings
- Encoding and compression options for movies
- QuickTime (MOV) encoding and compression settings
- Post-render actions

## What is rendering?

To render is to build the frames of a movie out of a composition. Rendering a single frame means building one composited two-dimensional image from every layer, setting, and other detail in a composition that together form the model behind that image. Rendering a movie is just doing that frame by frame for each frame the movie contains. See how After Effects renders an individual frame and what order it follows.

People often talk about rendering as though the word only covers final output. Yet building previews for the Footage, Layer, and Composition panels relies on rendering too. A preview can even be saved out as a movie and serve as your final output.

Once a composition has been rendered for final output, one or more output modules take over and encode the rendered frames into one or more output files. That encoding of rendered frames into output files counts as a form of exporting.

Note

- Dig into Project settings to read up on the project-level settings governing how time gets shown, how color data is handled, and which audio sampling rate applies.
- Dig into Composition settings to find out how composition settings like resolution, frame size, and pixel aspect ratio are set for your final rendered output.

## Rendering in After Effects

A range of rendering options in After Effects can speed the rendering process along. Leaning on the GPU brings both more speed and more precision to how your effects render. Through the Video Rendering and Effects dropdown in the Project Settings dialog box, you get these GPU effect rendering options to pick from:

- Mercury Software Only: effects render on the CPU
- Mercury GPU Acceleration: effects render on the GPU. On macOS, Mercury GPU Acceleration can use OpenCL or Metal. On Windows, GPU effect rendering uses either CUDA or OpenCL based on your selection.

Note

In an 8-bpc project, GPU-accelerated effects can render with slight differences in color precision next to CPU-only rendering. For accurate results, switch the project to 16-bpc or 32-bpc.

With a composition finished, you can output a movie file. Two separate routes lead to outputting one. Pick whichever fits your needs.

A few situations call for a movie file:

You want a top-quality movie — alpha channel or not — or an image sequence headed for a Premiere sequence or for another video editing, compositing, or 3D graphics application.

Building a high-quality movie file means rendering it with the Render Queue. There's more on rendering and exporting through the Render Queue panel elsewhere.

You want a compressed movie bound for the web or for DVD or Blu-ray discs.

Building a high-quality movie file compressed for the web, DVD, or Blu-ray disc means encoding it with the Adobe Media Encoder. There's more on rendering and exporting through Adobe Media Encoder elsewhere.

Note

Certain kinds of exporting skip rendering altogether and serve intermediate stages of a workflow rather than final output. Choosing File > Export > Adobe Premiere Project, for instance, exports your project as an Adobe Premiere project. The project information is then saved with no rendering done. As a rule, data handed off through Dynamic Link goes unrendered.

A movie can come out as one output file holding every rendered frame, or as a sequence of still images — the form you'd choose when producing output for a film recorder.

For output, you can either render your compositions through the After Effects render queue or push your compositions into the Adobe Media Encoder queue carrying the render settings you set in the Render Queue panel.

In the case of the Render Queue, an embedded build of the Adobe Media Encoder is what After Effects uses to encode most movie formats by way of the Render Queue panel. As you handle render and export jobs with the Render Queue panel, that embedded Adobe Media Encoder gets invoked on its own. It surfaces only as the export settings dialog boxes where you set certain encoding and output settings. There's fuller coverage of encoding and compression choices for movies elsewhere.

Note

That embedded build of the Adobe Media Encoder, the one driving export settings inside After Effects output modules, falls short of every feature in the full, stand-alone Adobe Media Encoder application.

## Render and export with the Render Queue panel

Rendering and exporting movies out of After Effects happens chiefly by way of the Render Queue panel.

Dropping a composition into the Render Queue panel turns it into a render item. The render queue can hold plenty of render items, and After Effects is able to render several of them on its own in a batch. Hit the Render button at the upper-right corner of the Render Queue panel and every item marked Queued renders and outputs in the order the Render Queue panel lists them.

Note

Exporting one movie to several formats under the same render settings doesn't require rendering it more than once. Tack output modules onto a render item in the Render Queue panel and you can export several versions of the very same rendered movie.

When several render items are in play, dropping comments into the Comment column of the Render Queue panel often pays off. Should the Comment column be hidden, right-click (Windows) or Control-click (macOS) a column heading and pick Columns > Comment.

## Manage render items

The Render Queue panel lets you juggle a number of render items together, each carrying its own render settings and output module settings.

These characteristics fall to render settings:

- Output frame rate
- Duration
- Resolution
- Layer quality

Output module settings — applied once render settings have been — fix post-rendering characteristics such as these:

- Output format
- Compression options
- Cropping
- Whether the output file carries an embedded project link

Templates holding render settings and output module settings you turn to often are yours to create.

By way of the Render Queue panel, one click of the Render button can render the same composition to assorted formats or under assorted settings, for instance:

You can output a sequence of still images, a Cineon sequence say, and later transfer it to film for cinema projection.

You can output with lossless compression (or none at all) to a QuickTime container, set to hand off to a non-linear editing (NLE) system where the video gets edited.

Tip

Selecting, duplicating, and reordering render items relies on many of the same keyboard shortcuts you'd use for layers and other items. There's guidance on using keyboard shortcuts within After Effects elsewhere.

Note

Moving output rendered out of After Effects onto film or video calls for the right film or video transfer hardware, or access to a service bureau able to handle the transfer.

## Render and export a movie using the render queue

In the Project panel pick the composition you want a movie from, then do one of these to drop it into the render queue:

Select Composition > Add To Render Queue.

OR

Drag the composition into the Render Queue panel.

Dragging a footage item straight from the Project panel into the Render Queue panel builds a composition from it and adds that composition to the render queue at once. It's a handy way to turn a footage item from one format into another.

Click the triangle beside Output To in the Render Queue panel to name the output file from a naming convention and then choose a location, or click the text next to the Output To setting to type any name you like. Learn more about specifying filenames and locations for rendered output.

Click the triangle to the right of Render Settings to pick a render settings template, or click the underlined text to its right to tailor the settings yourself.

Pick a log type from the Log menu.

After a log file gets written, its path turns up beneath the Render Settings heading and the Log menu.

Click the triangle to the right of the Output Module to pick an output module settings template, or click the underlined text to its right to tailor the settings. The output module settings are where you set the output movie's file format. Sometimes a format-specific dialog box opens once you pick a format, letting you choose format-specific settings. Where your preferences are new rather than upgraded or imported, the output module default lands on High Quality.

Learn more about encoding and compression options for movies.

Once an output name and location are set and a render settings and output module have been picked, the entry in the Render column gets selected on its own (marked by a check mark) and the status flips to Queued. A status of Queued means the render item sits in the render queue.

Hit Caps Lock ahead of starting a render to stop the Composition panel from showing rendered frames. Skipping those Composition panel updates lets After Effects spend less time chewing through simple render items that carry many frames.

Click the Render button at the upper-right corner of the Render Queue panel.

How long rendering a composition into a movie takes can run from a handful of seconds to many hours, hinging on the composition's frame size, quality, complexity, and compression method. Lean on Multi-Frame Rendering to speed things up.

Once a render item finishes rendering, it stays in the Render Queue panel with its status now reading Done until you pull it out of the Render Queue panel. A finished item can't be re-rendered, but you can duplicate it to spin up a fresh queue item carrying the same settings or new ones.

Note

After an item is rendered, you can bring the finished movie in as a footage item by dragging its output module out of the Render Queue panel and into the Project panel.

## Render queue panel options

Dolly Toward Cursor is what this setting starts on.

Render Queue panel with render information.

Render Queue panel with render information.

These are the readouts surfaced by the Render Queue:

- Info - Shown here are figures like how many frames are rendering at once (which varies with quality), how long the active frame has taken, plus the start frame and the end frame.

The Info button surfaces the headline details of whichever composition is being rendered.

The Info button surfaces the headline details of whichever composition is being rendered.

- Elapsed - How much render time has gone by so far.
- Remaining - How much render time is still left before completion.
- Estimated size - A projected file size for the finished composition.
- Free space - How much room is still open on your disk.

Memory usage is visualized by the live Current Render bar: frames being rendered right now show as bright green, frames already written to disk show as blue, and the dark green sitting between them marks frames that finished rendering but aren't on disk yet. Hand more CPU power to After Effects and that dark green stretch shrinks, since rendering and disk writes both keep pace better.

## Render item statuses

Every render item carries a status, displayed under the Status column of the Render Queue panel:

Unqueued

Though the item shows up in the Render Queue panel, it isn't set to render yet. Verify your render settings and output module settings are the ones you want, then pick the Render option to put the item in the queue.

Queued

This item is set and ready to render.

Needs Output

No output filename is on file yet. Either pick a value under the Output To menu, or click the underlined Not Yet Specified text beside the Output To heading to set a filename and path.

Failed

Rendering of this item didn't succeed in After Effects. Open the log file in a text editor to find the exact reason the render failed. Once that log file exists, its path shows up beneath the Render Settings heading and Log menu.

User Stopped

Rendering here was halted.

Done

This item has finished rendering.

## Manage render items and change render statuses

- Jump to a render item's source composition in the Project panel: Right-click (Windows) or Control-click (macOS) on the render item, then pick Reveal Composition In Project off the context menu.

- Pull a render item out of the queue (flip its status from Queued back to Unqueued): Clear the item's checkbox in the Render column. It still stays listed in the Render Queue panel.

- Flip a render item's status from Unqueued up to Queued: Tick the item in the Render column.

- Take a render item off the Render Queue panel entirely: Highlight it and hit Delete, or go to Edit > Clear.

- Reorder items within the Render Queue panel: Drag any item higher or lower in the queue. A thick black line shows up between render items to mark the drop spot. Selected render items can also be reshuffled through Layer > Arrange, then Bring Render Item Forward, Send Render Item Backward, Bring Render Item To Front, or Send Render Item To Back.

  - Windows: Ctrl + Alt + Up Arrow
  - macOS: Command + Option + Up Arrow

  - Windows: Ctrl + Alt + Down Arrow
  - macOS: Command + Option + Down Arrow

  - Windows: Ctrl + Alt + Shift + Up Arrow
  - macOS: Command + Option + Shift + Up Arrow

  - Windows: Ctrl + Alt + Shift + Down Arrow
  - macOS: Command + Option + Shift + Down Arrow

Copy a render item: Right-click (Windows) or Control-click (macOS) on the render item and pick a command off the context menu:

- Render under the existing filename: Pick Duplicate With File Name.
- Render under a fresh filename: Pick Duplicate, click the underlined filename beside Output To, type a new filename, then pick Save.

## Pause or stop rendering

Should the disk an output module writes to fill up, After Effects suspends the render. Free up some additional space and rendering and exporting will pick back up.

- Pick Pause to suspend rendering. Pick Continue to start it again.

Note

You can't adjust settings or otherwise touch After Effects for as long as rendering sits paused.

- Windows: Alt-click + Stop
- macOS: Option-click + Stop

Whichever render item got halted is tagged with the User Stopped status, while a fresh item tagged Queued joins the Render Queue panel. That new item carries the same output filename and runs the same duration as the one it came from.

- Pick Stop when you mean to halt rendering yet pick up the very same render later.

Whichever render item got halted is tagged with the User Stopped status, while a fresh item tagged Unqueued joins the Render Queue panel. This new item gets an incremented output filename and starts rendering again at the frame just before where it stopped—so its opening frame matches the last frame the halted item rendered cleanly.

## Information shown for current render operations

Along the bottom of the Render Queue panel you'll find headline figures about the render batch currently underway:

- Message - A line reporting status. As an example, Rendering 1 of 4.

- RAM - How much memory the render has to work with.

- Renders Started - When the current render batch kicked off, by date and time.

- Total Time Elapsed - How long rendering has run (pauses excluded) since the current render batch began.

- Notify when render queue completes - Tick this box and After Effects will alert you through the Creative Cloud desktop app and mobile app once your render queue job, or the queue as a whole, wraps up.

Note

Click the triangle sitting to the left of the Current Render heading for a fuller picture of the render in progress. That Current Render pane folds shut on its own before long. To stop it from closing once the time-out hits, Alt-click (Windows) or Option-click (macOS) on the triangle beside the Current Render heading. For specifics on a render that already finished, consult the log file. Once that log file exists, its path appears beneath the Render Settings heading and Log menu.

## Change the render-complete sounds

Once every item in the render queue is rendered and exported, a chime sounds; a separate sound signals that a render operation has failed.

## Receive remote notifications when render completes

Render complete notification

Render complete notification

So you don't have to sit at your machine waiting to learn the files are ready, After Effects can ping you with remote notifications the moment rendering wraps up. Those alerts reach the Creative Cloud mobile desktop app, any mobile device running the linked Creative Cloud app, and a smartwatch paired to that mobile.

Turning on remote notifications for when rendering finishes:

- Go to After Effects > Preferences > Notifications > and tick the Automatically enable notifications when you add a composition to the Render Queue box. Clicking the bell icon down at the lower left of the Render Queue panel also opens this dialog box.

- Over in the Render Queue panel, tick the Notify box.

Note

When Automatically enable notifications when you add a composition to the Render Queue sits checked in After Effects Preferences, the Notify box comes pre-checked for you.

- Tick the Notify when queue completes box along the bottom of the render queue panel.

## Render and export with Adobe Media Encoder

There's also the option to send After Effects compositions straight to Adobe Media Encoder, which lets you keep working in After Effects as the files process. Lean on Mutli-Frame Rendering to make it quicker. Going through Adobe Media Encoder additionally opens up presets and options the After Effects Render Queue doesn't carry.

Pick one of these routes to drop your composition into the Adobe Media Encoder Queue:

- Add to Adobe Media Encoder Queue: Pick Composition > Add to Adobe Media Encoder Queue or File > Export > Add to Adobe Media Encoder Queue to do the final render with whatever presets and settings you set in Adobe Media Encoder.

- Queue in AME button found in the render queue (Window > Render Queue) renders a draft pass of your composition off the render settings already set in the rendering queue, all while you stay at work on that composition.

For details on rendering through Adobe Media Encoder, see Encode video or audio items in Adobe Media Encoder.

Note

Choose the Queue in AME option and your output module settings — format settings or color channel selection, say — won't carry across to Adobe Media Encoder. The output filename and location do carry across. That said, Adobe Media Encoder skips the filename and location templates, which can throw off image sequence numbering.

## Add a composition directly to Adobe Media Encoder

Dropping a composition into Adobe Media Encoder,

Drag whichever After Effects project holds the composition you'd like to encode onto the Encoding Queue in Adobe Media Encoder.

From within After Effects, any of these routes will add a composition to Adobe Media Encoder:

Pick Composition > Add To Adobe Media Encoder Queue

Pick File > Export > Add to Adobe Media Encoder Queue

Ctrl + Alt + M (Windows) or Command + Option + M (macOS)

Up comes the Import After Effects Composition dialog box. Pick out the composition you want to encode.

Go ahead and encode the file the usual way, picking presets and an output location inside Adobe Media Encoder.

## Add a composition from render queue to Adobe Media Encoder

Handing a composition to Adobe Media Encoder along with render settings for a draft render:

Pick Composition > Add to Render Queue, or tap the keyboard shortcut Control + M (Windows) or Command + M (macOS).

Inside the Render Queue panel, pick the Queue in AME button.

## Choosing formats and output settings

A range of formats and compression choices for output ships with After Effects. The right format and compression choice comes down to where your output is headed. Say the movie you render out of After Effects is the finished piece that plays straight to viewers — then weigh the playback medium together with any caps on file size and data rate. Flip that around: if the movie coming out of After Effects is a middle step feeding a video editing system, render it uncompressed in a format that video editing system can read. Learn more about planning your work in After Effects.

Different stages of your workflow can take different encoding and compression schemes. To illustrate, you might render out a handful of frames as full-resolution still images (TIFF files, for instance) when a client needs to sign off on a shot's colors; then render the movie with a lossy encoding scheme (H.264, for instance) when sign-off is about how the animation is timed.

## Supported output formats

Installing plug-ins or scripts from sources outside Adobe lets you export still other types of data.

Every image file format exports at 8 bits per channel (bpc) save where stated otherwise.

## Video and animation formats

QuickTime (MOV)

Video for Windows (AVI; Windows only)

Note

Building an animated GIF movie starts with rendering and exporting a QuickTime movie out of After Effects. Bring that QuickTime movie into Photoshop next, then export it out as animated GIF.

## Video project formats

- Adobe Premiere project (.prproj)

## Still-image formats

Adobe Photoshop (.psd)

Cineon (.cin, .dpx)

Maya IFF (.iff)

JPEG (.jpg, .jpe)

OpenEXR (.exr)

PNG (.png)

Radiance (.hdr, .rgbe, .xyze)

SGI (.sgi, .bw, .rgb)

Targa (.tga, .vba, .icb, .vst)

TIFF (.tif)

## Audio-only formats

Audio Interchange File Format (.aiff)

.mp3

.wav
