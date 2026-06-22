# Edit Video In Premiere, Add Or Remove Clips, Create A Subclip From The Project Panel, Create A Subclip From The Timeline ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Edit video in Premiere; Add or remove clips; Create a subclip from the Project panel; Create a subclip from the Timeline; Convert a subclip to a Source clip; Adjust media start and end times of a subclip; Add media to the timeline using Source Patching; Work with clips on the timeline using Track Targeting; Apply Multi Transitions across audio and video clips; Aspect ratios; Frame aspect ratio; Pixel aspect ratio; Set the aspect ratio of a sequence; Aspect ratio preservation; Correct aspect ratio misinterpretations; Edit video using the Properties panel; Use built-in Adobe Stock panel.

## Edit video in Premiere

### In Adobe Premiere, use editing tools for clip selection, cuts, and trims, and use keyboard shortcuts for faster tool changes.

Once media is imported into a new Premiere project, the clips can be arranged in a sequence on the timeline. From there, editing can begin.

Basic timeline editing tool in Premiere.

Basic timeline editing tool in Premiere.

- For trimming, select a clip on the timeline, then drag either edge of that clip.
- For cutting, choose the Razor tool, place it over a clip in the timeline, and click.
- For repositioning, select the clip and drag it.

Note

Timeline edits are non-destructive: trimming, cutting, copying, and moving clips does not change the original media. The Project panel still contains all original media.

### Add or remove clips

- To remove a clip from the sequence, select that clip and press delete.
- To add a new clip to the sequence, drag it from the Project panel to the timeline. Clips can also be added directly from folders on your computer.

### Remove gaps

- To close space between clips, select the gap and press delete.
- The Ripple Edit tool can also trim the edge of a clip and close the gap automatically against the neighboring clip.

### Work faster with keyboard shortcuts

- Press V to switch to the Selection tool.
- Press C to switch to the Razor tool.
- Press B to switch to the Ripple Edit tool.
- Press the spacebar to play and pause while previewing the current edit.

### Other editing tips

- With the right and left arrow keys, move the playhead one frame forward or backward.
- Double-click clips to preview them separately in the Source Monitor.
- Place clips on separate video tracks so clips can be stacked without overwriting clips beneath them.
- Add music to an audio track.

## Add or remove clips

### Quickly add clips to a sequence in Adobe Premiere, or remove clips from it.

### Add clips

Use the Import media option in the Project panel to bring media into a new project, then review the assembled clips in the Project panel.

To put a clip in the sequence, select it in the Project panel and drag it into the Timeline panel.

You can also add clips to the sequence in these ways:

- From the Project panel or Source Monitor, drag the clip into the Timeline panel or Program Monitor.
- In the Source Monitor, use the Insert and Overwrite buttons to place clips in the Timeline panel, or use the keyboard shortcuts tied to those buttons.
- From the Project panel, Source panel, or Media Browser, drag the clip into the Program Monitor.

### Remove clips

In the Project or Timeline panel, select the clip you want to remove.

Press Delete to remove it from the sequence.

## Create a subclip from the Project panel

### Creating a subclip from a source clip or a single-file subclip

In the Project panel, double-click a clip so it opens in the Source Monitor.

Use the Source Monitor to mark the subclip's In and Out points. At least one of those marks, In or Out, needs to be different from the source clip's own In and Out points.

Choose one of these methods:

- Select Clip > Make Subclip, enter a name for the subclip, and then select OK.
- Ctrl-drag (Windows) or Command-drag (macOS) the clip into the Project panel. Enter the subclip name, and select OK.

Premiere adds the subclip to the Project panel and displays it with a Subclip icon. The exact icon depends on the media type.

(Optional) If the master clip should keep its original In and Out points, preview that master clip in the Source Monitor and set those points back.

Tip

A master clip can also be changed into a subclip. Select the source clip in the Project panel or Source Monitor, choose Clip > Edit Subclip, and define the media start and end points for the subclip.

## Create a subclip from the Timeline

### Creating Timeline-based subclips for longer media

Start with a sequence that already contains the clip you want in the timeline.

Hold Ctrl (Windows) or Command (macOS), then click-drag the clip from the sequence into an open bin in the Project panel.

When the dialog box opens, enter a name for the new subclip and select OK.

Another option is to right-click a clip instance in a sequence and select Make Subclip. Enter the subclip name, and select OK.

