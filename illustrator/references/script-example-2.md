# Example (part 2)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## NoColor — Example

### Clearing fills with NoColor

```
// Creates 2 overlapping objects with different fill colors.
// Assign the top object a fill color of "NoColor"
// allowing the bottom object to become visible.

// Create 2 overlapping objects one blue, one red;
var docRef = documents.add();
var itemRef1 = docRef.pathItems.rectangle(500, 200, 200, 100);
var itemRef2 = docRef.pathItems.rectangle(550, 150, 200, 200);
var rgbColor = new RGBColor();
rgbColor.red = 255;
itemRef2.fillColor = rgbColor;

rgbColor.blue = 255;
rgbColor.red = 0;
itemRef1.fillColor = rgbColor;
redraw();

// create a nocolor and assign it to the top object
var noColor = new NoColor();
itemRef2.fillColor = noColor;
redraw();
```

## OpenOptions — Example

### Automatic legacy-text update

```
// Opens a file with legacy text (AI 10 or older), using
// OpenOptions to automatically update the legacy text.

var fileRef = filePath;
if (fileRef != null) {
    var openOptions = new OpenOptions();
    openOptions.updateLegacyText = true;

    var docRef = open(fileRef, DocumentColorSpace.RGB, openOptions);
}
```

## PageItems — Example

### Collecting external file references from page items

```
// Gets all file-references in the current document using the pageItems object,
// then displays them in a new document

if (app.documents.length > 0) {
    var fileReferences = new Array();
    var sourceDoc = app.activeDocument;

    for (var i = 0; i < sourceDoc.pageItems.length; i++) {
        var artItem = sourceDoc.pageItems[i];
        switch (artItem.typename) {
        case "PlacedItem":
            fileReferences.push(artItem.file.fsName);
            break;
        case "RasterItem":
            if (!artItem.embedded) {
                fileReferences.push(artItem.file.fsName);
            }
            break;
        }
    }

    // Write the file references to a new document
    var reportDoc = documents.add();
    var areaTextPath = reportDoc.pathItems.rectangle(reportDoc.height, 0, reportDoc.width, reportDoc.height);
    var fileNameText = reportDoc.textFrames.areaText(areaTextPath);
    fileNameText.textRange.size = 24;
    var paragraphCount = 3;
    var sourceName = sourceDoc.name;
    var text = "File references in \'" + sourceName + "\':\r\r";
    for (i = 0; i < fileReferences.length; i++) {
        text += (fileReferences[i] + "\r");
        paragraphCount++;
    }
    fileNameText.contents = text;
}
```

## PaperInfo — Example

### Looking up paper information

```
// Displays the papers and paper sizes available for the 2nd printer in a text frame

var docRef = documents.add();
var itemRef = docRef.pathItems.rectangle(600, 300, 200, 100);
var textRef = docRef.textFrames.add();
textRef.top = 600;
textRef.left = 50;

// get paper objects for 2nd printer
var printerRef = printerList[1];
textRef.contents = printerRef.name;
textRef.contents += " paper list:\r";
var paragraphCount = 2;

// get details of each paper
var iCount = printerRef.printerInfo.paperSizes.length;
for (var i = 0; i < iCount; i++) {
    var paperRef = printerRef.printerInfo.paperSizes[i];
    var paperInfoRef = paperRef.paperInfo;
    textRef.contents += paperRef.name;
    textRef.contents += "\t";
    textRef.contents += paperInfoRef.height;
    textRef.contents += " x ";
    textRef.contents += paperInfoRef.width;
    textRef.contents += "\r";
    paragraphCount++;
}
redraw();
```

## ParagraphAttributes — Example

### Updating paragraph justification

```
// Creates a new document with 1 text frame and 3 paragraphs
// then gives each paragraph a different justification

var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 400);
var textRef = docRef.textFrames.areaText(pathRef);
textRef.paragraphs.add("Left justified paragraph.");
textRef.paragraphs.add("Center justified paragraph.");
textRef.paragraphs.add("Right justified paragraph.");
textRef.textRange.characterAttributes.size = 28;

// change the justification of each paragraph
// using the paragraph attributes object
var paraAttr_0 = textRef.paragraphs[0].paragraphAttributes;
paraAttr_0.justification = Justification.RIGHT;

var paraAttr_1 = textRef.paragraphs[1].paragraphAttributes;
paraAttr_1.justification = Justification.CENTER;

var paraAttr_2 = textRef.paragraphs[2].paragraphAttributes;
paraAttr_2.justification = Justification.LEFT;
```

