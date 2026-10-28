# Image format for downloading

Downloads for raster images from custom models are available as JPEG, or as SVG files (beta).

SVG export notes:

- These custom models are built as image models rather than vector models. The beta export converts raster images into SVG files, similar to Illustrator's Trace Image function. Because of that conversion, these SVGs may contain more anchor points and more complex paths than traditional vectors. This appears most often in medium- to high-complexity images, and it can also show up as hallucinations in simple images. The first beta does not yet produce editable strokes.
- Conversion speed can differ by image and is usually slower with complex images.
- The beta option works only on Firefly.com and only for illustrations, not photographic generations.
- The beta option applies only to images made with enterprise custom models.
- CAI signatures are not currently applied to SVG files.
