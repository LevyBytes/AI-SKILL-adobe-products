# Diacritic positioning

Short Arabic vowels appear as floating marks above or below consonants. Correct horizontal and vertical placement is therefore important for readable positioning over the base letters.

Through scripting, Diacritic Positioning is controlled with DiacriticPosition, which can use defaultPosition, loosePosition, mediumPosition, tightPosition, and opentypePosition. For a custom placement, XOffsetDiacritic adjusts the horizontal offset and YOffsetDiacritic adjusts the vertical offset.

```js
const { DiacriticPositionOptions } = require("indesign");
myTextFrame.contents = "ÙƒÙØªÙØ¨ÙŽ Loose";
myTextFrame.paragraphs.item(0).diacriticPosition = DiacriticPositionOptions.loosePosition;
myTextFrame.contents = "ÙƒÙØªÙØ¨ÙŽ Custom";
myTextFrame.parentStory.characters.item(1).xOffsetDiacritic = 150;
myTextFrame.parentStory.characters.item(1).yOffsetDiacritic = -150;
```
