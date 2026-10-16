# Add a video as a source of Environment Light

Bring a 3D model into the project, then place it in a composition by dragging it onto the Timeline panel.

Likewise, bring in the clip you intend to treat as environment light and drop it onto the Timeline panel as well.

Create the light itself through Layer > New > Light, choosing Environment as the Light Type.

3. Within the Light Setting dialog, pick Environment from the Light Type dropdown list.

Expand the Environment Light properties by twirling them open in the Timeline panel.

Beneath Light Options, point the Source property at the layer that holds the video.

- Environment Lights aren't limited to video; you can also direct them at animated native layers like Shape, Text, and Solid layers, as well as animated compositions.
- A layer that is a 3D object, a light, a camera, a 3D null, or an ordinary layer carrying the 3D switch cannot serve as a source for Environment Lights.
