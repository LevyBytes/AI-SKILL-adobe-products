# Animating Text (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 30, 2026

### Build compelling text animations in Adobe After Effects — presets, keyframes, and text properties together sharpen your motion design and accelerate the workflow.

Animated titles, lower thirds, credit rolls, and dynamic typography are among the many things text-layer animation is good for.

Just like the other layers in After Effects, whole text layers can be animated. Text layers go further, though, giving you extra animation capabilities for animating the text held inside them. Any of these approaches will animate text layers:

Animate the Transform properties — the same as with any layer — to alter the whole layer instead of its text content.

Apply text animation presets.

Animate the layer's source text, letting the characters themselves switch to other characters or take on different character or paragraph formatting across time.

Reach for text animators and selectors to animate a host of properties on individual characters or a span of characters.

Note

Turn on motion blur for the text layer to soften the edges and movement of animated text.

## Text animation presets

Text animation presets get browsed and applied the same way as any other animation preset. In After Effects, the Effects & Presets panel or Adobe Bridge handles browsing and applying animation presets. Reach the Presets folder within Adobe Bridge by choosing Browse Presets — it sits on both the Effects & Presets panel menu and the Animation menu.

Note

One excellent way to learn how seasoned users work in After Effects: apply an animation preset, then hit U or UU to expose just the layer properties that were animated or changed. Seeing those animated and modified properties reveals exactly what edits the preset's designer made to build it.

## Tips, notes, and caveats for text animation presets

Each text animation preset was authored within an NTSC DV 720x480 composition, with every text layer set in 72-point Myriad Pro. Certain preset animations carry the text on, off, or across the composition. Inside a composition far larger or smaller than 720x480, the preset's position values might not fit — an animation meant to begin off-frame, say, could instead start on-frame. When the text lands somewhere other than expected or vanishes without warning, tweak the position values for the text animator over in the Timeline panel or Composition panel.

Having applied a 3D Text animation preset, you might have to rotate the layer or introduce a camera that orbits the layer in order to view the 3D animation's results.

Presets in the Paths category will automatically swap the source text for the preset's own name and turn the font color white. Other character properties may shift as well under these presets.

Within the Fill And Stroke category sit presets capable of altering the fill color and stroke properties of whichever preset you apply. When a preset calls for a stroke or fill color, it only works if you've already given one to your text.

## Additional online resources for animation presets

Take a look at this roster of animation presets that ship with After Effects.

## Animate text with text animators

Three core steps make up the process of animating text with animators and selectors:

Attach an animator that names which properties get animated.

Apply a selector that sets how strongly each character feels the animator.

Fine-tune the animator properties.

Note

Removing the default selector makes the effect hit every character in the layer at all times. When that's done, animating a text layer differs little from animating any other layer.

In most cases the animator properties need no keyframes or expressions of their own. The usual pattern is to keyframe or write expressions only on the selector while supplying nothing but the final values for the animator properties.

In the Timeline panel pick a text layer, or in the Composition panel select the exact characters you intend to animate.

- Go to Animation > Animate Text, then pick a property off the menu.

Picking Enable Per-Character 3D adds no animator. Instead it grants 3D properties to the layer and to each character, which you can subsequently attach animators to.

- Pick a property from the Animate menu; within the Timeline panel that menu sits in the Switches/Mode column.

2. Choose a property from the Animate menu
   Over in the Timeline panel, set the animator property values. The common approach is to push the property you want animated to its final value and then steer the rest through the selectors.

Open up the Range Selector property group and lay down keyframes for the Start or End properties by clicking the property's stopwatch and then doing one of these:

- Enter the Start and End values in the Timeline panel.

Thinking of the Start and End properties of a range selector as character counts rather than percentages may feel more natural. To display those properties as numbers of characters (spaces counted), set Units to Index inside a range selector's Advanced property group.

- Within the Composition panel, drag the selector bars. Hovering over the middle of a selector bar flips the pointer to the selector movement pointer.

For a finer selection, open Advanced and set options and values to taste.

As an illustration, to fade opacity step by step from the first character through the last, attach an Opacity animator, set its opacity value (within the Animator property group) to 0, and then keyframe the End property of the default selector at 0% at 0 seconds and 100% at some later point.

Animating the opacity of a text layer using the Opacity animator and the End property

Animating the opacity of a text layer using the Opacity animator and the End property

Stacking several animators and several selectors — each contributing its own influence to the text animation — lets you build intricate animations.

## Text animator properties

Animator properties operate much as other layer properties do, except their values reach only the characters chosen by the animator group's selectors. Picking Enable Per-Character 3D grants 3D properties to a text layer; this command does not place any properties on an animator group.