## Paragraphs — Example

### Counting paragraphs

```
// Counts all paragraphs in current doc and stores result in paragraphCount
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var paragraphCount = 0;
    for (var i = 0; i < doc.textFrames.length; i++) {
        paragraphCount += doc.textFrames[i].paragraphs.length;
    }
}
```

## ParagraphStyles — Example

### ParagraphStyle application sample

```
// Creates a new document with 1 text frame and 3 paragraphs
// gives each paragraph a different justification, then creates
// a paragraph style and applies it to all paragraphs

var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 400);
var textRef = docRef.textFrames.areaText(pathRef);
textRef.paragraphs.add("Left justified paragraph.");
textRef.paragraphs.add("Center justified paragraph.");
textRef.paragraphs.add("Right justified paragraph.");
textRef.textRange.characterAttributes.size = 28;

// change the justification of each paragraph
// using the paragraph attributes object
var paraAttr_0 = textRef.paragraphs[0].paragraphAttributes;
paraAttr_0.justification = Justification.RIGHT;

var paraAttr_1 = textRef.paragraphs[1].paragraphAttributes;
paraAttr_1.justification = Justification.CENTER;

var paraAttr_2 = textRef.paragraphs[2].paragraphAttributes;
paraAttr_2.justification = Justification.LEFT;

// create a new paragraph style
var paraStyle = docRef.paragraphStyles.add("LeftIndent");

// add some paragraph attributes
var paraAttr = paraStyle.paragraphAttributes;
paraAttr.justification = Justification.LEFT;
paraAttr.firstLineIndent = 10;

// apply the style to each item in the document
var iCount = textRef.paragraphs.length;
for (var i = 0; i < iCount; i++) {
    paraStyle.applyTo(textRef.paragraphs[i], true);
}
redraw();
```

## PathItem — Example

### Swatch color assignment sample

```
// Sets the stroke and fill of a path item to colors of a randomly selected swatch
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    var doc = app.activeDocument;

    for (var i = 0; i < doc.pathItems.length; i++) {
        var pathRef = doc.pathItems[i];
        pathRef.filled = true;
        pathRef.stroked = true;

        var swatchIndex = Math.round(Math.random() * (doc.swatches.length - 1));
        pathRef.fillColor = doc.swatches[swatchIndex].color;
        pathRef.strokeColor = doc.swatches[swatchIndex].color;
    }
}
```

### Creating a path from straight lines

```
// This script illustrates the use of the setEntirePath method.
// Creates a new open path consisting of 10 straight lines
if (app.documents.length > 0) {
    var lineList = [];

    for (i = 0; i < lineList.length; i++) {
        lineList.push([i * 10 + 50, ((i - 5) ^ 2) * 5 + 50];
    }

    app.defaultStroked = true;
    newPath = app.activeDocument.pathItems.add();
    newPath.setEntirePath(lineList);
}
```

## PathItems — Example

### Shape construction sample

```
// Creates 5 shapes in layer 1 of document 1
// and applies a random graphic style to each
var doc = app.documents.add();
var artLayer = doc.layers[0];
app.defaultStroked = true;
app.defaultFilled = true;

var rect = artLayer.pathItems.rectangle(762.5, 87.5, 425.0, 75.0);
var rndRect = artLayer.pathItems.roundedRectangle(637.5, 87.5, 425.0, 75.0, 20.0, 10.0);

// Create ellipse, 'reversed' is false, 'inscribed' is true
var ellipse = artLayer.pathItems.ellipse(512.5, 87.5, 425.0, 75.0, false, true);

// Create octagon, and 8-sided polygon
var octagon = artLayer.pathItems.polygon(300.0, 325.0, 75.0, 8);

// Create a 4 pointed star
var star = artLayer.pathItems.star(300.0, 125.0, 100.0, 20.0, 4);

for (i = 0; i < artLayer.pathItems.length; i++) {
    var styleIndex = Math.round(Math.random() * (doc.graphicStyles.length - 1));
    doc.graphicStyles[styleIndex].applyTo(artLayer.pathItems[i]);
}
```

