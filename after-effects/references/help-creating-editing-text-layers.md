# Creating Editing Text Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 8, 2026

### Create and edit text layers in Adobe After Effects to control typography, formatting, and layout for clear and flexible text design within compositions.

Text layers are how you bring type into a composition. They cover a lot of ground — animated titles, lower thirds, credit rolls, and dynamic typography all rely on them.

Animation can target an entire text layer's properties or zero in on a single character's color, size, position, and the like. The mechanism is text animator properties paired with selectors. Where a text layer is 3D, it may also hold 3D sublayers — one per character.

Being synthetic layers, text layers carry no footage item as their source — although certain footage items can have their text converted into text layers. They're vector layers too. Like shape layers and the rest of the vector family, text layers undergo continuous rasterization at all times, so scaling the layer or resizing the type keeps the edges sharp and resolution-independent. A text layer won't open in a Layer panel of its own, yet you can still work on it within the Composition panel.

Two flavors of text exist in After Effects: point text and paragraph text. Reach for point text when you're typing a lone word or single line of characters; paragraph text suits entering and formatting one or several paragraphs.

Vertical and horizontal point text

Paragraph text in a bounding box

Text copied out of other programs — Adobe Photoshop, Adobe Illustrator, Adobe InDesign, or any text editor — can be pasted straight into an After Effects text layer. Unicode support in After Effects means you can move characters back and forth between it and any other Unicode-aware application (every Adobe app qualifies).

The formatting of the text rides along in the Source Text property. Through that property you can animate the formatting and even swap the characters themselves — turning a letter b into a letter c, for instance.

Missing fonts get synchronized automatically by After Effects, which falls back on whatever fonts are on hand. Open a project built with fonts you haven't installed and the Resolve Fonts dialog pops up. When Adobe offers those fonts, you can let them sync to your Creative Cloud account and install. Any font with no online counterpart gets swapped by After Effects for the default font.

## Best practices for creating text and vector graphics for video

Type that reads cleanly on your monitor while you build it may turn out looking rough once it lands in the finished output movie. The culprit is often the playback device or the compression scheme used to encode the movie. Other vector graphics — shapes in shape layers, for one — face the identical risk. Raster images aren't immune either, but it's the fine, crisp detail of vector graphics that triggers the trouble most.

Bear these points in mind while building and animating text and vector graphics for video:

Always check your movie on the very device your viewers will use, such as an NTSC video monitor.

Steer clear of abrupt color shifts, particularly a jump from a deeply saturated color straight to its complement. Lots of compression schemes — the ones behind the MPEG and JPEG standards among them — struggle to encode such abrupt shifts, and the result can be visual noise hugging those transitions. On analog television, those same abrupt shifts can push spikes past the signal's permitted range, which likewise produces noise.

Whenever text sits over moving footage, give it a contrasting outline — a glow or a stroke — so it stays legible even as something matching its fill color slides by behind it.

Steer clear of thin horizontal elements; they can drop out of frame should they land on an even scan line during an odd field, or the other way around. Take the crossbar of a capital H — keep its height at three pixels or more. Bump up the font size, switch to a bold (or faux bold) style, or add a stroke to fatten those horizontal pieces.

For text that animates straight up or down — scrolling credits, for instance — set its vertical speed in pixels per second to an even multiple of the interlaced format's field rate. Pinning the speed there heads off a twitter that crops up when the motion drifts out of phase with the scan lines. NTSC favors values like 0, 119.88, and 239.76 pixels per second; PAL favors 0, 100, and 200 pixels per second.

Note

For a quick vertical text crawl — a credit roll, say — apply the Autoscroll - vertical animation preset found in the Behaviors category.

- One way to sidestep the twitter brought on by vertical motion, thin graphical elements, and fields is to roll the credits as a series of text blocks joined by transitions, like opacity fades.

A single trick clears up many of the usual text problems in video and compressed movie formats: blur the text layer. Even a light blur smooths color transitions and puffs out thin horizontal elements. For knocking down twitter specifically, the Reduce Interlace Flicker effect is the strongest pick — it lays on a vertical directional blur while leaving the horizontal untouched, so the image suffers less degradation than it would from other blurs.

