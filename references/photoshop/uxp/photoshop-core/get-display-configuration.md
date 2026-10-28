# getDisplayConfiguration

23.0

_Promise_<[[*DisplayConfiguration*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/returnobjects/displayconfiguration.md)]>

Returns the active display configuration as an array, with one entry per display.

Note: platform determines the returned units.

- Mac uses logical units, points.
- Windows uses physical units, pixels.
  Additional discussion of these units is available in [Display Units](../display-units.md)

```javascript
core.getDisplayConfiguration({ physicalResolution: true });
```

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `options` | [_DisplayConfigurationOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/displayconfigurationoptions.md) | \{} | Additional properties to include, e.g., `physicalResolution`. |
