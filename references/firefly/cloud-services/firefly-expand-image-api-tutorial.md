# Firefly Expand Image API Tutorial

Use the Expand Image API to extend an image generatively past its original borders.

[Figure: wallet advertisement hero image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/expand-image-tutorial-hero-image.jpeg)

### Overview

Assume a Fortune 100 marketing team needs image variants in multiple sizes for social channels. Previously, each platform required manual resizing, which took time and introduced errors. Firefly's Expand Image API can automate the workflow and create multiple image variations sized for Instagram, Facebook, Twitter, and other platforms.

Before the code, here are the main stages:

- **Define Target Dimensions:** Social platforms require their own image sizes, so define the dimensions for each target platform.
- **Upload Source Image:** Upload the original asset with Firefly's [Upload API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
- **Generate Image Variations:** Create each resized output through Firefly's [Expand Image API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

You can work through the sequence, or [open the complete source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-expand-image-api-tutorial.md#full-example) if you prefer to start from the finished implementation.
