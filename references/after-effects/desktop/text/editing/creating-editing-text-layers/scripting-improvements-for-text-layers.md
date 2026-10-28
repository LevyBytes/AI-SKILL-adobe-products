# Scripting improvements for text layers

Through scripting you can also pull more detail about a text layer's font and style — even where the font file lives on disk.

The textDocument object exposes these read-only attributes:

- fontLocation: returns string with path of font file, providing its location on disk (not guaranteed to be returned for all font types; return value may be empty string for some kinds of fonts)
- fontStyle: returns string with style information —such as bold, or italic
- fontFamily: returns a string with the name of the font family

Whatever comes back reflects the first character in the text layer as of the current time.

Tip

To see Source Text property expressions in action, consult Writing expressions for source text and MarkerKey attributes (expression reference).