## PathPoints — Example

### PathPoint append sample

```
// Appends a new PathPoint to an existing path
// and initializes its anchor and handle points.
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    var line = doc.pathItems.add();
    line.stroked = true;
    line.setEntirePath(Array(Array(220, 475), Array(375, 300)));

    // Append another point to the line
    var newPoint = doc.pathItems[0].pathPoints.add();
    newPoint.anchor = Array(220, 300);
    newPoint.leftDirection = newPoint.anchor;
    newPoint.rightDirection = newPoint.anchor;
    newPoint.pointType = PointType.CORNER;
}
```

## Patterns — Example

### Removing a pattern

```
// Deletes the last pattern from the current document.
if (app.documents.length > 0) {
    var lastIndex = app.activeDocument.patterns.length - 1;

    var patternToRemove = app.activeDocument.patterns[lastIndex];
    var patternName = patternToRemove.name;
    patternToRemove.remove();

    // Note after removing Illustrator objects, set the variable that
    // referenced the removed object to null, since it is now invalid.
    patternToRemove = null;
}
```

## PatternColor — Example

### Modifying and applying pattern colors

```
// Rotates the color of each pattern in the current document,
// then applies the last pattern to the first path item
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    var doc = app.activeDocument;
    var swatchIndex = 0;

    for (i = 0; i < doc.swatches.length; i++) {
        // Get the generic color object of the swatch
        var currentSwatch = doc.swatches[i];
        var swatchColor = currentSwatch.color;

        // Only operate on patterns
        if (currentSwatch.color.typename == "PatternColor") {
            // Change a pattern property
            currentSwatch.color.rotation = 10;
            swatchIndex = i;
        }
    }

    // Apply the last pattern color swatch to the frontmost path
    var firstPath = app.activeDocument.pathItems[0];
    firstPath.filled = true;
    firstPath.fillColor = doc.swatches[swatchIndex].color;
}
```

## PDFFileOptions — Example

### Opening a PDF with options

```
// Opens a PDF file with specified options
var pdfOptions = app.preferences.PDFFileOptions;
pdfOptions.pDFCropToBox = PDFBoxType.PDFBOUNDINGBOX;
pdfOptions.pageToOpen = 2;

// Open a file using these preferences
var fileRef = filePath;

if (fileRef != null) {
    var docRef = open(fileRef, DocumentColorSpace.RGB);
}
```

## PDFSaveOptions — Example

### Saving to PDF format

```
// Saves the current document as PDF to dest with specified options
// dest contains the full path and file name to save to
function saveFileToPDF(dest) {
    var doc = app.activeDocument;

    if (app.documents.length > 0) {
        var saveName = new File(dest);
        saveOpts = new PDFSaveOptions();

        saveOpts.compatibility = PDFCompatibility.ACROBAT5;
        saveOpts.generateThumbnails = true;
        saveOpts.preserveEditability = true;

        doc.saveAs(saveName, saveOpts);
    }
}
```

## PhotoshopFileOptions — Example

### Opening a Photoshop file

```
// Opens a Photoshop file containing layers with
// preferences set to preserve layers
var psdOptions = preferences.photoshopFileOptions;
psdOptions.preserveLayers = true;
psdOptions.pixelAspectRatioCorrection = false;

// open a file using these prefs
var fileRef = File(psdFilePath);
if (fileRef != null) {
    var docRef = open(fileRef, DocumentColorSpace.RGB);
}
```

## PlacedItem — Example

### Placed-item selection toggle

```
// Toggles the selection state of all placed items.
if (app.documents.length > 0) {
    for (i = 0; i < app.activeDocument.placedItems.length; i++) {
        var placedArt = app.activeDocument.placedItems[i];
        placedArt.selected = !(placedArt.selected);
    }
}
```

## PluginItem — Example

### Copying plug-in art

```
// Creates new plug-in art by copying an existing plug-in art item
if (app.documents.length > 0 && app.activeDocument.pluginItems.length > 0) {
    var doc = app.activeDocument;
    var pluginArt = doc.pluginItems[0];
    pluginArt.duplicate(pluginArt.parent, ElementPlacement.PLACEATBEGINNING);
}
```

## PPDFileInfo — Example

### PPD property display

