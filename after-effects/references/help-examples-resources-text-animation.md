# Examples Resources Text Animation

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

### Apply text animation techniques in Adobe After Effects using practical examples and resources to inform your own motion design projects.

When it comes to compelling, inventive 2D and 3D text animation, After Effects hands you an enormous range of tools. The examples and resources gathered here walk you step by step through animating your text inside After Effects.

## Example: Animate characters with per-character 3D properties

What this example walks through is the simple way to animate single characters in 3D, having each one step forward out of the row and take a bow.

Create a New Composition.

2. Create a new text layer with the word ovation.
   Choose Animation > Animate Text > Enable Per-character 3D.

Choose Animation > Animate Text > Position.

Choose Animation > Animate Text > Rotation.

Over in the Timeline panel, inside the Animator group, put the X Rotation property at 45 and set Position to (0.0, 0.0, -100.0).

Expand Range Selector 1.

To lay down a starting keyframe at 0 seconds, click the stopwatch icon next to the Offset property, leaving its value at 0.

Put the Offset property value at -15%.

For the End property value, use 15%.

Shift the current-time indicator out to 10 seconds, then drop the Offset value at 100%.

Tap R to surface the whole layer's Rotation properties.

Put the layer's Y Rotation at -45, which spins the whole layer around so the characters' 3D movement reads more clearly.

14. Preview the composition.

## Example: Offset characters

This one shows the easy approach to animating scrambled characters so that they slowly resolve into a readable word or phrase; you get there by giving Character Offset a value and putting the range selector through an animation.

Animating the offset values for the characters in the word Galaxy

Animating the offset values for the characters in the word Galaxy

1. Create a new composition.
2. Create a new text layer with the word Galaxy.
   Choose Animation > Animate Text > Character Offset.

Over in the Timeline panel, put the Character Offset value at 5.

Expand Range Selector 1.

To set a starting keyframe at 0 seconds, click the Start stopwatch and put its value at 0%.

7. Slide the current-time indicator out to 5 seconds, then bring the Start value up to 100%.
   Set Character Alignment to Center.

8. Preview the composition.

## Example: Animate characters with the Wiggly selector

Here you'll see just how simple animating the position of single characters is. It also shows that the Wiggly selector, merely by being added to the layer, can swing the animation in a striking new direction.

Animating the color and position of the characters in the word Galaxy

Animating the color and position of the characters in the word Galaxy

1. Create a new composition.
2. Create a new text layer with the word Galaxy and set the color to blue in the Character panel.
   Choose Animation > Animate Text > Position.

Over in the Timeline panel, pull the Position property's y value leftward until every character has cleared the frame.

Expand Range Selector 1.

Click the Start stopwatch and let it stay at 0% at 0 seconds; after that, move the current-time indicator to 5 seconds and put Start at 100%.

7. Preview the composition.
   Collapse the Animator 1 group.

Check that nothing but the text layer name is selected in the Timeline panel, then pick Fill Color > Hue off the Animate menu. A fresh animator group, Animator 2, shows up in the Timeline panel.

Put Fill Hue at 1x+0.0.

For Animator 2, unfold the Range Selector 1.

Hit the Start stopwatch, holding it at 0% for the 0-second mark; next, slide the current-time indicator to 5 seconds with Start brought up to 100%.

13. Preview the animation. Falling from the top of the screen, the characters now shift in color, yet each one runs through the identical color and settles back on that same starting hue.
    Keep Fill Hue selected and, off the Add menu, pick Selector > Wiggly.

14. Unfold the Wiggly Selector 1 property and pick Add from the Mode menu.
    Add the Fill Hue property onto Animator 1 and then bring in the Wiggly selector, and the position wiggles right alongside the colors rather than the colors wiggling on their own.

## Example: Animate text tracking

This example shows how painless it is to single out characters while tracking a row of text. The Tracking and Line Anchor animator properties let you readily move every character bar one or a handful.

Animating the tracking values for the characters 3579 (left and center) so that only the 7 in the middle remains (right)

Animating the tracking values for the characters 3579 (left and center) so that only the 7 in the middle remains (right)

1. Create a new composition.
2. Create a new text layer and type 3579.
   Keep the text layer selected and click the Center Text button over in the Paragraph panel.

Select View > Show Grid.

Back in the Timeline panel, with the text layer picked, head to Animation > Animate Text > Tracking.

Confirm that Before & After is what's set in the Track Type menu.

Click the Tracking Amount stopwatch and let the value stay at 0 at 0 seconds.

Move the current-time indicator out to 5 seconds and pull the Tracking Amount value until every character has left the screen.

