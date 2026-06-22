# Working With Variable Font Axes, Scripting Support For Variable Font Axes

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working with Variable Font Axes; Scripting support for Variable Font Axes.

## Working with Variable Font Axes

Search Last updated on Apr 15, 2026

### Dig deeper into using variable font axes in After Effects — reaching them, adding them as text animators, applying selectors, and beyond.

On this page:

- Adding Variable Font Axes
- Adding Variable Font Axes as Text Animators
- Working with Variable Font Axis Animators
- Character spacing for Variable Font animation

- Using Selectors with Variable Font Axes
- Combining multiple selectors
- Advanced techniques

### Adding Variable Font Axes

Before you begin:

- When installing a variable font, hunt for files ending in .ttf, .otf, or .woff2. A good number of Adobe Fonts ship variable editions (tagged “Variable”), and the Font Technology filter narrows the list to them in seconds. Free variable fonts also turn up via places like Google Fonts and other open-source repositories.
- Walk through the suggested approaches for designing with variable font axes, building text animations efficiently, and streamlining the animation workflow.

Make a text layer and assign it a variable font from the Character panel.

When you open the Font dropdown menu in the newest beta build of After Effects, the Show Variable Fonts icon trims the list down to only the fonts that surface variable axes.

1. After Effects beta adds a Show Variable Fonts filter in the Font menu to display only variable fonts.
   With the text layer selected, head to the Text section of the Properties panel and click the Variable Font icon; a pop-up opens listing every axis the current font offers.

2. Use the Variable Font icon to display all available axes for the selected font.
   For each axis you adjust with the scrubbing control, the pop-up shows:

- Axis name: A readable label — Weight and Width, for instance.
- Current value: Whatever the axis is presently set to.

When text is selected (in text edit mode), the axes report values for those characters; with nothing selected, they report values for the first character. A selection spanning mixed values displays the range or otherwise flags the variation

To change the value numbers, drag across them left or right and watch the Composition panel update on the spot. You can instead click a value to switch to typing mode, key in the number you want, and press Enter to apply.

The font sets a minimum and maximum for every axis, so both scrubbing and typing stay inside the valid ranges. Hovering the hot text reveals that range.

4. Hovering over the hot text shows the minimum and maximum value defined by the font.
   Watch the changes appear at once in the Composition panel. Should a width or spacing change shift the layout, the text reflows on its own.

Variable fonts let you thicken just the first letter of a word, build weight differences inside one word, or craft custom ligatures and character combinations.

Double-click the text layer to enter text edit mode.

Pick the character(s) you intend to change, then open the Variable Font pop-up in the Properties panel by clicking the icon.

2. Use the Variable Font icon to display all available axes for the selected font.
   Tune the axis values so they affect only the chosen characters.

When no specific character is chosen, the values land on the first character alone.

### Adding Variable Font Axes as Text Animators

With text animators you can keyframe axis values across time and aim them at particular character ranges through selectors. Axis animators can be added in several ways.

- Through the Text Layer menu as you edit text
- Through Add Animator inside the timeline
- Through the Properties panel

### Using the Text Layer menu while editing text

Double-click the text layer to enter edit mode.

Highlight the characters you'd like to animate, or leave nothing selected to cover all of them.

In the Composition panel, right-click the highlighted text and pick Animate Text > Variable Font Axes > [Axis Name].

3. Highlight text in the Composition panel, and use the Animate Text menu to view available variable font axes.
   That spins up a fresh text animator carrying the axis property you chose.

### Using Add Animator in the timeline

In the Timeline panel, select the text layer and expand it to surface the Animate button.

Click the Animate button and pick Variable Font Axes > [Axis Name].

2. The Variable Font Axes option under Animate allows you to animate font properties, such as weight or width.
   A new animator complete with range selector is created for you automatically.

### Using the Properties panel

In the Timeline panel, select the text layer, then switch over to the Properties panel.

Open the Text Animation section and choose Add Animator > Variable Font Axes > [Axis Name].

2. The Add Animator button is selected in the Properties panel to apply animation controls to text properties.
   A fresh animator arrives along with a range selector.

Adding a new animator prompts After Effects to build a new Text Animator group holding the Font Axis property and a Range Selector, its starting value matching the current axis value of the selected characters.

### Working with Variable Font Axis Animators

Adding a variable font axis animator prompts After Effects to build this hierarchy:

