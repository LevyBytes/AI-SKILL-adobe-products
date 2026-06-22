# Effects Applications, Export After Effects Project As Premiere Pro Project

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working with After Effects and other applications; Export After Effects project as Premiere project.

## Working with After Effects and other applications

Search Last updated on Jun 9, 2026

Discover how After Effects works hand in hand with other Adobe applications.

Note:

For every customer — individual, small business, and enterprise alike — Animate now sits in maintenance mode. In that state, we keep the application supported with continued security patches and bug fixes, but no new features are slated. Both new and current users will still be able to get Animate, and there is no plan to retire it. Whatever the development state of their content, we are dedicated to making sure Animate users can reach it.

In this article:

- Working with Adobe Bridge and After Effects
- Working with Adobe Photoshop and After Effects
- Working with Adobe Animate and After Effects
- Working with Adobe XD and After Effects

- Working with Adobe Premiere and After Effects
- Working with Adobe Media Encoder and After Effects
- Working with Adobe Audition and After Effects

### Working with Adobe Bridge and After Effects

With Adobe Bridge you can:

- Run animation presets
- Execute scripts that automate workflows spanning multiple products
- Browse and handle your files and folders
- Sort your files with keywords, labels, and ratings
- Track down files and folders
- See, change, and attach metadata

### Open Adobe Bridge from After Effects

Select File > Browse in Bridge.

Adobe Bridge then starts up and opens on your display.

### Reveal a file in Adobe Bridge

Select the file in the Project panel.

Select File > Reveal In Bridge.

### Browse animation presets using Adobe Bridge

For browsing animation presets within Adobe Bridge, select Animation > Browse Presets.

As one of the Creative Cloud applications, Adobe Bridge can be downloaded and installed by way of Creative Cloud. The help documentation and the Adobe Bridge product page cover this in more detail.

### Working with Adobe Photoshop and After Effects

Still images built in Photoshop can be brought into After Effects, where you can combine them and set them in motion or have them transform. After Effects can animate a whole Photoshop image or just selected layers, and it can even animate individual properties of a Photoshop image, like those belonging to a layer style. Conversely, when movies originate in After Effects, Photoshop is handy for polishing their individual frames.

### Comparative advantages for specific tasks

Where After Effects shines is in animation and automation, which makes it well suited to work that carries from one frame to the next automatically. As an illustration, its motion tracking can follow a microphone boom's movement and then reapply that motion to a Clone Stamp tool stroke, letting you erase the microphone across every frame of a shot rather than hand-painting it out frame by frame.

Photoshop, by comparison, offers superb painting and drawing tools.

Which program to paint in comes down to the job at hand. In Photoshop, paint strokes alter the layer's pixels directly. In After Effects, each paint stroke is a component of an effect that you can toggle on or off or adjust whenever you wish. Reach for the After Effects paint tools when you want ongoing control over every stroke after applying it, or when the strokes themselves are to be animated. Turn to the Photoshop paint tools when a paint stroke is meant to permanently change a still image, and likewise when you are hand-applying numerous strokes to clean up dust.

Photoshop's animation and video capabilities cover basic keyframe-driven animation. While After Effects presents a comparable interface, its animation toolset reaches far wider and bends much more freely.

After Effects is also able to build 3D layers automatically that echo the planes produced by Photoshop's Vanishing Point feature.

### Exchanging still images

Although After Effects reads and writes still images across a wide range of formats, the native Photoshop PSD format is normally the one you'll reach for when moving single frames or sequences of stills back and forth between After Effects and Photoshop.

PSD files carry a lot of structure through both import and export: individual layers, masks, layer styles, and the bulk of other attributes survive the round trip. On import, you decide up front how the file arrives — flattened into a single image, or kept as a composition whose layers stay separate and intact.

Doing your still-image groundwork in Photoshop first, before the file ever reaches After Effects, is usually the smarter path. Color correction, scaling, and cropping are typical examples. Applying a single edit to the source in Photoshop beats forcing After Effects to repeat that same work dozens of times every second as it renders frames for previews or final output.

Pick a Film & Video preset in Photoshop's New File dialog box and your new PSD begins already configured for a particular video output type. Already inside After Effects? Then File > New > Adobe Photoshop File spins up a fresh PSD whose dimensions and settings line up with your current composition and project.

### Exchanging movies

Video files move between Photoshop and After Effects too — QuickTime movies among them. Opening a movie inside Photoshop spawns a video layer that points back at the original footage file. Such a layer lets you paint on the movie's frames without destroying anything underneath, in the same spirit that After Effects treats layers whose sources are movies. Saving the PSD then records the changes you applied to that video layer rather than altering the underlying footage.

Photoshop can render a movie on its own as well. You might, for instance, produce a QuickTime movie straight out of Photoshop and bring it into After Effects afterward.

### Color

Internally, After Effects handles color in an RGB (red, green, blue) color space. It will convert CMYK images to RGB for you, yet your animation and video work in Photoshop should stay in RGB from the start.

