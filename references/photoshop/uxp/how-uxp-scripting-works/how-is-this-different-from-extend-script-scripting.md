# How is this different from ExtendScript scripting?

Older extensibility systems used ExtendScript for scripting. ExtendScript relies on a very old JavaScript version (ES3), while UXP runs on the V8 JavaScript engine with ES6 support. This lets developers write scripts using the flexibility available in modern JavaScript.

Relative to ExtendScript, UXP scripting gives developers a simpler route to the Photoshop DOM through the Photoshop API. Until UXP exposes every major capability, [**batchPlay**](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/batchplay/) can be used to communicate with Photoshop elements.
