# ObjectInDoc

Community declaration reference: Animate/22.0.

Object returned from fl.findObjectInDoc(ByName/ByType)

```typescript
declare interface ObjectInDoc {
    /**
    - Keyframe containing the element.
      */
      keyframe: number
    /**
    - Layer containing the keyframe.
      */
      layer: Layer
    /**
    - Timeline containing the layer.
      */
      timeline: Timeline
    /**
    - Timeline parent; for example, the timeline may belong to a symbol instance.
      */
      parent: any
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
