# Properties accessible by name

| Source | Values |
| --- | --- |
| From any Layer | - "ADBE Mask Parade", or "Masks"<br>- "ADBE Effect Parade", or "Effects"<br>- "ADBE MTrackers", or "Motion Trackers" |
| From an AVLayer | - "Anchor Point" or "anchorPoint"<br>- "Position" or "position"<br>- "Scale" or "scale"<br>- "Rotation" or "rotation"<br>- "Z Rotation" or "zRotation" or "Rotation Z" or "rotationZ"<br>- "Opacity" or "opacity"<br>- "Marker" or "marker" |
| From an AVLayer with a non-still source | - "Time Remap" or "timeRemapEnabled" |
| From an AVLayer with an audio component | - "Audio Levels" or "audioLevels" |
| From a camera layer | - "Zoom" or "zoom"<br>- "Depth of Field" or "depthOfField"<br>- "Focus Distance" or "focusDistance"<br>- "Aperture" or "aperture"<br>- "Blur Level" or "blurLevel" |
| From a light layer | - "Intensity" or "intensity"<br>- "Color" or "color"<br>- "Cone Angle" or "coneAngle"<br>- "Cone Feather" or "coneFeather"<br>- "Shadow Darkness" or "shadowDarkness"<br>- "Shadow Diffusion" or "shadowDiffusion"<br>- "Casts Shadows" or "castsShadows" |
| From a 3D layer | - "Accepts Shadows" or "acceptsShadows"<br>- "Accepts Lights" or "acceptsLights"<br>- "Ambient" or "ambient"<br>- "Diffuse" or "diffuse"<br>- "Specular" or "specular" (these are for the Specular Intensity property)<br>- "Shininess" or "shininess" (these are for the Specular Shininess property)<br>- "Casts Shadows" or "castsShadows"<br>- "Light Transmission" or "lightTransmission"<br>- "Metal" or "metal" |
| From a camera, light or 3D layer | - "X Rotation" or "xRotation" or "Rotation X" or "rotationX"<br>- "Y Rotation" or "yRotation" or "Rotation Y" or "rotationY"<br>- "Orientation" or "orientation" |
| From a text layer | - "Source Text" or "source Text" or "Text" or "text" |
| From PropertyGroup "ADBE Mask Parade" | - "ADBE Mask Atom" |
| From PropertyGroup "ADBE Mask Atom" | - "ADBE Mask Shape", or "maskShape", or "maskPath"<br>- "ADBE Mask Feather", or "maskFeather"<br>- "ADBE Mask Opacity", or "maskOpacity"<br>- "ADBE Mask Offset", or "maskOffset" |

### Examples

Suppose a layer called "myLayer" has a Box Blur effect on it; any of these forms will fetch that effect:

```javascript
myLayer.property("Effects").property("Box Blur");
myLayer.property("Effects").property("boxBlur");
myLayer.property("Effects").property("ADBE Box Blur");
```

And if "myLayer" carries a mask called "Mask 1", this is how you grab it:

```javascript
myLayer.property("Masks").property("Mask1");
```

For pulling a Bulge Center value off a Bulge effect, either of these does the job:

```javascript
myLayer.property("Effects").property("Bulge").property("Bulge Center");
myLayer.property("Effects").property("Bulge").property("bulgeCenter");
```
