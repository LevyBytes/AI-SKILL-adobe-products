# Transparency Panel Overview, Change The Opacity Of Artworks, About Opacity Masks, Create Transparency Using Opacity Masks ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Transparency panel overview; Adjust opacity; Opacity mask overview; Adjust transparency using opacity masks; Clip and invert opacity masks; Deactivate, reactivate, or remove opacity masks; Create knockout shapes; Create transparency knockout groups; View transparency in the artwork; Blended objects overview; Blending mode types; Change and manage blending modes; Create blends; Blend Options overview; Modify the spine of blended objects; Reverse the stacking order in blended objects; Release or expand blended objects.

## Transparency panel overview

Review the Transparency panel options and what each one controls.

The Transparency panel lets you change object opacity and blending mode, build opacity masks, and add knockout effects in groups according to an object's transparency.

### Transparency panel

Open Window > Transparency to display the Transparency panel.

### Transparency panel menu

Use the Transparency panel menu to reach additional options.

## Adjust opacity

### Adjust opacity for an object, object group, layer, Fill, or Stroke.

Select the item whose opacity needs editing:

- Object or object group: choose the object or object group with the Selection tool.
- Layer: open Window > Layers, then choose the layer in the Layers panel.
- Fill or Stroke: choose the object with the Selection tool. Then open Window > Appearance, and in the Appearance panel choose Fill or Stroke.

Open Window > Transparency.

In the Transparency panel, move the Opacity slider or enter a specific value.

Note

An object moved into a group or layer takes on that group or layer opacity; after it is moved out, that inherited opacity no longer applies.

Changing opacity can create blend effects.

Use opacity adjustments to produce blend effects.

### Select all objects of the same opacity

A document can be searched for every object that uses the same opacity.

Select an object with the opacity you need. If you are not sure, deselect everything and type the Opacity value in the Transparency panel.

Open Select > Same > Opacity.

## Opacity mask overview

### Opacity masks can produce smooth color transitions.

An opacity mask uses a separate masking object to control transparency for the target object. The masking object defines which areas of the masked object are visible, hidden, or partly transparent. The mask source can be any colored object or raster image. Adobe Illustrator converts those colors to grayscale to calculate opacity levels: white areas reveal the masked object, black areas hide it, and gray areas create intermediate transparency.

Apply an opacity mask when transparency should vary across an object.

Use an opacity mask to make transparency change through an object.

After you create an opacity mask, the Transparency panel shows the masked object's thumbnail on the left and the masking object's thumbnail on the right. The two are linked by default, which the panel shows with a link between the thumbnails. Moving the masked object also moves the masking object. Moving only the masking object does not move the masked object. To reposition them separately, unlink them in the Transparency panel.

Opacity masks can move between Illustrator and Photoshop. Illustrator opacity masks become Photoshop layer masks, and Photoshop layer masks become Illustrator opacity masks.

## Adjust transparency using opacity masks

### Create opacity masks and adjust the relative positions of masked and masking objects to control transparency in your artwork.

### Create an opacity mask by selecting only the object to be masked

Use the Selection tool to choose the object or group on the canvas.

Open Window > Transparency. The Transparency panel shows the selected object or group thumbnail, with an empty thumbnail placeholder to its right for the masking object. If the thumbnails are not visible, choose Show Options from the panel menu.

Double-click the thumbnail placeholder. Illustrator completely masks the selected object or group on the canvas, shows that state with a black fill in the placeholder thumbnail, and enters mask-editing mode automatically.

Note

Isolation mode and mask-editing mode cannot be active at the same time.

An opacity mask lets you alter an object's transparency levels, which changes how objects behind it appear.

Use an opacity mask to change transparency levels on an object and affect the look of objects behind it.

Create or add a masking object, then position that object above the masked object.

Set Fill or Stroke on the masking object, or apply a gradient, as needed. Illustrator determines opacity by interpreting the masking object's colors as grayscale. In that grayscale result, white portions show the masked object, black portions conceal it, and gray portions produce different degrees of transparency.

Use these options in the Transparency panel when needed:

- Deselect Clip when the masked object's visibility should not be constrained to the masking object's shape.
- Select Invert Mask to exchange the light and dark areas in the opacity mask.
- To view the masking object in grayscale while hiding every other document object, use the masking object's thumbnail (right thumbnail): Option-click (macOS) or Alt-click (Windows). Repeat the shortcut to show the objects again.

