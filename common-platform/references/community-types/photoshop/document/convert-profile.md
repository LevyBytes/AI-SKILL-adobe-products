# Document.convertProfile

Community declaration reference: Photoshop/2015.5.

Moves the Document from one color profile to another.
@param destinationProfile Target color profile; provide a profile string, one working color space, or Lab color.
@param intent Conversion intent.
@param blackPointCompensation When true, black point compensation applies.
@param dither When true, dithering applies.

```typescript
declare class Document {
    convertProfile(
      destinationProfile: string,
      intent: Intent,
      blackPointCompensation?: boolean,
      dither?: boolean,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
