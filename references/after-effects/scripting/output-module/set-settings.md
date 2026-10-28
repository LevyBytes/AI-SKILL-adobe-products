# OutputModule.setSettings()

app.project.renderQueue.item(index).outputModule(index).setSettings()

Note

This functionality was added in After Effects 13.0 (CC 2014)

### Description

- Depreciated Source: https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva
- Archived version: https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva

Warning

Be aware of a bug: once you change an output module setting, the OutputModule object goes stale, so fetch the Output Module afresh after every modification.

### Examples

Take the settings off one item's output module and apply them to another:

```javascript
// If you want to get the values in the number format, use
// GetSettingsFormat.NUMBER_SETTABLE as an argument.

var omItem1_settable_str = app.project.renderQueue.item(1).outputModule(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// Set output module item 1 of render queue item 2 with values that you get from
// output module 1 of render queue item 1

app.project.renderQueue.item(2).outputModule(1).setSettings( omItem1_settable_str );
```

Apply values of your own making to output module item 1 of render queue item 3:

```javascript
var crop_data = {
    "Crop":        true,
    "Crop Bottom": 0,
    "Crop Left":   0,
    "Crop Right":  8,
    "Crop Top":    10
};

app.project.renderQueue.item(1).outputModule(3).setSettings( crop_data );
```

Send the rendered file into the user directory:

```javascript
var om1 = app.project.renderQueue.item(1).outputModule(1);
var file_name = File.decode( om1.file.name ); // Name contains special character, space?
var new_dir = new Folder( "~/new_output" );
var new_path = new_dir.fsName;

var new_data = {
    "Output File Info": {
        "Base Path":      new_path,
        "Subfolder Path": "draft",
        "File Name":      file_name
    }
};

om1.setSettings( new_data );
```

The next sample again sends the output file to the user directory, only here it relies on the full path:

```javascript
var om1 = app.project.renderQueue.item(1).outputModule(1);

// Name contains special character, such as space?
var file_name = File.decode( om1.file.name );
var new_path = "/Users/myAccount/new_output";
var separator = "/";

if ($.os.indexOf("Mac") == -1) {
    new_path = "C:\Users\myAccount\new_output";
    separator = "\\";
}

var new_data = {
    "Output File Info": {
        "Full Flat Path": new_path + separator + file_name
    }
};

om1.setSettings( new_data );
```
