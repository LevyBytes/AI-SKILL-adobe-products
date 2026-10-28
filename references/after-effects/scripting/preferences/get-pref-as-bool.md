# Preferences.getPrefAsBool()

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

```javascript
var expandByDefault = app.preferences.getPrefAsBool("Flowchart Settings", "Expand Flowchart Comps by Default");
alert("The setting is: " + expandByDefault);
```

Fetching the main "Javascript Debugger Enabled" preference:

```javascript
var debuggerEnabled = app.preferences.getPrefAsBool("Main Pref Section v2", "Pref_JAVASCRIPT_DEBUGGER", PREFType.PREF_Type_MACHINE_INDEPENDENT);
alert("The setting is: " + debuggerEnabled);
```
