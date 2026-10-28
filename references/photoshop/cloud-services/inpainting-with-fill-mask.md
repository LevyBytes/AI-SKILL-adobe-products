# Inpainting with Fill Mask

This guide shows how to call the Fill Masked Areas API from code while completing an image inpainting task.

### Overview

This guide performs image inpainting with the Fill Masked Areas API.

In computer vision, image inpainting is a core task; practical uses include image compositing, 3D effects, image re-targeting, and removing or manipulating objects.

The API receives an input image plus an input mask that marks the hole(s) in that image, then returns an image where the hole(s) have been filled.
