# Create Responsive Graphics, Preserve Intro Outro Animations While Creating Responsive Design Graphics, Group Text And Graphic Layers, Create A Clip Layer ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create responsive graphics; Preserve intro and outro animations while creating Responsive Design graphics; Group text and graphic layers; Create clip layers; Create credit rolls; Add gradients; Animate layers using the Effect Controls panel; Animate layers using the Properties panel; Rename layers; Export graphic as a Motion Graphics template; Create Source Graphics; Mask with text or shape using Properties panel; Find and replace text using the Graphics tab; Check spelling using the Graphics tab; Work with Motion Graphics templates in Premiere; Different ways to work with graphics; Edit text in Graphics tab; Tips for authoring Motion Graphics templates.

## Create responsive graphics

### Build responsive graphics in Adobe Premiere for titles, animations, and overlays that adapt to different frame sizes and aspect ratios.

Graphics can be set up to respond automatically when the video frame aspect ratio changes, or when another graphic layer changes position or scale. A common case is a shape layer underneath text that follows the text layer's width, height, and position.

In the Program Monitor, small blue pins show whether the selected layer is attached to another layer.

To set spatial relationships between layers:

Choose a graphic in the timeline, then open the Properties panel.

Choose the layer that should respond when another layer changes.

Under Responsive Design â€” Position, use Pin To to choose the layer that the selected layer should follow.

The layer that is currently selected becomes parented to the layer chosen from the drop-down list.

Use the diagram on the right side to choose which child-layer edges are pinned to the parent: top, bottom, left, or right. Select the diagram center to pin every edge or clear all edge pins.

For example, a rectangle can contain text. Pinning the rectangle to the text makes the text update automatically when the rectangle changes.

Set the currently active layer to react to the selected layer's position, rotation, or scale changes.

Set the currently active layer to react to the selected layer's position, rotation, or scale changes.

The selected layer then updates its position, length/width, and scale from changes made to the parent layer. When that child layer is selected in the Program Monitor, small blue pins appear along the pinned edges of its parent layer.

## Preserve intro and outro animations while creating Responsive Design graphics

### Preserve intro and outro animations in Adobe Premiere with Responsive Design graphics, so protected keyframes keep animations working as duration or layout changes.

Specific parts of a graphic can be defined as intro and outro regions so their keyframes stay preserved even if the total graphic duration changes. Keyframes inside those intro and outro ranges remain protected while trimming the graphic in or out, allowing the clip to be shortened or extended without losing those animations. Any keyframes between the intro and outro regions are stretched or compressed as required to fit the adjusted duration.

Premiere shows the clip's intro and outro portions with a transparent white overlay in the timeline and in the Effect Controls panel. Define those segments from either the Properties panel or the Effect Controls panel.

### Define intro and outro segments and preserve animations using the Properties panel

Choose the graphic in the timeline, then open the Properties panel.

Confirm that none of the selected graphic's individual layers are selected.

Under Intro duration, use the timecode controls to enter how much time belongs to the intro/entrance section.

Under Outro duration, use the timecode controls to enter how much time belongs to the outro/exit section.

To preserve the intro and outro animations, turn on Responsive Design â€” Time in the Properties panel and anchor keyframes to the clip's start and end.

To preserve the intro and outro animations, turn on Responsive Design â€” Time in the Properties panel and anchor keyframes to the clip's start and end.

### Define intro and outro segments and preserve animations using the Effect Controls panel

Choose the graphic in the timeline, then open the Effect Controls panel.

At both the start and end of the selected clip, a small blue handle appears at the top of the Effect Controls panel.

Drag the left handle outward to set the intro/entrance segment. A grey overlay appears over the keyframes included in that time range.

Drag the right handle outward to set the outro/exit segment. A transparent white overlay appears over the keyframes included in that time range.

Apply keyframe interpolation, then lock the start and end keyframes on the timeline so duration changes leave the animation intact.

Apply keyframe interpolation, then lock the start and end keyframes on the timeline so duration changes leave the animation intact.

## Group text and graphic layers

### Group text and graphic layers in Adobe Premiere when working with detailed text and graphic builds.

Layer grouping can make the Properties panel easier to scan, and it is also helpful when building masking effects.

Select multiple layers in the Properties panel.

In the Properties panel, select the Create Group icon, or right-click the selected layers and choose Create Group from the context menu.

The selected Properties panel layers are placed into a group with a default name.

The selected Properties panel layers are placed into a group with a default name.

The selected Properties panel layers are placed into a default-named group. Rename the layers when needed.

## Create clip layers

### Create a clip layer in Adobe Premiere and add image or video media.

Still images and video clips can be inserted as layers inside a graphic through the Properties panel by creating clip layers.

Select the graphic in the Program Monitor.

Open the Properties panel, then select the New Layer icon.

