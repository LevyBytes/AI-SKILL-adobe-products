# Draw Objects, Align And Distribute Objects, Insert Captions

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview of Pen tool; Draw a straight line; Draw a curve; Create a shape; Create free form shapes for masking; Align objects; Distribute objects; Captions overview; Auto transcribe video using Speech to Text; Find and replace text in transcript; Create captions; Create styles for captions; Translate captions; Languages supported by Speech-to-Text; Supported file formats for captions; Import caption file from third-party service; Deploy language packs for Teams and Enterprise users.

## Overview of Pen tool

### Use the Pen Tool for precise shapes, masks, curves, graphics, and selective effects.

The Pen Tool icon is used to draw custom shapes, build accurate masks, and apply selective changes with straight or curved paths. Although it resembles drawing tools in Photoshop and After Effects, Premiere's Pen Tool is tuned for video tasks such as masking and effect keyframing.

Start with the basics of precise drawing with the Pen Tool.

### Terms to remember

Vertex Point: a location where two path segments join. It can stay as a sharp corner or be adjusted into a smooth curve.

Direction Lines: handles that extend from a vertex point and determine a curve's angle and length.

Bezier Curve: a mathematically defined curve controlled by direction lines, useful for smooth flowing shapes rather than jagged paths.

## Draw a straight line

### Draw a straight line with the Pen Tool in Adobe Premiere.

A straight line with two vertex points is the simplest path you can make with the Pen Tool.

Keep clicking to add connected straight-line paths through additional vertex points. This approach can also build varied custom shapes.

Create a star with the Pen Tool by connecting straight-line paths.

Create a star with the Pen Tool by connecting straight-line paths.

Press at the starting point for the straight path, then click the endpoint (do not drag).

Click again to place more vertex points for additional straight paths.

Hold down Shift when drawing angles to:

- Add points so lines snap to exact 0°, 45°, and 90° angles.
- Move an existing point while constraining it to 0°, 45°, and 90° angles.
- Drag Bezier handles while constraining them to 0°, 45°, and 90° angles.
- Use Shift + Opt/Alt while dragging a Bezier handle to split the Bezier into two curves and constrain the selected handle to 45° increments.

Tip

To make the stroke wider, select Stroke under Appearance in the Properties panel and raise the width.

## Draw a curve

### Create a curve in Adobe Premiere with the Pen Tool by shaping anchor points into smooth curved paths.

With the Pen Tool, a curved path is created by dragging direction lines. Direction-line length and direction control the curve's shape.

Select the Pen Tool icon, then press and hold where the curve should start. A vertex appears, and the Pen Tool pointer becomes an arrowhead.

Drag to change the length and direction of both direction lines for the vertex, then release the mouse button.

Position the Pen Tool where the curved path should end, then use one of these methods:

- For a C-shaped curve, drag opposite the direction used for the previous direction line, then release the mouse button.

Drag the direction handles upward to make a smooth curve between anchor points.

Drag the direction handles upward to make a smooth curve between anchor points.

- For an S-shaped curve, follow the previous direction line's direction as you drag, then release the mouse button.

Drag handles in opposite directions to create alternating curves.

Drag handles in opposite directions to create alternating curves.

## Create a shape

### Make freeform Adobe Premiere shapes and paths with the Pen, Rectangle, Ellipse, and Polygon tools.

Hold the Rectangle tool selected to reveal the Ellipse and Polygon tools.

Use the Rectangle, Ellipse, and Polygon tools to draw a shape, then adjust its properties with controls in the Properties panel.

Use the Rectangle, Ellipse, and Polygon tools to draw a shape, then adjust its properties with controls in the Properties panel.

Choose a shape tool and drag in the Program Monitor to create the shape.

Use the Selection Tool (V) to move the shape or edit its width, height, rotation, or anchor point.

Use options in the Properties panel for additional refinement.

- Fill: fills the shape with any color you choose.
- Stroke: applies Outer, Inner, or Center strokes to the shape, including multiple strokes.
- Shadow: adds one or more shadows to a shape for varied visual effects.
- Mask with Shape: makes a shape layer function as a mask, showing underlying video or graphics only inside that shape.

- Align and Transform: supports top-edge, vertical-center, bottom-edge, left-edge, horizontal-center, and right-edge alignment for objects.
- Responsive Design - Position: makes graphics automatically adapt to video-frame aspect-ratio changes or to another graphic layer's position or scale properties.

## Create free form shapes for masking

### Use the Pen Tool in Premiere to draw and refine custom mask shapes.

For masks that need curves or irregular outlines, choose the Pen Tool (P). After the object is drawn, effects can be applied either inside the object boundary or to the area outside it.

Create the first vertex point with a click, then continue adding points until the shape matches the drawing you need.

To convert a vertex point into a Bezier point, hold Alt (Windows) or option (macOS) as you click it; this lets you reshape the line segments on both sides.

To place a selected effect on a clip, drag it from the Effects panel onto the clip in the Timeline panel.

## Align objects

