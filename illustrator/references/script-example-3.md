# Example (part 3)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## PrintPostScriptOptions — Example

### PostScript printing setup example

```
// Prints current document with various postscript levels
// Create new postscript options object, assign to print options
var psOpts = new PrintPostScriptOptions();

var printOpts = new PrintOptions();
printOpts.postScriptOptions = psOpts;

// Assign PS level, print
psOpts.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL2;
activeDocument.print(printOpts);

psOpts.postScriptLevel = PrinterPostScriptLevelEnum.PSLEVEL3;
activeDocument.print(printOpts);
```

## RasterItems — Example

### Creating a raster item

```
// Creates a new raster item in a new document from a raster file
// jpgFilePath contains the full path and file name of a jpg file
function createRasterItem(jpgFilePath) {
    var rasterFile = File(jpgFilePath);
    var myDoc = app.documents.add();

    var myPlacedItem = myDoc.placedItems.add();
    myPlacedItem.file = rasterFile;
    myPlacedItem.position = Array(0, myDoc.height);
    myPlacedItem.embed();
}
```

### Finding and examining a raster item

```
// Examines the color space of the first raster item in the document and displays
// result in ESTK console
if (app.documents.length > 0 && app.activeDocument.rasterItems.length > 0) {
    var rasterArt = app.activeDocument.rasterItems[0];

    switch (rasterArt.imageColorSpace) {
        case ImageColorSpace.CMYK:
            $.writeln("The color space of the first raster item is CMYK");
            break;

        case ImageColorSpace.RGB:
            $.writeln("The color space of the first raster item is RGB");
            break;

        case ImageColorSpace.GRAYSCALE:
            $.writeln("The color space of the first raster item is GRAYSCALE");
            break;
    }
}
```

## RGBColor — Example

### Setting an RGB color

```
// Sets the default fill color in the current document to yellow.

if (app.documents.length > 0) {
    // Define the new color
    var newRGBColor = new RGBColor();
    newRGBColor.red = 255;
    newRGBColor.green = 255;
    newRGBColor.blue = 0;

    app.activeDocument.defaultFillColor = newRGBColor;
}
```

## ScreenInfo — Example

### Getting screen information

```
// Displays in a new text frame, the name, angle and frequency
// of each screen list item
var sInfo = "";
var docRef = documents.add();
if (PPDFileList.length == 0) {
    sInfo = "\r\t\tEmpty PPDFileList";
} else {
    var ppdRef = PPDFileList[0];
    var ppdInfoRef = ppdRef.PPDInfo;
    sInfo += "\r\t\tScreen Objects for 1st PPD File:\r";
    sInfo += "\t\t" + ppdRef.name;

    var iScreens = ppdInfoRef.screenList.length;
    if (iScreens > 0) {
        for (var c = 0; c < iScreens; c++) {

        var screenRef = ppdInfoRef.screenList[c];
        sInfo += "\r\t\t";
        sInfo += screenRef.name;

        var screenInfoRef = screenRef.screenInfo;

        sInfo += ", Angle = ";
        sInfo += screenInfoRef.angle;

        sInfo += ", Frequency = ";
        sInfo += screenInfoRef.frequency;
        sInfo += "\r";
        }
    } else {
        sInfo += "\r\t\tEmpty ScreenList";
    }
}

var textRef = docRef.textFrames.add();
textRef.textRange.characterAttributes.size = 12;
textRef.contents = sInfo;
textRef.top = 600;
textRef.left = 30;

redraw();
```

## ScreenSpotFunction — Example

### PPD spot-function listing

```
// Displays in a new text frame, the screen spot functions for the 1st PPD file.
var docRef = documents.add();
var sInfo = "";
if (PPDFileList.length == 0) {
    sInfo = "\r\t\tEmpty PPDFileList"
} else {
    var ppdRef = PPDFileList[0];
    var ppdInfoRef = ppdRef.PPDInfo;

    var sInfo = "\r\t\tScreenSpotFunctions for 1st PPD File:\r";
    sInfo += "\t\t" + ppdRef.name + "\r";

    var iScreenSpots = ppdInfoRef.screenSpotFunctionList.length;
    if (iScreenSpots > 0) {
        for (var n = 0; n < iScreenSpots; n++) {
        var screenSpotRef = ppdInfoRef.screenSpotFunctionList[n];
        sInfo += "\t\t";

        sInfo += screenSpotRef.name;
        sInfo += ", spotFunction: ";

        sInfo += screenSpotRef.spotFunction;
        sInfo += "\r";
        }
    } else {
        sInfo += "\t\tEmpty ScreenSpotFunctionList";
    }
}

var textRef = docRef.textFrames.add();
textRef.textRange.characterAttributes.size = 12;
textRef.contents = sInfo;
textRef.top = 600;
textRef.left = 30;

redraw();
```