Select the masked object's thumbnail (left thumbnail) to leave mask-editing mode. After leaving it, you can return to mask-editing mode and edit the mask whenever needed.

### Create an opacity mask by selecting the object to be masked and the masking object

Select the masking object on the canvas, right-click it, then choose Arrange > Bring to Front.

Note

Within a selection, the frontmost object in the stacking order is always used as the masking object.

Select the object, group, or layer to be masked along with the masking object.

Open Window > Transparency. The Transparency panel shows a thumbnail for the selected objects. If the thumbnail is missing, choose Show Options from the panel menu.

Choose Make Mask in the Transparency panel. A thumbnail for the masking object appears, and the left thumbnail no longer displays that masking object.

To enter mask-editing mode, choose the right thumbnail for the masking object, then adjust the mask as needed.

### Adjust the relative position of masked and masking objects

After an opacity mask exists, unlinking and relinking the masked and masking objects lets you change their relative positions.

Select the masked object on the canvas.

In the Transparency panel, choose the left thumbnail to confirm that mask-editing mode is not active.

Note

Unlinking and relinking are unavailable while mask-editing mode is active.

Use the Transparency panel controls to unlink or relink the masked object with the masking object.

- To unlink them, choose the link icon between the thumbnails.
- To relink them, choose the link icon between the thumbnails.

## Clip and invert opacity masks

Use Clip and Invert Mask to control how an opacity mask applies transparency to artwork.

Clipping limits the mask to the masking object's shape, while inversion swaps the light and dark areas that determine transparency.

Open Window > Layers.

In the Layers panel, target the masked object layer identified by a dashed underline.

Open Window > Transparency.

Use an opacity mask to adjust transparency in the artwork.

Control artwork transparency with an opacity mask.

In the Transparency panel, choose:

- Clip: adds a black background to the mask and crops the masked artwork to the masking object's boundaries. Deselect it to disable clipping. To make this behavior the default for new opacity masks, choose New Opacity Masks Are Clipping from the Transparency panel menu.
- Invert Mask: reverses the opacity of the masked artwork by flipping the masking object's luminosity values. For example, areas that are 90% transparent become 10% transparent after inversion. Deselect Invert Mask to restore the original mask state. To invert every new mask by default, choose New Opacity Masks Are Inverted from the Transparency panel menu.

Note

If Clip and Invert Mask are hidden, choose Show Options from the Transparency panel menu.

## Deactivate, reactivate, or remove opacity masks

Deactivate, reactivate, or remove opacity masks from your artwork.

Deactivating an opacity mask temporarily turns off the transparency effect, so the unmasked objects appear at full opacity. Reactivate the mask to bring the effect back.

Open Window > Layers.

In the Layers panel, target the masked object labeled with a dashed underline.

Open Window > Transparency.

Use one of these Transparency panel actions:

- To deactivate an opacity mask, Shift-click the masking object's thumbnail. A red X appears over the thumbnail while the opacity mask is inactive.
- To reactivate an opacity mask, Shift-click the masking object's thumbnail. The red X disappears when the opacity mask is active again.

Tip

The Transparency panel menu also lets you choose Disable Opacity Mask or Enable Opacity Mask to turn an opacity mask off or back on.

Use Disable Opacity Mask or Enable Opacity Mask in the Transparency panel when the transparency effect should be temporarily removed or restored.

The Transparency panel can disable an opacity mask for a temporary transparency-off state, then enable it again to restore the effect.

### Remove opacity masks

In the Layers panel, target the masked object labeled with a dashed underline.

Open Window > Transparency, then choose Release from the panel.

Tip

Release Opacity Mask in the Transparency panel menu also removes an opacity mask.

In the Transparency panel, choose Release to remove the opacity mask and return the masking shape as a regular object.

Choose Release in the Transparency panel when you need the opacity mask removed and the masking shape restored as a regular object.

## Create knockout shapes

Use opacity masks and transparency settings to build knockout shapes that conceal or expose portions of artwork.

Opacity masks and transparent imagery can define knockout shapes for vector artwork as well as raster artwork. The masking object's transparency determines which parts of grouped objects remain visible and which parts are suppressed. As one example, an object masked by a gradient can remove areas from artwork underneath it while producing a soft, shaded transparency transition.

Choose the masking artwork, then use Window > Transparency to display the Transparency panel.

Select Make Mask in the Transparency panel.

With the Selection tool, include the masked shape plus every underlying object that the knockout should influence.

Select Object > Group to group the selected artwork.

Tip

