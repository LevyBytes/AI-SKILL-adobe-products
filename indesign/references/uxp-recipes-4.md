# Rtl, Storage, Tbd Promise

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Middle Eastern Scripting Guide; Storages; raw_githubusercontent_com_AdobeDocs_uxp_indesign_main_src_pages_resources_recipes_tbd_promise_md.

## Middle Eastern Scripting Guide

InDesign Server includes Middle Eastern support for document design and publishing workflows in Middle Eastern languages.

That support enables multilingual publication layouts that combine Roman and Middle Eastern scripts with flexibility and control.

This part explains scripting access for Middle Eastern features. It assumes you already understand the Middle Eastern feature set in InDesign.

### Setting up a document

### Setting page binding

Roman publications normally bind documents on the left, while Arabic or Hebrew publications use right-side binding. InDesign Server can create documents bound on either the left edge or the right edge. In InDesign Scripting, the pageBinding property controls that setting. The property belongs to the DocumentPreferences object and accepts a PageBindingOptions enumeration value: default, leftToRight or rightToLeft.

This sample creates a document and then sets or reads page binding for that document. PageBinding contains the complete version.

```js
const { app, PageBindingOptions } = require("indesign");
let myDocument = app.documents.add();
with (myDocument) {
  //set number of pages
  documentPreferences.pagesPerDocument = 4;
  //set binding options for the document
  documentPreferences.pageBinding = PageBindingOptions.rightToLeft;
}
```

### Numbering

InDesign Server supplies page, paragraph, and footnote numbering styles for Middle Eastern composition. Available choices include standard numbering, Arabic styles (Arabic Abjad and Arabic Alif Ba Tah), and Hebrew styles (Hebrew Biblical Standard and Hebrew Non-Standard Decimal). Scripts reach these settings through the PageNumberStyle and FootnoteNumberingStyle properties.

### Settings for page numbering

This example assigns page-numbering settings to pages. NumberingME contains the complete version.

```js
const { PageNumberStyle } = require("indesign");
myDocument.sections.item(0).pageNumberStyle = PageNumberStyle.arabicAlifBaTah;
myDocument.sections.item(1).pageNumberStyle = PageNumberStyle.arabicAbjad;
```

### Settings for footnote numbering

The next snippet applies Middle Eastern numbering to footnotes. The complete version is in NumberingME:

```js
myDocument.footnoteOptions.footnoteNumberingStyle = FootnoteNumberingStyle.hebrewBiblical;
```

### Setting composer

Text-frame composition in a Roman publication uses a composer that differs from the ME Composer. InDesign Server provides the document method changeComposer, which changes all text frames in a Roman publication to the Adobe World-Ready Composer. It converts Adobe Paragraph Composer to Adobe World-Ready Paragraph Composer and Adobe Single-line Composer to Adobe World-Ready Single-line Composer.

This snippet demonstrates the method. ChangeComposer contains the complete version:

```js
myDocument.changeComposer();
```

### Working with text

### Inserting special ME character

Through enumerations, InDesign Server can insert three Hebrew characters (Geresh, Gershayim, Maqaf), four Arabic characters (Kashida, Arabic comma, Arabic Semicolon, and Arabic Question mark), plus a right-to-left marker or left-to-right marker. This script inserts special Middle Eastern characters. SpecialCharactersME contains the complete version.

```js
const { SpecialCharacters } = require("indesign");
let myTextFrame = myDocument.pages.item(0).textFrames.add();
//Entering InDesign special ME characters by their enumerations:
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Maqaf: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewMaqaf;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Geresh: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewGeresh;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Gershayim: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewGershayim;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Kashida: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicKashida;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Comma: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicComma;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Semicolon: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicSemicolon;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Question Mark: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicQuestionMark;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Right To Left Mark: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.rightToLeftMark;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Left To Right Mark: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.leftToRightMark;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
```

### Finding and replacing ME text

InDesign scripting can search for Middle Eastern text and replace it. The following sample finds and replaces words in Middle Eastern text. MENAFindAndReplaceText contains the complete version.