9. Preview the animation.
   With the current-time indicator sitting at 0, grab a snapshot of the Composition panel. That snapshot, together with the grids, is what you'll lean on to pin down where the number 7 originally sat once the animation ends.

10. Slide the current-time indicator out to the 5-second mark.
    Click the Show Snapshot button.

Back in the Timeline panel, with Animator 1 picked, grab Line Anchor off the Add menu.

Pull the Line Anchor value along until the 7 lands roughly back where it started, centered in the Composition panel.

Hitting the Show Snapshot button inside the Composition panel reveals the 7's exact starting spot. Adjust the Line Anchor value so the character drops back into that original location.

16. Preview the animation.

## Example: Use selectors to animate specific words

This example covers using selectors to pin an animation down to one particular word.

Animating the skew values in the characters in the word Speeding

Animating the skew values in the characters in the word Speeding

1. Create a new composition.
2. Create a new text layer with the words Speeding Saucer.
   Choose Animation > Animate Text > Skew.

Over in the Timeline panel, put the Skew value at 35.

5. Expand Range Selector 1.
   Confirm the current-time indicator sits at 0 seconds and click the End stopwatch.

Inside the Composition panel, pull both selector bars over to the left edge of the S in Speeding.

8. Push the current-time indicator out to 2 seconds; now drag the right selector bar until it reaches where the g in Speeding ends on its right.
9. Preview the composition.

## Example: Create a write-on animation

Faking the look of text being written across the screen is easy once you put the Opacity animator property to work.

Writing text on using the Opacity property

Writing text on using the Opacity property

1. Create a new composition.
2. Create a text layer with the characters 01234.
   Choose Animation > Animate Text > Opacity.

Set Opacity to 0%.

Open up Range Selector 1 and click the stopwatch icon beside Start.

Inside the Composition panel, pull the start selector over to the left edge of the text (its value will read 0).

Move the current-time indicator out to 5 seconds and drag the start selector in the Composition panel across to the right edge of the text (its value will read 5).

The Smoothness property sits at 100% out of the box. For a typewriter effect, open the Advanced property and drop Smoothness to 0%.

## Example: Animate text with multiple selectors

In this example the selectorValue parameter, placed in an Expression selector alongside the Wiggly selector, makes a row of characters blink on and off at random.

1. Create a new composition.
2. Create a new text layer.
   Over in the Timeline panel, pick Opacity off the Animate menu for the text layer.

In the Timeline panel, unfold the text layer together with its animator.

Pick the Range Selector, then remove it.

Alongside the text layer's Animator property group, choose Add > Selector > Wiggly.

Choose Add > Selector > Expression. Should the Wiggly selector not sit ahead of the Expression selector, drag it upward so it precedes that one.

Open the Expression Selector.

```
selectorValue * textIndex/textTotal
```

```
r_val=selectorValue[0];
if(r_val < 50)r_val=0;
if(r_val > 50)r_val=100;
r_val
```

11. Set the opacity to 0%, and preview the composition.

## Example: Animate text position with expressions

Here the textIndex and textTotal attributes are paired with the wiggle expression to animate a row of text.

1. Create a new composition.
2. Create a new text layer.
   Open up the text layer in the Timeline panel so the text properties show. Off the Animate menu, add a Position animator group.

3. Delete the default Range selector, Range Selector 1.
   Bring in an Expression selector by going to the Add menu and picking Selector > Expression. Open the Expression selector so its options show.

```
selectorValue * textIndex/textTotal
```

```
seedRandom(textIndex);
amount=linear(time, 0, 5, 200*textIndex/textTotal, 0);
wiggle(1, amount);
```

What the linear method does here is taper the peak wiggle amount downward as time passes.

8. Dial in the vertical position value. Higher values push the characters into stronger wiggling.
9. Preview your composition.

## Example: Animate text as a timecode display

Make sure the Timeline panel has no selection, then give the Current Time Format animation preset a double-click over in the Effects & Presets panel. (Typing its name into the Contains field of the Effects & Presets panel helps you turn up that animation preset.)

This spawns a new text layer whose Source Text property carries an expression that makes the text display the current time in whatever time display format the project is set to.

Other expressions sitting in the Global category will show time in a different format if you prefer.

With a layer selected, hit EE to bring up that layer's expressions.

## Do more with After Effects

Build remarkable motion graphics, animated text, and visual effects in Adobe After Effects. Craft work for film, TV, video, and the web.

### More like this

- Create a composition
- Enter point text
- Text selectors
- Set or add keyframes
- Preview video and audio
- Snapshots
- Timecode and time display units
- Time conversion methods (expression reference)
