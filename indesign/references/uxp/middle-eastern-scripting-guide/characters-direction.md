# Characters direction

Bidirectional text relies on stored direction data for individual characters in InDesign Server. Scripting can update that data with the CharacterDirection property, selecting a value from CharacterDirectionOptions: defaultDirection, leftToRightDirection, or rightToLeftDirection.

```js
const { CharacterDirectionOptions } = require("indesign");
myTextFrame.contents = "Farsi + L dir: 1234567890";
for (let i = 15; i < 25; i++) {
  myTextFrame.parentStory.characters.item(i).characterDirection =
    CharacterDirectionOptions.leftToRightDirection;
}
```