```js
const { app, NothingEnum } = require("indesign");
let myDocument = app.documents.add();
//Clear the find/change text preferences.
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;
//Search the document for the string "Adobe".
app.findTextPreferences.findWhat = "Ø£Ø¯ÙˆØ¨ÙŠ";
//Set the find options.
app.findChangeTextOptions.caseSensitive = false;
app.findChangeTextOptions.includeFootnotes = false;
app.findChangeTextOptions.includeHiddenLayers = false;
app.findChangeTextOptions.includeLockedLayersForFind = false;
app.findChangeTextOptions.includeLockedStoriesForFind = false;
app.findChangeTextOptions.includeMasterPages = false;
app.findChangeTextOptions.wholeWord = false;
var myFoundItems = myDocument.findText(); //Converting an InDesign script to InDesign Server
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;
//Replace the text in myString
for (let i = 0; i < myFoundItems.length; i++) {
  myFoundItems[i].contents = "Adobe";
}
```

### Setting story direction property

[Figure: Setting story direction property](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/rtl/1.png)

To change the primary direction of an existing text story in InDesign Scripting, even after text has been typed or placed, set storyDirection. This StoryPreferences property takes one StoryDirectionOptions value, either leftToRightDirection or rightToLeftDirection. The sample below creates a text frame with two columns and then assigns its story direction. StoryDirection contains the complete version.

```js
const { Justification, StoryDirectionOptions } = require("indesign");
with (myTextFrame) {
  //Set the bounds of the text frame.
  geometricBounds = [70, 200, 300, 500];
  //Fill the text frame with placeholder text in 2 column.
  textFramePreferences.textColumnCount = 2;
  contents =
    "Ø£Ø¯ÙˆØ§Øª Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù‚ÙˆÙŠØ© ÙˆØ§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø© Ø±Ù‚Ù… 1 Ù…Ù† Ø£Ø¯ÙˆØ¨ÙŠ";
  parentStory.justification = Justification.rightJustified;
  //Now set the story direction left to right
  parentStory.storyPreferences.storyDirection = StoryDirectionOptions.leftToRightDirection;
}
```

### Setting paragraph attributes

InDesign Server includes paragraph controls, including Paragraph Direction and Justification, for Arabic/Hebrew text layout.

### ParagraphDirection

Paragraph direction determines how multidirectional text is ordered within the paragraph. The default direction is Left To Right.

To change an existing paragraph's main direction through InDesign scripting, set the paragraphDirection property. This property belongs to Text objects and accepts one ParagraphDirectionOptions value: leftToRightDirection or rightToLeftDirection. The sample below sets that property. MEParagraphAttributes contains the complete version.

```js
const { ParagraphDirectionOptions } = require("indesign");
with (myTextFrame) {
  //Set ME paragraph attributes.
  paragraphs.item(0).paragraphDirection = ParagraphDirectionOptions.leftToRightDirection;
}
```

### Paragraph direction for application and document

The same property can set text defaults for both the application and an individual document:

```js
const { ParagraphDirectionOptions } = require("indesign");
myDocument.textDefaults.paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;
```

### Justification

InDesign scripting can adjust the ParagraphJustification property for paragraph defaults or for an existing paragraph attribute. The property is part of Text objects and accepts a ParagraphJustificationOptions enumeration value: defaultJustification, arabicJustification, or naskhJustification. This sample sets the property. MEParagraphAttributes contains the complete version.

### Justification for an existing paragraph

```js
const { ParagraphJustificationOptions } = require("indesign");
with (myTextFrame) {
  //Set ME paragraph attributes.
  paragraphs.item(1).paragraphJustification = ParagraphJustificationOptions.naskhJustification;
}
```

### Justification for text defaults

```js
const { ParagraphJustificationOptions } = require("indesign");
myDocument.textDefaults.paragraphJustification = ParagraphJustificationOptions.arabicJustification;
```

### Setting character attributes

InDesign Server includes character controls intended for Arabic/Hebrew composition. Scripts reach those controls through Text object properties, so a script can tune the same Middle Eastern typographic settings programmatically. The MECharactrsAttributes tutorial script demonstrates assignment of each Middle Eastern text-object property.

### Digits

Choose which language form is used when numeric digits are shown. With Default, a number follows the language of the preceding character; the other choices are Arabic, Hindi, and Farsi numbers. In the text object, that setting maps to DigitsType.

```js
const { DigitsTypeOptions } = require("indesign");
myTextFrame.contents = "Farsi Digits: 1234567890";
myTextFrame.paragraphs.item(0).digitsType = DigitsTypeOptions.farsiDigits;
```

### Kashidas

