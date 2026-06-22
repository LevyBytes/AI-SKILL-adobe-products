# Example (part 1)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Application — Example

### Duplicating the Active Document

```
// Duplicates any selected items from
// the active document into a new document.

var newItem;
var docSelected = app.activeDocument.selection;

if (docSelected.length > 0) {
    // Create a new document and move the selected items to it.
    var newDoc = app.documents.add();
    if (docSelected.length > 0) {
        for (var i = 0; i < docSelected.length; i++) {
        docSelected[i].selected = false;
        newItem = docSelected[i].duplicate(newDoc, ElementPlacement.PLACEATEND);
        }
    } else {
        docSelected.selected = false;
        newItem = docSelected.parent.duplicate(newDoc, ElementPlacement.PLACEATEND);
    }
} else {
    alert("Please select one or more art objects");
}
```

## Brush — Example

### Applying a Brush

```
// Duplicates and groups all items in the current selection,
// then applies the same brush to each item in the group

if (app.documents.length > 0) {
    var docSelection = app.activeDocument.selection;
    if (docSelection.length > 0) {
        var newGroup = app.activeDocument.groupItems.add();

        for (var i = 0; i < docSelection.length; i++) {
            var newItem = docSelection[i].duplicate();
            newItem.moveToBeginning(newGroup);
        }

        var brush = app.activeDocument.brushes[1];
        brush.applyTo(newGroup);
    }
}
```

## Brushes — Example

### Counting brushes

```
// Counts all brushes in the active document

if (app.documents.length > 0) {
    var numberOfBrushes = app.activeDocument.brushes.length;
}
```

## CharacterAttributes — Example

### Setting character attributes

```
// Creates a new document, adds a simple text item
// then incrementally increases the horizontal and
// vertical scale attributes of each character

var docRef = documents.add();
var textRef = docRef.textFrames.add();
textRef.contents = "I Love Scripting!";
textRef.top = 400;
textRef.left = 100;

// incrementally increase the scale of each character
var charCount = textRef.textRange.characters.length;
var size = 100;
for (var i = 0; i < charCount; i++, size *= 1.2) {
    textRef.textRange.characters[i].characterAttributes.horizontalScale = size;
    textRef.textRange.characters[i].characterAttributes.verticalScale = size;
}
```

## Characters — Example

### Counting characters

```
// Counts all characters in the active document,
// including whitespace, and stores in numChars

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var numChars = 0;
    for (var i = 0; i < doc.textFrames.length; i++) {
        var textArtRange = doc.textFrames[i].contents;
        numChars += textArtRange.length;
    }
}
```

## CharacterStyles — Example

### Using characters styles

```
// Creates 3 text frames in a new document then creates
// a character style and applies it to each text frame.

var docRef = documents.add();
var textRef1 = docRef.textFrames.add();
textRef1.contents = "Scripting is fun!";
textRef1.top = 700;
textRef1.left = 50;

var textRef2 = docRef.textFrames.add();
textRef2.contents = "Scripting is easy!";
textRef2.top = 625;
textRef2.left = 100;

var textRef3 = docRef.textFrames.add();
textRef3.contents = "Everyone should script!";
textRef3.top = 550;
textRef3.left = 150;
redraw();

// Create a new character style
var charStyle = docRef.characterStyles.add("BigRed");

// set character attributes
var charAttr = charStyle.characterAttributes;
charAttr.size = 40;
charAttr.tracking = -50;
charAttr.capitalization = FontCapsOption.ALLCAPS;

var redColor = new RGBColor();
redColor.red = 255;
redColor.green = 0;
redColor.blue = 0;
charAttr.fillColor = redColor;

// apply to each textFrame in the document
charStyle.applyTo(textRef1.textRange);
charStyle.applyTo(textRef2.textRange);
charStyle.applyTo(textRef3.textRange);
```

## CMYKColor — Example

### Setting a CMYK color

```
// Sets the fill color of the frontmost path item in
// the current document to a light purple CMYK color

if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    var frontPath = app.activeDocument.pathItems[0];

    // Set color values for the CMYK object
    var newCMYKColor = new cmykColor();
    newCMYKColor.black = 0;
    newCMYKColor.cyan = 30.4;
    newCMYKColor.magenta = 32;
    newCMYKColor.yellow = 0;

    // Use the color object in the path item
    frontPath.filled = true;
    frontPath.fillColor = newCMYKColor;
}
```

## CompoundPathItem — Example

### Selecting paths in a document

