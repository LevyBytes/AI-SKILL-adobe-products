# Startup scripts shared through Creative Cloud

This shared startup location participates in Creative Cloud startup behavior, so scripts stored there run as Creative Cloud applications open.

Create the folder at this location:

| OS | Path |
| --- | --- |
| Windows | /Program Files/Common Files/Adobe/Startup Scripts CC/Illustrator |
| Mac OS | /Library/Application Support/Adobe/Startup Scripts CC/Illustrator |

When a script in the general startup folder should run for Illustrator only, include the ExtendScript #target directive ( #target illustrator ) or guard execution with code such as:

```javascript
if (BridgeTalk.appName == "illustrator") {
    // continue executing script
}
```