Arabic and Naskh justification can add both kashidas and spaces. To prevent kashida insertion in Arabic text, set the Kashidas property through InDesign scripting to kashidasOff; use defaultKashidas when the default behavior is desired.

```js
const { KashidasOptions, Justification, ParagraphJustificationOptions } = require("indesign");
myTextFrame.contents = "ÙƒÙØªÙØ¨ÙŽ Kashidas Off";
myTextFrame.paragraphs.item(0).kashidas = KashidasOptions.kashidasOff;
myTextFrame.paragraphs.item(0).justification = Justification.fullyJustified;
myTextFrame.paragraphs.item(0).paragraphJustification =
  ParagraphJustificationOptions.naskhJustification;
```

### Characters direction

Bidirectional text relies on stored direction data for individual characters in InDesign Server. Scripting can update that data with the CharacterDirection property, selecting a value from CharacterDirectionOptions: defaultDirection, leftToRightDirection, or rightToLeftDirection.

```js
const { CharacterDirectionOptions } = require("indesign");
myTextFrame.contents = "Farsi + L dir: 1234567890";
for (let i = 15; i < 25; i++) {
  myTextFrame.parentStory.characters.item(i).characterDirection =
    CharacterDirectionOptions.leftToRightDirection;
}
```

### Diacritic positioning

Short Arabic vowels appear as floating marks above or below consonants. Correct horizontal and vertical placement is therefore important for readable positioning over the base letters.

Through scripting, Diacritic Positioning is controlled with DiacriticPosition, which can use defaultPosition, loosePosition, mediumPosition, tightPosition, and opentypePosition. For a custom placement, XOffsetDiacritic adjusts the horizontal offset and YOffsetDiacritic adjusts the vertical offset.

```js
const { DiacriticPositionOptions } = require("indesign");
myTextFrame.contents = "ÙƒÙØªÙØ¨ÙŽ Loose";
myTextFrame.paragraphs.item(0).diacriticPosition = DiacriticPositionOptions.loosePosition;
myTextFrame.contents = "ÙƒÙØªÙØ¨ÙŽ Custom";
myTextFrame.parentStory.characters.item(1).xOffsetDiacritic = 150;
myTextFrame.parentStory.characters.item(1).yOffsetDiacritic = -150;
```

### Open Type features

Layouts that use an Open Type Font can use extra Open Type capabilities. Script access to those capabilities is available through OtfOverlapSwash, OtfStylisticAlternate, OtfJustificationAlternate, and OtfStretchedAlternate.

```js
myTextFrame.paragraphs.item(0).otfOverlapSwash = true;
myTextFrame.paragraphs.item(0).otfStylisticAlternate = true;
myTextFrame.paragraphs.item(0).otfJustificationAlternate = true;
myTextFrame.paragraphs.item(0).otfStretchedAlternate = true;
```

### Using styles

Productive text-formatting scripts usually depend on paragraph and character styles. When a Character or Paragraph style is being created, the CharacterStyles and ParagraphStyles Objects expose the character and paragraph attribute properties described earlier.

The script fragment below creates paragraph and character styles that include Middle Eastern attributes; see CreateStylesME for the full tutorial script.

```js
const {
  DigitsTypeOptions,
  CharacterDirectionOptions,
  ParagraphDirectionOptions,
  ParagraphJustificationOptions,
  KashidasOptions,
  DigitsTypeOptions,
} = require("indesign");
//Create a character style named "myCharacterStyleME" if
//no style by that name already exists.
try {
  myCharacterStyleME = myDocument.characterStyles.item("myCharacterStyleME");
  //If the style does not exist, trying to get its name will generate an error.
  myName = myCharacterStyleME.name;
} catch (myError) {
  //The style did not exist, so create it.
  myCharacterStyleME = myDocument.characterStyles.add({ name: "myCharacterStyleME" });
}
with (myCharacterStyleME) {
  appliedFont = app.fonts.item("Adobe Arabic");
  digitsType = DigitsTypeOptions.farsiDigits;
  characterDirection = CharacterDirectionOptions.leftToRightDirection;
}
//Create a paragraph style named "myParagraphStyle" if
//no style by that name already exists.
try {
  myParagraphStyleME = myDocument.paragraphStyles.item("myParagraphStyleME");
  //If the paragraph style does not exist, trying to get its name will generate an error.
  myName = myParagraphStyleME.name;
} catch (myError) {
  //The paragraph style did not exist, so create it.
  myParagraphStyleME = myDocument.paragraphStyles.add({ name: "myParagraphStyleME" });
}
with (myParagraphStyleME) {
  justification = Justification.fullyJustified;
  paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;
  paragraphJustification = ParagraphJustificationOptions.naskhJustification;
  pointSize = 12;
  kashidas = KashidasOptions.defaultKashidas;
  digitsType = DigitsTypeOptions.hindiDigits;
  appliedFont = app.fonts.item("Adobe Arabic");
  otfJustificationAlternate = true;
}
```

