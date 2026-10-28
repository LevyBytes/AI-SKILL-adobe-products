# Text Objects - Text styles

Paragraph attribute objects and character attribute objects represent text-style elements such as font, capitalization, and justification.

These attribute objects belong to paragraph style and character style objects as properties.

The paragraph style and character style objects include apply to and remove methods, allowing scripts to assign or remove attributes from a particular paragraph, character, or text range.

To change how a text range is displayed, either apply an appropriate style or supply local attribute overrides at the text or paragraph level:

- character style objects target one character or a set of characters. They govern character features such as font, alignment, leading, language, and capitalization, all of which are properties of the character attribute object.
- paragraph style objects target paragraphs. They govern paragraph features such as first line indent, left indent, and right indent, all of which are properties of the paragraph attribute object.