## Convert a subclip to a Source clip

### Changing a subclip back to a Source clip in Adobe Premiere

In the Project panel, select the subclip.

Select Clip > Edit Subclip.

After conversion, the clip uses the master clip start and end times listed by Edit Subclip.

Use Convert To Master Clip, then select OK.

## Adjust media start and end times of a subclip

### Changing a subclip's media start and end times in Adobe Premiere

In the Project panel, select the subclip.

Select Clip > Edit Subclip.

Change the timecode fields for the subclip start and end.

When a selected subclip instance in the Project panel is bounded by its own Start and End points, new start and end points cannot be placed outside that range. This restriction protects frames already used by the sequence from being lost.

## Add media to the timeline using Source Patching

### Adding clips to the timeline with Source Patching

Source Patching tells Premiere exactly which timeline track should receive an asset, such as an image, video clip, or audio clip, when you place it. Use it while assembling a sequence in the timeline, especially when several video or audio tracks are present. By choosing the affected tracks first, you can edit the intended track without disturbing the others and keep tighter control over the edit.

Preparation

Set up a project, bring in media, and switch to the Editing workspace (Window > Workspaces > Editing). Confirm that the Source Monitor is visible (Window > Source Monitor).

Double-click an asset in the Project panel to load it in the Source Monitor.

After an asset is open in the Source Monitor, the timeline shows source patch indicators for the track currently chosen for patching.

In the Source Monitor, select Mark In and Mark Out to choose the part of the clip you want to source patch.

(Optional) Move the source patch indicator to another track if that is the track you need for patching.

Play the video in the Source Monitor. Use Mark In and Mark Out there to define the range for source patching. Keyboard alternatives are I for Mark In and O for Mark Out.

To insert the clip, use one of these methods:

- From the Source Monitor, drag the clip onto the Program Monitor (as shown in the video), then select Insert in the Program Monitor.
- Select Insert from the Source Monitor, then choose the track where the source clip should be inserted.
- Select the clip and press the comma (,) keyboard shortcut to insert a clip.

An Insert edit places the incoming clip into the sequence and pushes later clips forward to make room. While dragging a clip, pressing Ctrl (Win) or Command (macOS) switches the drag operation into Insert mode.

To replace existing timeline material, select Overwrite from the Source Monitor and choose the track where the clip should overwrite. You can also press period (.) to overwrite a clip.

Note

An Overwrite edit places a clip by replacing the sequence frames that run from the edit point through the clip's duration. For adding clips to sequences or moving clips within sequences, Overwrite is the default approach.

## Work with clips on the timeline using Track Targeting

### Using Track Targeting to control timeline edits

Track Targeting decides which timeline tracks respond to operations such as copy and paste, navigation, and match-frame commands. It reduces accidental edits to unrelated tracks and makes the timeline workflow more direct. Once a track is targeted, edits and related operations apply to that track.

To target a track, click the track targeting controls on the left side of the timeline for the track you want. Multiple tracks can be targeted at the same time.

Choose target tracks by using the track targeting controls for the relevant track.

For a specific track, click that track's targeting control to include it in the target set.

To copy and paste a clip or a sequence, select the item and then select Edit > Paste Insert.

The pasted item lands on the lowest targeted track according to layer order. For example, if V1 and V4 are targeted, the content pastes to track V1.

To locate the original source frame for a clip in a timeline sequence, move the playhead to that frame and press F on the keyboard. Premiere opens the frame in the Source Monitor.

Note

When more than one track is targeted, Premiere matches the frame from the highest targeted track. If V1 and V4 are targeted, Premiere uses the frame from the V4 track.

For fast timeline navigation, use the up and down arrow keys to jump the playhead among clip In and Out points on targeted tracks.

Disable a track by selecting the Toggle Track Output button in the track header. That track no longer appears in the Program Monitor.

To keep tracks synchronized by locking them together, select Toggle Sync Lock.

To fully lock the track, select Toggle Track Lock. This blocks unintended edits on that track.

## Apply Multi Transitions across audio and video clips

### Applying Multi Transitions across audio and video clips

Multi Transitions gives you a way to create and revise transitions on several audio and video clips at the same time. Use it for smoothing existing cuts or building new transitions for dialogue, music, sound effects, and video sequences while keeping the edit moving quickly.

Open a sequence that contains audio and video clips in the Timeline panel.

Apply transitions across audio and video clips at the same time; the updates appear as you work:

- Build or revise multiple transitions together: Apply or change transitions across many clips in one operation, keeping audio and video treatment consistent while reducing repetitive work.

Refine transitions across several clips so the edit feels smoother and more consistent.

- Trim or handle-edit multiple transitions in one operation: Adjust fade-in and fade-out handles together across multiple audio clips or video transitions, saving time during the edit.
- Remove multiple transitions together: Clear unwanted transitions from several clips in one action for a cleaner and faster timeline cleanup.
- Add crossfades for aligned edits: Build smooth audio transitions between clips aligned on the same timeline point, and improve the matching video transitions for a more polished result.

Add or remove transitions across multiple timeline clips to make the edit faster and more consistent.

- Add fade-ins and fade-outs to aligned and non-aligned clips: Apply smooth transitions to audio and video clips whether or not their timeline alignment matches, supporting a more professional finish.
- Work on linked and grouped clip transitions together: Apply transitions to linked or grouped audio and video clips in one action, preserving consistency and saving time.
- Fine-tune a single linked-clip transition with a modifier: Use a modifier, Option, or Alt key to adjust just one linked clip's transition when you need precise control.

Use the visual feedback to line up transitions, make accurate edits, or remove sections you no longer want.

## Aspect ratios

### Understanding aspect ratios and their types

An aspect ratio expresses width compared with height. Video frames and still-image frames use a frame aspect ratio, while the pixels inside those frames use a pixel aspect ratio, also called PAR. Recording formats can use different ratios; for television video, common frame aspect ratios include 4:3 and 16:9.

When you create a Premiere project, its frame aspect and pixel aspect are established. Those project ratios cannot be changed afterward, but individual sequences can use a different aspect ratio. The same project can also contain assets that were created with other aspect ratios.

Premiere attempts to compensate automatically for the pixel aspect ratio in source files. If an asset still looks distorted, set its pixel aspect ratio manually. Correct pixel aspect interpretation should come before frame aspect correction, because a wrongly interpreted pixel aspect ratio can make the frame aspect ratio appear wrong.

### Types of aspect ratios

### Widescreen (16:9)

This standard aspect ratio is common for online video, documentaries, and films. It can hold a broad image area with detailed content.

### Vertical (9:16)

This is the aspect ratio commonly produced by phone-recorded video.

### Fullscreen (4:3)

This television-era ratio predates widescreen usage and usually emphasizes one element at a time.

### Square (1:1)

This exact square ratio is widely used on Instagram.

### Anamorphic (2.40:1)

This wide widescreen format often appears in movies. It resembles 16:9, but the top and bottom are cropped, creating a cinematic feel.

## Frame aspect ratio

### Frame aspect ratios in Adobe Premiere

Frame aspect ratio is the width-to-height relationship of an image's dimensions. A common widescreen frame uses a 16:9 frame aspect ratio. Widescreen camera modes can record at 16:9, and many films use aspect ratios wider than that.

In Premiere, use the Motion effect properties Position and Scale in the Effect Controls panel to create letterboxing or pan and scan.

Left image: 4:3 frame aspect ratio; right image: wider 16:9 frame aspect ratio.

The left example uses 4:3, while the right example shows the broader 16:9 frame aspect ratio.

### Letterboxing

When clips recorded with one frame aspect ratio are brought into a project using another, you choose how those ratios should be reconciled. One result is letterboxing, where black bands appear above and below the movie frame.

For example, there are two common ways to present a 16:9 movie on a 4:3 standard television. One method fits the full width of the 16:9 movie frame inside the 4:3 television frame.

### Pan and scan

Pan and scan is another way to adapt footage for a project that uses a different frame aspect ratio. It keeps only part of the frame and discards the rest.

For example, a 16:9 movie can be shown on a 4:3 standard television by filling the 4:3 frame vertically with the full height of the 16:9 frame. You then pan the 16:9 frame horizontally within the narrower 4:3 frame so the important action remains within the 4:3 boundary.

Pan and scan cuts away side areas from widescreen footage; letterboxing instead uses black bars so the full frame fits.

With pan and scan, the widescreen sides are sacrificed, while letterboxing keeps the frame and pads it with black bars.

## Pixel aspect ratio

### Pixel aspect ratio and avoiding distorted images