A transparent bitmap image can also be grouped with artwork so its transparency functions as the knockout shape.

Select the grouped artworks, then select Knockout Group until a checkmark appears beside the option in the Transparency panel.

Select Window > Layers. Open the group and choose only the artwork that contains the masking.

In the Transparency panel, select Opacity & Mask Define Knockout Shape to apply the opacity mask and knock out the shape.

Create a knockout effect in grouped artwork using the mask's shape and transparency.

Create a knockout effect in grouped artwork using the mask's shape and transparency.

## Create transparency knockout groups

Use transparency knockout groups in Illustrator when grouped objects need controlled visual interaction with one another.

Inside a transparency knockout group, objects do not blend with or show through neighboring objects in the same group. That behavior helps keep transparent artwork organized in layered, complex compositions.

This approach is helpful in artwork such as logos built from overlapping transparent elements. In a logo made from layered letters and gradients, for example, turning on Knockout Group keeps each letter's color and outline distinct by blocking accidental blending.

In the Layers panel, choose the group or layer you want to edit.

Select Windows > Transparency.

From the Transparency panel menu, select Show Options.

Set Knockout Group as needed:

- Enable: objects in the group are prevented from showing through one another.
- Disable: transparency effects inside the group remain visible.
- Inherit: the group takes its knockout behavior from the containing layer or group.

Prevent blending within a group by enabling the Knockout Group option in the Transparency panel.

Prevent blending within a group by enabling the Knockout Group option in the Transparency panel.

## View transparency in the artwork

### Find transparent regions in artwork by turning on the transparency grid.

Artwork that includes transparency may have to be flattened before you print it or save it. The transparency grid places a checkered canvas background behind transparent regions so those areas are easier to identify.

Select View > Show Transparency Grid. Transparent canvas areas now show a gray-and-white checker pattern.

To change transparency grid preferences, select File > Document Setup. Illustrator opens the Document Setup dialog.

Adjust the transparency grid settings to identify the transparent areas better.

Adjust the transparency grid settings to identify the transparent areas better.

For square size changes, choose an option from the Grid Size dropdown.

To set different grid colors, use one of these methods:

- Choose a preset from the Grid Colors dropdown.
- Choose a color box beside the Grid Colors dropdown. When the Color dialog opens, pick a custom color. Repeat the action for the second color box. The two boxes define the alternating colors used by the grid squares.

The larger checkered preview box on the right updates to show the selected grid size and colors.

To preview artwork as it would appear on colored paper in print, select Simulate Colored Paper.

## Blended objects overview

### Understand blended objects and use them to create visual transitions between colors and shapes.

Blends create gradual transitions and evenly spaced shapes between two objects. Blending can be used to:

- Place shapes at uniform intervals between two endpoints.
- Build smooth transitions between open paths.
- Combine colors and shapes into complex gradients that track a chosen path or shape.

Note

Blending objects is separate from applying Blending Modes or transparency to objects.

### Blend between objects

After a blend is created, Illustrator treats the blended result as a single object. Moving either original object, or changing anchor points on an original object, updates the blend. The intermediate objects created between the originals also lack their own anchor points. Expanding the blend separates it into individual objects.

### Rules to blend between different objects

These rules govern blended objects and the colors associated with them:

- You cannot blend between mesh objects.
- Blending colors:
- Blending a process color object with a spot color object creates steps that use process colors.
- Blending two different spot colors produces intermediate steps in process colors.
- Blending tints from one spot color creates steps expressed as percentages of that same spot color.
- For a blend between two patterned objects, the intermediate steps use only the fill from the object on the topmost layer.
- If objects blended together have Blending Mode set in the Transparency panel, the resulting steps use only the top object's blending mode.
- When objects with multiple appearance attributes are blended, including effects, fills, or strokes, Illustrator tries to interpolate those options.
- Symbol instances:
- Blending two instances of the same symbol shows the symbol pattern across the generated steps.
- Blending two instances of different symbols makes the steps show a mixed pattern drawn from both symbols.
- Illustrator initially creates blends as transparency knockout groups. When any steps contain overlapping transparent objects, those objects do not show through each other. To modify that behavior, select the blend and deselect Knockout Group in the Transparency panel.

## Blending mode types

Review how blending modes operate in Illustrator and how each mode changes color interaction among overlapping objects.

Blending modes determine how an object's colors combine with colors below it. After a blending mode is applied to an object, its effect can be seen on objects underneath it in the layer or group hierarchy.