The Timeline panel displays the hierarchy when you add a Variable Font Axis Animator to a text layer.

The Timeline panel displays the hierarchy when you add a Variable Font Axis Animator to a text layer.

### Keyframing Axis Values

Position the Current Time Indicator (CTI) within the Timeline panel at whatever moment you want the animation to begin.

To lay down the first keyframe at the value showing now, click the stopwatch icon beside the axis property.

Now jump the CTI forward to a later moment, then either scrub or type in a fresh number for that axis; doing so drops a second keyframe.

3. To make weight shift over the course of time, place keyframes on the text layer's Font Axis Weight property.

### Animation examples

Working with one axis at a time? Give these a go:

Example

Time and value changes

Result

Smooth weight transition

- 0:00 – Weight: 300 (Light)
- 1:00 – Weight: 700 (Bold)

Text gradually gets bolder

Width squeeze effect

- 0:00 – Width: 100% (Normal) 0:15 – Width: 50% (Condensed) 1:00 – Width: 100% (Normal)

Text squeezes in then returns

Slant or Italic Animation

- 0:00 – Slant: 0° (Upright)
- 1:00 – Slant: -15° (Slanted)

Text leans into italic style

| --- | --- | --- |

A single text layer can host several axis animators at once: drop in one axis first (Weight, say), then a second (such as Width), then a third (Slant), and key each on its own or in concert. The samples below show what happens when you stack several axes:

Example

Time and value changes

Result

Dynamic logo animation

Animator 1 - Font Axis Weight

- Time 0:00 - Weight: 300
- Time 1:00 - Weight: 900

Animator 2 - Font Axis Width

- Time 0:00 - Width: 75%
- Time 1:00 - Width: 125%

Text grows bold and wide simultaneously

| --- | --- | --- |

### Character spacing for Variable Font animation

How letter spacing gets recalculated while font axes (weight, width, and the like) animate is governed by the Variable Font Spacing property in After Effects.

Animating settings such as weight or width can stretch or compress individual glyphs. To keep the result tidy, After Effects is able to retune the gaps between letters on its own, and this control decides both the timing and the manner of those spacing corrections.

Open up the Text property group on your text layer.

Bring in a Variable Font Axis you'd like to animate.

Within More Options, pick one of these from the Variable Font Spacing dropdown menu:

- Adaptive: Steps in with per-character tracking compensation only where it helps, so spacing stays natural as the axes move.
- Per-Character: Keeps per-character tracking compensation switched on at all times.
- Default: Turns off per-character tracking compensation completely. Glyphs hold onto their initial spacing regardless of how the font axis shifts. Handy for creative looks where you'd rather let the font's own width swings reshape the whole line of text.

### Using Selectors with Variable Font Axes

Which characters a given animator touches, and to what degree, is decided by selectors. Every selector type plays nicely with variable font axis animators.

### Range Selector (Default)

A single unbroken stretch of characters to animate is what the Range Selector marks out. A few of its main properties are:

Property

Description

Values

Start & End

Defines which characters are affected

0% – 100% (or index/units based)

- 0% to 100% - affects all characters
- 0% to 50% - first half of text
- 50% to 100% - second half of text

Offset

Shifts the range along the text, and animating them creates "traveling" effects

Values: -∞ to +∞

Amount

Controls the strength of the effect

0% – 100%

- 100% - Full axis value applied
- 50% - Half the axis value applied
- 0% - No effect (base font value)

| --- | --- | --- |

A couple you might experiment with:

Example

Font axis setting

Range selector

Keyframes

Result

Weight wipe effect

Weight: 900 (Black)

- Start: 0%
- End: 0%

End keyframed from 0% - 100%

Bold weight "paints" across text from left to right

Traveling width wave

Width: 150% (Expanded)

- Start: 0%
- End: 20%
- Offset: Keyframed from -20% to 120%

Offset animated over time

Expanded width travels through the text

| --- | --- | --- | --- | --- |

### Shape and Ease

Property

Options

Description

Shape

Square

Hard edge between affected and unaffected characters

Shape

Ramp Up

Gradual increase into the range

Shape

Ramp Down

Gradual decrease out of the range

Shape

Triangle

Gradual in and out

Shape

Round

Smooth bell curve

Shape

Smooth

Very gradual transitions

Ease

High Ease

Very gradual transitions

Ease

Low Ease