## Scripting access to text baselines

Scripting lets you pull a text layer's baseline (x,y) coordinates. For TextDocument objects, the new sourceText.value.baselineLocs attribute hands back an array of floats giving each text line's baseline starting x and y value.

Line wraps in a paragraph text box are treated as multiple lines.

The array returns float values in the form of:

```
line0.start_x, line0.start_y, line0.end_x, line0.end_y, line1.start_x, line1.start_y, line1.end_x, line1.end_y … lineN-1.start_x, lineN-1.start_y, lineN-1.end_x, lineN-1.end_y
```

Note

When a line holds no characters, its start and end x and y values all come back as the maximum float value (3.402823466e+38F).

## Scripting improvements for text layers

Through scripting you can also pull more detail about a text layer's font and style — even where the font file lives on disk.

The textDocument object exposes these read-only attributes:

- fontLocation: returns string with path of font file, providing its location on disk (not guaranteed to be returned for all font types; return value may be empty string for some kinds of fonts)
- fontStyle: returns string with style information —such as bold, or italic
- fontFamily: returns a string with the name of the font family

Whatever comes back reflects the first character in the text layer as of the current time.

Tip

To see Source Text property expressions in action, consult Writing expressions for source text and MarkerKey attributes (expression reference).

## Enter point text

With point text, every line stands on its own — editing makes a line grow or shrink in length, but it never wraps onto the line below.

That short line crossing the type tool pointer pinpoints where the text baseline falls. With horizontal text, the baseline is the line the characters sit on; with vertical text, it runs through the characters' center axis.

Point text picks up whatever properties the Character panel currently holds when you create it. To adjust them afterward, select the text and tweak the Character panel settings.

- Select Layer > New > Text. That spawns a fresh text layer, dropping a Horizontal Type tool insertion point dead center in the Composition panel.

- Double-click a Type tool. Again a fresh text layer appears, with the matching type tool's insertion point landing at the Composition panel's center.

- Grab the Horizontal Type tool or the Vertical Type tool, then click somewhere in the Composition panel to drop the text insertion point.

Whether a type tool's pointer hovers over a text layer in the Composition panel changes its look. Away from any text layer it shows as a new text pointer ; select to spin up a fresh text layer. A Shift-click will always make a new text layer regardless.

Type to enter your characters. To start a fresh line, hit Enter on the main keyboard (Windows) or Return (macOS).

Edit > Paste is another route — it drops in text copied from any Unicode-aware application. Whatever you paste adopts the formatting of the first character already sitting in that text layer.

Wrapping up text editing takes one of three moves: Enter on the numeric keypad, switching to another tool, or Ctrl+Enter (Windows) / Command+Return (macOS).

## Enter paragraph text

With paragraph text, lines wrap to stay inside the bounding box. You're free to enter several paragraphs and apply paragraph-level formatting.

Resize the bounding box whenever you like, and the text reflows to fit the new rectangle.

Paragraph text inherits the properties held in the Character and Paragraph panels at creation time. To adjust them afterward, select the text and change the settings in those Character and Paragraph panels.

Grab the Horizontal Type tool or the Vertical Type tool.

Then, inside the Composition panel, make a text layer by doing one of these:

- Drag from a corner to lay out the bounding box.

- To build the box outward from a center point, Alt-drag (Windows) or Option-drag (macOS).

Whether a type tool's pointer hovers over a text layer in the Composition panel changes its look. Away from any text layer it shows as a new text pointer . Drag to spin up a fresh text layer.

Type to enter text. A new paragraph starts when you press Enter on the main keyboard (Windows) or Return (macOS). For a soft carriage return — a new line that doesn't open a new paragraph — use Shift+Enter on the main keyboard (Windows) or Shift+Return (macOS). Overrun the bounding box and an overflow icon turns up on it.

Edit > Paste is another route — it drops in text copied from any Unicode-aware application. Whatever you paste adopts the formatting of the first character already sitting in that text layer.

Wrapping up text editing takes one of three moves: Enter on the numeric keypad, switching to another tool, or Ctrl+Enter (Windows) / Command+Return (macOS).

## Select and edit text in text layers