## Storages

When a script or plugin only needs to save a key-value pair for later lookup, Storages provide a direct mechanism.

UXP offers `Session Storage`, `Local Storage`, and `Secure Storage`. Their APIs are shaped similarly, but the right choice depends on the lifetime and sensitivity required by the use case.

**Session Storage** stores data for the current session only.

- For plugins, UDT-managed sessions run from 'Load' until 'Unload'. Installed plugins instead keep the session from application launch through application quit.
- For scripts, each run counts as its own session.

For longer-lived data, choose either **Local storage** or **Secure storage**. Secure Storage fits sensitive values such as passwords.

Plugins and Scripts

**In plugins**, all three storage types are available.

**In scripts**, only session storage should be used because script lifetime is limited to the current execution. Persistent stores such as local or secure storage can lead to incorrect behavior. Read more about [script lifespan](uxp-advanced-topics.md).

In both plugin and script cases, treat stored data as potentially removable even though it is technically expected to remain indefinitely. Store values that can be recreated if a user action accidentally deletes them.

```js
// Session storage
const storage = window.sessionStorage;
```

```js
// Local storage
const storage = window.localStorage;
```

```js
// Secure storage
const storage = require("uxp").storage.secureStorage;
```

After the appropriate storage type is selected, set and fetch a key-value pair with these calls.

```js
await storage.setItem("key", "value");
await storage.getItem("key");
```

### Reference material

- [Local Storage](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-storage/local-storage.md)
- [Session Storage](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/data-storage/session-storage.md)
- [Secure Storage](https://raw.githubusercontent.com/reference/uxp-api/reference-js/modules/uxp/key-value-storage/secure-storage.md)

## raw_githubusercontent_com_AdobeDocs_uxp_indesign_main_src_pages_resources_recipes_tbd_promise_md

Reference material link.
Something that drops out of the flow.

Example - phone notification

```
async function showDialog() {

    return new Promise((resolve, reject) => {
        try{
            let dialog = createDialog();
            document.body.appendChild(dialog).showModal();

            const closeBtn = document.getElementById("close");
            closeBtn.addEventListener("click", () => {
                console.log("clicked on the close btton");
                dialog.close();
            })

            // add listeners on the dialog close and cancel and resolve/reject the promise returned in one of them.
            // or you can have a button done in the dialog and can resolve the promise on the click of the button,
            // but make sure that a promise is returned and that is resolved/rejected later else dialog wont show up.
            dialog.addEventListener("cancel", () => {
                console.log("dialog cancel called");
                reject("dialog cancel called");
            });

            dialog.addEventListener("close", () => {
                console.log("dialog Close called");
                resolve("dialog Close called");
            });
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

// wait for the dialog to be closed
await showDialog();

// Dialog creation and setting CSS styles for elements using anonymous method
function createDialog() {
    const dialog = document.createElement("dialog");
    // dialog.style.height = "200px";
    // dialog.style.width = "600px";

    dialog.style.color = "white";

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.height = "300px";
    div.style.width = "400px";
    div.style.alignItems = "center";

    const header = document.createElement("h2");
    header.id = "head";
    header.style.color = "white";
    header.textContent = "Dialog Created by a script.";
    div.appendChild(header);

    const image = document.createElement("img");
    image.src = "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png";
    image.style.marginTop = "30px";
    div.appendChild(image);

    const closeBtn = document.createElement("sp-button");
    closeBtn.id = "close";
    closeBtn.style.height = "30px";
    closeBtn.textContent = "Close";
    closeBtn.style.marginTop = "10px";
    div.appendChild(closeBtn);


    dialog.appendChild(div);
    return dialog;
}
```

[https://javascript.info/promise-basics](https://javascript.info/promise-basics)

## See also

- [Characters](uxp-characters.md)