Sharper transitions

| --- | --- | --- |

An example worth trying:

Example

Font axis setting

Range selector

Additional settings

Result

Smooth weight gradient

Font Axis Weight: 900

- Start: 0%
- End: 0%

- Shape: Ramp Down
- Ease High: 50%

Text starts bold and gradually lightens to base weight

| --- | --- | --- | --- | --- |

### Wiggly Selector

Per-character random shifts get applied to axis values here. A few of its main properties are:

Property

Description

Results

Max Amount / Min Amount

Maximum and minimum variation from base value

Creates random fluctuation per character

Wiggles/Second

How fast the random values change

Higher means more frenetic movement

Correlation

How related neighboring characters are

- 100% - All characters change together
- 0% - Each character changes independently

Temporal Phase

Randomizes timing offset per character

Adds variation in timing

| --- | --- | --- |

A couple you might experiment with:

Example

Font axis setting

Wiggly Selector settings

Additional settings

Result

Jittery Weight Effect

Weight: 400 (Regular)

- Max Amount: 100%
- Min Amount: -100%
- Wiggles/Second: 5
- Correlation: 0%

- Font Axis Weight: 200 (Light to Bold range)

Each character's weight randomly fluctuates independently

Breathing Width

Width: 100% (Normal)

- Max Amount: 50%
- Min Amount: -50%
- Wiggles/Second: 1
- Correlation: 80%

Text gently expands/contracts in waves

| --- | --- | --- | --- | --- |

### Expression Selector

Through JavaScript expressions you get exact, math-driven say over which characters get hit. The property that matters most here is Amount:

- Whatever value the expression evaluates to sets how strongly each character is affected
- It can read a character's index and position, the current time, and plenty besides

A couple you might experiment with:

Example

Expression (Amount)

Animator Axis

Result

Weight Based on Character Position

```

			// In Expression Selector Amount property:
linear(textIndex, 1, textTotal, 0, 100)
```

- Font Axis Weight: 900

First character lightest, last character boldest, linear gradient

Oscillating Slant

```

			// In Expression Selector Amount property:
Math.sin(time * 3 + textIndex * 0.5) * 50 + 50
```

- Slant: -15

Slant waves through text in a sine pattern

| --- | --- | --- | --- |

A handful of the expression variables you'll reach for most, plus the many others After Effects offers:

- textIndex - the running index of the current character, counted from 1
- textTotal - how many characters there are in total
- time - where the composition's playhead sits right now

### Combining multiple selectors

For richer results, a single animator can carry more than one selector.

Open out the animator inside the Timeline panel.

Beside the animator's name, click the Add dropdown.

From the choices on offer, pick a selector type:

- Range Selector
- Wiggly Selector
- Expression Selector

Once added, the fresh selector merges with whatever selectors are already there. Their Amount values get multiplied with one another. Take a Range Selector sitting at 50% and a Wiggly Selector at 80%: the product is a 40% net effect, which lets layers blend smoothly while still carrying random variation.

Below is something to try for a smooth wave with variation; it pairs a Range Selector with a Wiggly Selector so you get a bold wave carrying a touch of random jitter.

Component

Settings

Animator 1

- Font Axis Weight: 900

Range Selector 1

- Start: 0%
- End: 30%
- Offset: Animated -30% → 120%
- Shape: Smooth

Wiggly Selector 1

- Max Amount: 20%
- Min Amount: -20%
- Wiggles/Second: 3

| --- | --- |

### Advanced techniques

Apply distinct treatments to separate spans of characters. Two such examples:

Example

Animator settings

Selector settings

First letter bold, rest normal

Font Axis Weight: 900 (Black)

Range Selector:

- Based On: Characters
- Start: 1
- End: 1
- Units: Index

Alternating weight

Animator 1 (Odd characters):

- Font Axis Weight: 700
- Expression Selector Amount: (textIndex % 2) \* 100

Animator 2 (Even characters):

- Font Axis Weight: 300
- Expression Selector Amount: ((textIndex + 1) % 2) \* 100

Two Expression Selectors controlling odd/even characters

| --- | --- | --- |

Lean on expressions to tie axis values to other animation properties. Here are two you might weigh:

1. With Weight Driven by Position, how heavy the text reads tracks where the layer sits vertically.

```
// In Font Axis Weight property:
linear(transform.position[1], 0, thisComp.height, 300, 900)
```