## Spot — Example

### SpotColor creation sample

```
// Creates a new spot color in the current document, then applies an 80% tint to the color
if ( app.documents.length > 0 ) {
    var doc = app.activeDocument;

    // Create the new spot
    var newSpot = doc.spots.add();

    // Define the new color value
    var newColor = new CMYKColor();
    newColor.cyan = 35;
    newColor.magenta = 0;
    newColor.yellow = 50;
    newColor.black = 0;

    // Define a new SpotColor with an 80% tint
    // of the new Spot's color. The spot color can then
    // be applied to an art item like any other color.
    newSpot.name = "Pea-Green";
    newSpot.colorType = ColorModel.SPOT;
    newSpot.color = newColor;

    var newSpotColor = new SpotColor();
    newSpotColor.spot = newSpot;
    newSpotColor.tint = 80;
}
```

## Spots — Example

### Remove spot entries

```
// Deletes all spots colors from the current document
if ( app.documents.length > 0 ) {
    var spotCount = app.activeDocument.spots.length;

    if (spotCount > 0) {
        app.activeDocument.spots.removeAll();
    }
}
```

### Build and apply a spot

```
// Defines and applies a new spot color in the current document,
// then applies the color to the first path item
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    // Define the new color value
    var newRGBColor = new RGBColor();
    newRGBColor.red = 255;
    newRGBColor.green = 0;
    newRGBColor.blue = 0;

    // Create the new spot
    var newSpot = app.activeDocument.spots.add();

    // Define the new SpotColor as 80% of the RGB color
    newSpot.name = "Scripted Red spot";
    newSpot.tint = 80;
    newSpot.color = newRGBColor;

    // Apply a 50% tint of the new spot color to the frontmost path item.
    // Create a spotcolor object, set the tint value,
    var newSpotColor = new SpotColor();
    newSpotColor.spot = newSpot;
    newSpotColor.tint = 50;

    // Use the spot color to set the fill color
    var frontPath = app.activeDocument.pathItems[0];
    frontPath.filled = true;
    frontPath.fillColor = newSpotColor;
}
```

## Story — Example

### Linked text-frame sample

```
// Creates 1 story that flows through 2 text frames and another story that
// is displayed in a 3rd text frame
// Create a new document and add 2 area TextFrames
var docRef = documents.add();
var itemRef1 = docRef.pathItems.rectangle(600, 200, 50, 30);
var textRef1 = docRef.textFrames.areaText(itemRef1);
textRef1.selected = true;

// create 2nd text frame and link it the first
var itemRef2 = docRef.pathItems.rectangle(550, 300, 50, 200);
var textRef2 = docRef.textFrames.areaText(itemRef2, TextOrientation.HORIZONTAL, textRef1);
textRef2.selected = true;

// Add enough text to the 1st TextFrame to
// cause it to flow to the 2nd TextFrame.
textRef1.contents = "This is two text frames linked together as one story";
redraw();

// Create a 3rd text frame and count the stories
var textRef3 = docRef.textFrames.add();
textRef3.contents = "Each unlinked textFrame adds a new story."
textRef3.top = 650;
textRef3.left = 200;

redraw();
```

## Swatch — Example

### Rename operation

```
// Changes the name of the last swatch
if ( app.documents.length > 0 && app.activeDocument.swatches.length > 0 ) {
    var lastIndex = app.activeDocument.swatches.length - 1;
    var lastSwatch = app.activeDocument.swatches[lastIndex];
    lastSwatch.name = "TheLastSwatch";
}
```

## Swatches — Example

### Lookup and removal

```
// Deletes swatch 4 from the current document
if ( app.documents.length > 0 ) {
  if (app.activeDocument.swatches.length > 4) {
    var swatchToDelete = app.activeDocument.swatches[3];
    swatchToDelete.remove();
  }
}
```

## SymbolItems — Example

### Symbol construction

```
// Creates a path item from each graphic style
// then adds each item as a new symbol

var docRef = documents.add();
var y = 750;
var x = 25;

var iCount = docRef.graphicStyles.length;

for (var i=0; i<iCount; i++) {

    var pathRef = docRef.pathItems.rectangle( y, x, 20, 20 );
    docRef.graphicStyles[i].applyTo(pathRef);

    // are we at bottom?
    if ( (y-=60) <= 60 ) {
        y = 750; // go back to the top.
        x+= 200
    }

    redraw();
    docRef.symbolItems.add(pathRef);
}
```

## Symbols — Example

### Creating a symbol

