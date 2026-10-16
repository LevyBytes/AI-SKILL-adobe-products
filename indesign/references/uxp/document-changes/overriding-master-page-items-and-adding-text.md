# Overriding master page items and adding text

Override the previously created master text frame, then insert text into it.

```js
let myTextFrame = myDocument.masterSpreads
  .item(0)
  .pages.item(1)
  .textFrames.item(0)
  .override(myDocument.pages.item(0));
//Add text by setting the contents of an insertion point to a string.
//In JavaScript, "\r" is a return character.
myTextFrame.insertionPoints.item(0).contents = "Headline!\r";
```