When the look of your finished output matters, confirm in Photoshop that the colors fall within broadcast-safe limits before the image enters After Effects. Assigning the right destination color space to the Photoshop document — SDTV (Rec. 601), say — accomplishes this nicely. From there, After Effects applies color management driven by whatever color profiles sit embedded in your documents, imported PSD files included.

### Working with Adobe Animate and After Effects

Build your video or animation in Adobe Animate (which used to go by Flash Professional), and After Effects becomes the place to polish and refine it afterward. Animate, for instance, can push out your animations and applications as QuickTime movies, .mp4, and the other usual video formats — and After Effects then takes over the editing and refinement.

Run the workflow the other direction and the roles flip: edit and composite in After Effects, then hand the video to Animate for publishing.

A handful of shared ideas go by different names in the two programs. Here is how the vocabulary lines up between them:

After Effects

Animate

Composition

Movie Clip

Composition frame (Composition panel)

Stage

Project panel

Library panel

Project files

FLA files

Render and export a movie

Publish SWF file

| --- | --- |

### Exporting QuickTime video from Animate

Made your animations or applications in Animate? Push them out as QuickTime movies through the File > Export > Export Movie command right inside Animate.

- With Animate animation, the video output can be tuned specifically for animation.
- With an Animate application, Animate captures video of the application while it runs and lets the user interact with it. That way you can record whichever branches or states of the application you mean to land in the video file.

### Importing and publishing video in Animate

Bringing a movie file into Animate opens the door to a range of techniques — scripting or Animate components, for example — that shape the visual interface wrapped around your video. Playback controls or other graphics might be part of that. Graphic layers can also sit on top of the movie to give you composite results.

### Composite graphics, animation, and video

Both Animate and After Effects pack plenty of tools for compositing video and graphics in sophisticated ways. The right choice between them comes down to what you prefer and what kind of finished output you're after.

After Effects

Animate

Geared toward video and film production, After Effects supplies a broad palette of visual effects and typically turns out video files as its end product.

Of the two, Animate leans toward the web thanks to its compact final file size. It also supports controlling animation at run time.

Compositing leaves the actual video content untouched — it changes only how the video looks while it plays back in Flash Player.

Composite over imported video in After Effects, on the other hand, and the exported video file genuinely bakes in the composited graphics and effects.

Every drawing and painting in After Effects lands on layers kept apart from any imported video, so the work is always non-destructive.

Animate offers drawing in both destructive and non-destructive modes.

Same as Adobe Animate, though After Effects ships a deeper set of effects.

Ccreate original artwork plus animation, leaning on a timeline and exposing scripting hooks so animation can be driven programmatically.

Lets you set graphics on their own layers for compositing, layers you can toggle on and off whenever you need. Both programs also let you apply effects to whatever sits on an individual layer.

Same as After Effects.

| --- | --- |

### Importing SWF files into After Effects

Animate carries a distinctive collection of vector art tools, which makes it handy for plenty of drawing jobs that After Effects and Illustrator simply can't tackle. SWF files can come into After Effects so you can composite them alongside other video, or render them out as video with extra creative effects layered on. What doesn't carry over is interactive content and scripted animation; animation built from keyframes, however, does survive.

After Effects flattens every imported SWF file down to one continuously rasterized layer while holding onto its alpha channel. That continuous rasterization is what keeps the graphics crisp even as you scale them larger. The upshot: the root layer or object of your SWF files serves as a smoothly rendered element inside After Effects, so the strengths of each program reinforce one another.

### Importing FLA files into After Effects

After Effects can take in Animate FLA files as a composition built from layered .swf files. From there you composite them with a video or render them as a video carrying extra creative effects.

For this to work, make sure Adobe Animate sits on the same computer.

Pull an Animate document into After Effects and Animate exports the separate layers as .swf files, which then drop into the composition. The Import Preferences dialog is where you pick where those imported files go during the process.

Turn on the Import Audio option and Animate writes out audio layers as .wav files.

Note

Importing FLA files into After Effects calls for Animate 24.0.13 or later on the same computer. Because After Effects leans on the copy of Animate installed locally throughout the import, keeping Animate current is what guarantees trouble-free importing across every supported After Effects version.

### Working with Adobe XD and After Effects

Layers and artboards can travel from Adobe XD straight into your After Effects project. The feature smooths the handoff of assets between XD and After Effects, mapping layers, artboards, vectors, text, and artwork natively. Working as an Adobe XD designer, you can ship groups of layers over to After Effects and lay out advanced micro-interactions, or send artboards to craft intricate, polished transitions and interactions. Should After Effects be missing from your machine, XD grays out its After Effects menu option.

To move your design assets from XD into After Effects:

Inside XD, pick the layer or artboard you intend to animate in After Effects.

Choose File > Export > After Effects. After Effects launches if it was closed, or jumps to the foreground if it was already open in the background.

