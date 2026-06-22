# Formatting Characters Character Panel, Text Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Formatting characters and the Character panel; Text effects.

## Formatting characters and the Character panel

Search Last updated on Nov 21, 2025

### Get to know the After Effects Character panel and put it to work tailoring text properties — among them font, size, kerning, leading, and color.

When it comes to shaping and styling text, After Effects gives you plenty of creative latitude. Formatting at the character level happens in the Character panel. With text selected, anything you tweak in the Character panel touches that selected text alone. With no text selected, your Character panel tweaks reach the selected text layers along with those layers' selected Source Text keyframes, should any be present. And with neither text nor text layers selected, whatever you change in the Character panel sets the new defaults for the next text you enter.

- Bring up the Character panel by choosing Window > Character.
- Have the Character and Paragraph panels pop open on their own whenever a type tool is active by turning on Auto-Open Panels in the Tools panel.
- Send the Character panel's values back to their defaults by choosing Reset Character from the Character panel menu. That menu opens when you click the panel menu button in the panel's upper-right tab.

Note

There's no built-in character style in After Effects for underlining text, yet you can underline using an assortment of other graphical tricks. Among the options: a shape layer holding a path with a stroke, a stroke applied to an open mask, the Write-on effect, and a tightly spaced (kerned) run of underscore or dash characters animated in sequence.

### Fonts

Think of a font as one full collection of characters—letters, digits, and symbols alike—unified by a shared weight, width, and style. Beyond whatever fonts already sit in your operating system's usual install location, After Effects also reads font files kept in a dedicated local folder:

- Windows: Program Files\Common Files\Adobe\Fonts
- macOS: Library/Application Support/Adobe/Fonts

Drop a Type 1, TrueType, OpenType, or CID font into that local Fonts folder and it becomes visible only within Adobe applications.

Should a character's formatting call for a font your system lacks, After Effects swaps in a replacement and shows the absent font's name wrapped in brackets. This kind of substitution can crop up when a project authored on Windows is later opened on macOS, since the two platforms ship different default font sets.

Picking a font lets you choose the font family separately from its style.

- A font family (also called a typeface) groups together fonts built around one shared design—Times is one example.
- A font style is one variant of a single font inside that family—regular, bold, or italic, say. Which styles exist depends on the font itself. Lacking the style you're after, you can fall back on faux styles—software-simulated takes on bold, italic, superscript, subscript, all caps, and small caps. Where your machine holds several copies of one font, the name carries a trailing tag: (T1) for Type 1 fonts, (TT) for TrueType fonts, or (OT) for OpenType fonts.
- Type size in the layer is governed by the font size. After Effects measures fonts in pixels. Hold a text layer at 100% scale and its pixel figures line up one-to-one with the composition's pixels. Push that layer to 200% and the size looks twice as large—a 10 pixels font in the layer reads as 20 pixels in the composition. Continuous rasterization means the text stays crisp even as you raise the scale values.

Tip

- While picking fonts and styles from the Character panel menus, hit Enter (Windows) or Return (macOS) to confirm a choice, or tap Esc to back out without changing anything.
- Reach for Adobe Font Finder when you want to browse and search fonts by assorted traits.

### Font menu

Several tasks can be carried out straight from the Character panel's Font menu:

### Choose a font family

- Browse through font families with the Select the font family dropdown menu, or simply start typing a name until the one you want shows up.
- Jumping to the family above or below in the list works two ways: hover over the Select the font family menu and roll your mouse scroll wheel, or click into the Select the font family menu and press the Up Arrow or Down Arrow.
- Give the family a style—Regular, Italic, Bold, Light, and Oblique are typical choices.

From the choices on offer, the Character panel is where you settle on a font for your composition.

From the choices on offer, the Character panel is where you settle on a font for your composition.

### Choose a font style

- Bring up the Select the font family dropdown menu in the Character panel. The preview shown beside each font helps you settle on a style.
- When your chosen family ships without a bold or italic cut, the Character panel's Faux Bold button or Faux Italic button can stand in with a simulated version.

### Choose a font size

Type a fresh value into the Character panel's Set the font size button, or pick one from its list.

### Set fonts as favorites

- Flag a font as a favorite by clicking the star icon sitting beside it.
- Narrow the list to favorites alone by clicking the star icon up at the top of the Font menu.

Tagging fonts as favorites keeps them within easy reach as you build your compositions.

Tagging fonts as favorites keeps them within easy reach as you build your compositions.

### Display only fonts downloaded from Adobe Fonts

Want to see only the fonts you've pulled down from Adobe Fonts? Up at the Font menu's top edge, click the Show fonts from Adobe icon.

### Modify Font menu

