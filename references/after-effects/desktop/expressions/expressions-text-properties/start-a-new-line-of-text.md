# Start a new line of text

To begin a fresh line of text, drop \r into a string expression. As an illustration, the expression below takes the original text from a layer, duplicates it on that same layer, and restates it all in uppercase on a new line:

```javascript
  text.sourceText + "\r" + text.sourceText.toUpperCase()
```
