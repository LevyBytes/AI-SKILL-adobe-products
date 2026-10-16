# TransformPreference

Community declaration reference: InDesign/2023.

Preferences for transforms.

```typescript
declare class TransformPreference extends Preference {
    /**
    - When true, scaling objects also scales transparency effects.
      */
      adjustEffectsWhenScaling: boolean
    /**

    - When true, scaling objects also scales strokes.
      */
      adjustStrokeWeightWhenScaling: boolean
    /**

    - When true, object dimensions include stroke weight. When false, object measurement starts from the path or frame.
      */
      dimensionsIncludeStrokeWeight: boolean
    /**

    - When true, object x and y values are measured relative to the containing frame. When false, x and y values are measured relative to rulers.
      */
      showContentOffset: boolean
    /**

    - When true, transformation values are relative to the parent object. When false, those values are absolute.
      */
      transformationsAreTotals: boolean
    /**

    - Method for scaling a page item.
      */
      whenScaling: WhenScalingOptions
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