- Resizing the font preview happens under Font Menu: open After Effects > Settings > Type (macOS) or Edit > Preferences > Type (Windows) and adjust the Preview Size value.
- To change how many recently used fonts sit at the top of the menu, head to the same After Effects > Settings > Type (macOS) or Edit > Preferences > Type (Windows) panel and edit the Number of Recent Fonts to Display value under Font Menu.

How the Font menu presents itself is configured through the Fonts Menu section of the Preferences dialog box.

How the Font menu presents itself is configured through the Fonts Menu section of the Preferences dialog box.

### Spacing between characters and lines

Several controls govern text spacing: non-breaking spaces lock chosen words together, kerning handles the gap within letter pairs, tracking spreads spacing evenly across a run, and leading sets the distance between lines.

The gap separating one line of text from the next is leading. Adding or removing space between particular letter pairs is kerning. Spreading a uniform amount of space across a stretch of letters is tracking.

Push kerning or tracking into positive territory and characters drift apart, widening the default gap; go negative and they crowd in, narrowing it.

Because tracking and hand kerning stack on top of each other, you can dial in individual letter pairs first, then loosen or tighten a whole text block afterward—and the relative kerning of those pairs survives untouched.

Note

Kerning and tracking figures do carry over to Japanese text, yet their usual job is tuning the aki (spacing) that sits between Roman characters.

### Create a non-breaking space

Mark a run of characters as non-breaking and they'll animate as a unit, behaving like one word.

1. Highlight whichever characters should stay together across a break.
   Select No Break from the Character panel menu.

### Specify leading

Within the Character panel, take any one of these routes:

Pick the leading you want from the Set the leading menu.

Highlight the current leading value and key in a different one.

Drag across the underlined leading value.

### Specify kerning

Automatic kerning comes in two flavors—metrics kerning and optical kerning. Metrics kerning draws on kern pairs, the data bundled inside most fonts. Those kern pairs record how far apart specific letter combinations should sit, such as LA, To, Tr, Ta, Tu, Te, Ty, Wa, WA, We, Wo, Ya, and Yo. By default, After Effects leans on metrics kerning to build kernel-specific pairs as you import or type. Certain fonts arrive with especially thorough kern-pair data.

When metrics kerning falls short, or when a single line mixes two typefaces or two sizes, the optical kerning option is worth trying. Optical kerning sizes the gap between neighboring characters according to how those characters are shaped.

There's also manual kerning, which lets you fine-tune the space sitting between any two letters.

- To draw on a font's bundled kerning data, pick Metrics under Set the kerning between two characters in the Character panel.
- For hands-on control, click between two characters using a type tool and enter a number for Set the kerning between two characters in the Character panel.

Note

Manual kerning won't work while a range of text is selected; reach for tracking in that situation instead.

### Specify tracking

- Apply tracking by entering a number for Set the tracking for the selected characters in the Character panel.

Tracking set to default value of 0.

Tracking set to 50.

Tracking set to 200.

### Text fills and strokes

With text, the fill colors in the region inside each character's shape, while the stroke traces the character's outline. When After Effects strokes a character, it centers that stroke right on the character's path—one half lands on either side of the path.

Through the Character panel you can give text both a color fill and a color stroke, dial in the stroke width, and rearrange how fill and stroke stack. These settings can be changed for one or more selected characters, for selected Source Text keyframes, for every bit of text in a layer, or for all text spanning several selected layers.

The compositing order of fill and stroke across a text layer is also yours to set, via the All Fills Over All Strokes or All Strokes Over All Fills options—and those override each character's own Fill Over Stroke or Stroke Over Fill setting.

Setting how fill and stroke composite within a text layer is a job for the Character panel.

Setting how fill and stroke composite within a text layer is a job for the Character panel. Note

Once text carries per-character 3D properties, the stroke-and-fill ordering between characters slips out of your hands: the Fill & Stroke menu inside the More Options property group in the Timeline panel grays out, and the Character panel's All Fills Over All Strokes and All Strokes Over All Fills options stop having any effect.

### Add a stroke (outline) to text

1. Select the characters to which you want to add a stroke.
   Dial in a stroke size using the Stroke Width property in the Character panel.

Pick the stroke color with the Stroke Color control in the Character panel.

To govern where the stroke sits, choose one of these in the Character panel:

- Stroke Over Fill and Fill Over Stroke: places the stroke of only the selected text either above or below its fill.
- All Strokes Over All Fills and All Fills Over All Strokes: pushes strokes above or below fills throughout the whole text layer.

### Change text fill or stroke color

Whatever text you type picks up its color from the Fill Color and Stroke Color controls tucked into the Character panel's upper-right corner. To recolor text that's already on screen, select it first.

