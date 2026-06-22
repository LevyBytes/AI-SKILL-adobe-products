# Share Assets Between After Effects And Premiere Using Dynamic Link, Create A Dynamically Linked Composition, Import An After Effects Composition, Delete A Dynamicaly Linked Composition Or Clip ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Share assets between After Effects and Premiere using Dynamic Link; Create a dynamically linked composition; Import an After Effects composition; Delete a dynamically linked composition or clip; Modify a dynamically linked composition in After Effects; How Premiere works with Audition for audio editing; Work with Photoshop and Premiere.

## Share assets between After Effects and Premiere using Dynamic Link

### Dynamic Link enables real-time work between Adobe Premiere and After Effects without rendering.

Before you create a Dynamic Link, confirm that Adobe Premiere and Adobe After Effects use the same major version. Dynamic Link also requires matching major versions when Adobe Character Animator is involved.

Dynamic Link keeps media assets shared continuously between After Effects and Premiere, removing the render step. You can move work between the applications by copying content from After Effects to Premiere or copying Premiere clips into After Effects, depending on where the next edits belong. An After Effects composition can also be imported into Premiere, and Premiere can create a dynamically linked composition directly, just as it imports other assets. For tighter integration, replace selected clips with a dynamically linked After Effects composition to create a live connection between the two applications. Each project stores its own dynamic links, and linked assets are identifiable by unique icons and label colors. A linked clip may point to a complex source composition, so changes can require extra processing in After Effects before Premiere displays the update. Previewing and playback can therefore lag. To control performance, temporarily take a dynamically linked composition offline and relink it later when needed. During the edit, you can also revise a dynamically linked composition in After Effects and have Premiere update automatically. If the linked item is no longer needed, delete the dynamically linked composition or clip without changing the original source files. To reduce playback delays, use one of these options:

- Take the linked composition offline.
- Disable a linked clip so the composition is not referenced temporarily.
- Render the composition, then substitute the rendered file for the dynamically linked composition.

Premiere clips that use resource-heavy VFX footage may not play back smoothly. When a clip plays incorrectly, use Clip > Render and Replace to improve performance. For frequent work with complex source compositions, install additional RAM or use a faster CPU.

Note

A linked After Effects composition does not support multiprocessing with the Render Multiple Frames Simultaneously feature.

## Create a dynamically linked composition

### Use Dynamic Link to make After Effects compositions directly from Adobe Premiere clips.

Starting a new dynamically linked composition from Adobe Premiere opens Adobe After Effects. After Effects creates a project and a composition using the original project's dimensions, pixel aspect ratio, frame rate, and audio sample rate. If After Effects is already running, the composition is created in the current project. The composition name uses the Premiere or Encore project name followed by Linked Comp [x].

Choose File > Adobe Dynamic Link > New After Effects Composition.

If the After Effects > Save As dialog box appears, enter the After Effects project name and location, then choose Save.

A newly created dynamically linked After Effects composition uses a 30 seconds duration by default. To adjust that duration, select the composition in After Effects, then choose Composition > Composition Settings. On the Basic tab, enter the new Duration value.

## Import an After Effects composition

### Use Dynamic Link to add After Effects compositions to an Adobe Premiere project.

For best results, match the Adobe After Effects composition settings, including dimensions, pixel aspect ratio, and frame rate, to the settings in the Adobe Premiere project.

Open the Premiere project.

Choose File > Adobe Dynamic Link > New After Effects Composition.

Choose an After Effects project file (AEP).

Choose one or more compositions from the list, then choose OK.

## Delete a dynamically linked composition or clip

### Remove Dynamic Link assets from the project or timeline while leaving source files untouched.

A linked composition can be deleted from an Adobe Premiere project whenever needed, including while it is in use. Linked clips can also be removed from the timeline of any Premiere sequence.

In the Project panel, highlight the linked composition.

Use Delete to take it out of the project.

## Modify a dynamically linked composition in After Effects

### Open and edit a linked After Effects composition from Adobe Premiere so After Effects updates appear automatically in the project.

The Edit Original command in Adobe Premiere opens a linked Adobe After Effects composition for modification. After the first open in After Effects, future edits can continue there without another Edit Original command.

In the Project panel, choose the linked After Effects composition.

Choose Edit > Edit Original to open the composition in After Effects. After Effects starts and opens the composition for editing.

Make the required changes to the composition in After Effects.

Return to Premiere to see the updated result.

Premiere shows the changes made in After Effects and stops relying on any preview files rendered earlier for that clip.