```
// Selects all paths not part of a compound path
if ( app.documents.length > 0 ) {
    var doc = app.activeDocument;
    var count = 0;
    if ( doc.pathItems.length > 0 ) {
        var thePaths = doc.pathItems;
        var numPaths = thePaths.length;
        for ( var i = 0; i < doc.pathItems.length; i++ ) {
        var pathArt = doc.pathItems[i];
        if ( pathArt.parent.typename != "compoundPathItem" ) {
            pathArt.selected = true;
            count++;
        }
    }
}
```

### Creating and modifying a compound path item

```
// Creates a new compound path item containing 3 path
// items, then sets the width and the color of the stroke
// to all items in the compound path

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var newCompoundPath = doc.activeLayer.compoundPathItems.add();

    // Create the path items
    var newPath = newCompoundPath.pathItems.add();
    newPath.setEntirePath(Array(Array(30, 50), Array(30, 100)));

    newPath = newCompoundPath.pathItems.add();
    newPath.setEntirePath(Array(Array(40, 100), Array(100, 100)));

    newPath = newCompoundPath.pathItems.add();
    newPath.setEntirePath(Array(Array(100, 110), Array(100, 300)));

    // Set stroke and width properties of the compound path
    newPath.stroked = true;
    newPath.strokeWidth = 3.5;
    newPath.strokeColor = app.activeDocument.swatches[3].color;
}
```

## CompoundPathItems — Example

### Counting compound paths

```
// Counts all compound path items in layer 1 of the current document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var numCompoundPaths = doc.layers[0].compoundPathItems.length;
}
```

## Dataset — Example

### Using variables and datasets

```
// Creates two variables, 1 visibility and 1 text,
// creates two datasets each with different values for the variables,
// then displays both datasets

var docRef = documents.add();

// Create visibility variable
var itemRef = docRef.pathItems.rectangle(600, 200, 150, 150);
var colorRef = new RGBColor;
colorRef.red = 255;
itemRef.fillColor = colorRef;

var visibilityVar = docRef.variables.add();
visibilityVar.kind = VariableKind.VISIBILITY;
itemRef.visibilityVariable = visibilityVar;

// Create text variable
var textRef = docRef.textFrames.add();
textRef.contents = "Text Variable, dataset 1";
textRef.top = 400;
textRef.left = 200;

var textVar = docRef.variables.add();
textVar.kind = VariableKind.TEXTUAL;
textRef.contentVariable = textVar;
redraw();

// Create dataset 1
var ds1 = docRef.dataSets.add();

// Change variable values and create dataset 2
itemRef.hidden = true;
textRef.contents = "Text Variable, dataset 2";
redraw();
var ds2 = docRef.dataSets.add();

// display each dataset
ds1.display();
redraw();
ds2.display();
redraw();
```

## Document — Example

### Deselecting all objects in the current document

Note

