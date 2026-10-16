# Working with the perspective grid — Use perspective presets

Illustrator's built-in grid-parameter presets cover one-point, two-point, and three-point perspective. The preset names are "[1P-NormalView]", "[2P-NormalView]", and "[3P-NormalView]".

This script demonstrates programmatic selection of the two-point perspective preset:

```applescript
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Select the default two-point perspective preset
        select perspective preset perspective preset "[2P-Normal View]"
    end tell
end tell
```

Scripts may also create perspective presets, export presets to files, and import presets from files. These examples demonstrate export and import:

```applescript
tell application "Adobe Illustrator"
    set docRef to make new document
    set filePath to "Macintosh HD:scripting:PGPresetsExported"
    export perspective grid preset of docRef to file filePath
end tell

tell application "Adobe Illustrator"
    set docRef to make new document
    set filePath to "Macintosh HD:scripting:PGPresets"
    import perspective grid preset of docRef from file filePath
end tell
```

Illustrator includes built-in grid-parameter presets for one-point, two-point, and three-point perspectives. Their names are "[1P-NormalView]", "[2P-NormalView]", and "[3P-NormalView]".

This script demonstrates programmatic selection of the two-point perspective preset:

```javascript
//Set the default one-point perspective preset
app.activeDocument.selectPerspectivePreset("[1P-Normal View]");

//Set the default two-point perspective preset
app.activeDocument.selectPerspectivePreset("[2P-Normal View]");

//Set the default three-point perspective preset
app.activeDocument.selectPerspectivePreset("[3P-Normal View]");
```

Scripts can also create perspective presets, write presets out to files, and load presets from files. The next examples write preset data to disk and read preset data back:

```javascript
//Create a new document
var mydoc = app.documents.add();
//Export perspective presets to a file
var exportPresetFile = new File("C:/scripting/PGPresetsExported")
mydoc.exportPerspectiveGridPreset(exportPresetFile);

//Create a new document
var mydoc = app.documents.add();
//Import perspective presets from a file
var importPresetFile = new File("C:/scripting/PGPresets")
mydoc.importPerspectiveGridPreset(importPresetFile);
```

Illustrator includes default grid-parameter presets for one-point, two-point, and three-point perspective. Their names are "[1P-NormalView]", "[2P-NormalView]", and "[3P-NormalView]".

The next script selects the two-point perspective preset through code:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document
Set docRef = appRef.Documents.Add()

Rem Select the default two-point perspective preset
docRef.SelectPerspectivePreset("[2P-Normal View]")
```

Perspective presets can also be created, exported to files, and imported from files. These scripts demonstrate export and import:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Rem Create a new document
Set docRef = appRef.Documents.Add()
Rem Export perspective presets to a file
docRef.ExportPerspectiveGridPreset("C:/scripting/PGPresetsExported")

Set appRef = CreateObject ("Illustrator.Application")
Rem Create a new document
Set docRef = appRef.Documents.Add()
Rem Import perspective presets from a file
docRef.ImportPerspectiveGridPreset("C:/scripting/PGPresets")
```
