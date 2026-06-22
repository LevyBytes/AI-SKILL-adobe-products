# Pixel Perfect, Viewing Artwork, Quick Actions, Stacking Objects

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Draw pixel-perfect art; View artwork; Recolor artwork; Apply retro style to text; Apply neon glow effect to text; Apply old school style to text; Stack objects.

## Draw pixel-perfect art

Search Last updated on Sep 8, 2025

See how to align artwork smoothly with the pixel grid.

Explore the newest features and enhancements.

Update Illustrator

Illustrator can produce pixel-perfect art that stays sharp and crisp on screens across different stroke widths and alignment options. You can align an existing object to the pixel grid with one click, or have a new object align correctly while you draw it. During transformations, pixel alignment can be preserved without distorting the artwork. The behavior applies to objects and to the individual path segments and anchor points that make them up.

An object before and after alignment with the pixel grid

A. Object is not aligned with the pixel grid B. Object is pixel-aligned

An object before and after alignment with the pixel grid

### Align existing objects with the pixel grid

In existing artwork, select whole objects or object segments and align them with the pixel grid. This is especially helpful after pasting objects from other documents that were not pixel-aligned.

Activate the Selection tool and pick the object to align to the pixel grid.

Specific object segments can be pixel-aligned as well. With the Direct Selection tool, choose horizontal or vertical segments of the object.

Use one of these commands for pixel-perfect existing artwork:

- Control panel: use Align Selected Art To Pixel Grid ().
- Menu command: Object > Make Pixel Perfect.
- Context menu: right-click the object, then choose Make Pixel Perfect.

Note

Rather than pixel-aligning an entire object, you can target specific segments. Use the Direct Selection tool () to choose horizontal or vertical segments, then apply one of the pixel alignment options the same way you would for an object.

### Considerations

- Illustrator does not modify objects that lack vertical and horizontal segments.
- When the selected object is already pixel-aligned, Illustrator displays this message:

- A warning also appears when selected art cannot be pixel-aligned. For example, the selected art shown below has no vertical or horizontal segments.

### Snap to pixel

Use Snap to Pixel to avoid half-pixel shifts and confusing alignment cues. It helps keep artwork aligned cleanly to the pixel grid. For example, two pixel-perfect shapes will snap together cleanly and accurately.

Enable View > Snap to Pixel.

Draw new objects, or reposition objects that are already on the canvas.

- Shape geometry and transformations move to whole-pixel values.
- Alignment Guides appear only when both objects are pixel-perfect.

Let go once the object lands on the grid position.

Tip

Disable Snap to Pixel for freeform placement with decimal values.

### Align new/transformed objects with the pixel grid

During object creation or transformation, Illustrator can snap artwork to the pixel grid so path and edge placement stays exact. Documents made from the Web and Mobile profiles turn this setting on automatically.

Use either method:

- In the Control panel, use Align Art To Pixel Grid On Creation And Transformation ().
- Select View > Snap To Pixel.

To adjust Snap To Pixel behavior, open the drop-down menu (). Click the arrow icon, then choose the settings you need in the Pixel Snapping Options dialog.

Snap To Pixel While Drawing

Constrains drawn paths to the closest pixel, producing crisp segments.

Snap To Pixel While Moving

Moves the selected object onto the closest pixel. While the object is being repositioned, you can also snap Paths, Segments, and Anchor Points.

Snap To Pixel While Scaling

Places the edges of the scaled object on the closest pixel.

2. Keep an object pixel-aligned while scaling it
   Click OK.

### Annexure: View the pixel grid

1. In Illustrator, choose View > Pixel Preview.
2. Increase canvas zoom to 600% or higher.

Note

Even at high zoom levels, Pixel Preview mode can hide the pixel grid. In Illustrator, open Preferences > Guides and Grids and clear Show Pixel Grid (Above 600% Zoom).

Disable the pixel grid

Disable the pixel grid

### What's next?

