# Create and save the script

Start with a plain text editor; TextEdit (macOS) or Notepad (Windows) are suitable.

Set the preference with this assignment:

```javascript
try {
    app.textPreferences.shapeIndicAndLatinWithHarbuzz = false;
    alert("Is Harfbuzz Enabled: " + app.textPreferences.shapeIndicAndLatinWithHarbuzz);
} catch (e) {
    alert("ERROR: " + e.number + "\r" + e.message);
}
```
Save the file with the `.jsx` extension.

Move the JSX file you saved into the Scripts Panel folder: &lt;InDesign installation&gt;/Scripts/Scripts Panel.

Tip

To make Harfbuzz the default again, change false to true in the script code and save the result as a different file.
