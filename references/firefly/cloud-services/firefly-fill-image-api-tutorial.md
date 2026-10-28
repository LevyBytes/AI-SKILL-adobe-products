# Firefly Fill Image API Tutorial

Use the Fill Image API to make generative edits inside selected regions of an image.

- [Figure: source-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/source-person-photo-1.png)
- [Figure: mask-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/mask-person-photo-1.png)
- [Figure: result-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/result-person-photo-1.jpeg)

### Overview

Suppose you maintain a company website where thousands of employee portraits need a consistent, tasteful, professional appearance. With the Fill Image API, the background in each employee photo can be replaced using a shared visual style.

In this walkthrough:

- Upload employee images with matching mask images so each photo background can be targeted.
- Compose a prompt that defines the generated artwork for the replacement backgrounds.
- Call the Fill Image API to swap employee-photo backgrounds for consistent generated artwork.

Follow the tutorial sequentially, or [jump immediately to the full source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-fill-image-api-tutorial.md#full-example) if you prefer to inspect the complete listing first.
