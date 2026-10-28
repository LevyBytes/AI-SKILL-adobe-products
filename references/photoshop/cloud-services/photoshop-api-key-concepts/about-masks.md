# About masks

In the Photoshop app, **masks** control which parts of layer content remain visible while leaving the underlying content intact. They show or hide selected parts of a layer, which provides more flexibility than removing pixels.

After creating a mask in the Photoshop app, Photoshop API can work with that portion of the image. Masking is useful for:

- Building image composites.
- Changing background colors.
- Removing or cutting out objects.
- Restricting image adjustments so only selected areas are affected instead of the whole layer.

For example, this image uses earth and space as the background layer, with the moon layer in front.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-background.png?raw=true)

For the moon layer, an area can be marked for masking:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-outline.png?raw=true)

Once the mask is applied, the earth and space background on the lower layer becomes visible through the masked area:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-applied.png?raw=true)

Selections and layers differ from masks because enhancements target the mask itself rather than the image under it. This supports advanced image changes while preserving the original images.

Mask background: [Photoshop, Mask Layers](https://helpx.adobe.com/photoshop/using/masking-layers.html).