```
// Creates a path item from each graphic style
// then adds each item as a new symbol

var docRef = documents.add();
var y = 750;
var x = 25;

var iCount = docRef.graphicStyles.length;

for (var i=0; i<iCount; i++) {

    var pathRef = docRef.pathItems.rectangle( y, x, 20, 20 );
    docRef.graphicStyles[i].applyTo(pathRef);

    // are we at bottom?
    if ( (y-=60) <= 60 ) {
        y = 750; // go back to the top.
        x+= 200
    }

    redraw();
    docRef.symbols.add(pathRef);
}
```

## TabStopInfo — Example

### Displaying tab stop information

```
// Displays tab stop information found in each text frame
// of current document, if any.

var docRef = app.activeDocument;
var sData = "Tab Stops Found \\rTabStop Leader\t\tTabStop Position\r";
var textRef = docRef.textFrames;

for( var i=0 ; i < textRef.length; i++ ) {
    // Get all paragraphs in the textFrames
    var paraRef = textRef[i].paragraphs;

    for ( p=0 ; p < paraRef.length ; p++ ) {
        // Get para attributes for all textRanges in paragraph
        var attrRef = paraRef[p].paragraphAttributes;
        var tabRef = attrRef.tabStops;

        if ( tabRef.length > 0 ) {
            for(var t=0; t<tabRef.length; t++){
                sData += "\t" + tabRef[t].leader + "\t\t";
                sData += "\t\t" + tabRef[t].position + "\r";
            } // end for
        } // end if
    } // end for
} // end for

var newTF = docRef.textFrames.add();
newTF.contents = sData;
newTF.top = 400;
newTF.left = 100; redraw();
```

## Tag — Example

### Using tags

```
// Finds the tags associated with the selected art item,
// show names and values in a separate document

if ( app.documents.length > 0 ) {
    doc = app.activeDocument;

    if ( doc.selection.length > 0 ) {
        for ( i = 0; i < selection.length; i++ ) {
            selectedArt = selection[0];
            tagList = selectedArt.tags;

            if (tagList.length == 0) {
                var tempTag = tagList.add();
                tempTag.name = "OneWord";
                tempTag.value = "anything you want";
            }

            // Create a document and add a line of text per tag
            reportDocument = app.documents.add();
            top_offset = 400;

            for ( i = 0; i < tagList.length; i++ ) {
                tagText = tagList[i].value;
                newItem = reportDocument.textFrames.add();
                newItem.contents = "Tag: (" + tagList[i].name + " , " + tagText + ")";
                newItem.position = Array(100, top_offset);
                newItem.textRange.size = 24;
                top_offset = top_offset - 20;
            }
        }
    }
}
```

## Tags — Example

### Setting tag values

```
// Adds tags to all RasterItems and PlacedItems in the current document
if ( app.documents.length > 0 ) {
    var doc = app.activeDocument;

    if ( doc.placedItems.length + doc.rasterItems.length > 0 ) {
        for ( i = 0; i < doc.pageItems.length; i++ ) {
            var imageArt = doc.pageItems[i];

            if ( imageArt.typename == "PlacedItem" || imageArt.typename == "RasterItem") {
                // Create a new Tag with the name AdobeURL and the
                // value of the www link

                var urlTAG = imageArt.tags.add();
                urlTAG.name = "AdobeWebSite";
                urlTAG.value = "http://www.adobe.com/";
            }
        }
    } else {
        alert( "No placed or raster items in the document" );
    }
}
```

## TextFont — Example

### Setting the font of text

```
// Sets the font of all the text in the document to the first font
if ( app.documents.length > 0 ) {

// Iterate through all text art and apply font 0
    for ( i = 0; i< app.activeDocument.textFrames.length; i++) {
        textArtRange = app.activeDocument.textFrames[i].textRange;
        textArtRange.characterAttributes.textFont = app.textFonts[0];
    }
}
```

## TextFonts — Example

### Finding fonts

```
// Creates a new A3 sized document and display a list of available fonts until the document is full.

var edgeSpacing = 10;
var columnSpacing = 230;
var docPreset = new DocumentPreset;
docPreset.width = 1191.0;
docPreset.height = 842.0

var docRef = documents.addDocument(DocumentColorSpace.CMYK, docPreset);
var sFontNames = "";
var x = edgeSpacing;
var y = (docRef.height - edgeSpacing);

var iCount = textFonts.length;

for (var i=0; i<iCount; i++) {
    sFontName = textFonts[i].name;
    sFontName += " ";
    sFontNames = sFontName + textFonts[i].style;

    var textRef = docRef.textFrames.add();
    textRef.textRange.characterAttributes.size = 10;
    textRef.contents = sFontNames;
    textRef.top = y;
    textRef.left = x;

    // check wether the text frame will go off the edge of the document
    if ((x + textRef.width)> docRef.width) {
        textRef.remove();
        iCount = i;
        break;
    } else {
        // display text frame
        textRef.textRange.characterAttributes.textFont = textFonts.getByName(textFonts[i].name);
        redraw();

        if ((y-=(textRef.height)) <= 20) {
            y = (docRef.height - edgeSpacing);
            x += columnSpacing;
        }
    }
}
```