This gives you the starting point for drawing pixel-perfect art. Continue by learning how to draw with the Pen, Curvature, or Pencil tool.

### Have a question or an idea?

For questions or suggestions, join Adobe Illustrator Community and take part in the discussion. We welcome your feedback and your artwork.

### Get help faster and easier

Sign in

New user?

Create an account › Manage account

Quick links

View all your plans Manage your plans View quick links Hide quick links

Legal Notices | Online Privacy Policy

## View artwork

Search Last updated on Jul 17, 2024

Review artwork navigation and view customization for Adobe Illustrator.

Try it in the app
Adjust artwork with the Navigator panel in a short guided flow.

Open Illustrator

### Navigator panel overview

The Navigator panel (Window > Navigator) lets you jump and zoom around an artwork view from a thumbnail. Inside the Navigator, the colored rectangle, or proxy view area, marks the portion of the art currently on screen.

Navigator panel

A. Thumbnail display of artwork B. Panel menu button C. Zoom box D. Zoom Outbutton E. Proxy preview area F. Zoom slider G. Zoom Inbutton

Navigator panel

Use these controls to tailor the Navigator panel:

- To include artwork outside artboard bounds in the Navigator panel, open the panel menu and click View Artboard Contents Only so it is deselected.
- To set another color for the proxy view area, choose panel Options from the panel menu. Pick a preset in the Color menu, or double-click the color box and choose a custom color.
- To make dashed lines appear as solid in the Navigator panel, choose panel Options from the panel menu, then select Draw Dashed Lines As Solid Lines.

### Preview artwork as outlines

Illustrator normally previews artwork in color. You can switch the display so only outlines, also called paths, are shown. Hiding paint attributes can make screen redraws faster when artwork is complex.

Linked files appear in Outline mode as boxes with an X by default. To show their contents instead, choose File > Document Setup, then select Show Images In Outline Mode.

On displays at least 2000 pixels wide or high, Illustrator can show outlines while in GPU Preview mode. GPU Outline mode renders paths more smoothly and can redraw dense artwork faster on high-density displays.

- For an outline-only view of all artwork, use View > Outline, or press Ctrl+E (Windows) or Command+E (macOS). Use View > Preview when you want color preview again.
- To outline a single layer, Ctrl-click (Windows) or Command-click (macOS) the eye icon for that layer in the Layers panel. Repeat the same Ctrl-click (Windows) or Command-click (macOS) to restore color preview. In Outline view the eye icon is hollow in the center; in Preview view the center is filled.
  Tip: To put every Layers panel item back in Preview mode, choose Preview All Layers from the Layers panel menu.

### Use multiple windows and views

You can show the same document in several windows at once, with separate view settings in each window. For example, one window can be zoomed in tightly for detailed object edits while another stays farther out so you can position the same objects on the page.

Note

(Windows) Arrange open document windows from the Window menu. Cascade stacks them from the upper-left toward the lower-right of the screen; Tile places them edge to edge; Arrange Icons lays out minimized windows inside the program window.

Multiple views provide another path when you do not need multiple windows. Each document can store up to 25 views.

Key differences between multiple windows and multiple views:

Multiple views are stored in the document; multiple windows are not.

Multiple windows may be visible simultaneously.

Multiple views can be visible at once only when several windows are open to display them. Switching a view changes the current window instead of opening another window.

### Create a new window

1. Choose Window > New Window.

### Create a new view

1. Set the view. Choose View > New View, type the new view name, then click OK.

### Rename or delete a view

1. Choose View > Edit Views.

### Switch between views

1. At the bottom of the View menu, select the view name.

### Previewing artwork in final output medium

Illustrator includes these preview options for checking artwork as it may appear in print, on the web, or on a mobile device:

Overprint Preview mode (View > Overprint Preview)

Shows an ink-style preview that estimates the effect of blending, transparency, and overprinting in color-separated output.

Pixel Preview mode (View > Pixel Preview)

Estimates the rasterized appearance of the artwork as it would be seen in a web browser.