- For the color picker route, click the Fill Color or Stroke Color control. For the eyedropper route, click the eyedropper button and then click anywhere on screen to grab that color.
- Trade fill and stroke colors by clicking the Swap Fill And Stroke button.
- Clear a fill or stroke with the No Fill Color button or the No Stroke Button—only one shows at a time, depending on whether the Fill Color or Stroke Color box is in front.
- Snap the fill or stroke to black or white using the Set To Black or Set To White button.
- Click the Fill Color or Stroke Color box to bring it to the front.

### Change text stroke line join

Where two stroke segments meet, the line join type decides how that corner is shaped. You pick the join type for a text stroke through the Line Join setting found in the Character panel's panel menu.

Choose the text layer, then open the panel menu from the Character panel.

Pick Miter, Round, or Bevel from the Line Join menu.

2. The Line Join setting in the Character panel's menu is what defines a text stroke's join type.

### Blend overlapping characters in a text layer

Inside the Timeline panel, expand both the text layer and the More Options group.

Pick a blending mode from the Inter-Character Blending menu.

Note

- Blending a text layer against the layers under it is a separate job—set a blending mode from the Modes column in the Timeline panel.
- Text layers carrying per-character 3D properties can't use inter-character blending.

### Text scale and baseline shift

The ratio of text height to width is set by horizontal scale and vertical scale. At their unscaled state, characters read 100%. Adjusting scale lets you squeeze or stretch selected characters across both dimensions.

How far text sits from its baseline is the job of baseline shift, lifting or dropping the selected text to form superscripts or subscripts.

- For scaling, drag the underlined figure or type a fresh percentage into Horizontal Scale or Vertical Scale in the Character panel.
- For baseline shift, enter a value in Baseline Shift in the Character panel. Positive numbers raise horizontal text and shift vertical text rightward; negative numbers drop text down or push it left of the baseline.

### Change the case of text

Text can be typed or formatted in uppercase, whether all caps or small caps. Format text as small caps and After Effects reaches for the small caps built into the font when the font supplies them. Absent those, After Effects manufactures faux small caps.

- Click the All Caps or the Small Caps button in the Character panel.
- Pick All Caps or Small Caps from the Character panel menu.

Note

Characters you originally typed in uppercase stay as they are under Small Caps formatting.

### Format text as superscript or subscript

Both superscript and subscript glyphs render at a smaller size; the superscript variant rides above the baseline while the subscript variant drops below it. Should the chosen font lack true superscript or subscript glyphs, After Effects synthesizes faux versions on its own.

- In the Character panel, click either the Superscript button or the Subscript button.
- Alternatively, pick Superscript or Subscript from the Character panel menu.

### Chinese, Japanese, and Korean text

For Chinese, Japanese, and Korean (CJK) typography, After Effects exposes a handful of dedicated controls. Glyphs in CJK fonts get the nickname double-byte characters, since encoding any single one of them takes more than a single byte.

Note

Want CJK font names spelled out in English? Turn on Show Font Names in English from the Character panel menu.

### Adjust tsume

With tsume, you trim the breathing room surrounding a glyph by whatever percentage you set, and the glyph keeps its original shape rather than being scaled. The trimming applies evenly to the space on either flank of the character.

1. Highlight the characters you intend to modify.
   Over in the Character panel, type or pick a Tsume percentage. Larger values squeeze neighboring characters closer together. Push it to 100% — the ceiling — and nothing remains between the glyph's bounding box and its em box.

### Specify how leading is measured

1. Highlight the paragraphs you intend to modify.
   From the Paragraph panel menu, choose either Top-To-Top Leading or Bottom-To-Bottom Leading. The currently active choice carries a check mark beside it.

### Use tate-chuu-yoko

Sometimes labeled kumimoji or renmoji, tate-chuu-yoko sets a run of horizontal characters inside a line that otherwise runs vertically.

Original layer (left) and after tate-chuu-yoko is applied (right)

Original layer (left) and after tate-chuu-yoko is applied (right)

1. Highlight the characters you want rotated.
   From the Character panel menu, choose Tate-Chuu-Yoko; an active state shows up as a check mark. Choosing Tate-Chuu-Yoko a second time switches it back off.

Rotated text stays fully editable — tate-chuu-yoko never locks you out, so the same editing and formatting moves you'd use elsewhere still apply to these characters.

### Smart quotes