Select From File, browse to the still image or video clip, and add it.

Use an image or video layer for more advanced editing and effects.

Use an image or video layer for more advanced editing and effects.

## Create credit rolls

### Create rolling credits in Adobe Premiere from the Properties panel, with smooth customizable text animation for film endings.

Turning on Roll creates title rolls or credit rolls that travel vertically across the screen. In the Program Monitor, a translucent blue scroll bar provides a Document View for moving through the credit roll while editing. That makes it unnecessary to move the playhead just to preview or edit a particular section.

Before you begin:

Add text to the project. Confirm that the text layer in the Program Monitor is not selected, because Roll is hidden when one or more layers are selected in the Program Monitor.

Choose a graphic in the timeline, then open the Properties panel.

Enable credit rolls with the Roll check-box.

Set whether the text or other layers should begin or finish offscreen.

Use each property's timecode to adjust Preroll, Postroll, Ease in, and Ease out.

Tune the roll credits' speed, layout, and style to match the film's look.

Tune the roll credits' speed, layout, and style to match the film's look.

Select the Soften checkbox if smoother rolling text motion is desired.

## Add gradients

### Add and adjust gradients on text or shapes through the Properties panel, using solid, linear, or radial fills to improve the visual treatment.

Select the text or shape that will receive the gradient.

From Appearance in the Properties panel, choose the Fill, Stroke, or Shadow colors.

In the Color Picker dialogue, open the dropdown list at the top left and choose one of the gradient options.

- Choose Solid when the text needs one solid fill color.
- Choose Linear Gradient to blend colors vertically, horizontally, or along an angle.
- Choose Radial Gradient to blend opacity or colors outward from a circle's center.

Choose a gradient option, then adjust its opacity.

Choose a gradient option, then adjust its opacity.

To change the gradient colors:

- Select a color stop below the gradient slider to display color choices and set a different color.
- To remove a color stop, select it, drag it away from the gradient slider and release it, or select Delete at the lower right of the gradient slider.

To change gradient opacity:

- Move the Opacity Stop at the top of the gradient slider.
- Enter a different value in the Opacity % field.

To change gradient angle and position:

- Angle: Enter a value in the Angle field, or drag the blue hot text to set the angle for a linear gradient.
- Location: Enter a value in the Location field, or drag the blue hot text for an interactive way to set the selected stop or midpoint location.

Select OK to apply the gradient to the text or shape fill.

## Animate layers using the Effect Controls panel

### Animate Adobe Premiere layers from the Effect Controls panel by adding keyframes to properties such as position, scale, and opacity, which control motion and transitions over the timeline.

Use keyframes in the Effect Controls panel to animate layers.

In the Effect Controls panel, find the layer that will be animated.

Place the timeline cursor at the spot for the new keyframe.

Select the Stopwatch icon to enable or disable animation for the chosen property.

Select the Add/Remove Keyframe icon beside the property name.

Right-click a keyframe to reach interpolation options, including Bezier curves, Ease In, and Ease Out.

## Animate layers using the Properties panel

### Animate text, shape, and path layers with keyframes in Adobe Premiere.

In the Properties panel, select the layer that should be animated.

Turn on animation for the target property, such as Position, Anchor Point, Scale, Rotation, or Opacity.

Move the playhead, then change the property in the Properties panel to define keyframe values.

Animate the layer in the Properties panel with the icons in Align and Transform.

Animate the layer in the Properties panel with the icons in Align and Transform.

Refine the animation from the Effect Controls panel, or adjust keyframes in the timeline with the Show Clip Keyframes option.

## Rename layers

### Rename a layer in the Properties panel so Adobe Premiere projects stay organized and layers remain easy to find.

Premiere allows shape and clip layers to be renamed. Text layers do not support inline name editing, because the layer name is the text displayed in the Program Monitor.

Select a layer and right-click it.

From the context menu, select Rename.

Change the name in the text field.

## Export graphic as a Motion Graphics template

### Export an Adobe Premiere graphic as a Motion Graphics template, including text and shape layers, effects, and keyframes, for later reuse or sharing.

Run Graphics and Titles > Export Motion Graphics template.

Alternatively, right-click the graphic clip in the timeline and choose Export As Motion Graphics Template.

Only graphics created in Premiere can use this export feature; .mogrt files originally created in After Effects are not supported. When two or more Graphics are selected, or when the selected item is an After Effects graphic, Export As Motion Graphics Template appears unavailable or greyed out.

## Create Source Graphics

### Convert text made with the Legacy Titler into Source Graphics so it remains editable in current Adobe Premiere versions.

In the Timeline panel, select the graphic.

Run Graphics and Titles > Upgrade to Source Graphic.

The Upgrade to Source Graphic option creates a Source Clip item in the Project panel.

The Upgrade to Source Graphic option creates a Source Clip item in the Project panel.

