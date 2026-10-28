# Adding master page items

The next step creates two master-page text frames. They sit near the page bottom and hold the auto-page-number special character.

In the "Hello World" sample, the text frame's size and placement came from the geometric bounds property, an array of top, left, bottom, and right frame coordinates. Those values align with the frame corners shown in the Control panel. For this footer setup, the bounds are top = 728, left = 70, bottom = 742, and right = 528, illustrated by the two figures that follow:

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/document-changes/image5.png)

```js
const { FirstBaseline, SpecialCharacters, Justification } = require("indesign");
let myMasterSpread = myDocument.masterSpreads.item(0);
let myLeftPage = myMasterSpread.pages.item(0);
let myRightPage = myMasterSpread.pages.item(1);
let myLeftFooter = myLeftPage.textFrames.add();
myLeftFooter.geometricBounds = [63, 3, 66, 9];
myLeftFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;
myLeftFooter.contents = SpecialCharacters.autoPageNumber;
myLeftFooter.parentStory.characters.item(0).pointSize = 11;
myLeftFooter.parentStory.characters.item(0).leading = 14;
let myRightFooter = myRightPage.textFrames.add();
myRightFooter.geometricBounds = [63, 92, 66, 99];
myRightFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;
myRightFooter.contents = SpecialCharacters.autoPageNumber;
myRightFooter.parentStory.characters.item(0).pointSize = 11;
myRightFooter.parentStory.characters.item(0).leading = 14;
myRightFooter.parentStory.characters.item(0).justification = Justification.rightAlign;
```