Trim View mode (View > Trim View)

Limits the display to the artwork boundaries. In Trim View, non-printing canvas items are hidden, including grids, guides, and objects that extend past the artboard. Artwork outside the artboard is clipped, while editing and creation remain available in this mode.

Note

This mode helps when previewing poster artwork.

The original view and the trimmed view

The original view and the trimmed view

Flattener Preview panel (Window > Flattener Preview)

Marks artwork regions that match selected flattening criteria for saving or printing.

Soft-proofs

Simulate how document colors will appear on a chosen monitor or output device.

Anti-aliasing

Smooths vector objects on screen and helps indicate how vector artwork may print on a PostScript® printer. Because screen resolution is limited compared with the high resolution used for many vector prints, anti-aliasing is useful. Enable it through Edit > Preferences > General (Windows) or Illustrator > Preferences > General (Mac OS). In that dialog, turn on Anti-aliased Artwork, then click OK.

Device Central (File > Device Central)

Previews the document on a selected mobile phone or device.

### Specify Document Setup options

Document Setup defaults can be changed later. The dialog covers units of measure, transparency grid display, background color, and type controls. Type controls include language and quote style. They also include superscript and subscript size, bleeds, and exportability. Selecting Edit Artboards dismisses the dialog and switches Illustrator to the Artboard tool.

1. Choose File > Document Setup, or, when nothing is selected, click the Document Setup button in the Control panel.
2. Set the options you need.
   If artboards need editing, such as changing orientation from portrait to landscape, click Edit Artboards to enter artboard editing mode.

Simulate Colored Paper helps when the final output is intended for colored paper. For example, a blue object on a yellow background is displayed as green. The simulation runs only while the transparency grid is hidden.

### About print tiling

Illustrator normally sends each artboard to one sheet of paper. If the artwork exceeds the page sizes your printer can use, it can be printed across several sheets.

Splitting an artboard across a printer's available page sizes is tiling. In the General section of the Print dialog box, choose a tiling option. View > Show Print Tiling displays those boundaries on the artboard.

Artboard divided into multiple page tiles

Artboard divided into multiple page tiles

After tiling, page numbering starts at page 1 and proceeds left to right, then top to bottom. The page numbers are only on-screen references and do not print. They help you print the whole file or choose specific pages to print.

### Zoom in or out the artwork

There are multiple ways to change artwork magnification.

- Select the Zoom tool. The pointer changes to a magnifying glass with a plus sign at its center. Click the center of the area you want enlarged. To reduce instead, hold Alt (Windows) or Option (macOS) and click the center of the target area. Each click moves the view to the previous preset percentage for zooming in or out.

Note

While you zoom with the Zoom tool or its shortcuts, Illustrator centers the selected art in the view. If anchor points or segments are selected, those elements are centered as well during zooming. To turn off zooming to a selection, go to Preferences > Selection And Anchor Display, then deselect Zoom To Selection.

- With the Zoom tool active, drag a dotted rectangle, called a marquee, around the area for magnification. To reposition the marquee during the drag, hold the spacebar and keep dragging to place it elsewhere.
- Choose View > Zoom In or View > Zoom Out. The view changes to the next preset percentage each time.
- Use either the main window's lower-left zoom field or the Navigator panel to set magnification.
- For 100% display, choose View > Actual Size or double-click the Zoom tool.
- For the selected artboard to occupy the window, use View > Fit Artboard In Window, or double-click the Hand tool.
- To show the entire file contents in the window, choose View > Fit All In Window.

### Actual size preview

As a print designer, you may need to inspect artwork before printing at real-world output size. Illustrator can show a document at actual print size while the zoom value is 100%.

Choose View > Actual Size to display elements at physical print size regardless of monitor size or resolution. After that, a document viewed at 100% zoom represents every object at its physical dimensions. For example, opening a new A4 artboard and clicking Actual Size changes the artboard display to match an actual A4 sheet.

Actual Size works across resolutions, scale factors, and viewing modes, except pixel preview.

