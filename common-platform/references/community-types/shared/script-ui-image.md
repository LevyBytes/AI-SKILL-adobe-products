# ScriptUIImage

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Holds a group of images that can be drawn inside a control.
The image used can vary by current state, such as a dimmed image for a disabled control. Create it with newImage(). It is accepted by drawImage().

```typescript
declare class ScriptUIImage {
    /**
    - Image format. Formats: resource / JPEG / GIF / TIFF / PNG / PICT (Macintosh).
      */
      readonly format: string
    /**

    - Image name; this is the file name or the resource name.
      */
      readonly name: string
    /**

    - Full path of the file containing the image.
      */
      readonly pathname: string
    /**

    - Image dimensions in pixels.
      */
      readonly size: _Dimension
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
