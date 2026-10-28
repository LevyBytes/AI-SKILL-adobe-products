# WaveDocument.addMarker

Community declaration reference: Audition/2018.

@param start
@param duration
@param name
@param type
@param description Creates a document marker. Marker type values: 'cue' 'track' 'cart' 'subclip'.

```typescript
declare class WaveDocument {
    addMarker(
      start: number,
      duration: number,
      name: string,
      type: string,
      description: string,
      ): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