Note

When more than one monitor is connected, Actual Size works only on the primary monitor.

Note

Actual Size is on by default, so a 100% zoom shows the document at real size. To keep 100% zoom from changing the document view this way, disable Actual Size with these steps:

1. Open Edit > Preferences > General (Windows) or Illustrator > Preferences > General (macOS).
2. Turn off Display Print Size at 100% Zoom.

For additional details about print document setup, see Setting up documents for printing.

### Change the view area

To bring another part of the artboard into view, use any of these methods:

- Choose View > Fit All In Window to zoom out until all artboards are visible on the screen.
- Choose View > Fit Artboard In Window to zoom into the active artboard.
- In the Navigator panel, click the thumbnail area that should appear in the illustration window. You can also drag the proxy view area, the colored box, to another spot on the thumbnail display.
- Select the Hand tool, then drag in the direction the artwork should move.

### View artwork in presentation mode

Presentation mode makes the current Illustrator document's active artboard fill the screen. The application menu, panels, guides, grids, and current selections are hidden, and the mode does not allow editing; only artboard artwork is shown. It is suited to presenting design concepts.

Enter Presentation mode with any of these methods:

- Use View > Presentation Mode.
- Press Shift + F.
- Use the toolbar icon's drop-down list, then choose Presentation Mode.
- (macOS only) Use the Touch panel Navigation button. The arrow controls move between the next and the previous artboards.

Move between artboards with the left or right arrow key for the previous or next artboard. You can also click anywhere to advance to the next artboard.

To leave Presentation mode, press Esc key.

Note

Other keyboard shortcuts do not operate while Presentation mode is active.

## Recolor artwork

Search Last updated on Sep 25, 2023

Use in-app quick actions to apply a random color theme with one click.

Try it in-app!

Instantly add a randomized color theme to artwork in Illustrator.

Recolor artwork

Apply a random color theme in the app with these steps:

At the upper-right of the Illustrator workspace, select the icon, or press F1, to open the Discover panel.

In the Discover panel, go to Browse > Quick actions and select Recolor.

Select the artwork, then select Apply to update its color theme.

3. Apply recolor
   Select Revert to remove the applied changes. The Revert button is unavailable after you edit colors.

Open the REFINE WITH section and select Recolor Artwork to adjust artwork colors.

Select Browse more quick actions to see additional actions you can apply to objects.

A. Refine With B. Revert C. Browse more quick actions

6. Revert all of quick action's steps and refine with Recolor Artwork.

### Related resources

- Tutorial | Recolor your artwork
- Recolor your artwork using a color theme
- Illustrator discover panel

### Talk to us

Share feedback with Adobe Illustrator Community; we welcome your thoughts.

## Apply retro style to text

Search Last updated on Sep 25, 2023

Use Illustrator quick actions to give text a retro treatment with one click inside the app.

Try it in-app!

In Illustrator, apply retro styling to text immediately.

Apply retro style

Use this in-app process for applying retro style:

Open the Discover panel by choosing the icon at the upper right of the Illustrator workspace, or by pressing F1.

In the Discover panel, choose Browse > Quick actions, then choose Retro text.

Choose your type object, then choose Apply to place the retro look on the text.

3. Apply retro text
   Choose Revert if you need to remove the changes. Once you begin editing the retro text, Revert is unavailable.

Open REFINE WITH, then use Properties Panel or Appearance Panel to adjust the text.

To view more actions for objects, use Browse more quick actions in the Discover panel.

A. Refine With B. Revert C. Browse more quick actions

6. Revert all of quick action's steps and refine with the Properties panel and Appearance panel.

### Related resources

- Add text and work with type objects
- Tutorial | Add text to your designs
- Create 3D text effects
- Illustrator discover panel

### Talk to us

Send feedback through the Adobe Illustrator Community.

## Apply neon glow effect to text

Search Last updated on Sep 25, 2023

Use Illustrator quick actions in the app to add a neon glow effect with one click.

