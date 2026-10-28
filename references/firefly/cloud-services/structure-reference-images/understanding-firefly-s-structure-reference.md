# Understanding Firefly's Structure Reference

A reference image can guide Firefly generation through Structure Reference, transferring composition cues such as outline and depth while allowing the resulting image to differ in detail, style, or mood. Used together with [Firefly's Style Reference](../style-reference-images.md), it adds control that goes beyond the prompt text.

In Firefly's Image APIs, the `structure` parameter exposes this capability through two properties:

- `strength`: accepts a value from `1` through `100` and sets how strongly the output follows the reference image. If `strength` is omitted, Firefly uses `50`.
- `imageReference`: supplies the object that points to the reference-image source.
