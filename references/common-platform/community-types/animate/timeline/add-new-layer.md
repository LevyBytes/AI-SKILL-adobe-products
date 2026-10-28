# Timeline.addNewLayer

Community declaration reference: Animate/22.0.

Creates a layer in the document and selects it as the current layer.
@returns Integer zero-based index for the layer just created.
@param name String to use as the new layer's name. If name is omitted, Flash assigns a default name such as "Layer n," where n is the total count of layers created and deleted for that file instance. This parameter is optional.
@param layerType Optional string naming the kind of layer to create. When omitted, Flash creates a "Normal" layer. Supported values are "normal", "guide", "guided", "mask", "masked", and "folder".
@param bAddAbove Optional Boolean; true (the default) places the new layer above the current layer, while false places it below.

```typescript
declare class Timeline {
    addNewLayer(name: string, layerType?: string, bAddAbove?: boolean): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
