# Baking and importing Maya data

Camera data from Maya project files is something After Effects can import. That Maya camera information has to be baked first. Baking the camera data makes later keyframe animation in your project simpler. What baking does is drop a keyframe on every frame of the animation. For each camera or transform property you might end up with 0, 1, or some fixed count of keyframes. Take a property that isn't animated in Maya: either it gets no keyframes at all, or just one at the animation's start. Should a property carry more than a single keyframe, its keyframe count has to match that of every other animation property holding more than one.

Cut import time down by building or saving the leanest Maya file you can. Inside Maya, trim keyframes by stripping out static channels ahead of baking, and keep a version of the Maya project holding nothing but the camera animation.

Note

These transformation flags go unsupported: query, relative, euler, objectSpace, worldSpace, worldSpaceDistance, preserve, shear, scaleTranslation, rotatePivot, rotateOrder, rotateTranslation, matrix, boundingBox, boundingBoxInvisible, pivots, CenterPivots, and zeroTransformPivots. After Effects passes over these unsupported flags silently — no warnings, no error messages.

Linear units called out in the Maya file are read by After Effects as pixels unless you say otherwise.

Camera data imported from Maya project files(.ma) can be worked with as either a single composition or a pair of compositions.

Per Maya file imported, After Effects produces one composition or two:

A square pixel aspect ratio in the Maya project yields a single square-pixel composition holding the camera data and transformations.

A nonsquare pixel aspect ratio in the Maya project yields two compositions instead. The first — its filename carrying a Square prefix — is a square-pixel composition that holds the camera data. The second, the parent composition, is a nonsquare-pixel composition that keeps the original file's dimensions and contains the square-pixel composition within it. As you work with imported camera data, put 3D layers and square-pixel footage in the square-pixel composition, and route every piece of nonsquare-pixel footage into the containing composition.

Import a Maya file built on a 1-node camera and After Effects makes a camera in the square-pixel composition carrying that camera's focal length, film size, and transformation data.

Import one built on a 2-node or targeted camera and After Effects makes a camera plus an extra parent node in the square-pixel composition. That parent node holds only the camera's transformation data. 2-node cameras come in automatically with the locator node serving as the point of interest, the camera's Auto-Orientation option set to Orient Towards Point Of Interest.

3-node cameras aren't read by After Effects.

Note

Only the rendering cameras in Maya files get read by After Effects; the orthographic and perspective cameras are ignored. So always produce a rendering camera out of Maya, even when it matches the perspective camera exactly. Applying the FilmFit camera setting? Be sure you pick horizontal or vertical FilmFit rather than fill.

Maya locator nodes are readable by After Effects, letting you track objects from the Maya scene as that scene crosses into After Effects. When a Maya locator node's name carries the word Null, NULL, or null, After Effects spins up a null layer and hands it the matching transformations. Steer clear of parenting locator nodes to one another in Maya; parent them to geometry instead.

Note

World and Underworld coordinates inside the LocatorShape don't get read by After Effects. Position them with a transform node.