Inside a new composition, your After Effects project receives those layers and artboards rendered natively — as shapes, texts, assets, plus nested compositions.

Note

If XD has the Export to After Effects option switched off, sign in to your Creative Cloud application and bring After Effects up to the newest version.

### List of supported XD features

These XD features are supported in After Effects:

- Vector shapes
- Paths
- Text layers
- Bitmaps
- Masks
- Groups
- Artboards
- Symbols
- Boolean operations

- Strokes
- Fills
- Shadows
- Opacity
- Object blur
- Background blur and brightness
- Gradients as images
- Repeat grids

### Working with Adobe Premiere and After Effects

The purpose of Adobe Premiere is to capture, import, and edit movies, whereas After Effects exists to build motion graphics, apply visual effects, composite visual elements, handle color correction, and carry out the rest of a movie's post-production chores.

Moving projects, compositions, sequences, tracks, and layers back and forth between After Effects and Adobe Premiere is straightforward:

- Build text template compositions inside After Effects, then edit their source text over in Premiere.
  Bring an Adobe Premiere project into After Effects.

Send an After Effects project out as an Adobe Premiere project.

Copy layers and tracks in one program and paste them into the other, in either direction.

Use render and replace on After Effects compositions within Premiere to accelerate compositions whose render times drag.

With Adobe Premiere on hand, the following becomes possible:

- Lean on Adobe Dynamic Link to handle After Effects compositions inside Adobe Premiere. The dynamically linked composition shows up as a clip there.
- Lean on Adobe Dynamic Link to handle Adobe Premiere sequences inside After Effects. The dynamically linked sequence shows up as a footage item there.
- Fire up After Effects from inside Premiere and spin up a fresh composition whose settings echo those of your Premiere project.
- Pick a group of clips in Adobe Premiere and turn them into a composition over in After Effects.

Note

For deeper coverage of Dynamic Link across After Effects and Premiere, see the Dynamic Link and After Effects and Dynamic Link sections in Adobe Premiere Help.

### Working with Adobe Media Encoder and After Effects

Exporting video out of After Effects can run through Adobe Media Encoder, which encodes formats such as H.264, MPEG-2, and WMV. Some formats live in Adobe Media Encoder but never appear in After Effects — DNxHD is one example, available in Adobe Media Encoder yet absent from After Effects.

There's also the Watch folder route: drop After Effects project files into a Watch folder in Adobe Media Encoder and the composition slides automatically into the Adobe Media Encoder encoding queue.

### Working with Adobe Audition and After Effects

Mid-project in After Effects, you can lean on Adobe Audition's richer audio-editing toolset to polish your sound. The Edit in Adobe Audition command launches Adobe Audition without leaving After Effects.

Editing an audio-only file — a WAV file, for instance — in Adobe Audition rewrites the original. Editing a layer that holds both audio and video, such as an AVI file, instead has you working on a copy of the source audio.

Pick the layer holding the audio you want to work on. That item has to be of a kind Adobe Audition can actually edit.

Pick Edit > Edit in Adobe Audition to open the clip in Edit view inside Adobe Audition.

Make your edits to the file, then do one of these:

For an audio-only layer, choose File > Save to write your edits back into the original audio file. File > Save As is the alternative, applying your edits to a copy instead; if you go the Save As route, import that copy into After Effects.

For a layer carrying both audio and video, choose File > Save As. Once the file is saved, import it into After Effects, drop it into the composition, and silence the original audio in the audio-video clip by clearing the Audio switch in the Timeline panel.

Whatever effects you applied to audio inside After Effects won't ride along in the copy handed off to Adobe Audition.

### More like this

- Adobe Bridge
- Template projects and example projects
- Animation presets overview and resources
- Preparing and importing Photoshop files
- Web links, chapter links, cuepoints, and markers
- Importing from Adobe After Effects

## Export After Effects project as Premiere project

Search Last updated on Mar 27, 2026

Walk through handing off an After Effects project to Adobe Premiere as a project, no rendering required.

An After Effects project can be exported as a Premiere project file (.prproj). Once you import that project into Premiere, every later sequence borrows the settings from the first composition in the After Effects project.

Confirm that your After Effects composition is finished and set for editing in Premiere.

Choose File > Export > Export Adobe Premiere Project.

Give the project a filename and location, then choose Save.

A few points worth weighing when you export an After Effects project as a Premiere project:

- A video format that imports into both After Effects and Premiere — by direct import or by copy-paste — ought to keep working when you open an exported Premiere project from After Effects inside Premiere.
- Projects you build in the newest Adobe After Effects and save as Adobe Premiere projects will open in the newest Adobe Premiere.
- For now, effects and masks aren't supported.
- For now, Shape, Text, Light, Camera, 3D, and Cinema 4D layers aren't supported.

### More like this

- Working with After Effects and other applications
- Template projects and example projects
- Preparing and importing Photoshop files
- Importing from Adobe After Effects
