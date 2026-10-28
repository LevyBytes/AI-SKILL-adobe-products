# getStyleAt function

This get function hands back the style value for one character at a chosen moment. The index argument is a number — the position of the letter or character whose style you want. The atTime argument is likewise a number, naming the composition time to read the style from, which matters when the style is keyframed and shifts over time.

```javascript
text.sourceText.getStyleAt(index, atTime);
```

Note

Calling text.sourceText.style is equivalent to text.sourceText.getStyleAt(0,0).

```javascript
// Gets the style of the first character at the beginning of the timeline

text.sourceText.getStyleAt(0,0);
```
