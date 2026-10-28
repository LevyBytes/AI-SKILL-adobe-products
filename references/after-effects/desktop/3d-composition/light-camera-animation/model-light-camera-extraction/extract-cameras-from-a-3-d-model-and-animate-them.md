# Extract cameras from a 3D model and animate them

Importing a 3D model prompts After Effects to build a new camera layer out of the scene's camera data. Animated cameras bring keyframes with them into the Timeline panel.

Bring the 3D model into your composition.

In the Composition panel, select the layer carrying the 3D model, then choose Layer > Camera > Create Cameras from 3D Model.

That scene's camera data drives a newly built camera layer.

If the cameras carry animation, keyframes turn up in the Timeline panel for you to work with; otherwise, you can start building your own.

A few points worth remembering:

- How well lights and cameras survive a save into GLB, GLTF, or OBJ differs from one 3D modeling app to the next. You may have to adjust the save settings, and certain features might not carry over.
- In the same vein, 3D scene data is represented differently across 3D apps and 3D file formats. After Effects translates the scene data it finds in the file into its own camera and light layers as best it can. Light power, for instance, can be stated several ways by a 3D app. Spot something that looks off and let us know so we can dig into it.
- Every single frame of animation gets its own keyframe.
- Camera and light scene data falls outside what OBJ format can hold.
- Extraction runs one way only. Re-save the file after editing the scene in your 3D modeling app and After Effects won't refresh cameras or lights you've already pulled out; you'll have to extract the updated ones again.

## See also

- [Creative Cloud Libraries](../../../creative-cloud-libraries/reference-index.md)
