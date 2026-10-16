# Creating Editing Text Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 8, 2026

Create and edit text layers in Adobe After Effects to control typography, formatting, and layout for clear and flexible text design within compositions.

Text layers are how you bring type into a composition. They cover a lot of ground — animated titles, lower thirds, credit rolls, and dynamic typography all rely on them.

Animation can target an entire text layer's properties or zero in on a single character's color, size, position, and the like. The mechanism is text animator properties paired with selectors. Where a text layer is 3D, it may also hold 3D sublayers — one per character.

Being synthetic layers, text layers carry no footage item as their source — although certain footage items can have their text converted into text layers. They're vector layers too. Like shape layers and the rest of the vector family, text layers undergo continuous rasterization at all times, so scaling the layer or resizing the type keeps the edges sharp and resolution-independent. A text layer won't open in a Layer panel of its own, yet you can still work on it within the Composition panel.

Two flavors of text exist in After Effects: point text and paragraph text. Reach for point text when you're typing a lone word or single line of characters; paragraph text suits entering and formatting one or several paragraphs.

Vertical and horizontal point text

Paragraph text in a bounding box

Text copied out of other programs — Adobe Photoshop, Adobe Illustrator, Adobe InDesign, or any text editor — can be pasted straight into an After Effects text layer. Unicode support in After Effects means you can move characters back and forth between it and any other Unicode-aware application (every Adobe app qualifies).

The formatting of the text rides along in the Source Text property. Through that property you can animate the formatting and even swap the characters themselves — turning a letter b into a letter c, for instance.

Missing fonts get synchronized automatically by After Effects, which falls back on whatever fonts are on hand. Open a project built with fonts you haven't installed and the Resolve Fonts dialog pops up. When Adobe offers those fonts, you can let them sync to your Creative Cloud account and install. Any font with no online counterpart gets swapped by After Effects for the default font.