### Select and align multiple text and shape layers in a graphic, or align groups in Adobe Premiere for exact placement.

Objects can be aligned by these positions:

- Top edge
- Vertical center
- Bottom edge
- Left edge
- Horizontal center
- Right edge

- To a selected object
- To the video frame

Choose Windows > Properties.

Right-click the text or object being aligned, then pick one of these three commands:

- Align to Video Frame: positions each object separately against the Program Monitor.
- Align to Video Frame as Group: treats the selected objects as one unit and lines that group up with the Program Monitor.
- Align to Selection: uses a key object as the reference, such as the leftmost object for a left alignment or the lowest object for a bottom alignment.

Alignment can be calculated for each object on its own, for the selection as a group, or from a chosen reference object.

Alignment can be calculated for each object on its own, for the selection as a group, or from a chosen reference object.

## Distribute objects

### Space text or shapes evenly in Premiere for balanced visual layouts.

The Distribute controls keep selected objects at equal vertical or horizontal intervals.

In the Properties panel, choose the objects you want to space.

In the Align and Transform tab, choose an Align option.

Within the Align field, use the buttons to set the objects against the vertical center, horizontal center, left, right, top, or bottom.

For repeated text layers in a sequence, the Align and Transform panel provides even distribution so spacing stays consistent.

For repeated text layers in a sequence, the Align and Transform panel provides even distribution so spacing stays consistent.

## Captions overview

### Captions and subtitles in Adobe Premiere can make video easier to follow and reach more viewers.

By adding captions and subtitles, videos become more accessible and can hold attention for a broader audience. Adobe Premiere includes built-in tools for building, editing, styling, and exporting captions and subtitles across the supported formats.

### The Captions and Graphics workspace

The Captions and Graphics workspace in Premiere, shown as an overview.

A. Text panel B. Program Monitor C. Properties and Graphics Templates panels D. Timeline panel

The Captions and Graphics workspace in Premiere, shown as an overview.

With Speech-to-Text, Premiere can generate a video transcript that you edit before creating captions on a separate caption track in the timeline. Once the track exists, the normal editing tools can adjust it like other media.

At export time, captions can become stylized burned-in subtitles, .srt sidecar text files, or embedded caption data in a QuickTime MXF file.

Tip

Add captions after the edit is final, or nearly final. You can still refine timing and wording while editing with a caption track, but deleted caption segments must be rebuilt manually if that part of the clip returns to the final edit.

## Auto transcribe video using Speech to Text

### Generate transcripts automatically and add captions with Speech to Text in Adobe Premiere to support accessibility.

Select Window > Text.

In the Transcript tab, select the icon for Generate static transcript to open the dialog box where transcription preferences are set.

Set these preferences to match the job:

- Language: choose the video's spoken language, and download the language pack when one is needed.
- Speaker labeling: decide whether Premiere should separate the different speakers in the video.
- Audio analysis: either transcribe audio clips marked as Dialogue in the Properties panel or pull sound from one chosen audio track.
- Transcribe In point to Out point only: limit transcription to the marked range between the In point and Out point.
- Merge output with existing transcription: insert the new auto-transcribed text into an existing transcript when using specific In and Out points, creating continuity between the earlier transcript and the added section.

Select Transcribe.

## Find and replace text in transcript

### Search a video's transcript for words or phrases, then edit or replace the matches.

Click the Search text field and enter the term to find or replace. The transcript highlights every matching instance.

Move through the matches with the up and down arrows.

Choose Replace, then enter the new wording in the Replace with field.

Use Replace for only the currently selected search result, or choose Replace all to update every instance.

The Search field locates transcript words, while the Replace and Replace All buttons handle the text changes.

The Search field locates transcript words, while the Replace and Replace All buttons handle the text changes.

## Create captions

### Create captions in Adobe Premiere to improve accessibility and help keep viewers engaged.

Before you begin:

Start with a project and import media with Automatic Transcription selected. Turning on Automatic Transcription during import creates the transcript immediately, which saves time later in the caption workflow.

If Automatic Transcription was not selected during file import, use these steps.

Choose the media you want to import.

Select Window > Workspaces > Captions and Graphics to move into the captioning workspace.

Select Captions > Create captions from transcript.

In the Create captions dialog box, adjust these timeline caption options:

- Caption preset: use one of the available choices, or choose Subtitle default for the usual captioning cases.
- Format: pick the caption format needed for the video.
- Stream: define the broadcast streams required by certain caption formats, including Teletext.
- Style: choose one of the caption styles you have saved.
- Length, duration, and gap between captions: set character length, establish how long each caption text line lasts, and define spacing between captions.
- Lines: keep captions on one line or let them wrap to two lines.

The Create Captions dialog box controls preset, format, style, and timing setup before captions are generated.

The Create Captions dialog box controls preset, format, style, and timing setup before captions are generated.

Select Create captions; Premiere then generates captions and aligns them with the video's dialogue.

## Create styles for captions

### Match caption styling to the creative direction by changing font, color, alignment, and related text properties.

