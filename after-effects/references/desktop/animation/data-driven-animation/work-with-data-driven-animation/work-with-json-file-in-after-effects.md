# Work with JSON file in After Effects

Working with a standard JSON file goes like this:

Select File > Import > File.

Pick a .JSON file, then click Open.

Your project window now holds the file. Build a composition out of that footage.

The composition needs a solid—create one via Layer > New > Solid.

Over in the Timeline panel, spin down the solid layer's properties, then reveal the Opacity parameter with Alt + Click on Windows or ⌥ + Click on macOS.

Edit the data within the expression to reshape your animation. The JSON data is yours to control, along with the data file that warehouses all the information.

Swapping in a different JSON file is also an option for changing which data gets referenced. Do it by choosing Replace Footage > File and opening the new file from your computer.

To make use of the data, attach an expression to whichever property the data should animate, and from there:

Read what's inside a .JSON file by way of the sourceData attribute. Here's an illustration:

```javascript
var sampleData = footage("sample.json").sourceData;
```

Getting a value back means pointing at the exact property within the JSON data—like so:

Read a nested JSON value with `myData.engineData.RPM` or `myData.latitude.value`.