Edit it in the Properties panel, then use it in the sequence the same way you would use any other source graphic.

New graphics created from a Source Graphic, including the upgraded original, are always exact duplicates of one another. That includes the source text string. Edits to the text, style, or contents in any Source Graphic instance are reflected in every other instance of that Source Graphic.

## Mask with text or shape using Properties panel

### Use text or shape masks in Adobe Premiere to build transitions, reveals, and wipe animations.

Note

Create a project, bring in media, build a sequence on the timeline, and add a text or shape layer with the Tools panel.

In the Edit tab of the Properties panel, select a text or shape layer.

In the Appearance section, select the Mask with Text or Mask with Shape checkbox.

Select Mask Only Fill so strokes and shadows on the layer are left out of the mask.

Select Invert when the outside of the layer should remain visible while the inside becomes transparent.

Create a shape layer as the mask, exposing the video or graphics underneath only inside that shape's bounds.

## Find and replace text using the Graphics tab

### Use the Graphics tab in Adobe Premiere to find and replace text across text elements.

Run Edit > Spelling > Check Spelling, or go to the Graphics tab in the Text panel, open the three-dot icon, and choose Check spelling.

Use the Search field to find a word, then use the Previous and Next arrows to move through every occurrence of that word in the sequence.

Select the Replace icon, then enter the new text.

Select Replace or Replace All to replace one matching instance or every instance of the search term.

## Check spelling using the Graphics tab

### Set spell check preferences, check text, and fix spelling in Adobe Premiere.

### Set spell check options

Run Edit > Spelling > Spell Check Settings, or use the icon on the Graphics tab in the Text panel and choose Spell check > Spell check settings.

By default, Premiere matches the default language to the installed application language. To switch languages, choose the desired entry from the Language dropdown list.

Set Premiere to learn or forget individual words. The selected words are added to or removed from that language dictionary, and the change applies OS-wide.

Note

Language choices depend on which languages are installed in the OS. macOS includes many languages out of the box, while Windows needs most language packs to be installed manually.

### Check and correct spelling

Start spelling review from either of these places:

- Choose Edit > Spelling > Check Spelling.
- In the Text panel, open the Graphics tab, select the icon, and choose Check spelling.

After Check Spelling is chosen, Premiere marks misspelled words with a red underline. Right-click an underlined word to open suggested replacements and correct the spelling quickly.

When the underlined term is a proper name or a valid word for your project, choose Learn from the right-click context menu. Premiere then adds that word to what it recognizes and stops marking it red.

## Work with Motion Graphics templates in Premiere

### Explore sample projects to understand how Motion Graphics templates work in Adobe Premiere.

Downloadable example projects show Motion Graphics templates in practical editing situations. Use them to see how templates are built, how editable controls behave, and how graphics fit into a Premiere timeline.

The folder contains four Motion Graphics templates (.mogrts) and one CSV file.

- Sports Title.MOGRT: includes editable text and a slider for Color Scheme.
- Sports End Credits.MOGRT: includes editable text and a slider for Color Scheme.
- Sports Lower Third.MOGRT: includes editable text, color controls like the examples above, and a slider for switching the lower-left sport icon.
- Sports Lower Third (CSV).MOGRT: uses the included CSV (Comma Separated Values) file. The slider chooses a combined athlete/sport/icon/color entry.

Tip

Review best practices for building Motion Graphics templates that stay efficient and clear for editors.

## Different ways to work with graphics

### Review practices for faster, more efficient graphics workflows in Adobe Premiere.

Visual style and graphics vary by channel, show, series, and film. As video volume has grown, consistent presentation has become increasingly important.

Strong graphics workflows can sharply reduce post-production time. Broadcasters and large post facilities often connect graphics teams and editorial teams through defined pipelines. At the opposite end, independent filmmakers may both create the assets and place them into the final edit.

Motion Graphics templates move the graphics workflow from production in the art department into editorial implementation, helping iteration and quality control move faster.

### Three ways to work with graphics

These three examples also trace how digital production workflows have changed over time.

- Copy and paste are the simplest time-saving methods in digital workflows. In video work, you can copy a design element on the timeline, paste it somewhere else, and adjust the new instance. That is faster than rebuilding every graphic from nothing, but it remains manual and does not scale as well as newer methods.
- Dynamic Link offers a more capable workflow by putting a live After Effects composition into the Premiere timeline. Editors use it for animated graphics as well as visual effects shots. With Dynamic Link, those shots can be refined while you see them in the edit. Nothing has to be baked first. If many complex compositions hurt performance, use Render and Replace in Premiere to improve editing responsiveness while keeping quick access to the original After Effects composition.
- Motion Graphics templates (.mogrts) expand this idea much further. A mogrt packages design and animation together, while still letting editors change content inside controlled limits. The result is quicker editorial work without losing brand consistency. When After Effects expertise is available, Motion Graphics templates support a divide-and-conquer workflow: lock down design in After Effects first, then move the artwork to editorial. In Premiere, the work can stay focused on implementation. Creative Cloud libraries store Motion Graphics templates, making them easier to organize and retrieve across projects. Sharing CC Libraries brings the same advantages to teams by improving access, consistency, and quality control for everyone involved.