After a dynamic link is created from Premiere, the composition can be renamed in After Effects. The linked composition name shown in Premiere's Project panel does not change, but the dynamic link still works.

## How Premiere works with Audition for audio editing

### Premiere connects with Audition so clips or sequences can be sent out for detailed editing, mixing, and advanced audio refinement.

Adobe Audition provides advanced post-production tools for creating and editing audio. When Adobe Audition is installed, Premiere audio clips or Premiere sequences can be edited in Audition through the Edit in Adobe Audition command, with handoff available for an audio clip or for a sequence.

For clips, Audition renders the audio data and lets you make detailed edits in the Wave Editor. Sending a sequence to Audition carries the full fidelity of the composition, including keyframes, effects, Essential Sound settings, markers, and metadata. From there, refinement, mixing, and final advanced work happen in the Multitrack Editor.

## Work with Photoshop and Premiere

### Combine Photoshop edits with Premiere animation and sequencing tools.

Still artwork made in Photoshop can become animated or sequence-driven inside Premiere. Either the complete image or selected layers can be animated.

Photoshop can revise individual video frames and image-sequence frames. Alongside normal Photoshop painting and editing tools for video, filters, masks, transformations, layer styles, and blending modes are available. Frame cleanup can use Clone Stamp, Pattern Stamp, Healing Brush, or Spot Healing Brush, and video frames can also be adjusted with the Patch tool.

When Clone Stamp is used in Photoshop on a video layer, the sampled source can come from one frame and be painted onto another. As the target frame changes, Photoshop offsets the source frame relative to the frame originally sampled.

Once the Photoshop work is complete, save the result as a PSD file or render it to a QuickTime movie or an image sequence. Any of those outputs can be brought back into Premiere for more editing.

When movies are built in Premiere, Photoshop can polish the movie's separate frames. In Photoshop, these tasks are available:

- Remove unwanted visual elements.
- Draw on individual frames.
- Use the stronger selection and masking tools to split a frame into parts for animation or compositing.

### Comparative advantages for specific tasks

Premiere is strongest where a project needs video-editing features. It can combine Photoshop files with video clips, audio clips, and other assets, and Photoshop files can serve as titles, graphics, or masks.

Photoshop, by comparison, is built for painting, drawing, and selecting image regions. Complex masks are easier to build with tools such as Photoshop Quick Selection tool and Magnetic Lasso tool, so creating the mask in Photoshop may be preferable to drawing it manually in Premiere. For dust removal that requires many hand-painted strokes, Photoshop paint tools are often the better fit.

Photoshop Extended includes animation and video tools with basic keyframe-driven animation. Premiere offers much deeper keyframe control across many properties.

- Exchanging still images: Premiere imports and exports still images in many formats. For the most flexible transfer of single frames or still-image sequences from Photoshop to Premiere, use the native Photoshop PSD format. During PSD import in Premiere, you choose either a flattened image or separate, intact layers. Preparing a still in Photoshop before importing it into Premiere is often useful, such as color correction, scaling, or cropping. Editing the source in Photoshop is frequently more efficient than making Premiere repeat that operation for every frame during preview rendering or final output.

In Photoshop, a PSD document can be created with settings already matched to a particular video output type. In the New File dialog box, choose a Film & Video preset. In Premiere, a PSD document can be created to match composition and sequence settings.

- Exchanging movies: PSD video files can no longer be exchanged with Photoshop, but Photoshop can render a movie directly and Premiere can import that movie afterward. For example, Photoshop can create a QuickTime movie that Premiere then imports.
- Color: Premiere processes color internally in an RGB (red, green, blue) color space. To edit Photoshop-created video clips in Premiere, create those clips in RGB.

For a final movie intended for broadcast, check in Photoshop that the image colors are broadcast-safe. Assign a suitable destination color space, such as SDTV (Rec. 601), to the Photoshop document.

### Create and edit Photoshop files

A still Photoshop file can be created so it automatically uses the pixel aspect ratio and frame aspect ratio from the Premiere project. Still image files already in a Premiere project can also be opened for editing in Photoshop.

### Make a Photoshop file inside a project

Select File > New > Photoshop File.

Photoshop launches with a new blank still image. Its pixel dimensions follow the project's video-frame size, and guides mark the title-safe and action-safe regions for that project.

### Open a still image file for Photoshop editing

Inside a project, image files in most Adobe Photoshop-supported formats can be opened. Premiere does not import CMYK or LAB color files.

Choose a still-image clip from either the Project panel or the Timeline panel.

Select Edit > Edit in Adobe Photoshop.

Photoshop opens the file. Saving it makes the edits available back in the Premiere project.