- Adding an animator group to a text layer means selecting that layer in the Timeline panel and picking a property from the Animation > Animate Text menu or from the layer's Animate menu in the Switches/Modes column of the Timeline panel. The Timeline panel then shows a fresh animator group together with a default selector and the property you chose.
- Adding a new animator property onto an existing group means selecting that group in the Timeline panel and picking the property from the Animation > Animate Text menu or from the group's Add menu in the Timeline panel. That new property lands inside the same group as the existing one and shares its selectors.
- Removing an animator property or animator group is done by selecting it in the Timeline panel and pressing Delete.
- Stripping all animators off a text layer means selecting the layer in the Timeline panel and choosing Animation > Remove All Text Animators.
- Copying an animator group means selecting it in the Timeline panel and choosing Edit > Copy. Pasting it means selecting a layer and choosing Edit > Paste.
- Renaming an animator group requires it to be the sole selection; with that done, hit Enter (Windows) or Return (macOS) — alternatively, right-click (Windows) or Control-click (macOS) the name and pick Rename.
- Reordering an animator group means dragging it to a fresh spot in the Timeline panel's stacking order.

## Animator properties

Animator properties

Animator properties

Anchor Point

The characters' anchor point: the pivot around which transformations like scaling and rotation take place.

Position

Where the characters sit. Supply this property's values in the Timeline panel, or change it by selecting it there and then dragging the layer in the Composition panel with the Selection tool, which turns into a move tool over text characters. Such dragging leaves the z (depth) component of Position untouched.

Scale

The characters' scale. Since scale is measured against the anchor point, altering the z component of Scale shows no visible effect unless the text also carries an Anchor Point animator whose z value is nonzero.

Skew

How slanted the characters are. The Skew Axis names the axis the character is skewed along.

Rotation, X Rotation, Y Rotation, Z Rotation

Where per-character 3D properties are turned on, each axis can be rotated on its own. Without that, only Rotation (identical to Z Rotation) is available.

All Transform Properties

Every Transform property gets dropped into the animator group together in one move.

Line Anchor

How tracking aligns within each line of text. Left alignment is 0%, center alignment is 50%, and right alignment is 100%.

Line Spacing

The gap between lines within a multiline text layer.

Character Offset

How many Unicode values the selected characters shift by. A value of 5, for example, pushes the characters in a word five places along the alphabet, turning the word offset into tkkxjy.

Character Value

A replacement Unicode value for the selected characters, substituting each one with the single character that value stands for. A value of 65, for instance, turns every character of a word into the 65th Unicode character (A), so the word value reads AAAAA.

Character Range

Sets bounds on the character. This property shows up any time you add the Character Offset or Character Value property to a layer. Pick Preserve Case & Digits to hold characters inside their own groups. Those groups span uppercase Roman, lowercase Roman, digits, symbols, Japanese katakana, and the like. Pick Full Unicode when you want character changes with no limit.

Blur

How much Gaussian blur gets applied to the characters. The horizontal and vertical blur amounts can be set on their own.

## Text selectors

A default range selector ships inside every animator group. That default can be swapped out, extra selectors can be added to a group, and selectors can be pulled from a group.

In many ways selectors resemble masks: with a selector you mark which slice of a text range to affect and to what degree. Several selectors can run at once, and giving each one a Mode setting decides how it plays against the text and against the other selectors in the same group. When just a single selector exists, Mode governs how that selector and the text interact — Add is the standard behavior, while Subtract flips the selector's influence.

Note

Delete every selector from an animator group and the animator property values then reach all characters in the layer. The value of this trick lies in animating text properties set through the Character panel, which otherwise can't be animated (short of using Hold keyframes on the Source Text property itself).

Reach for a Wiggly selector to shift a selection within a set range over time. Lean on expression selectors when you want expressions to dynamically dictate how strongly characters respond to an animator property.

- Adding a selector via the Timeline panel means selecting an animator group there and picking Selector from the group's Add menu, or choosing Animation > Add Text Selector. From the submenu pick Range, Wiggly, or Expression.
- Adding a selector via the Composition panel means selecting a span of characters there, right-clicking (Windows) or Control-clicking (macOS) the text, and choosing Add Text Selector from the context menu. From the submenu pick Range, Wiggly, or Expression.
- Removing a selector means selecting it in the Timeline panel and pressing Delete.
- Renaming a selector requires it to stand as the only selection; once it does, tap Enter (Windows) or Return (macOS), or else right-click (Windows) or Control-click (macOS) its name and choose Rename.
- Copying a selector means selecting it in the Timeline panel and choosing Edit > Copy. Pasting it means selecting a layer and choosing Edit > Paste.
- Reordering a selector means dragging it within the Timeline panel to a new spot in the stack.

Adding a new range selector to an animator group

Adding a new range selector to an animator group

## Common selector properties

Mode