Styles let the same appearance be reused quickly across multiple layers in different graphics on the timeline. To build a style, follow these steps:

Once captions exist, choose the caption text in the Timeline panel that needs styling.

In the Properties panel, use the available controls to shape the look:

- Text: use the three-dots icon to reach the Text panel, advanced Effect Controls, or the Graphics Templates browser.

  - Fill: apply the color you want to the text fill.
  - Stroke: place Outer, Inner, or Center strokes on text, and add more than one stroke when needed.
  - Shadow: apply one shadow or several shadows to a shape to build varied visual effects.
  - Mask with Text: make a text layer work as a mask so the video or graphics underneath show only through the text shape.

- Align and Transform: align text to top edges, bottom edges, left edges, right edges, vertical centers, or horizontal centers.
- Linked Style: keep title linked styles and caption track styles efficient by preserving settings such as font choices and appearance inside a named style.
- Responsive Design – Position: let graphics respond automatically when the video frame aspect ratio changes, or when another graphic layer's position or scale changes.

Before saving a reusable style, set caption appearance in the Properties panel, including text, stroke, shadow, and alignment controls.

Before saving a reusable style, set caption appearance in the Properties panel, including text, stroke, shadow, and alignment controls.

After the settings are chosen, select the plus icon in the upper-right corner of the Track style menu, then select Create style.

Name the style and save it with one of these choices:

- Save to Project: connect the caption layer to the style and create a project item in the Project panel.
- Save to Local styles: store the style in a local folder so it can be reused later through the style browser.

The Track style dropdown list shows the new style with thumbnails, and that style can then be applied to other text layers and caption tracks in the project.

## Translate captions

### Translate captions automatically in Adobe Premiere to extend accessibility and audience reach.

Caption translation helps content serve viewers in more languages. Generate captions with Speech to Text, translate them into multiple languages, and adjust the translated text where accuracy or clarity needs refinement. Keyboard shortcuts can speed up this editing work.

Before you begin:

Create captions for the video when the edit is almost complete.

To create captions, select the Create captions icon in the Transcript tab header.

Another route is the Captions tab, where you can select Create captions from transcript.

Tip

A new caption file for the media, such as an SRT file, can also be dropped onto the Timeline panel.

In the Captions tab, select the Translate captions icon.

Premiere offers several ways to translate captions that were imported or generated.

A. Translate through the Translate captions icon B. Translate caption through the More menu C. Translate captions through the context menu

Premiere offers several ways to translate captions that were imported or generated.

Choose the target language for the captions, then select Translate.

A cloud service translates the captions with third-party models, including Google Translate and Microsoft Translator, then Premiere creates a new track in the Timeline panel. Translation progress appears both in the Progress panel and on the track item.

For each matching language track, select the eye icon to show its captions in the Program Monitor.

After that, select and style the captions with the Properties panel controls. To push the style to every caption in the track, use the Properties panel to select the Redefine style icon, then choose All captions on track.

Every text layer or caption that uses the style updates to the new version at once.

For captions, the Redefine Style dialog asks whether to save the changes across all captions in the track without changing the style, or to overwrite the style with those changes.

### Manage multiple caption tracks

Select the eye icon when you need to hide or show tracks in the Program Monitor and Text panel.

If several caption tracks are enabled, the Text panel displays only the tracks that are active.

If several caption tracks are enabled, the Text panel displays only the tracks that are active.

Use Option + click (macOS) or Alt + click (Windows) to isolate one caption track. That shortcut shows the selected track and mutes the rest; pressing it again on the same track mutes that track.

## Languages supported by Speech-to-Text

### Speech-to-Text supports many languages, helping you reach audiences in different places.

## Supported file formats for captions

### File formats supported for captions in Adobe Premiere.

### Sidecar files

- SCC
- MCC
- XML
- STL
- SRT
- DFXMP

### XML files

- W3C TTML (also known as DFXP)
- SMPTE-TT
- EBU-TT

Tip

With XML files, captions can be reviewed in the Captions panel and are also readable from a text editor.

Premiere also supports embedding into these file formats and decoding captions from them:

- MOV
- DNxHD MXF Op1a
- MXF Op1a

## Import caption file from third-party service

### Bring a caption file from a third-party transcription service into Adobe Premiere.

When a workflow already relies on a third-party transcription service, import the transcript file it produces into Adobe Premiere. After import, captions can be aligned with the footage and edited directly in the Text panel.

Import the SRT file into the Premiere project the same way you import any other media item.

Move the SRT from the Project panel into the sequence and drop it at any location in that sequence.

Premiere adds a caption track and places the captions on it.

## Deploy language packs for Teams and Enterprise users

### Deploy language packs for teams and enterprise users from Adobe Premiere or the Creative Cloud desktop application.

To build a package, sign in to the Adobe Admin Console and go to Package.

Select Create a package, then complete the Create package wizard.

On the Choose apps screen in the Create package wizard, select Premiere and choose a language pack from the Add-ons dropdown menu.
