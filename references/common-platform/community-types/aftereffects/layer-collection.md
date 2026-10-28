# LayerCollection

Community declaration reference: AfterEffects/26.0.

LayerCollection represents layer sets. The LayerCollection on a CompItem includes every layer object in that composition, and collection methods manage the layer list.

```typescript
declare class LayerCollection extends Collection {
    /** Looks up a Layer object by collection index; indexing starts at 1. */
    readonly [index: number]: Layer
    /* Creates an AVLayer and inserts it in this collection. */
    add(item: AVItem, duration?: number): AVLayer
    /* Creates a null layer and inserts it in this collection. */
    addNull(duration?: number): AVLayer
    /* Inserts a new AVLayer using a SolidSource-backed FootageItem. */
    addSolid(
    color: ThreeDColorValue,
    name: string,
    width: number,
    height: number,
    pixelAspect: number,
    duration?: number,
    ): AVLayer
    /* Creates a vertical text box. */
    addVerticalBoxText(width?: number, height?: number): TextLayer
    /* Creates a vertical text layer. */
    addVerticalText(sourceText?: string): TextLayer
    /* Creates a paragraph (box) text layer and inserts it in this collection. */
    addBoxText(size: [number, number], sourceText?: string | TextDocument): TextLayer
    /* Creates a point text layer and inserts it in this collection. */
    addText(sourceText?: string | TextDocument): TextLayer
    /* Creates a camera layer and inserts it in this collection. */
    addCamera(name: string, centerPoint: [number, number]): CameraLayer
    /* Creates a light layer and inserts it in this collection. */
    addLight(name: string, centerPoint: [number, number]): LightLayer
    /* Creates a shape layer and inserts it in this collection. */
    addShape(): ShapeLayer
    /* Gets the layer object with the requested name. */
    byName(name: string): Layer | null
    /* Builds a composition from the specified layer indices. */
    precompose(layerIndicies: number[], name: string, moveAllAttributes?: boolean): CompItem
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