Try it in-app!

In Illustrator, put a neon glow effect on text immediately.

Apply neon glow effect

Use this in-app process for applying the neon glow effect:

Open the Discover panel by choosing the icon at the upper right of the Illustrator workspace, or by pressing F1.

In the Discover panel, go to Browse > Quick actions, then choose Neon glow text.

Choose your type object, then choose Apply to add the neon glow effect to the text.

3. Apply neon glow text
   Choose Revert if you need to remove the changes. Once you begin editing the neon glow text, Revert is unavailable.

Open REFINE WITH, then use Properties panel or Appearance panel to adjust the text.

To view more actions for objects, use Browse more quick actions in the Discover panel.

A. Refine With B. Revert C. Browse more quick actions

6. Revert all of quick action's steps and refine with the Properties panel and Appearance panel.

### Related resources

- Tutorial | Create neon text
- Create 3D text effects
- Illustrator discover panel

### Talk to us

Send feedback through the Adobe Illustrator Community.

## Apply old school style to text

Search Last updated on Nov 16, 2022

Use Illustrator quick actions in the app to add an old school style with one click.

Try it in-app!

In Illustrator, apply old school styling to text immediately.

Apply old school style

Use this in-app process for applying the old school style:

Open the Discover panel by choosing the icon at the upper right of the Illustrator workspace, or by pressing F1.

In the Discover panel, choose Browse > Quick actions, then choose Old school.

Choose your type object, then choose Apply to give the text an old school style.

3. Apply old school text
   Choose Revert if you need to remove the changes. Once you begin editing the old school text, Revert is unavailable.

Open REFINE WITH, then use Properties panel or Appearance panel to adjust the text.

To view more actions for objects, use Browse more quick actions in the Discover panel.

A. Refine With B. Revert C. Browse more quick actions

6. Revert all of quick action's steps and refine with the Properties panel and Appearance panel.

### Related resources

- Add text and work with type objects
- Illustrator discover panel

### Talk to us

Send feedback through the Adobe Illustrator Community.

## Stack objects

Search Last updated on Jan 3, 2025

Understand Illustrator object stacking and the controls used to rearrange that order.

As objects are drawn, Illustrator places later artwork into the stack after earlier artwork. With overlapping objects, their stacking order, also known as painting order, controls what appears in front; the active drawing mode also affects that order.

### Add new objects in the stacking order

New artwork can enter the stacking order through either Draw Normal mode or Draw Behind mode.

### Use Draw Normal mode

Choose Draw Normal mode when the new object should be added above the selected layer.

### Use Draw Behind mode

Choose Draw Behind mode when the new object should be added behind the selected layer.

In the Layers panel, artwork shown at the beginning is in front, while artwork listed at the end sits at the back of the stacking order. Items inside a layer follow the same kind of stacking. To manage how overlapping objects display, add multiple layers to the artwork.

### Change the stacking order using the Layers panel

With the Layers panel, change stacking order by using any of these methods:

- Drag the object name, then release the mouse button when the black insertion mark appears at the target position.
- Choose Object > Arrange, then choose Bring to Front, Bring Forward, Send Backward, Send to Back, or Send to Current Layer for the target placement.
- To reverse item order in the Layers panel, hold Ctrl (Windows) or Cmd (macOS), choose the item names, then choose Reverse Order from the Layers panel menu. Items can be reversed only when they occupy the same level of the layer hierarchy.

### Change the stacking order using Arrange options

Use any of these options:

- Choose the object to move, then choose Object > Arrange > Bring To Front or Object > Arrange > Send To Back when it should move to the top or bottom position within its group or layer.
- Choose the object to move, then choose Object > Arrange > Bring Forward or Object > Arrange > Send Backward when it should shift one object toward the front or one object toward the back of a stack.

Note

A path, group, or collective element cannot be moved into the top position in the Layers panel. That start position in the layer hierarchy is reserved for layers.

### More like this

- Layers
- Lock, hide, or delete layers
