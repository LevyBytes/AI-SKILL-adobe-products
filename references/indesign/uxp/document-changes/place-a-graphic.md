# Place a graphic

Graphic placement follows the same pattern as text import: a dialog lets the user choose the graphic. After placement, InDesign gives back the graphic object, not the containing frame. Use the graphic's parent property to reach that frame, then apply the object style to it.

```javascript
const { FitOptions, TextWrapModes } = require("indesign");
function placeGraphicFrame(myDocument, myGraphicFile) {
    if (!myDocument || !myDocument.isValid) throw new Error("Provide a valid document.");
    if (!myGraphicFile) return;
    let myGraphic = myDocument.pages.item(0).place(myGraphicFile);
    //Since you can place multiple graphics at once, the place method
    //returns an array. To get the graphic you placed, get the first
    //item in the array (JavaScript arrays start with item 0).
    myGraphic = myGraphic[0];
    //Create an object style to apply to the graphic frame.
    let myObjectStyle = myDocument.objectStyles.item("GraphicFrame");
    try {
        let myName = myObjectStyle.name;
    }
    catch (myError){
        //The object style did not exist, so create it.
        myObjectStyle = myDocument.objectStyles.add({name:"GraphicFrame"});
    }
    myObjectStyle.enableStroke = true;
    myObjectStyle.strokeWeight = 3;
    myObjectStyle.strokeType = myDocument.strokeStyles.item("Solid");
    myObjectStyle.strokeColor = myDocument.colors.item("Red");
    //The frame containing the graphic is the parent of the graphic.
    let myFrame = myGraphic.parent;
    myFrame.applyObjectStyle(myObjectStyle, true);
    //Resize the frame to a specific size.
    myFrame.geometricBounds = [0,0,144,144];
    //Fit the graphic to the frame proportionally.
    myFrame.fit(FitOptions.PROPORTIONALLY);
    //Next, fit frame to the resized graphic.
    myFrame.fit(FitOptions.FRAME_TO_CONTENT);
    let myBounds = myFrame.geometricBounds;
    let myGraphicWidth = myBounds[3]-myBounds[1];
    //Move the graphic frame.
    let myPageWidth = myDocument.documentPreferences.pageWidth;
    let myTopMargin = myDocument.pages.item(0).marginPreferences.top;
    myFrame.move([myPageWidth-myGraphicWidth, myTopMargin]);
    //Apply a text wrap to the graphic frame.
    myFrame.textWrapPreferences.textWrapMode = TextWrapModes.BOUNDING_BOX_TEXT_WRAP;
    myFrame.textWrapPreferences.textWrapOffset = [24, 12, 24, 12];
}
module.exports = { placeGraphicFrame };
```

Pass a valid InDesign document, a graphic-file path, and a document containing the named Red color and Solid stroke style. The example creates or updates the GraphicFrame object style.