Text in text layers stays editable at any point. Even after you've set it on a path, flagged it 3D, transformed it, or animated it, editing remains open to you. The one prerequisite is selecting the text first.

Note

To switch off the Path Options property group on a text layer, click the visibility switch for that Path Options property group. Shutting it off for a while can smooth out editing and formatting the text.

A type tool's pointer shifts appearance based on whether it sits over a text layer in the Composition panel. Directly above a text layer it turns into the edit text pointer ; select to drop the insertion point into the text already there.

- Dragging across the text selects a range of it.

- Or select a range by clicking, repositioning the pointer, then Shift-clicking.

- Double-clicking grabs a word; a triple-click grabs a line; a quadruple-click grabs a paragraph; and a quintuple-click anywhere selects every bit of text in the layer.

- For selecting text with the arrow keys, keep Shift down and tap the Right Arrow or Left Arrow key. To grab whole words this way, hold Shift+Ctrl (Windows) or Shift+Command (macOS) as you press the Right Arrow or Left Arrow key.

Note

Double-clicking a text layer in the Timeline panel selects all of its text and brings back the type tool you used most recently.

## Resize a text bounding box

Keep a type tool active and click the text layer in the Composition panel; that surfaces the bounding box handles.

Bring the pointer onto a handle — once it becomes a double arrow — then do one of the following:

- For one-directional resizing, just drag.

- Hold Shift while dragging to keep the bounding box's proportions intact.

- Scale outward from the center by Ctrl-dragging (Windows) or Command-dragging (macOS).

## Move a text layer

To reposition a text layer, drag it with the move pointer in the Composition panel. You can summon the move pointer without dropping out of text editing: slide the type tool off the text in the Composition panel, and once the move pointer appears, drag to shift the text. Holding the Ctrl (Windows) or Command (macOS) key works too, calling up the move pointer for a moment.

## Paste text from one text layer to another

Need the same wording reused across layers? Press Ctrl+V (Windows) or Command+V (macOS) to drop in copied text, or reach for Edit > Paste instead. Either route brings the text in with its original font and style intact.

Choosing Paste keeps whatever font and style the copied text already carried.

The Paste command drops the copied words in while leaving their source font and style untouched.

It's routine, while building a composition, to lift text off one layer and reuse it on another — think repeated titles, captions, or a phrase that recurs in several spots. Two paste routes exist, and which you pick depends on whether you're after the words, the formatting, or the whole package:

- Paste Text and Match Formatting
- Paste Text Formatting Only

## Paste Text and Match Formatting

When the goal is to bring copied words into a text layer but adopt the look of wherever they land, reach for Paste Text and Match Formatting. It lives on the Edit menu, and a right-click inside a layer you're editing surfaces it too.

Start at the layer holding the text you're after, switch to the Type tool, and drag across the words to select and copy them.

1. Copy the words you intend to drop in; on arrival they'll take on the destination layer's look.
   Move to the target text layer, drop the cursor where the text belongs, and carry out either of these:

- Right-click and select Paste Text and Match Formatting.
- Select Edit > Paste Text and Match Formatting.

2. What Paste Text and Match Formatting does is land your copied words in a different text layer while that layer's own font and style win out.
   The pasted words shift to match the destination layer's formatting on their own.

3. The destination layer's formatting takes hold over the pasted words automatically.

## Paste Text Formatting Only

To push formatting alone onto a whole Text layer — or onto one word inside it — turn to Paste Text Formatting Only. The Edit menu carries it, and so does the right-click menu while you're editing the layer.

Begin with the Text layer whose formatting you intend to copy.

Grab the Type tool, highlight the text carrying the look you're after, and copy it.

Pick the word or phrase that should receive the look, then go with one of these:

- Right-click and select Paste Text Formatting Only.
- Select Edit > Paste Text Formatting Only.

3. Paste Text Formatting Only is what carries formatting onto an entire text layer or just one chosen word.
   Whatever text receives the copied formatting takes on that look.

4. The copied formatting lands on either the chosen words or the whole text layer.
   To blanket an entire Text layer with the copied look, select the layer first, then apply Paste Text Formatting Only.

5. Spreading copied formatting across a full text layer means selecting the layer and then using Paste Text Formatting Only.