Sets the way each selector blends with the text and with the selector above it, much as several masks blend when you give them a mask mode. Say you want only one specific word to wiggle: place a range selector on that word, then add a Wiggly selector and switch it to Intersect mode.

Amount

Sets how strongly animator properties touch the character range. The animator properties leave the characters alone at 0%. At 50%, the characters get half of each property value. This one is handy for animating the outcome of animator properties across time. With an expression selector, expressions can set this dynamically.

Units and Based On

Which units apply to Start, End, and Offset. You may go with percentage or index units and base the selection on characters, characters minus spaces, words, or lines. Choosing Characters has After Effects tally spaces, which effectively stalls the animation between words while it animates the spaces between them.

Original (left) and with VEN selected by the range selectors, Based On set to Character, Shape set to Triangle, and Scale set to 40% (right)

Original (left) and with VEN selected by the range selectors, Based On set to Character, Shape set to Triangle, and Scale set to 40% (right)

## Range selector properties

On top of the properties they share with other selectors, range selectors carry these:

Start and End

Where the selection begins and ends. With the selector selected in the Timeline panel, you tweak the Start and End properties by dragging its selector bars over in the Composition panel.

Offset

How far to shift the selection away from the one the Start and End properties define. Adjusting Offset right in the Composition panel during a Start or End edit calls for a Shift-click on those selector bars using the Selection tool.

Shape

Governs the way characters get selected across the span between Start and End. Every option reshapes the selection by forming transitions between selected characters with the chosen shape. Take Ramp Down: animating the Y Position values of text characters with it sends the characters drifting at an angle from the lower left up toward the upper right. The available choices are Square, Ramp Up, Ramp Down, Triangle, Round, and Smooth.

Swapping among the Shape options can transform an animation's look dramatically.

Original (left) and after selecting the entire word, setting Based On to Characters, animating the y Position value so that the word is at the bottom of the frame, and setting Shape to Ramp Down (right)

Original (left) and after selecting the entire word, setting Based On to Characters, animating the y Position value so that the word is at the bottom of the frame, and setting Shape to Ramp Down (right) Setting Shape to Triangle

Setting Shape to Triangle

Smoothness

Sets how long the animation spends transitioning from one character to the next when the Square shape is in use.

Ease High and Ease Low

Sets how fast the change happens as selection values move from fully included (high) to fully excluded (low). When Ease High sits at 100%, for instance, the character shifts more gradually (easing into the change) over the fully-to-partially-selected stretch. At Ease High of -100%, the character shifts fast over that same fully-to-partially-selected stretch. With Ease Low at 100%, the character shifts more gradually (easing into the change) over the partially-selected-to-unselected stretch. With Ease Low at -100%, the character shifts fast over that partially-selected-to-unselected stretch.

Randomize Order

