# Style object

A Text layer's styling properties all live on the style object, which you get to from the Source Text property like so:

```javascript
// Using the whole path to the Source Text property
text.sourceText.style

// Using the generic name for the current property
thisProperty.style
```

Writing style on its own works identically to either example above, though it can get muddled when you're mixing style attributes drawn from several Text layers.

The styling attributes of other Text layers are readable in the same way. Using the pick whip, link out to that other Text layer right where the first of the examples above begins.

```javascript
// Accessing the style object of a specific text layer

thisComp.layer("Other Layer Name").text.sourceText.style;
```