Rather than the straight kind, smart quotes (the printer's variety) swap in a curved opening or closing quotation mark.

Switch them on by choosing Use Smart Quotes from the Character panel menu.

To reach the panel menu, click its button at the panel's upper-right tab.

### More like this

- Text (keyboard shortcuts)
- Blending modes and layer styles
- Per-character 3D text properties

## Text effects

Search Last updated on Jun 26, 2025

### Numbers effect

With the Numbers effect you can churn out numbers — random or in sequence — across a range of formats: plain decimals, dates, timecode, and even the live date and time captured when the frame renders. That makes it handy for building counters of all sorts. Sequential numbering caps its offset at 30,000.

This effect works with 8-bpc color.

In the Font Style dialog box you'll find these controls: Font, Style, Direction, and Alignment. Need to reopen that dialog? Click Options near the top of the effect's listing in the Effect Controls panel.

Type

Which numbering scheme to use:

Number

Decimal numbers.

Number [Leading Zeros]

Decimal numbers whose integer part is padded out to five digits.

Timecode [30], Timecode [25], and Timecode [24]

Standard non-drop-frame timecode formats (XX:XX:XX:XX) using the stated frame rate. Each of these timecode types takes the layer's current time as its starting reference.

Time

Hours plus minutes. Turn on Current Time/Date alongside it and the Value/Offset/Random Max value gets ignored. With Random chosen, the time falls between 0 (12:00 AM) and wherever the slider sits.

Numerical Date, Short Date, and Long Date

Leave Current Time/Date unchecked and Value/Offset/Random Max counts the days elapsed since January 1, 1995 (slider 0 lands on January 1, 1995). Check Current Time/Date and instead it counts days since today (slider 0 lands on the current date). Choose Random and the date is held between 0 (today or January 1, 1995) and the slider's value.

Note

Leap years are considered.

Hexadecimal

Base-16 numbers (digits from 0 to F). Each 0.0000125 rise in the Value/Offset/Random Max value bumps a hexadecimal number up by 0x1, while every 1.0 rise bumps it up by 0x10000. Under Random, the result stays between 0 and the Value/Offset/Random Max value.

Random Values

Caps random values at the Value/Offset/Random Max value. Set Value/Offset/Random Max to 0 and the values range randomly across the widest span they can reach.

Value/Offset/Random Max

What this controls shifts with the Type you picked and whether Random Values is on.

Decimal Places

Sets how many digits sit to the right of the decimal point.

Current Time/Date

Check this to anchor the time and date numbers to the present moment.

Position

The position of the numbers on the layer.

Display Options

Controls whether the text gets a fill, a stroke, or both at once. Fill Only pours color into the characters. Stroke Only outlines their edges with color. Fill Over Stroke puts the fill on top of the stroke; Stroke Over Fill flips that, putting the stroke on top.

Size

Size of the characters.

Tracking

The mean gap separating one character from the next.

Proportional Spacing

Spaces the numbers proportionally rather than as monospace.

Composite On Original

The text rides on top of the original image. Leave Composite On Original unchecked and the original image stays hidden.

### Alternatives to using the Numbers effect

When you need finer command over how text is formatted and animated, reach for text layers instead. (See Creating and editing text layers.)

Note

Drop the Current Time Format animation preset onto a text layer and it'll display the current time, matching whatever time display the project is set to.

See Example: Animate text as a timecode display.

### Timecode effect

What the Timecode effect does is lay a text overlay across a layer showing either timecode or frame-number data. Timecode baked in from outside sources — QuickTime, say — is left untouched by it.

When you need finer command over how text is formatted and animated, reach for text layers instead. (See Creating and editing text layers.)

Note

Drop the Current Time Format animation preset onto a text layer and it'll display the current time, matching whatever time display the project is set to. (See Example: Animate text as a timecode display.)

8-bpc color is what this effect operates in.

Display Format

Picks how the timecode reads out: SMPTE format, plain frame numbers, or feet-and-frames of 35mm or 16mm film.

Time Source

Where the effect pulls its source from.

Layer Source

Pulls the displayed timecode from the layer's own source footage.

Composition

Pulls the displayed timecode straight from the composition.

Custom

Opens up the Custom section's settings, which is how the effect used to behave. Those settings are Time Units, Drop Frame and Starting Frame.

Time Units

The frames-per-second (fps) rate this particular Timecode effect instance should run at. All this setting touches is the numbers the Timecode effect shows — it leaves the composition frame rate and the layer's source-footage frame rate alone.

Drop Frame

Check Drop Frame for drop-frame timecode, or clear it for the non-drop-frame kind.

Starting Frame

Which frame number the layer's opening frame is given.

Text Position

Where the text overlay sits within composition space.

Text Size

How big the text is, measured in points.

Text Color

What color the text takes.

Show Box

Toggles whether that colored box behind the timecode value appears.

Box Color

The shade of the box sitting behind the timecode value.

Opacity

How opaque the box behind the timecode value is.

Composite on Original

Decides if the box composites over the original or over a transparent layer instead.

### Alternatives to using the Timecode effect

For tighter control over text formatting and text animation, lean on text layers instead. (See Creating and editing text layers.)

Note

Assign the Current Time Format animation preset to a text layer and the current time appears, formatted to match the project's time display setting.

See Example: Animate text as a timecode display.

## See also

- [Application](script-application.md)
