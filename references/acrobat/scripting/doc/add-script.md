# addScript

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader |

Installs a document-level script onto a document. See also setAction, setPageAction, the Bookmark object setAction method, and the Field object setAction method.

Note

Whatever script cName already had defined is overwritten by this method.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What to name the script. Where one of that name is already present, the old script gives way to the new. |
| cScript | A JavaScript expression that fires once the document opens. |

Example: Sound a beep on each occasion the document opens.

```javascript
this.addScript("My Code", "app.beep(0);");
```

For one more illustration, see the disclosed property.