## TextFrameItem — Example

### Rotate a text art item

```
// Duplicates and rotates the selected text art item 5 times
if ( app.documents.length > 0 ) {
    selectedItems = app.activeDocument.selection;

    // make sure something is selected.
    if ( selectedItems.length > 0 ) {

        // The selection must be a text art item
        if ( selectedItems[0].typename == "TextFrame" ) {

            // Get the parent of the text art so new text art items
            // can be inserted in the same group or layer
            dupSrc = selectedItems[0];
            textContainer = dupSrc.parent;

            // Create 5 new versions of the text art each rotated a bit
            for ( i = 1; i <= 5; i++ ) {
                dupText = dupSrc.duplicate( textContainer, ElementPlacement.PLACEATEND );
                dupText.rotate(180 * i/6);
            }
        }
    }
}
```

## TextFrameItems — Example

### Creating and modifying text frames

```
// Creates a document with text frames displaying path, area and point
// text, changes the content of each frame then deletes the 2nd frame

// create a new document
var docRef = documents.add();

// create 3 new textFrames (area, line, point)
// Area Text
var rectRef = docRef.pathItems.rectangle(700, 50, 100, 100); var areaTextRef = docRef.textFrames.areaText(rectRef); areaTextRef.contents = "TextFrame #1";
areaTextRef.selected = true;

// Line Text
var lineRef = docRef.pathItems.add();
lineRef.setEntirePath( Array(Array(200, 700), Array(300, 550) ) ); var pathTextRef = docRef.textFrames.pathText(lineRef); pathTextRef.contents = "TextFrame #2";
pathTextRef.selected = true;

// Point Text
var pointTextRef = docRef.textFrames.add(); pointTextRef.contents = "TextFrame #3"; pointTextRef.top = 700;
pointTextRef.left = 400; pointTextRef.selected = true; redraw();

// count the TextFrames
var iCount = docRef.textFrames.length;
var sText = "There are " + iCount + " TextFrames.\r" sText += "Changing contents of each TextFrame.";

// change the content of each docRef.textFrames[0].contents = "Area TextFrame."; docRef.textFrames[1].contents = "Path TextFrame."; docRef.textFrames[2].contents = "Point TextFrame."; redraw();
docRef.textFrames[1].remove(); redraw();

// count again

var iCount = docRef.textFrames.length;
```

## TextRange — Example

### Manipulating Text

```
// Changes size of the first character of each word in the
// current document by changing the size attribute of each character

if ( app.documents.length > 0 ) {
    for ( i = 0; i < app.activeDocument.textFrames.length; i++ ) {
        var text = app.activeDocument.textFrames[i].textRange;
        for ( j = 0 ; j < text.words.length; j++ ) {
            //each word is a textRange object
            var textWord = text.words[j];

            // Characters are textRanges too.
            // Get the first character of each word and increase it's size.

            var firstChars = textWord.characters[0];
            firstChars.size = firstChars.size * 1.5;
        }
    }
}
```

## Words — Example

### Counting words

```
// Counts all words in current document and stores total in numWords
if ( app.documents.length > 0 ) {
    var numWords = 0;

    for ( i = 0; i < app.activeDocument.textFrames.length; i++) {
        numWords += app.activeDocument.textFrames[i].words.length;
    }
}
```

### Applying attributes to words

```
// Creates a new magenta color and applies the color to all words meeting a specific criteria
if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
    // Create the color to apply to the words
    var wordColor = new RGBColor();
    wordColor.red = 255;
    wordColor.green = 0;
    wordColor.blue = 255;

    // Set the value of the word to look for searchWord1 = "the";
    var searchWord2 = "The";
    var searchWord3 = "THE";

    // Iterate through all words in the document
    // and color the words that match searchWord

    for (var i = 0; i < app.activeDocument.textFrames.length; i++) {
        var textArt = activeDocument.textFrames[i];

        for (var j = 0; j < textArt.words.length; j++) {
            var word = textArt.words[j];

            if (word.contents == searchWord1 || word.contents == searchWord2 || word.contents == searchWord3) {
                word.filled = true;
                word.fillColor = wordColor;
            }
        }
    }
}
```
