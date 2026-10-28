# Scripting Constants - AlternateGlyphsForm

AlternateGlyphsForm specifies the alternate glyph form used for text.

| Value | Description |
| --- | --- |
| AlternateGlyphsForm.DEFAULTFORM | Defaultform |
| AlternateGlyphsForm.TRADITIONAL | Traditional |
| AlternateGlyphsForm.EXPERT | Expert |
| AlternateGlyphsForm.JIS78FORM | JIS78FORM |
| AlternateGlyphsForm.JIS83FORM | JIS83FORM |
| AlternateGlyphsForm.HALFWIDTH | Half Width |
| AlternateGlyphsForm.THIRDWIDTH | Third Width |
| AlternateGlyphsForm.QUARTERWIDTH | Quarter Width |
| AlternateGlyphsForm.FULLWIDTH | Full Width |
| AlternateGlyphsForm.PROPORTIONALWIDTH | Proportional Width |
| AlternateGlyphsForm.JIS90FORM | JIS90FORM |
| AlternateGlyphsForm.JIS04FORM | JIS04FORM |

### Example

```javascript
textRef.textRange.characters[i].characterAttributes.alternateGlyphs == AlternateGlyphsForm.DEFAULTFORM;
textRef.textRange.characters[i].characterAttributes.alternateGlyphs == AlternateGlyphsForm.FULLWIDTH
```
