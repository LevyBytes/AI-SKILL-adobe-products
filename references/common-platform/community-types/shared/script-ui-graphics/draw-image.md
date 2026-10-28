# ScriptUIGraphics.drawImage

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Renders an image within a specified element region.
The drawn version of the image matches the element's current state.
@param image Image object to render. It contains versions for different element states, including a dimmed version for the disabled state.
@param left Left coordinate of the region, relative to this element's origin.
@param top Top coordinate of the region, relative to this element's origin.
@param width Width in pixels. If supplied, the image is stretched or shrunk to fit; otherwise, the original image width is used.
@param height Height in pixels. If supplied, the image is stretched or shrunk to fit; otherwise, the original image height is used.

```typescript
declare class ScriptUIGraphics {
    drawImage(image: ScriptUIImage, left: number, top: number, width?: number, height?: number): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