## Edit text in Graphics tab

### Edit editable text from the Graphics tab in Adobe Premiere.

Inside the Text panel, the Graphics tab gives a sequence-level view of text from both Premiere Graphics and After Effects Motion Graphics templates.

Use this centralized view to change graphics without hunting through the sequence for individual track items. The Graphics tab can be filtered by tracks and timecodes, and composited graphic thumbnails help you locate text quickly.

Each listed graphic shows a thumbnail, its timecode range, and the video track number. A blue mark at the left identifies the graphic currently under the CTI.

Browse, add, and revise sequence text or Motion Graphics template text from the Graphics tab.

Browse, add, and revise sequence text or Motion Graphics template text from the Graphics tab.

With the intended sequence active, open the Text panel and select the Graphics tab.

Double-click an editable text field in the Graphics tab, then change the text.

Select the Filter tracks icon to show text items from specific tracks.

## Tips for authoring Motion Graphics templates

### Review best practices for authoring efficient, editor-friendly Motion Graphics templates in Adobe Premiere.

### Don’t give the editors too many choices

Limit MOGRT choices to reduce human error and preserve brand consistency across a production. A restricted template helps prevent editors from selecting incorrect fonts, colors, or logos, moving graphic elements to the wrong position, damaging the animation, and similar mistakes.

### Make the MOGRTs simple, and easy to understand

MOGRTs become slower to operate and slower to render when they expose too many sliders, checkboxes, and other controls. For complicated designs, consider dividing one large MOGRT into several simpler MOGRTs so editors can use them more easily and renders finish sooner.

### Use libraries to spread the MOGRTs between team members

Sharing a MOGRT with ten people through file sharing or email gives you no reliable way to confirm that each person installed it correctly. If you later send a corrected version, you also cannot verify that all ten editors replaced the old MOGRT; some may keep using the outdated copy.

Distributing MOGRTs through libraries gives you control over access and keeps everyone on the current version of every MOGRT. You can add new members quickly and remove freelancers who should no longer have access.

### Add keywords so the editors can easily search for the MOGRTs

Editors under deadline should not have to hunt for MOGRTs. Give templates descriptive names and add keywords so they are easy to search for in Premiere.

### Use link to CSV files whenever data exists

Manual data entry in MOGRTs works well when values such as names, titles, or numbers do not already exist somewhere else. When that data is already available in a text editor or spreadsheet, the editor should not need to copy/paste or retype it. The list maker can prepare the spreadsheet and give the editor access to the CSV or TSV file. That reduces the risk of pasting the wrong title for a name or entering incorrect numbers for individual records. The editor places the spreadsheet file, moves a slider, and the timeline updates with the information. Editors can still revise and change the data; using a CSV file does not reduce the MOGRT's flexibility.

### Reuse expressions in new projects

As time passes, MOGRT creators usually build up older projects with functionality similar to the current job. Reusing designs from those previous projects can save significant time. Often only small adjustments are needed to adapt a design to the new project, which is faster than beginning from scratch.

### Keep layer count and number of expressions as low as possible

MOGRTs are essentially After Effects compositions, so rendering slows down as the comp becomes more complex. Keeping the layer count low and limiting expressions helps performance.

Include prerendered video if the MOGRT is complex.

Heavy layer use, especially with vector-based layers, makes a MOGRT render slowly. When the animation does not need to remain editable inside the MOGRT, pre-render those layers and replace them with the video clip. Premiere performance improves as a result.

### Render and replace to save time on export

When MOGRTs drop frames in Premiere, apply Render & Replace while editing, using a format with alpha, to improve playback and make final export faster. Render & Replace is more useful than only rendering the timeline because moving clips after a timeline render causes those render files to be lost. With Render & Replace and alpha, the clip can be moved freely without losing renders. If revisions are needed, choose Restore Unrendered, make the changes, and run Render & Replace again.

## Create markers in the Effect Controls panel

### Add sequence markers in Adobe Premiere so effect placement points are easy to identify.

The Effect Controls panel can show markers created in the Timeline panel, add new markers for effect locations, and support marker creation and adjustment.

Note

Create a project or open an existing one, then add the sequence to the timeline.

Move the playhead to the location where the marker should be placed.

Open the timeline ruler context menu with Right-click (Windows) or Control-click (macOS).

Choose Add Marker.

The marker appears at the chosen point. Use markers for needs such as comments, transitions, and cue points for effects.
