# Differences from TextDocument

Given that CharacterRange accesses a TextDocument object, the bulk of TextDocument's methods and attributes remain available while working with CharacterRange. This page covers only those attributes and methods that belong uniquely to CharacterRange or that behave differently on it.

On a CharacterRange instance, the following attributes and methods cannot be used:

| Attributes | Methods |
| --- | --- |
| baselineLocs | characterRange |
| boxText | paragraphCharacterIndexesAt |
| boxTextPos | paragraphRange |
| boxTextSize |  |
| lineOrientation |  |
| paragraphCount |  |
| pointText |  |

### Examples

The snippet below bumps up the font size of the TextDocument's first character and fixes every remaining character at fontSize 40.

```javascript
var textDocument = app.project.item(index).layer(index).property("Source Text").value;
var characterRange = textDocument.characterRange(0,1);

characterRange.fontSize = characterRange.fontSize + 5;
textDocument.characterRange(1,-1).fontSize = 40;
```