```
// Displays postscript level and path for each PPD file found in a new text frame
var sPPD = "";
var docRef = documents.add();

var x = 30;
var y = (docRef.height - 30);

var iLength = PPDFileList.length;
if (iLength > 20)
    iLength = 20;

for (var i = 0; i < iLength; i++) {
    var ppdRef = PPDFileList[i];
    sPPD = ppdRef.name;
    sPPD += "\r\tPS Level ";

    var ppdInfoRef = ppdRef.PPDInfo;
    sPPD += ppdInfoRef.languageLevel;
    sPPD += "\r\tPath: ";
    sPPD += ppdInfoRef.PPDFilePath;

    var textRef = docRef.textFrames.add();
    textRef.textRange.characterAttributes.size = 8;
    textRef.contents = sPPD;
    textRef.top = (y);
    textRef.left = x;

    redraw();

    if ((y -= (textRef.height)) <= 30) {
        y = (docRef.height - 30);
        x += 150;
    }
}
```

### PPDFileInfo screen details

```
// Displays in a new text frame, the postscript level, file paths, screens, and
// screen spot information for first 10 PPD files found

var sPPD = "";
var docRef = documents.add();

var x = 30;
var y = (docRef.height - 30);

var iLength = PPDFileList.length;

if (iLength > 10)
    iLength = 10;

for (var i = 0; i < iLength; i++) {
    var ppdRef = PPDFileList[i];
    sPPD = ppdRef.name;
    sPPD += "\r\tPS Level ";

    var ppdInfoRef = ppdRef.PPDInfo;
    sPPD += ppdInfoRef.languageLevel;
    sPPD += "\r\tPath: ";
    sPPD += ppdInfoRef.PPDFilePath;
    sPPD += "\r\tScreens:\r";

    var iScreens = ppdInfoRef.screenList.length;
    for (var c = 0; c < iScreens; c++) {

        var screenRef = ppdInfoRef.screenList[c];
        sPPD += "\t\t";
        sPPD += screenRef.name;

        var screenInfoRef = screenRef.screenInfo;
        sPPD += ", Angle = ";
        sPPD += screenInfoRef.angle;
        sPPD += ", Frequency = ";
        sPPD += screenInfoRef.frequency;
        sPPD += "\r";
    }

    sPPD += "\r\tScreenSpots:\r";

    var iScreenSpots = ppdInfoRef.screenSpotFunctionList.length;
    for (var n = 0; n < iScreenSpots; n++) {
        var screenSpotRef = ppdInfoRef.screenSpotFunctionList[n];
        sPPD += "\t\t";
        sPPD += screenSpotRef.name;
        sPPD += ", spotFunction: ";
        sPPD += screenSpotRef.spotFunction;
        sPPD += "\r";
    }

    var textRef = docRef.textFrames.add();
    textRef.textRange.characterAttributes.size = 8;
    textRef.contents = sPPD;
    textRef.top = (y);
    textRef.left = x;

    redraw();

    y -= (textRef.height);
}
```

## PrintColorManagementOptions — Example

### Print color management example

```
// Creates a new document, adds symbols, then creates a
// PrintColorManagementOptions object and assigns it
// to a PrintOptions object, then prints with each color intent

// Add some symbol items to a new document
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
    symbolRef = docRef.symbols[i];

    symbolItemRef1 = docRef.symbolItems.add(symbolRef);
    symbolItemRef1.top = y;
    symbolItemRef1.left = 100;

    y -= (symbolItemRef1.height + 10);
}

redraw();

var colorOptions = new PrintColorManagementOptions();
var options = new PrintOptions();
options.colorManagementOptions = colorOptions;
colorOptions.name = "ColorMatch RGB";

// Print the current document once for each color intent.
colorOptions.intent = PrintColorIntent.ABSOLUTECOLORIMETRIC;
docRef.print(options);

colorOptions.intent = PrintColorIntent.PERCEPTUALINTENT;
docRef.print(options);

colorOptions.intent = PrintColorIntent.RELATIVECOLORIMETRIC;
docRef.print(options);

colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
docRef.print(options);
```

## PrintColorSeparationOptions — Example

### Color separation print example

