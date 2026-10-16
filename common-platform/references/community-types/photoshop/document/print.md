# Document.print

Community declaration reference: Photoshop/2015.5.

Sends the Document to print.
@param sourceSpace Source color space.
@param printSpace Printer color space; use "nothing" for same as source, a working space, Lab color, or a color-space string. Default: nothing.
@param intent Color conversion intent.
@param blackPointCompensation When true, black point compensation applies.

```typescript
declare class Document {
    print(
      sourceSpace?: SourceSpaceType,
      printSpace?: string,
      intent?: Intent,
      blackPointCompensation?: boolean,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
