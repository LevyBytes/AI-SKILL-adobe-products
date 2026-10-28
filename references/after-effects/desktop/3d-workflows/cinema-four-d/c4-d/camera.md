# Camera

Pick the camera that rendering should use.

- Cinema 4D Camera: draws on whichever camera Cinema 4D has set as its render view camera, falling back to the default camera when none has been set.
- Select Cinema 4D camera: Reach for this option to choose a camera. With it enabled, select Set Camera.
- Centered Comp Camera: Pick this to put the After Effects camera to work and recompute the Cinema 4D coordinates so they suit the After Effect coordinates. Bringing in an existing C4D file (typically modeled around 0,0,0) to render with a fresh After Effects camera (which centers on the composition) is exactly when this option earns its keep — it renders the C4D model at the After Effects center. Skip it and the origin mismatch may shove the model somewhere unexpected.
- Comp Camera: Pick this to put the active After Effects camera to work. It only functions once you have added an After Effects camera. As an example, use it for a camera that was added by pulling it out of a Cinema 4D project — such cameras tie themselves to Cinema 4D's coordinate system, where the Cinema 4D viewport's center sits at 0,0,0. This option fits cameras brought into After Effects through the Layer > New > Camera command.
- Set Camera: Where a Cinema 4D scene holds cameras beyond the default one, click this button and pick the camera.
- Set Take: Whenever your c4d file holds takes, this option becomes available. You can build several takes of your scene and tweak any parameter within a take. Should the current renderer not handle take selections, the main take is what gets used.