```
// Creates a new document with symbol items
// and prints document with each separation option

// Add some symbol items to a new document
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
    symbolRef = docRef.symbols[i];

    symbolItemRef1 = docRef.symbolItems.add(symbolRef);
    symbolItemRef1.top = y;
    symbolItemRef1.left = 100;

    y -= (symbolItemRef1.height + 10);
}

// Print with various separation options
var sepOptions = new PrintColorSeparationOptions();
var options = new PrintOptions();
options.colorSeparationOptions = sepOptions;

sepOptions.convertSpotColors = true;
sepOptions.overPrintBlack = true;
sepOptions.colorSeparationMode = PrintColorSeparationMode.COMPOSITE;
docRef.print(options);

sepOptions.colorSeparationMode = PrintColorSeparationMode.INRIPSEPARATION;
docRef.print(options);

sepOptions.convertSpotColors = false;
sepOptions.overPrintBlack = false;
sepOptions.colorSeparationMode = PrintColorSeparationMode.HOSTBASEDSEPARATION;
docRef.print(options);
```

## PrintCoordinateOptions — Example

### Print coordinate example

```
// Creates a new document with symbol items that extend
// off the page then print with each print orientation
var docRef = documents.add();
var y = 500;
var x = -70;

if (docRef.symbols.length > 0) {

    for (var i = 0; i < 5; i++) {
        symbolRef = docRef.symbols[0];

        symbolItemRef1 = docRef.symbolItems.add(symbolRef);
        symbolItemRef1.top = y;
        symbolItemRef1.left = x;

        x += 30;
    }

    redraw();

    // Print it with various Coordinate Options
    var coordinateOptions = new PrintCoordinateOptions();
    var options = new PrintOptions();
    options.coordinateOptions = coordinateOptions;

    coordinateOptions.emulsion = true; // reverse from right to left
    coordinateOptions.fitToPage = true; // fit artwork to page size
    coordinateOptions.orientation = PrintOrientation.LANDSCAPE;
    docRef.print(options);

    coordinateOptions.emulsion = false;
    coordinateOptions.fitToPage = false;
    coordinateOptions.orientation = PrintOrientation.PORTRAIT;
    coordinateOptions.horizontalScale = 50;
    coordinateOptions.verticalScale = 50;
    docRef.print(options);
}
```

## PrinterInfo — Example

### Available printer example

```
// Displays a list of available printers in a new text frame
var docRef = documents.add();
var iCount = printerList.length;

var textRef = docRef.textFrames.add();
textRef.contents += "Printers...\r";

for (var i = 0; i < iCount; i++) {
    textRef.contents += printerList[i].name;
    textRef.contents += "\r\t";
}

textRef.top = 600;
textRef.left = 200;

redraw();
```

## PrintFlattenerOptions — Example

### Print flattener settings example

```
// Creates a new document, adds symbols to the document
// then prints with a range of flattener balance settings
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
    symbolRef = docRef.symbols[i];

    symbolItemRef1 = docRef.symbolItems.add(symbolRef);
    symbolItemRef1.top = y;
    symbolItemRef1.left = 100;

    y -= (symbolItemRef1.height + 10);
}

redraw();

// Create PrintFlattenerOptions object and assign to a PrintOptions object
var flatOpts = new PrintFlattenerOptions();
var printOpts = new PrintOptions();
printOpts.flattenerOptions = flatOpts;

// Set other print options
printOpts.ClipComplexRegions = true;
printOpts.GradientResoultion = 360;
printOpts.RasterizatonResotion = 360;

// Print the current document with flattening balance increments of 20
for (var i = 0; i <= 100; i += 20) {
    flatOpts.flatteningBalance = i;
    activeDocument.print(printOpts);
}
```

## PrintFontOptions — Example

### Font option printing example

```
// Creates a new document, adds text then prints with specified font options.
var docRef = documents.add();

var pathRef = docRef.pathItems.rectangle(500, 300, 400, 400);
var textRef = docRef.textFrames.areaText(pathRef);
textRef.contents = "Text example";

//Create PrintFontOptions object and assign to a PrintOptions object
var fontOpts = new PrintFontOptions();
var printOpts = new PrintOptions();
printOpts.fontOptions = fontOpts;

// Set some font options
fontOpts.downloadFonts = PrintFontDownloadMode.DOWNLOADNONE;
fontOpts.fontSubstitution = FontSubstitutionPolicy.SUBSTITUTEDEVICE;

// print it
activeDocument.print(printOpts);
```

