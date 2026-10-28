# Adding and applying a paragraph style

The headline needs paragraph-style formatting, so create that style before applying it. The diagram below lays out the objects and properties touched by this step:

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/document-changes/image7.png)

```js
const { ColorModel } = require("indesign");
//First, check to see if the paragraph style already exists.
let myParagraphStyle = myDocument.paragraphStyles.item("Heading 1");
try {
  let myName = myParagraphStyle.name;
} catch (myError) {
  //The paragraph style did not exist, so create it.
  myParagraphStyle = myDocument.paragraphStyles.add({ name: "Heading 1" });
}
//We'll need to create a color. Check to see if the color already exists.
let myColor = myDocument.colors.item("Red");
try {
  myName = myColor.name;
} catch (myError) {
  //The color did not exist, so create it.
  myColor = myDocument.colors.add({
    name: "Red",
    model: ColorModel.process,
    colorValue: [0, 100, 100, 0],
  });
}
//Now set the formatting of the paragraph style.
myParagraphStyle.appliedFont = "Arial";
myParagraphStyle.fontStyle = "Bold";
myParagraphStyle.pointSize = 24;
myParagraphStyle.spaceAfter = 24;
myParagraphStyle.spaceBefore = 24;
myParagraphStyle.fillColor = myDocument.colors.item("Red");
//Apply the style to the paragraph.
myDocument.pages
  .item(0)
  .textFrames.item(0)
  .paragraphs.item(0)
  .applyParagraphStyle(myParagraphStyle, true);
//You could also use:
//myDocument.pages.item(0).textFrames.item(0).paragraphs.item(0).appliedParagraphStyle = myParagraphStyle;
```