Shuffles the sequence in which the property reaches the characters the Range selector marks. (The Wiggly selector, by contrast, randomizes the animator property's value instead.)

Random Seed

Works out the shuffled order of a range selector once the Randomize Order option is turned On. With Random Seed at zero, the seed derives from its animator group. To duplicate an animator group while keeping the same shuffled order as the original, set Random Seed to something other than zero.

## Wiggly selector properties

Beyond the properties it has in common with other selectors, the Wiggly selector adds these:

Max Amount and Min Amount

Sets the span of variation away from the selection.

Wiggles/Second

The count of variations away from the chosen selection happening each second.

Correlation

How closely the variations on each character track one another. At 100%, every character wiggles by an equal amount in unison, whereas at 0%, every character wiggles on its own.

Temporal and Spatial Phase (revolutions + degrees)

The wiggle's variation, keyed to your animation's phase in time (temporal) or per character (spatial).

Lock Dimensions

Scales every dimension of the wiggled selection by one shared value. This proves handy while wiggling the Scale property.

Random Seed

See Randomness and random seeds.

## Expression selector properties

Open up the Expression Selector property group, then open the Amount property group, and the expression field appears in the Timeline panel. Out of the box, the Amount property starts off carrying the expression selectorValue \* textIndex/textTotal.

Through expression selectors you state the selector values on a per-character basis. Evaluation happens a single time for every character, and on each pass the input parameter textIndex gets refreshed so it lines up with that character's index.

Note

Drop the Text Bounce or Inch Worm animation preset onto a text layer if you want a look at expression selectors in action. With a layer selected, hit EE to bring up every expression that layer carries.

Beyond the expression elements available to you in other places, the attributes listed below let you animate selections across all sorts of inventive paths:

textIndex

Hands back where the character, word, or line falls in the index.

textTotal

Hands back how many characters, words, or lines there are altogether.

selectorValue

Gives you whatever value the selector before it produced. Picture this value as whatever feeds in from the selector positioned above the expression selector in the stacking order.

Note

Only the expression selector supports the textIndex, textTotal, and selectorValue attributes. Drop them anywhere else and a syntax error is what you get.

Fill color changes randomly using an expression animator.

Fill color changes randomly using an expression animator.

## Text anchor point properties

Position, rotation, and size-type properties of characters get animated by text animators, all measured against an anchor point. Whether transformations pivot around the anchor point of each character, each word, each line, or the whole text block is something you set through the text property called Anchor Point Grouping. On top of that, the Grouping Alignment property lets you steer how the character anchor points line up against the group's own anchor point.

Original text, then rotated and with Grouping Alignment set to Character, Word, and Line

Original text, then rotated and with Grouping Alignment set to Character, Word, and Line

In the Timeline panel, open the text layer, then open the More Options property group.

- From the Anchor Point Grouping menu, pick the way the character anchor points should be grouped.

- Drop the Grouping Alignment values to shift each anchor point upward and toward the left.

- Bump up the Grouping Alignment values to shift each anchor point downward and toward the right.

For a run of capital letters, a Grouping Alignment value of 0%, -50% tends to land the anchor point in the center. Where lowercase letters are involved, or a mix of lowercase and uppercase, 0%, -25% is worth trying for that centering.

Pick certain properties in the Timeline panel for a text animation and the anchor points turn up in the Composition panel. Among those properties are Anchor Point Grouping, Grouping Alignment, plus the animator properties Anchor Point, Position, Scale, Rotation (the per-character 3D variants included: X Rotation, Y Rotation, Z Rotation).

## Per-character 3D text properties

Through 3D animator properties you can shift, scale, and spin each character on its own across three dimensions. Switch on per-character 3D properties for the layer and these become accessible. A third dimension is added to Position, Anchor Point, and Scale; on top of that, two more Rotation properties (X Rotation and Y Rotation) open up. What used to be the lone Rotation property on 2D layers gets renamed Z Rotation.

There is an auto-orientation choice on 3D text layers called Orient Each Character Independently, and it turns every character toward the active camera by pivoting it around that character's own anchor point. Picking Orient Each Character Independently switches on per-character 3D properties for the text layer if those weren't already on.

Switch on per-character 3D properties and every character inside the text layer starts acting like its own individual 3D layer within that text layer, which itself works the way a precomposition with collapsed transformations does. The way per-character 3D layers cross other 3D layers follows the usual rules that govern 3D precompositions with collapsed transformations.

The moment you switch on 3D properties for a text layer's characters, the text layer turns into a 3D layer on its own. So adding any per-character 3D property to the layer makes it a 3D layer—be that through copying and pasting the Y Rotation property off another layer or applying a 3D Text animation preset.

A special icon in the Switches column marks out a per-character 3D layer.

Per-character 3D layers cannot use inter-character blending or the Fill & Stroke options found in the More Options property group.

Rendering performance can drop with per-character 3D layers. Convert a layer back from per-character 3D to 2D and you lose the dimensions and animator properties that belong to per-character 3D layers. Turning per-character 3D on again won't bring those property values back.

- Switch on per-character 3D animator properties for a text layer by selecting it and picking Enable Per-character 3D either from the Animation > Animate Text menu or from the layer's Animate menu in the Timeline panel.
- Turn off per-character 3D animator properties for a text layer and drop it down to a 2D layer by selecting that layer's Per-character 3D switch in the Switches column of the Timeline panel.
- Turn off per-character 3D animator properties for a text layer yet hold onto it as a 3D layer by choosing Enable Per-character 3D so it becomes deselected.

## Creating and animating text on a path

Put a mask on a text layer and you can have the text trail along the mask as though it were a path. From there the text can be animated along that path, or the path itself can be animated. Either open or closed masks will serve as paths for text. Once the path exists, reworking it later is always possible. If a closed mask is what you're using as the text path, be sure the mask mode is set to None.

Note

Switch off the Path Options property group on a text layer by selecting the visibility (eyeball) switch belonging to the Path Options property group. Shutting the Path Options property group off for a while can take some of the friction out of editing and formatting your text.

## Position text along a mask path

1. Create a text layer and enter text.
   Keep the text layer selected and, with the Pen tool or a mask tool, draw a mask over in the Composition panel.

Over in the Timeline panel, open the text layer's Path Options property group and pick the mask from the Path menu. Whatever alignment the Paragraph panel specifies is what the text adopts on its own.

Shift where the text sits on the path by adjusting the text margins through the First Margin and Last Margin properties in the Timeline panel, or instead try one of these inside the Composition panel:

- To slide text along the path, grab any of these and drag: left margin control , center margin control , or right margin control .

- Shift-drag whichever margin control snaps that control onto the mask vertices.

To bring up the margin controls in the Composition panel, select a property under the Text property group in the Timeline panel. Which controls you get depends on the text alignment in force.

4. Changing the Last Margin of path text in the Composition panel
