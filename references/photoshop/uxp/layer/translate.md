# translate

23.0

**async** : _Promise_`<void>`

Translates the layer.

```javascript
// Translate the layer to the left by 200px
await layer.translate(-200, 0);

// move the layer one height down
let xOffsetPct = { _unit: "percentUnit", _value: 0 };
let yOffsetPct = { _unit: "percentUnit", _value: 100 };
await layer.translate(xOffsetPct, yOffsetPct);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontal` | _number_ \| PercentValue \| PixelValue | Numeric pixel or percent offset for the layer horizontally |
| `vertical` | _number_ \| PercentValue \| PixelValue | Numeric pixel or percent offset for the layer vertically |
