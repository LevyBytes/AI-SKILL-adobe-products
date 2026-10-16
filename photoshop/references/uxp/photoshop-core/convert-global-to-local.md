# convertGlobalToLocal

26.0

**async** : _Promise_<\{ `x`: _number_ ; `y`: _number_ }>

Takes `(x,y)` coordinates in global display space and converts them to coordinates
whose origin is the top-left corner of the specified panel.
Only panels declared in the plugin manifest can be targeted,
so the supplied `target` must be present in that manifest.

The [UXP manifest v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/)
example uses "panelName" as the identifier.

Note: global-coordinate units are platform-specific. macOS reports them in
points, while Windows reports pixels. For more detail about global coordinates, see [getDisplayConfiguration](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/media/photoshopcore.md#getdisplayconfiguration).

```javascript
const target = "panelName";
const location = { x: 200, y: 500 };
const { x, y } = await core.convertGlobalToLocal(target, location);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `target` | _string_ | The `id` of the panel to use as the origin. |
| `location` | _object_ | Point coordinates in the form \{x, y}. |
| `location.x` | _number_ | - |
| `location.y` | _number_ | - |
