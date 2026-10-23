# Composing CJK characters - Change CJK composition preferences

Open Composition preferences: Edit > Preferences > Composition (Windows) or InCopy > Preferences > Composition (Mac OS). In Mojikumi Compatibility Mode, use any needed option:

Select Use New Vertical Scaling to apply the vertical-scaling method introduced with InDesign CS2. Roman text usually turns sideways, while CJK text can stay upright. In earlier InDesign versions, setting glyph scaling in the Character panel made X Scale and Y Scale behave differently depending on the orientation of the characters being scaled. In InDesign CS2 or later and in InCopy, scaling is applied consistently to every text character in the line, whether rotated or upright. If vertical text is not upright, X Scaling and Y Scaling are swapped, so Roman text scales in the same direction as upright CJK text. New documents enable this option; documents from InDesign CS and earlier open with it disabled.

Select Use CID-Based Mojikumi when the glyphs (jikei) in the current font should determine the correct JIS X 4051 Mojikumi Class instead of Unicode. This is useful with OpenType fonts. All CID fonts from AdobeJapan1-0 through AdobeJapan1-6 are supported by this feature; other fonts use Unicode.

Click OK.
