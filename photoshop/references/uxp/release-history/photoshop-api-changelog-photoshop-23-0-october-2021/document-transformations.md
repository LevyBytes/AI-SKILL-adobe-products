# Document Transformations

- `Document.crop(bounds: Bounds, angle, width, height)`: Crops the document. The `bounds` parameter is an array of four coordinates, [left, top, right, bottom], that defines the area retained after the crop.
- `Document.resizeCanvas(width, height, Constants.AnchorPosition)`: Adjusts canvas dimensions to reveal more or less of the image without changing image size. See `resizeImage`
- `Document.resizeImage(width, heigh, resolution, Constants.ResampleMethod, amount)`: Adjusts the image size. When preserve details is used, `amount` controls the noise value (Range: 0 1 100).
- `Document.rotateCanvas(angle)`: Rotates the image and changes the canvas bounds so the resized image fits.
- `Document.trim(Constants.TrimType, top, left, bottom, right)`: With `TrimType.TRANSPARENT`, removes transparent area around the image on the selected canvas sides. When `TrimType.TOPLEFT` or `TrimType.BOTTOMRIGHT` is used, surrounding areas matching the top-left or bottom-right corner pixel are trimmed respectively.