They are often used for effects such as shading, highlights, texture overlays, and color styling. These terms help describe how blending modes affect artwork:

- Blend color means the original color of the selected object, group, or layer. Resulting color means the color produced by the blend.
- Base color means the color underneath the blend color in the artwork.
- Resulting color means the final color after the blending mode is applied.

Illustrator includes these blending modes:

Note

Blending modes such as Difference, Exclusion, Hue, Saturation, Color, and Luminosity do not blend spot colors.

For most blending modes, black specified as 100% K knocks out colors on the layer below, except when a rich black is applied with CMYK values.

## Change and manage blending modes

Isolate and apply blending modes to manage the way overlapping colors and objects combine.

Blending modes specify the interaction between overlapping colors. They can produce effects such as Multiply, Screen, or Overlay, adding depth, contrast, and texture to artwork. For example, to darken artwork without covering what sits behind it, apply the Multiply blending mode with shadows or darker shapes.

In the Layers panel, select an object or group.

Select Window > Transparency.

In the Transparency panel, choose a blending mode from the Blending Mode drop-down menu.

Tip

To adjust the blending mode for a fill or stroke, select the artwork, then choose the Fill or Stroke in the Appearance panel.

In the Layers panel, select the target icon beside the layer or group. Use the Transparency panel to select Isolate Blending.

Enhance the brightness and contrast of your artwork by applying the Color Dodge blending mode to the object's fill in the Appearance panel

Enhance the brightness and contrast of your artwork by applying the Color Dodge blending mode to the object's fill in the Appearance panel

To find every object that uses the same blending mode:

Deselect all objects.

Choose the desired blending mode in the Transparency panel.

Use Select > Same > Blending Mode to select matching objects.

## Create blends

### Create object blends that improve designs through smooth transitions across colors and shapes.

The Blend tool and Make command create blends: sets of intermediate objects and colors generated between two or more selected objects.

### Create a blend with the Blend tool

Select the Blend tool.

Do one of the following:

- To blend objects in sequential order without rotation, click anywhere on each object except its anchor points. The pointer changes to a plus sign when it is positioned over the object.
- To blend into a particular anchor point on an object, use the Blend tool to select that anchor point. When positioned over an anchor point, the pointer switches from a white square to a black square.
- For open paths, select one endpoint from each path.

Open the Blend Options dialog by double-clicking the Blend tool, then adjust settings such as Spacing and Orientation.

### Create a blend with the Make command

With the Selection tool, select the objects to blend.

Select Object > Blend > Make.

## Blend Options overview

### Use Blend Options to control transitions in blended objects by setting spacing and orientation.

For an existing blend, edit settings in the Blend Options dialog box. To open it, select the blended object, then double-click the Blend tool in the tool panel.

Adjust these Blend Options as required:

Change the blended object's Spacing and Orientation in the Blend Options dialog box.

Change the blended object's Spacing and Orientation in the Blend Options dialog box. Tip

You can also open Blend Options by using either of these methods:

- Select Object > Blend > Blend Options.
- Select Blend Options under Quick Actions in the Properties panel.

## Modify the spine of blended objects

### Change, replace, or reverse the spine to control how steps align and flow in a blended object.

Inside a blended object, the spine serves as the path that positions the steps. Initially, the spine is a straight line.

### Adjust the shape of spine

To reshape a spine, use the Direct Selection tool to drag the spine's anchor points and path segments.

### Replace the spine with a different path

Draw the object that will become the new spine.

Select both the spine object and the blended object.

Select Object > Blend > Replace Spine.

### Reverse the order of a blend on its spine

Select the blended object.

Select Object > Blend > Reverse Spine.

## Reverse the stacking order in blended objects

### Reverse stacking order when you need to change the visual layering of blended objects.

Select the blended object with the Selection tool.

Select Object > Blend > Reverse Front to Back. Illustrator inverts the blended object's stacking order, changing its visual layering.

## Release or expand blended objects

### Release or expand blended objects in Illustrator to turn them into separate, editable shapes.

### Release blended objects

Releasing a blended object removes the generated new objects and returns the original objects.

Select the blended object with the Selection tool.

Select Object > Blend > Release.

Restore the original options from the blended objects by selecting Release.

Restore the original options from the blended objects by selecting Release.

### Expand blended objects

Expanding a blended object breaks the blend into separate objects that can be edited individually like other objects.

Select the blended object with the Selection tool.

Select Object > Blend > Expand.

Edit the blended objects individually by selecting Expand.

Edit the blended objects individually by selecting Expand.
