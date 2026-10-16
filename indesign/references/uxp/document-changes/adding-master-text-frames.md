# Adding master text frames

Add the master text frames next. This diagram identifies the objects and properties used in the following code:

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/document-changes/image6.png)

```js
const { FirstBaseline } = require("indesign");
let myLeftPage = myMasterSpread.pages.item(0);
let myRightPage = myMasterSpread.pages.item(1);
let myLeftTextFrame = myLeftPage.textFrames.add();
myLeftTextFrame.geometricBounds = [3, 3, 25, 43];
myLeftTextFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;
myLeftTextFrame.textFramePreferences.textColumnCount = 3;
myLeftTextFrame.textFramePreferences.textColumnGutter = 14;
//Add a label to make the frame easier to find later on.
myLeftTextFrame.label = "BodyTextFrame";
let myRightTextFrame = myRightPage.textFrames.add();
myRightTextFrame.geometricBounds = [3, 54, 25, 91];
myRightTextFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;
myRightTextFrame.textFramePreferences.textColumnCount = 3;
myRightTextFrame.textFramePreferences.textColumnGutter = 14;
//Add a label to make the frame easier to find later on.
myRightTextFrame.label = "BodyTextFrame";
//Link the two frames using the nextTextFrame property.
myLeftTextFrame.nextTextFrame = myRightTextFrame;
```