## Convert point or paragraph text

Note

Converting paragraph text into point text discards every character sitting beyond the bounding box. Want to keep all of it? Enlarge the bounding box until the full text shows before you convert.

With the Selection tool, click the text layer to select it.

Pick up a type tool, then right-click (Windows) or Control-click (macOS) somewhere in the Composition panel and choose Convert To Paragraph Text or Convert To Point Text.

Going from paragraph text to point text tacks a carriage return onto the close of every line save the final one.

Double-clicking the text layer in the Timeline panel reveals the paragraph text's bounding box and grabs a type tool for you automatically.

## Expanded text support - Universal Text Engine

Juggling several scripts at once gets simpler with the Universal Text Engine. Right-to-left languages like Hebrew and Arabic, plus Indic scripts such as Hindi, are all yours to type, edit, and animate. When your graphics carry Middle Eastern and South Asian languages, the Essential Graphics panel lets you set left-to-right or right-to-left orientation right there.

Jump straight into typing a new language — no detour through Preferences to swap the script. Mixing scripts within the same graphics elements is fair game too.

Here's what the Universal Text Engine brings to the table:

- Swappable text layers make multi-lingual editing of text layers and graphics quicker and less fussy.
- Animating text correctly from right to left no longer calls for any workarounds. After Effects reads each character and animates it according to its direction — fast, simple, and a real time-saver.
- Blending numbers or English letters into right-to-left languages just works. After Effects spots those characters and animates them in the right order on its own, so separate animation isn't needed.
- For both Korean and Hebrew, the Character Offset Effect now pins down the right Unicode range. That keeps the effect showing only the characters belonging to those languages.

## Change the direction of text

Left to right is how horizontal text runs, with stacked lines descending top to bottom. Vertical text drops from top to bottom; where it wraps to a new line, those lines progress in a rightward-then-leftward order.

Horizontal point text

Horizontal point text converted to vertical

Horizontal paragraph text

Horizontal paragraph text converted to vertical

With the Selection tool, click the text layer to select it.

Text can't be converted while you're in text-editing mode.

Pick up a type tool, then right-click (Windows) or Control-click (macOS) somewhere in the Composition panel and choose Horizontal or Vertical.

Flipping text between left-to-right and right-to-left is up to you — use the text direction buttons in the Paragraph panel to make the switch.

Reach for a text direction change while animating text or formatting it across different languages.

Switching text direction comes in handy during text animation work or when formatting in various languages.

## Font ligatures

For certain letter pairs, a ligature swaps in a single typographic glyph — provided the Open Type font supplies one. Turn them on through the Ligatures option in the Character panel. Across many fonts, After Effects supplies ligatures covering letter combinations from several languages. The Font Ligature checkbox down at the foot of the Character panel toggles the same thing.

In After Effects, font ligatures can lift both how polished your text looks and how easily it reads.

Reaching for font ligatures in After Effects tends to sharpen your text's appearance and make it read more smoothly.

## Hindi digits

Switching on the Hindi Digits option in the Character panel is what gets you Hindi digits. That same toggle sits as the Hindi Digits checkbox at the bottom of the Character panel.

## Convert text from Photoshop to editable text

Bring text layers over from Photoshop and they hold onto their styling while staying editable inside After Effects.

Did you import the Photoshop document with its layers merged? Then select the layer first and choose Layer > Create > Convert to Layered Comp to break the imported Photoshop document back out into separate layers.

1. Drop the Photoshop text layer into your composition and select it.
   Select Layer > Create > Convert to Editable Text.

From there the layer turns into an After Effects text layer and stops relying on the Photoshop text layer as its source footage item.

Should the layer carry layer styles, those convert into editable layer styles — exactly as though Layer > Layer Styles > Convert to Editable Styles had run on the layer ahead of turning the text editable.

## Do more with After Effects

Build striking motion graphics, animated text, and visual effects in Adobe After Effects. Design across film, TV, video, and the web.

### More like this

- Examples and resources for text animation
- Apply an effect or animation preset
- Formatting paragraphs with the Paragraph panel
- Preparing and importing Photoshop files
- Layer styles
