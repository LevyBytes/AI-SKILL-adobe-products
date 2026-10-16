# Binary mask interpretation

Binary image masks are accepted by masking nodes and mask inputs. These grayscale or single-channel images use pixel values to control where effects apply.

- White, or high luminance, identifies areas where edits occur, including compositing, generative fills, or adjustments.
- Black identifies areas that should stay unchanged.

Check the documentation for each node to learn its exact behavior. Details can differ because some operations invert the meaning or allow soft masks.

For precise art direction, create masks manually in external apps, or generate them inside workflows with luminosity-driven or segmentation nodes.