Pixel aspect ratio defines the width-to-height relationship of one pixel within a frame. The pixels that form a frame have their own pixel aspect ratio, sometimes called PAR. Pixel aspect ratios differ because video systems make different assumptions about how many pixels are needed to fill a frame.

For example, many computer video standards describe a 4:3 aspect ratio frame as 640x480 pixels high, which produces square pixels. Those computer-video pixels use a 1:1 pixel aspect ratio (square).

DV NTSC and similar video standards define a 4:3 aspect ratio frame as 720x480 pixels, creating narrower rectangular pixels. DV NTSC pixels use a pixel aspect ratio of 0.91 (non-square). DV pixels are always rectangular; they are vertically oriented in systems that produce NTSC video and horizontally oriented in systems that produce PAL video. In the Project panel, Premiere shows the clip pixel aspect ratio beside the clip image thumbnail.

Note

The clean aperture is the image area free of edge artifacts and distortions. The production aperture means the full image area.

Pixel aspect ratio comparison examples

A. 4:3 square-pixel image on a 4:3 square-pixel (computer) monitor B. The same 4:3 square-pixel image correctly interpreted for a 4:3 non-square pixel (TV) monitor C. The same 4:3 square-pixel image incorrectly interpreted for that 4:3 non-square pixel (TV) monitor

Pixel aspect ratio comparison graphic

### Distorted images

Displaying rectangular pixels on a square-pixel monitor without conversion makes images look distorted.

For example, circles become ovals. On a broadcast monitor, however, those images appear with the correct proportions because broadcast monitors use rectangular pixels.

Premiere can show and output clips that use different pixel aspect ratios without distortion. A clip may still appear distorted when Premiere interprets its pixel aspect ratio incorrectly. For an individual clip, open Clip > Modify > Interpret Footage and manually specify the source clip pixel aspect ratio in the Interpret Footage dialog box.

Use the correct pixel aspect ratio for the footage so the image does not distort.

To prevent distorted images, match the footage to its proper pixel aspect ratio.

## Set the aspect ratio of a sequence

### Setting a sequence aspect ratio in Adobe Premiere

Create a new sequence by selecting File > New > Sequence.

Open the Settings tab in the New Sequence dialog box.

Under Video, enter the horizontal and vertical dimensions for Frame Size. Premiere calculates and displays the aspect ratio automatically.

Set the sequence aspect ratio through the Frame Size option in New Sequence settings.

In New Sequence settings, adjust Frame Size to define the sequence aspect ratio.

Name the sequence and select OK.

## Aspect ratio preservation

### How Adobe Premiere preserves aspect ratios

When an asset is imported, Adobe Premiere tries to retain its frame aspect ratio, pixel aspect ratio, and frame dimensions so the asset is not cropped or distorted. If the asset includes metadata, Premiere can calculate those values automatically and accurately. Examples include:

- NTSC captured or imported footage at ATSC frame size 704x480, D1 frame size 720x486, or DV frame size 720x480 receives D1/DV NTSC (0.91) as its pixel aspect ratio.
- Captured or imported footage at HD frame size 1440x1080 receives HD 1080 Anamorphic (1.33) as its pixel aspect ratio.
- PAL captured or imported footage at D1 or DV resolution 720x576 receives D1/DV PAL (1.094) as its pixel aspect ratio.

For other frame sizes, Premiere treats the asset as square-pixel material and adjusts the pixel aspect ratio and frame dimensions to keep the image aspect ratio intact. If the imported asset appears distorted, change the pixel aspect ratio manually.

### Assets in a sequence

When you drag an asset into a sequence, Premiere places it at the center of the program frame by default. Based on the asset's frame size, the image may be too small or cropped more than the project requires. Premiere can scale the asset automatically during the drag, or you can adjust the scale yourself.

Correct file interpretation is always important. Look near the preview thumbnail or in the Project panel's Video Info column to read asset frame dimensions and pixel aspect ratio. The same information appears in the Info panel, the Interpret Footage dialog box, and the asset Properties dialog box.

### Aspect ratio distortion in sequences

The sequence settings preset selected during sequence creation determines that sequence's frame and pixel aspect ratios. After the sequence exists, its aspect ratios cannot be changed, but you can adjust the pixel aspect ratio Premiere applies to individual assets.

For example, when a square-pixel graphic asset appears distorted in Premiere, correcting its pixel aspect ratio can restore the intended appearance. Interpreting every file properly lets you combine footage with different ratios in one project and then export without distorting the resulting images.

