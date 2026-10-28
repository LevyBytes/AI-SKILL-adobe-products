# Solid Color

Use SolidColor for a color value that can be expressed through any Photoshop color model.
Load SolidColor from Photoshop's app object:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
```

Reading from, or assigning to, one of the model-specific accessors switches that SolidColor instance's current model to that accessor's space. Photoshop performs the cross-space conversion internally, using the user's Color Settings.

The foreground color can be set to red like this:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const red = new SolidColor();
red.rgb.red = 255;
red.rgb.green = 0;
red.rgb.blue = 0;

app.foregroundColor = red;
```

The next example shows how the model changes while code touches different accessors:

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const c = new SolidColor();
console.log(c.base.typename); // By default, this will be "RGBColor"

c.cmyk.cyan = 50; // Photoshop will convert the color to CMYK using Edit > Color Settings data
console.log(c.base.typename); // Now, the typename will be "CMYKColor"

c.rgb.green = 128; // Typename will change back to "RGBColor"
```

**_Fixes in Photoshop 24.2:_**

- _Adds range checks for every color mode and component, preventing invalid component values from being accepted._
