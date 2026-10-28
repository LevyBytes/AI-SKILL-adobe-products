# Inverted Mask

Inverting a mask swaps the black and white regions:

- Areas that were **black** turn **white**, making them **exposed** as editable zones.
- Areas that were **white** turn **black**, making them **protected** against changes.

### Example

[Figure: a mask of a person shape with a white background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-mask.jpg)

With the original mask above, only the park scenery can be edited. The person is left unchanged.

[Figure: an inverted mask of a person shape with a black background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-inverted.png)

With the inverted mask above, only the person can be edited. The park scenery is left unchanged.

Mask inversion quickly flips which areas are editable, giving you a simple way to target a different part of the image during editing.