Use activeDocument or documents[0 to refer to the foremost document.

```
var docRef = activeDocument;
docRef.selection = null;
```

### Closing a document

```
// Closes the active document without saving changes
if ( app.documents.length > 0 ) {
    var aiDocument = app.activeDocument;
    aiDocument.close( SaveOptions.DONOTSAVECHANGES );
    aiDocument = null;
}
```

### Creating a document with defaults

```
// Creates a new document if none exists then sets fill and stroke defaults to true
var doc;
if (app.documents.length == 0) {
    doc = app.documents.add();
} else {
    doc = app.activeDocument;
}

doc.defaultFilled = true;
doc.defaultStroked = true;
```

## Documents — Example

### Creating a new document

```
// Creates a new document with an RGB color space

app.documents.add(DocumentColorSpace.RGB);
```

## EPSSaveOptions — Example

### EPS export example

```
// Exports current document to destFile as an EPS file with specified options,
// destFile contains the full path including the file name

function exportFileAsEPS(destFile) {
    var newFile = new File(destFile);
    var saveDoc;
    if (app.documents.length == 0) {
        saveDoc = app.documents.add();
    } else {
        saveDoc = app.activeDocument;
    }

    var saveOpts = new ePSSaveOptions();
    saveOpts.cmykPostScript = true;
    saveOpts.embedAllFonts = true;

    saveDoc.saveAs(newFile, saveOpts);
}
```

## ExportOptionsFlash — Example

### Flash export example

```
// Exports current document to destFile as a flash file with specified options,
// destFile contains the full path including the file name

function exportToFlashFile(destFile) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsFlash();
        exportOptions.resolution = 150;

        var type = ExportType.FLASH;
        var fileSpec = new File(destFile);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsGIF — Example

### GIF export example

```
// Exports current document to dest as a GIF file with specified options,
// dest contains the full path including the file name

function exportToGIFFile(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsGIF();
        exportOptions.antiAliasing = false;
        exportOptions.colorCount = 64;
        exportOptions.colorDither = ColorDitherMethod.DIFFUSION;

        var type = ExportType.GIF;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsJPEG — Example

### JPEG export example

```
// Exports current document to dest as a JPEG file with specified options,
// dest contains the full path including the file name

function exportFileToJPEG(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsJPEG();
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting = 70;

        var type = ExportType.JPEG;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsPhotoshop — Example

### Photoshop export example

```
// Exports current document to dest as a PSD file with specified options,
// dest contains the full path including the file name

function exportFileToPSD(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPhotoshop();
        exportOptions.resolution = 150;

        var type = ExportType.PHOTOSHOP;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsPNG24 — Example

### PNG24 export example

```
// Exports current document to dest as a PNG24 file with specified options,
// dest contains the full path including the file name,
// saveAsHTML option creates an HTML version with the PNG file in an images folder

function exportFileToPNG24(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPNG24();
        exportOptions.antiAliasing = false;
        exportOptions.transparency = false;
        exportOptions.saveAsHTML = true;

        var type = ExportType.PNG24;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsPNG8 — Example

### PNG8 export example

```
// Exports current document to dest as a PNG8 file with specified options,
// dest contains the full path including the file name

function exportFileToPNG8(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPNG8();
        exportOptions.colorCount = 8;
        exportOptions.transparency = false;

        var type = ExportType.PNG8;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsSVG — Example

### SVG export example

```
// Exports current document to dest as an SVG file with specified options,
// dest contains the full path including the file name

function exportFileToSVG(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsSVG();
        exportOptions.embedRasterImages = true;
        exportOptions.embedAllFonts = false;
        exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;

        var type = ExportType.SVG;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## ExportOptionsTIFF — Example

### TIFF export example

```
// Exports current document to dest as a TIFF file with specified options,
// dest contains the full path including the file name

function exportFileToPSD(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsTIFF();
        exportOptions.resolution = 150;
        exportOptions.byteOrder = TIFFByteOrder.IBMPC;
        exportOptions.lZWCompression = false;

        var type = ExportType.TIFF;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```

## Gradient — Example

### Gradient creation and application example

```
// Creates a new gradient in current document then applies the gradient to the frontmost path item

if (app.documents.length > 0) {
    // Create a color for both ends of the gradient
    var startColor = new RGBColor();
    startColor.red = 0;
    startColor.green = 100;
    startColor.blue = 255;

    var endColor = new RGBColor();
    endColor.red = 220;
    endColor.green = 0;
    endColor.blue = 100;

    // Create a new gradient
    // A new gradient always has 2 stops
    var newGradient = app.activeDocument.gradients.add();
    newGradient.name = "NewGradient";
    newGradient.type = GradientType.LINEAR;

    // Modify the first gradient stop
    newGradient.gradientStops[0].rampPoint = 30;
    newGradient.gradientStops[0].midPoint = 60;
    newGradient.gradientStops[0].color = startColor;

    // Modify the last gradient stop
    newGradient.gradientStops[1].rampPoint = 80;
    newGradient.gradientStops[1].color = endColor;

    // construct an Illustrator.GradientColor object referring to the newly created gradient
    var colorOfGradient = new GradientColor();
    colorOfGradient.gradient = newGradient;

    // get first path item, apply new gradient as its fill
    var topPath = app.activeDocument.pathItems[0];
    topPath.filled = true;
    topPath.fillColor = colorOfGradient;
}
```

## GradientColor — Example

### Gradient stop color change example

```
// Creates a new RGB document, then changes the color of the first gradient stop of an indexed gradient
app.documents.add(DocumentColorSpace.RGB);

// Get a reference to the gradient that you want to change
var gradientRef = app.activeDocument.gradients[1];

// Create the new color
var startColor = new RGBColor();
startColor.red = 255;
startColor.green = 238;
startColor.blue = 98;

// apply new color to the first gradient stop
gradientRef.gradientStops[0].color = startColor;
```

## Gradients — Example

### Gradient removal example

```
// Deletes the first gradient from the current document
if (app.documents.length > 0) {
    app.activeDocument.gradients[0].remove();
}
```

## GradientStops — Example

### New gradient stop example

```
// Adds a new gradient stop to a gradient, color of new stop is 70% gray
if (app.documents.length > 0 && app.activeDocument.gradients.length > 0) {
    // Get a reference to the gradient to change
    var changeGradient = app.activeDocument.gradients[0];

    // Get a reference to the last gradient stop
    var origCount = changeGradient.gradientStops.length;
    var lastStop = changeGradient.gradientStops[origCount - 1];

    // add the new gradient stop
    var newStop = changeGradient.gradientStops.add();

    // Set the values of the new gradient stop.
    // Move the original last gradient stop a bit to the left and insert the new gradient stop at the old position
    newStop.rampPoint = lastStop.rampPoint;
    lastStop.rampPoint = lastStop.rampPoint - 10;

    // Create a new color to apply to the newly created gradient stop
    var newStopColor = new GrayColor();
    newStopColor.gray = 70.0;
    newStop.color = newStopColor;
}
```

## GraphicStyle — Example

### Graphic style application example

```
// Duplicates each path item in the selection, places the duplicate into a new group,
// then applies a graphic style to the new groups items

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var selected = doc.selection;
    var newGroup = doc.groupItems.add();
    newGroup.name = "NewGroup";
    newGroup.move(doc, ElementPlacement.PLACEATEND);

    var endIndex = selected.length;
    for (var i = 0; i < endIndex; i++) {
        if (selected[i].typename == "PathItem")
        selected[i].duplicate(newGroup, ElementPlacement.PLACEATEND);
    }

    for (i = 0; i < newGroup.pageItems.length; i++) {
        doc.graphicStyles[1].applyTo(newGroup.pageItems[i]);
    }
}
```

## GraphicStyles — Example

### Graphic styles count example

```
// Counts the number of graphic styles in the active document
// and stores result in numberOfStyles

if (app.documents.length > 0) {
    var numberOfStyles = app.activeDocument.graphicStyles.length;
}
```

## GraphItems — Example

### Graph item rotation example

```
// Rotates each graph item in the current document 90 degrees.

// Verify a document with a graph item is open
var ok = false;

if (documents.length > 0) {
    var docRef = activeDocument;
    var iCount = docRef.graphItems.length;
    if (iCount > 0) {
        ok = true;
        for (var i = 0; i < iCount; i++) {
            var graphRef = docRef.graphItems[i];
            graphRef.selected = true;
            graphRef.rotate(90); //rotate clockwise 90 degrees
        }
        redraw();
    }
}
```

## GrayColor — Example

### Making text gray

```
// Sets the color of the first word in the active document to a shade of gray

if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
    var text = app.activeDocument.textFrames[0].textRange;
    var firstWord = text.words[0];

    // Create the new color
    var textColor = new GrayColor();
    textColor.gray = 45;

    firstWord.filled = true;
    firstWord.fillColor = textColor;
}
```

## GroupItem — Example

### Updating grouped artwork

Working with a group lets you change multiple contained objects together. This example simplifies operations by placing the objects inside one GroupItem.

```
// Creates a new group item, adds a new path item, of triangle shape, to the group,
// then adds a new text item to the group and sets the fill color of the text to red

if (app.documents.length > 0) {
    var triangleGroup = app.activeDocument.groupItems.add();

    // Create a triangle and add text, the new art is created inside the group
    var trianglePath = triangleGroup.pathItems.add();
    trianglePath.setEntirePath(Array(Array(100, 100), Array(300, 100), Array(200, Math.tan(1.0471975) * 100 + 100)));
    trianglePath.closed = true;
    trianglePath.stroked = true;
    trianglePath.filled = false;
    trianglePath.strokeWidth = 3;

    var captionText = triangleGroup.textFrames.add();
    captionText.position = Array(100, 150);
    captionText.textRange.size = 48;
    captionText.contents = "A triangle";

    var fillColor = new RGBColor();
    fillColor.red = 255;
    fillColor.green = 0;
    fillColor.blue = 0;
    captionText.characters.fillColor = fillColor;
}
```

## GroupItems — Example

### Placing a PDF into a group item

The script below demonstrates importing a PDF document through the GroupItems.createFromFile() function.

Note

Before running the script, create a one page PDF file at /temp/testfile1.pdf.

```
// Embeds a new group item in to the current document from a file specified by dest
// dest should contain the full path and file name

function embedPDF(dest) {
    var embedDoc = new File(dest);
    if (app.documents.length > 0 && embedDoc.exists) {
        var doc = app.activeDocument;
        var placed = doc.groupItems.createFromFile(embedDoc);
    }
}
```

## IllustratorSaveOptions — Example

### Saving with IllustratorSaveOptions

```
// Saves the current document to dest as an AI file with specified options,
// dest specifies the full path and file name of the new file

function exportFileToAI(dest) {
    if (app.documents.length > 0) {
        var ai8Doc = new File(dest);
        var saveOptions = new IllustratorSaveOptions();
        saveOptions.compatibility = Compatibility.ILLUSTRATOR8;
        saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;

        app.activeDocument.saveAs(ai8Doc, saveOptions);
    }
}
```

## InkInfo — Example

### Getting ink information

```
// Displays the current documents inks in a text frame

var docRef = documents.add();

// assemble a string of the inks in this document
var sInks = "";
var iLength = activeDocument.inkList.length;
for (var i = 0; i < iLength; i++) {
    sInks += docRef.inkList[i].name;
    sInks += "\r\t";
    sInks += "Frequency = " + docRef.inkList[i].inkInfo.frequency;
    sInks += "\r\t";
    sInks += "Density = " + docRef.inkList[i].inkInfo.density;
    sInks += "\r";
}

var textRef = docRef.textFrames.add();
textRef.contents = sInks;
textRef.top = 600;
textRef.left = 200;

redraw();
```

## InsertionPoints — Example

### Using insertion points to add spaces

```
// Creates a new document, adds text then inserts a
// space between each character using insertion points

var docRef = documents.add();
var textRef = docRef.textFrames.add();
textRef.contents = "Wouldn't you rather be scripting?";
textRef.top = 400;
textRef.left = 100;
textRef.textRange.characterAttributes.size = 20;

redraw();

// Add a space between each character using insertion points.
var ip;
for (var i = 0; i < textRef.insertionPoints.length; i += 2) {
    ip = textRef.insertionPoints[i];
    ip.characters.add(" ");
}
```

## Layer — Example

### Bringing a layer to the front

```
// Moves the bottom layer to become the topmost layer

if (documents.length > 0) {
    var countOfLayers = activeDocument.layers.length;
    if (countOfLayers > 1) {
        var bottomLayer = activeDocument.layers[countOfLayers - 1];
        bottomLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
    } else {
        alert("The active document only has only 1 layer");
    }
}
```

## Layers — Example

### Finding and deleting layers

```
// Deletes all layers whose name begins with "Temp" in all open documents

var layersDeleted = 0;
for (var i = 0; i < app.documents.length; i++) {
    var targetDocument = app.documents[i];
    var layerCount = targetDocument.layers.length;

    // Loop through layers from the back, to preserve index
    // of remaining layers when we remove one
    for (var ii = layerCount - 1; ii >= 0; ii--) {
        var targetLayer = targetDocument.layers[ii];
        var layerName = new String(targetLayer.name);
        if (layerName.indexOf("Temp") == 0) {
            targetDocument.layers[ii].remove();
            layersDeleted++;
        }
    }
}
```

## Matrix — Example

### Combining matrices to apply multiple transformations

When objects need several transformations, using the matrix suite is more efficient than applying each transformation separately. This script shows how multiple matrices can be combined.

```
// Tranforms all art in a document using translation and rotation matrices,
// moves art half an inch to the right and 1.5 inches up on the page
if (app.documents.length > 0) {
    var moveMatrix = app.getTranslationMatrix(0.5, 1.5);

    // Add a rotation to the translation, 10 degrees counter clockwise
    var totalMatrix = concatenateRotationMatrix(moveMatrix, 10);

    // apply the transformation to all art in the document
    var doc = app.activeDocument;
    for (var i = 0; i < doc.pageItems.length; i++) {
        doc.pageItems[i].transform(totalMatrix);
    }
}
```

## MeshItem — Example

### Example name

```
// Locks all mesh items in the current document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    for (var i = 0; i < doc.meshItems.length; i++) {
        doc.meshItems[i].locked = true;
    }
}
```

## MeshItems — Example

### Copying mesh items to another document

Run the script with two documents open. One document needs at least one mesh item, while the other may be empty. Before running the script, bring the empty document to the front.

```
// Copies all mesh items from one document to a new document
if (app.documents.length > 0) {
    var srcDoc = documents[0];
    var locationOffset = 0;
    var targetDoc = documents.add();
    for (var i = 0; i < srcDoc.meshItems.length; i++) {
        var srcItem = srcDoc.meshItems[i];
        var dupItem = srcDoc.meshItems[i].duplicate(targetDoc, ElementPlacement.PLACEATEND);

        // offset the copied items' position on the y axis
        dupItem.position = Array(100, 50 + locationOffset);
        locationOffset += 50;
    }
}
```
