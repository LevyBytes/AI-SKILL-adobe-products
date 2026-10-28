# setIntent

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | D | No | Not available in Reader |

Assigns this OCG's intent array. For an OCG to touch content visibility, that array has to include constants.intents.view. The intents Object lists the values you can use.

See also getIntent and the intents Object.

Parameters

| Parameter | Description |
| --- | --- |
| aIntentArray | A string array that will become this OCG's intent array. |

Example: give every OCG in the document an intent of both View and Design.

```javascript
var ocgs = this.getOCGs();
for (i=0; i < ocgs.length; i++) {
    ocgs[i].setIntent( [ocgs[i].constants.intents.view,
    ocgs[i].constants.intents.design]);
}
```
