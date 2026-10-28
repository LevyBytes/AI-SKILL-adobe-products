# ExtendScript to UXP

ExtendScript runs on an older JavaScript version, ES3. UXP instead uses the V8 JavaScript engine with ES6 support, which brings several capabilities that ExtendScript lacks.

UXP does not use or support every newer ES6 feature, but ExtendScript developers should learn ECMAScript ES6 so the sample code is easier to understand.

This page explains the basic steps for rewriting ExtendScript as a UXP script.

For scripts,

1. Use the `.idjs` extension when saving the file.
2. Replace unsupported methods in the script
