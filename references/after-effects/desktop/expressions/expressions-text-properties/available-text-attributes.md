# Available text attributes

By way of the style object, you can read and write these text-styling attributes:

- Font
- Font Size
- Faux Bold
- Faux Italics
- All Caps
- Small Caps
- Tracking
- Leading

- Auto Leading
- Baseline Shift
- Fill (enable/disable)
- Fill Color
- Stroke (enable/disable)
- Stroke Color
- Stroke Width

- Digit Set
- Scaling
- Kerning
- Tsume
- Baseline Direction
- Baseline Option

Every Text Property, including those presently in After Effects, is enumerated in the Expression Language flyout menu.

To expressions, a Text layer's Source Text property reads as a JavaScript string. You can pull the text itself with sourceText, but when you're altering style attributes it has to be written onto the style object via the setText method. Work through a few of the examples.
