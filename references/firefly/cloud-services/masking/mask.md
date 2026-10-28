# Mask

A mask is a grayscale layer over an image. Its tones indicate the regions that stay unchanged and the regions available for editing:

- **Black** areas are **protected**. Edits requested by the operation do not affect these regions.
- **White** areas are **exposed**. Requested edits apply only in the white zones.

### Example

### Mask

[Figure: a mask of a person shape with a white background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-mask.jpg)

Here, the white background leaves the park scenery open to the requested edits.

Treat the white portions as the lit editable zones and the black portions as covered zones that remain protected from alteration.
