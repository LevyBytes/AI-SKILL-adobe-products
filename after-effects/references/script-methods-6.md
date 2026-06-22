# Methods (part 6)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Preferences object — Methods

### Preferences.deletePref()

app.preferences.deletePref(sectionName, keyName[, prefType])

### Description

Removes a preference from the preference file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Example

Suppose a setting under the key "trimPrecomps" lives in a section named "Precomp Cropper" — this removes it:

```
app.preferences.deletePref("Settings_Precomp Cropper", "trimPrecomps");
```

### Preferences.getPrefAsBool()

app.preferences.getPrefAsBool(sectionName, keyName[, prefType])

### Description

Reads a value out of the preferences file and interprets it as a boolean.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Boolean.

### Example

Fetching the Flow Chart "Expand Flowchart Comps by Default" preference:

```
var expandByDefault = app.preferences.getPrefAsBool("Flowchart Settings", "Expand Flowchart Comps by Default");
alert("The setting is: " + expandByDefault);
```

Fetching the main "Javascript Debugger Enabled" preference:

```
var debuggerEnabled = app.preferences.getPrefAsBool("Main Pref Section v2", "Pref_JAVASCRIPT_DEBUGGER", PREFType.PREF_Type_MACHINE_INDEPENDENT);
alert("The setting is: " + debuggerEnabled);
```

### Preferences.getPrefAsFloat()

app.preferences.getPrefAsFloat(sectionName, keyName[, prefType])

### Description

Reads a value out of the preferences file and interprets it as a float.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Float.

### Preferences.getPrefAsLong()

app.preferences.getPrefAsLong(sectionName, keyName[, prefType])

### Description

Reads a value out of the preferences file and interprets it as a long (number).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Long.

### Preferences.getPrefAsString()

app.preferences.getPrefAsString(sectionName, keyName[, prefType])

### Description

Reads a value out of the preferences file and interprets it as a string.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

String.

### Preferences.havePref()

app.preferences.havePref(sectionName, keyName[, prefType])

### Description

Comes back true when the named preference item is present and carries a value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Boolean.

### Preferences.reload()

app.preferences.reload()

### Description

Forces a manual reread of the preferences file. Without it, scripting only sees preference changes once the application has been restarted.

### Parameters

None.

### Returns

Nothing.

### Preferences.savePrefAsBool()

app.preferences.savePrefAsBool(sectionName, keyName, value[, prefType])

### Description

Writes a preference item as a boolean.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| value | Boolean | The new value. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Preferences.savePrefAsFloat()

app.preferences.savePrefAsFloat(sectionName, keyName, value[, prefType])

### Description

Writes a preference item as a float.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| value | Floating-point value | The new value. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Preferences.savePrefAsLong()

app.preferences.savePrefAsLong(sectionName, keyName, value[, prefType])

### Description

Writes a preference item as a long.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| value | Long value | The new value. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Preferences.savePrefAsString()

app.preferences.savePrefAsString(sectionName, keyName, value[, prefType])

### Description

Writes a preference item as a string.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| value | String | The new value. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Preferences.saveToDisk()

app.preferences.saveToDisk()

### Description

Commits the preferences to disk by hand. Without this, scripting will not pick up preference changes until the application restarts.

### Parameters

None.

### Returns

Nothing.

## Settings object — Methods

### Settings.getSetting()

app.settings.getSetting(sectionName, keyName[, prefType])

### Description

Pulls the value of a script-settings item from the preferences file.

Warning

Exceed 1999 bytes and calling getSetting on that item raises an error (observed in AE 15.0.1)

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a settings section. |
| keyName | String | The key name of the setting item. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

String.

### Example

Suppose a setting under the key "trimPrecomps" sits in a section named "Precomp Cropper" — read its value like so:

```
var trimPrecompsSetting = app.settings.getSetting("Precomp Cropper", "trimPrecomps");
alert("The setting is: " + trimPrecompsSetting);
```

### Settings.haveSetting()

app.settings.haveSetting(sectionName, keyName[, prefType])

### Description

Comes back true when the named script-settings item is present and carries a value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a settings section. |
| keyName | String | The key name of the setting item. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Boolean.

### Settings.saveSetting()

app.settings.saveSetting(sectionName, keyName, value[, prefType])

### Description

Stores a value for a script-settings item.

Warning

Exceed 1999 bytes and calling saveSetting on that item raises an error (observed in AE 15.0.1)

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a settings section. |
| keyName | String | The key name of the setting item. |
| value | String | The new value. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Example

To stash a setting named "trimPrecomps" for a script called "Precomp Cropper", you might write:

```
var trimPrecompsSetting = true;
app.settings.saveSetting("Precomp Cropper", "trimPrecomps", trimPrecompsSetting);
```

Keep in mind the value lands as a string. Later on, parse it back into a bool if that's what you need.

## View object — Methods

### View.setActive()

app.activeViewer.views[0].setActive()

### Description

Brings this view panel forward and gives it focus, turning it active. Running this method flips the view's active attribute to true.

### Parameters

None.

### Returns

Boolean, indicating if the view panel was made active.

## Viewer object — Methods

### Viewer.setActive()

viewer.setActive()

### Description

Brings the viewer panel forward and gives it focus, turning it active. Running this method flips the viewer's active attribute to true.

### Parameters

None.

### Returns

Boolean indicating if the viewer panel was made active.