2. With Width Responds to Audio, the text's width swells and shrinks in step with how loud the audio gets.

```
// In Font Axis Width property:
audioLevel = thisComp.layer("Audio Layer").audio.audioLevels;
linear(audioLevel[0], -48, 0, 75, 150)
```

Moving animators from one text layer to another goes like this: open the source layer in the Timeline panel, highlight the animator(s) you want, copy with Ctrl/Cmd + C, click the destination text layer, and paste with Ctrl/Cmd + V.

A few points worth bearing in mind:

- An axis animator carries over only when the destination font shares that same axis.
- Should the destination font be missing an axis, the source's axis gets pasted in anyway.
- Pasting across two different axes isn't allowed.
- Selectors of the Range, Wiggly, and Expression kinds all come through intact.
- Whatever keyframes you had stay put.

What about a text layer built from several fonts (mixed formatting)? Inside Text Animators:

- Per character, the animator applies its axis shifts according to that character's own font
- A character whose font lacks the axis is simply left untouched
- Range selectors keep aiming at character spans, though the outcome differs from font to font

A quick illustration:

- "He" uses VariableFont A (has Weight axis)
- "llo" uses VariableFont B (no Weight axis)

- Animator: Font Axis Weight - 900
- Result: "He" becomes bold, "llo" unchanged

## Scripting support for Variable Font Axes

Last updated on Jan 21, 2026

### A look at how ExtendScript can reach into and steer variable font axes within After Effects.

Variable font axes are reachable and adjustable from ExtendScript inside After Effects. That opens the door to scripting tweaks to properties such as Weight, Width, and Slant over your text layers, so building lively animations no longer means touching every setting by hand.

### Accessing Font Axes

```
// Get font object from text layer
var textLayer = comp.layer("My Text");
var sourceText = textLayer.property("Source Text");
var textDocument = sourceText.value;
var fontObject = textDocument.fontObject;

// Check if font has variable axes
if (fontObject && fontObject.designAxesData) {
    var axes = fontObject.designAxesData;

    for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        $.writeln("Axis: " + axis.name);
        $.writeln("  Tag: " + axis.tag);
        $.writeln("  Min: " + axis.minValue);
        $.writeln("  Max: " + axis.maxValue);
        $.writeln("  Default: " + axis.defaultValue);
    }
}
```

### Adding Axis Animators via Script

Create a composition and text layer

```
// Create a composition and text layer
var comp = app.project.items.addComp("Variable Font Demo", 1920, 1080, 1, 30, 30);
var textLayer = comp.layers.addText("Hello World");
```

Set the font to a variable font

```
// Set the font to a variable font
var textDocument = textLayer.property("Source Text").value;
textDocument.font = "ShantellSans";  // or any variable font name
textLayer.property("Source Text").setValue(textDocument);
```

Get the text property and animators group

```
// Get the text property and animators group
var textProp = textLayer.property("Text");
var animators = textProp.property("Animators");
```

Add a new animator

```
// Add a new animator
var animator = animators.addProperty("ADBE Text Animator");
var animatorProps = animator.property("ADBE Text Animator Properties");
```

Add a variable font axis using its 4-character tag

```
// Add a variable font axis using its 4-character tag
// Common tags: "wght" (Weight), "wdth" (Width), "ital" (Italic), "slnt" (Slant)
var weightAxis = animatorProps.addVariableFontAxis("wght");
```

Set a value with no keyframe

```
// Set a value (no keyframe)
weightAxis.setValue(700);
```

Create keyframes

```
// Or create keyframes
var italicAxis = animatorProps.addVariableFontAxis("ital");
italicAxis.setValueAtTime(0, 0);
italicAxis.setValueAtTime(2, 1);
```

### Checking Available Axes

```
function getAvailableAxes(textLayer) {
    var sourceText = textLayer.property("Source Text");
    var textDoc = sourceText.value;
    var fontObj = textDoc.fontObject;

    if (!fontObj || !fontObj.designAxesData) {
        return [];
    }

    var axisInfo = [];
    for (var i = 0; i < fontObj.designAxesData.length; i++) {
        var axis = fontObj.designAxesData[i];
        axisInfo.push({
            name: axis.name,
            tag: axis.tag,
            min: axis.minValue,
            max: axis.maxValue,
            default: axis.defaultValue
        });
    }

    return axisInfo;
}
```
