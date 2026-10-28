# sourceData

Return type: Varies (Number, Array, Boolean, Object)

Stands for the data tied to the property under Data-Driven Animation. The data evaluated at the current time is returned.

### Footage.sourceData

Signature: `{footageItem}.sourceData`.

Returns the data of a .JSON file as an array of sourceData objects. How big and how intricate that array is comes down to the layout of the .JSON file. The individual data streams are reachable as nested attributes of the data. As an example, with a data stream called Color, the following pulls the Color value from the first data object: footage("sample.json").sourceData[0].Color

The usual pattern is to bind a .JSON file's sourceData to a variable and then point at the data stream you want. As an example:

```javascript
var myData = footage("sample.json").sourceData;
myData[0].Color;
```

Type:

An array of sourceData objects; read-only.
