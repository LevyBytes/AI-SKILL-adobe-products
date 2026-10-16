# Layer.autoOrient

app.project.item(index).layer(index).autoOrient

### Description

Which style of automatic orientation the layer should use.

### Type

An AutoOrientType enumerated value; read/write. One of:

- AutoOrientType.`ALONG_PATH` Layer faces in the direction of the motion path.
- AutoOrientType.`CAMERA_OR_POINT_OF_INTEREST` Layer always faces the active camera or points at its point of interest.
- AutoOrientType.`CHARACTERS_TOWARD_CAMERA` Each character in a per-character 3D text layer automatically faces the active camera.
- AutoOrientType.`NO_AUTO_ORIENT` Layer rotates freely, independent of any motion path, point of interest, or other layers.
