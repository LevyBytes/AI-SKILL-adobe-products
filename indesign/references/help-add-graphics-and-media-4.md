# Animation, Page Transitions

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Animate objects; Motion preset options; Manage motion presets; Edit motion paths; Change animation order; Apply page transitions; Clear page transitions; View page transitions in PDFs.

## Animate objects

Use Adobe InDesign motion presets to animate objects for interactive PDFs and digital documents.

InDesign motion presets add animations such as fades, fly-ins, and spins to objects in interactive documents. The preset library supplies ready-made effects for text, images, and shapes. Interactive outputs such as Interactive PDFs support these animations, and previewing before export helps confirm that they perform as expected.

Use the Selection tool to choose the object that should be animated.

Open Window > Interactive > Animation.

Pick a motion preset in the Preset drop-down menu.

Use the Pen tool and the Direct Selection tool when the motion path needs editing.

Review the motion path displayed beside the object.

Before exporting, use the Preview Spread: EPUB icon to check the animation effect.

To clear animation from an object, select that object and click the Remove animation icon.

## Motion preset options

### Motion preset options in Adobe InDesign for animation behavior and timing.

InDesign motion preset options define animation behavior, including timing, movement, and appearance. Use these settings to refine animations for interactive PDFs, EPUBs, and other digital documents.

## Manage motion presets

Reuse and share animation settings in Adobe InDesign with motion presets.

InDesign motion presets help reuse animation settings across documents and keep behavior consistent. You can build custom presets from animations that already exist, apply those presets to other objects, and share them through exported or imported XML files. Custom presets preserve motion paths and animation properties, so the same effects can be applied again without recreating them each time.

### Save a custom motion preset

Open Window > Interactive > Animation, then set up the animation values that should become the preset.

Open the panel menu icon, then choose Save.

Type a name in the Name field, then confirm with OK.

### Delete a custom motion preset

Open Window > Interactive > Animation.

Open the panel menu icon, then choose Manage Presets.

Choose the custom preset you want to remove, then click Delete.

### Duplicate an existing preset

Open Window > Interactive > Animation.

Open the panel menu icon, then choose Manage Presets.

Choose the preset that should be copied, then click Duplicate.

### Save motion preset as an XML file

Open Window > Interactive > Animation.

Open the panel menu icon, then choose Manage Presets.

Choose the preset to export.

Click Save As.

Enter a name and location for the XML file.

Click Save.

### Import a motion preset from an XML file

Open Window > Interactive > Animation.

Open the panel menu icon, then choose Manage Presets.

Click Load.

Browse to the XML preset file, select it, and click Open to import the preset.

## Edit motion paths

Use Adobe InDesign motion-path editing to refine animation movement in interactive documents.

InDesign motion paths set the direction and movement of animated objects. A motion path is the trajectory that an object follows during playback, and it can be adjusted to suit the layout. Standard path-editing tools can modify these paths, including changes to anchor points and curves for precise animation control.

Select the animated object with the Selection tool.

Edit the motion path with the Direct Selection tool and Pen tool, using the same techniques as for any path.

Open the Animation panel (Window > Interactive).

Choose both a path and an object.

Open the panel menu icon, then choose Convert to Motion Path to turn an existing path into a motion path.

Open Properties in the Animation panel, then set direction through the Animate drop-down menu.

For extra anchor points, activate the Delete Anchor Point tool and click each point that should be deleted.

To reverse direction, select the motion path and choose Object > Paths > Reverse Path.

Before reversing the path, remove the animation, then apply it again so the object's position is retained.

## Change animation order

Change animation order in Adobe InDesign with the Timing panel for interactive documents.

InDesign animation order controls when animated objects play and how they are sequenced in interactive documents. The Timing panel can reorder animations, apply delays, and synchronize multiple effects. Trigger events such as page load or page click group the animations, giving you control over playback sequence and timing across objects.

Open Window > Interactive > Timing.

Use Event drop-down menu options On Page Load or On Page Click to show the animations assigned to that trigger.

Drag an animation higher or lower in the list to revise playback order.

To run several animations simultaneously, choose the needed animations with Shift for a range or Ctrl (Windows) or Command (macOS) for nonadjacent selections.

Click the Play Together icon to link the selected animations.

Under Linked Items, type a value in Play or enable Loop for continuous playback.

To split linked animations apart, choose the linked items and click the Play Separately icon.

For an animation delay, choose the animation and type a value in Delay.

For trigger reassignment, choose the animation, open the panel menu icon, and choose Reassign to On Page Load or Reassign to On Page Click.

For removal from the current event, open the panel menu icon and choose Remove Item.

To inspect removed animations, choose Unassigned from the Event drop-down menu.

## Apply page transitions

Use Adobe InDesign to make page-to-page movement in Interactive PDF documents more polished.

In an exported Interactive PDF, page transitions display dissolves, wipes, fades, and similar effects while the viewer moves between pages. They make presentations and digital documents feel more active during navigation. The effect is assigned to whole spreads; it is visible only after export to Interactive PDF and not inside the InDesign workspace. This feature works best for sequential viewing, and different PDF viewers may support it differently.

### Apply transitions to specific spreads

Open Window > Pages, then select the spreads that need transitions.

Verify that the spread numbers under the page thumbnails are highlighted; that confirms you selected spreads instead of individual pages.

Open Window > Interactive > Page Transitions.

In the Transition drop-down menu, pick the transition effect.

Use the Direction drop-down menu to adjust the transition, then set Speed.

### Apply transitions to all spreads

Open Window > Pages.

In the panel, select any spread, then choose the transition effect and speed you want.

Open Window > Interactive > Page Transitions.

Select the Apply to All Spreads icon.

## Clear page transitions

Use Adobe InDesign to remove spread-based visual effects from Interactive PDF documents.

Page transitions display visual effects as readers move between pages in an Interactive PDF. When the effects are no longer needed, remove them from selected spreads or clear them throughout the document. Clearing transitions removes the effects from exported Interactive PDFs while leaving the document layout unchanged.

### Remove transitions from specific spreads

Open Window > Pages.

Select the spread whose transition you want to remove by clicking the page numbers below its spread thumbnails.

Open Window > Interactive > Page Transitions.

In the Transition drop-down menu, choose None.

### Clear transitions from all spreads

Open Window > Interactive > Page Transitions.

Select the panel menu icon, then choose Clear All.

## View page transitions in PDFs

Use Full Screen Mode in a PDF viewer to review page transitions in Adobe InDesign Interactive PDFs.

Page transitions show visual effects as viewers move between pages in Interactive PDFs exported from InDesign. To see them, open the PDF in Full Screen Mode with a supported PDF viewer. The transitions are available in Interactive PDFs only; Print PDFs do not support them. Checking the file this way confirms that the transition effects appear as intended.

### Include page transitions during export

Select File > Export.

From the Save as type (Windows) or Format (macOS) drop-down menu, choose Adobe PDF (Interactive).

In the Export to Interactive PDF dialog box, find the Page Transitions drop-down menu.

Choose From Document to include transitions set in the Page Transitions panel.

Select OK and export the PDF with the transitions included.

### Enable Full Screen Mode to view transitions

In Adobe Acrobat or Reader, open the PDF you exported.

Use Ctrl + L (Windows) or Command + L (macOS) to switch into Full Screen Mode.

Move through pages with arrow keys, the spacebar, or mouse selections to view the transition effects.

Press Esc to leave Full Screen Mode and resume normal viewing.
