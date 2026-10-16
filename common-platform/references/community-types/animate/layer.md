# Layer

Community declaration reference: Animate/22.0.

A Layer represents one timeline layer. The timeline.layers property stores an array of Layer objects, reachable through fl.getDocumentDOM().getTimeline().layers.

```typescript
declare class Layer {
    /**
    - String indicating the layer's animation type. Possible values include: "none", "motion object", "IK pose".
      */
      readonly animationType: string
    /**
    - Color used for the layer outline, accepted in these formats:
    - - String format "#RRGGBB" or "#RRGGBBAA"
    - - Hexadecimal number format 0xRRGGBB
    - - Integer equal to the decimal form of a hexadecimal number
    - In the Layer Properties dialog box, this property corresponds to the Outline color setting.
      */
      color: string | number
    /**
    - Integer count of frames in the layer.
      */
      readonly frameCount: number
    /**
    - Array containing Frame objects (see Frame object).
      */
      readonly frames: Frame[]
    /**
    - Integer percentage for layer height; this matches the Layer height value in the Layer Properties dialog box. Acceptable values are percentages of the default height: 100, 200, or 300.
      */
      height: number
    /**
    - String describing the layer's current use; in the Layer Properties dialog box, this matches the Type setting. Supported values are "normal", "guide", "guided", "mask", "masked", and "folder".
      */
      layerType: string
    /**
    - Boolean indicating whether the layer is locked. true means locked. The default value is false.
      */
      locked: boolean
    /**
    - String containing the layer name.
      */
      name: string
    /**
    - Boolean controlling outline display for every object in the layer. With true, all layer objects show only outlines; with false, objects display as originally created.
      */
      outline: boolean
    /**
    - Layer object representing the folder, guide, or mask layer that contains this layer. The parent layer must be a preceding folder, guide, or mask layer, or the parentLayer of the previous or next layer. Assigning parentLayer does not reposition the layer in the list; if the assignment would require moving the layer, it has no effect. Top-level layers use null.
      */
      parentLayer: Layer
    /**
    - Boolean indicating whether the layer's Stage objects are visible or hidden. With true, every object in the layer is visible; with false, they are hidden. The default value is true.
      */
      visible: boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
