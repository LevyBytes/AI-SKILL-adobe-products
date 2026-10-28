# Create composite imagery from a 3D digital twin

Open Firefly.adobe.com and choose Production.

Choose the Composite Imagery (3D) starter template so the workflow opens on the canvas.

In the Input 3D Node, choose Upload, then select your USDZ file from local storage, Frame.io, or AEM.

Describe the background environment you want in the prompt field.

In the 3D Viewer, frame the product by using toolbar controls to pan, tilt, or zoom, or choose a predefined camera angle from the USDZ file.

Open Advanced Options and configure these settings:

- Output resolution: sets the final image dimensions and detail level (e.g., 2688 × 1536 for high-definition output)
- Content type: selects the output look; choose photo when aiming for realistic, lifelike results
- Auto-generate ground plane: adds a surface under the product so it sits naturally in the scene
- Variations: sets how many alternate results are produced in one run for composition exploration
- Seeds: controls generation randomness so results can be reproduced
- Lighting seeds: changes lighting variation separately, giving control over shadows, highlights, and the overall scene mood

Select Run to process the workflow and create the composite image.

Find generated outputs on the Creative Production home page under Job log.

Generated outputs are also available from the Creative Production home page under Job log.

Tip

Interacting with the 3D Viewer creates a custom camera angle, and that camera is passed automatically into the compositing pipeline. To reproduce successful generations across later runs, record the seed values that produced them.
