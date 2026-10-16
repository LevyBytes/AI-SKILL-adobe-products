# ArtLayer.mixChannels

Community declaration reference: Photoshop/2015.5.

Changes a targeted output color channel by mixing existing image channels. output channels = an array of channel specifications; for each component channel, provide adjustment values (-200 to 200), then a 'constant' value (-200 to 200). With monochrome = true, only 1 channel value specification is allowed. Allowed only when 'document mode' = RGB or CMYK. Use four doubles for RGB arrays and five doubles for CMYK arrays.
@param outputChannels Channel specification list. For each component channel present in the document, include adjustment values followed by a 'constant' value.
@param monochrome When true, monochrome mixing is used. Note: this allows only one channel value.

```typescript
declare class ArtLayer extends Layer {
    mixChannels(outputChannels: any[], monochrome?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
