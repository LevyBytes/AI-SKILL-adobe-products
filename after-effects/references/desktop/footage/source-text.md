# sourceText

Return type: String or TextDocument

Stands for the present value of the layer's Source Text property. Where the text carries formatting attributes, a TextDocument object is returned.

### Footage.sourceText

Signature: `{footageItem}.sourceText`.

Returns the contents of a .JSON file as a string. In the JavaScript expression engine, parse the string with JSON.parse() and access the properties of the resulting JSON value. This example requires an object with a sampleValue property. For engine-independent access to imported JSON, use the sourceData attribute. As an example:

```javascript
var myData = JSON.parse(footage("sample.json").sourceText);
myData.sampleValue;
```

Type:

String, the contents of the .JSON file; read-only.