## Correct aspect ratio misinterpretations

### Correcting misinterpreted aspect ratios in Adobe Premiere

Before creating a sequence, confirm that each individual asset has the correct pixel aspect ratio, because sequence-level misinterpretations cannot be changed after the sequence is created.

In the Project panel, right-click the still image.

Choose Clip > Modify > Interpret Footage.

Note

If a clip is selected in the Timeline panel or Program Monitor, the option is unavailable.

In the Pixel Aspect Ratio section, choose one of the following options, then select OK:

- Use Pixel Aspect Ratio From File: applies the aspect ratio stored with the still image.
- Conform To: lets you pick from the list of standard aspect ratios.

Tip

When Photoshop is used to create images for video projects, choose the Photoshop preset named for the video format you plan to use. That preset helps generate images with the correct aspect ratio.

## Edit video using the Properties panel

### Editing video with the Properties panel

The Properties panel in Adobe Premiere lets you quickly change a clip's appearance by transforming it, cropping it, and adjusting speed.

When clips are selected in the timeline, the Properties panel exposes contextual controls commonly used for video editing. It lets you change position, scale, rotation, opacity, cropping, and playback speed without jumping across several panels.

You can edit one video clip or several selected clips at the same time. The Properties panel changes its controls to match the current selection, making routine adjustments quicker. Before you begin, open a project with imported media and a sequence already built on the timeline.

### Apply transform, crop, and speed adjustments

Select at least one video clip on the timeline.

In the Properties panel, work with Position, Scale, Anchor Point, Rotation, and Opacity when selected clips need transform changes. The Fill frame and Fit to frame quick actions can resize footage automatically:

- Transform: Use Fill frame or Fit to frame when Premiere Pro should resize the video for you. Fill frame enlarges the media until it covers the full frame; if the media aspect ratio is different, part of the picture can be cropped. Fit to frame keeps the source aspect ratio and scales the media so the whole image remains visible inside the frame, which can create black-bar letterboxing when ratios do not match.
- Crop: Set top, bottom, left, and right percentage values to remove pixels from those edges of the video.
- Adjust speed: Opens Clip speed/duration so you can quickly make the clip faster or slower.

The Properties panel can handle transform, crop, and speed changes for video clips.

Use the Properties panel when a clip needs transforming, cropping, or a speed adjustment.

For multi-clip edits, the Properties panel shows shared values where selections match and displays a dash for any value that differs among clips.

## Use built-in Adobe Stock panel

Discover, license, and place high-quality Adobe Stock material from inside Adobe Premiere.

With the Adobe Stock panel in Premiere, editors can search, preview, and license millions of premium videos, images, and graphics while staying in the edit workspace. Keeping that search inside Premiere removes the application switching normally required when looking for stock assets.

Open the Adobe Stock panel by selecting Window > Adobe Stock.

Type search terms into the search bar at the top of the Adobe Stock panel.

For media-type filtering, choose Videos. To narrow the search further, use the Filters icon.

Filter controls in the Adobe Stock panel help narrow results to the video assets you need while you remain in Premiere.

The Adobe Stock panel can keep the search for suitable video assets inside the Premiere workflow.

Select Search to apply the filters, then review the results and locate the asset you want.

To get either a watermarked preview or a licensed copy, hover over the asset and select the Download icon.

Tip

Use the user profile icon in the Adobe Stock panel to inspect current Adobe Stock subscription information. That area shows remaining credits or downloads and provides options to upgrade the active plan or buy a new one.

Downloaded assets are placed automatically in an Adobe Stock folder inside the project. That Adobe Stock folder includes two folders: Licensed versions and Preview versions.

Place licensed Adobe Stock assets from the Project panel onto the timeline.

Move licensed Adobe Stock material from the Project panel into a sequence on the timeline.

To use the downloaded item in the sequence, drag it from the Project panel to the timeline.

When needed, open the hamburger menu of the Adobe Stock panel to adjust these choices:

- Open Download Location: Opens the local folder where downloaded Stock files are stored, giving quick access to recent downloads without manually browsing folder paths.
- Set Download Location: Sets or changes the destination folder for Adobe Stock downloads through the Stock & CC Libraries Downloads option under Project Settings.
- Reload: Refreshes the panel's current listings and loads them again.
- View Licensing Terms: Opens Adobe Stock license information so you can review the license type and terms.