## PrintJobOptions — Example

### Job option printing example

```
// Creates a new document with layers containing visible, printable,
// non visible and non printable items then prints with each designation
// to view effects of using different job options

var docRef = documents.add();
var textRef_0 = docRef.layers[0].textFrames.add();
textRef_0.contents = "Visible and Printable";
textRef_0.top = 600;
textRef_0.left = 200;

var layerRef_1 = docRef.layers.add();
var textRef_1 = layerRef_1.textFrames.add();
textRef_1.contents = "Visible and Non-Printable";
textRef_1.top = 500;
textRef_1.left = 250;
layerRef_1.printable = false;

var layerRef_2 = docRef.layers.add();
var textRef_2 = layerRef_2.textFrames.add();
textRef_2.contents = "Non-Visible";
textRef_2.top = 400;
textRef_2.left = 300;
layerRef_2.visible = false;
redraw();

// Print with various job options
var printJobOptions = new PrintJobOptions();
var options = new PrintOptions();
options.jobOptions = printJobOptions;

printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;
docRef.print(options);

printJobOptions.collate = false;
printJobOptions.designation = PrintArtworkDesignation.VISIBLELAYERS;
printJobOptions.reverse = false;
docRef.print(options);

printJobOptions.designation = PrintArtworkDesignation.VISIBLEPRINTABLELAYERS;
var docPath = new File("~/printJobTest1.ps");
printJobOptions.file = docPath;
docRef.print(options);
```

## PrintOptions — Example

### Print option setup example

```
// Creates a new document, adds symbols, specifies a variety of print options,
// assigns each print option to a PrintOptions object,
// then prints with those options
// Create a new document and add some symbol items
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
    symbolRef = docRef.symbols[i];

    symbolItemRef1 = docRef.symbolItems.add(symbolRef);
    symbolItemRef1.top = y;

    symbolItemRef1.left = 100;

    y -= (symbolItemRef1.height + 10);
}

redraw();

// Create multiple options and assign to PrintOptions
var options = new PrintOptions();

var colorOptions = new PrintColorManagementOptions();
colorOptions.name = "ColorMatch RGB";
colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
options.colorManagementOptions = colorOptions;

var printJobOptions = new PrintJobOptions();
printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;

options.jobOptions = printJobOptions;

var coordinateOptions = new PrintCoordinateOptions();
coordinateOptions.fitToPage = true;
options.coordinateOptions = coordinateOptions;

var flatOpts = new PrintFlattenerOptions();
flatOpts.ClipComplexRegions = true;
flatOpts.GradientResoultion = 60;

flatOpts.RasterizatonResotion = 60;
options.flattenerOptions = flatOpts;

// Print with options
docRef.print(options);
```

## PrintPageMarksOptions — Example

### Page mark printing setup example

```
// Creates a PrintPageMarksOptions object, assigns it
// to a PrintOptions object, then prints the current document.
var docRef = activeDocument;
var pageMarkOptions= new PrintPageMarksOptions();

var options = new PrintOptions();
options.pageMarksOptions = pageMarkOptions;

pageMarkOptions.colorBars = true;
pageMarkOptions.pageInfoMarks = true;
pageMarkOptions.registrationMarks = true;
pageMarkOptions.trimMarks = true;

docRef.print(options);
```

## PrintPaperOptions — Example

### Print paper setup example

```
// Creates a new document, adds a path item, applies a graphic style
// then prints with specified paper options
var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 200);
docRef.graphicStyles[1].applyTo(pathRef);

var paperOpts = new PrintPaperOptions;
var printOpts = new PrintOptions;
printOpts.paperOptions = paperOpts;

var printerCount = printerList.length;
if (printerCount > 0) {

    // Print with the 1st paper from the 1st printer
    for (var i = 0; i < printerList.length; i++) {

        if (printerList[i].printerInfo.paperSizes.length > 0) {
            var printerRef = printerList[i];
        }

        var paperRef = printerRef.printerInfo.paperSizes[0];
        if (printerRef.printerInfo.paperSizes.length > 0){
            paperOpts.name = paperRef.name;
            printOpts.printerName = printerRef.name;
            docRef.print(printOpts);
        }
    }
}
```
