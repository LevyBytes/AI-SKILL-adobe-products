# copy

23.0

**async** : _Promise_`<void>`

Copies this layer. The clipboard receives the result. If the optional
argument is true, a merged copy is made for all visible layers.

```javascript
await layer.copy(true);
await layer.copy();
```

### Parameters

| Name | Type |
| --- | --- |
| `merge?` | _boolean_ |
