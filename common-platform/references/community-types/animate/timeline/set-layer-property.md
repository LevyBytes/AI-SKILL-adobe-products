# Timeline.setLayerProperty

Community declaration reference: Animate/22.0.

Assigns one specified property value across all selected layers.
@param property String naming the property to set. For a property list, see "Layer object" on page 355.
@param value Value to assign to the property. Use the same value type that would be used when assigning the property in the layer object.
@param layersToChange Optional string identifying which layers are modified. Supported values are "selected", "all", and "others". If omitted, the default value is "selected".

```typescript
declare class Timeline {
    setLayerProperty(property: string, value: any, layersToChange?: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
