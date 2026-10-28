# Layer Space Transforms methods (expression reference)

Layer space transform methods exist to move values across spaces — layer space to world space, for example. The "from" methods carry values out of the named space (composition or world) into layer space. The "to" methods carry values out of layer space into the named space (composition or world). Every transform method accepts an optional argument fixing the time the transform is computed at, yet the current (default) time will nearly always serve.

Reach for the "Vec" transform methods when moving a direction vector, like the gap between two position values. Reach for the plain (non-"Vec") transform methods when moving a point, like position. For 2D layers, composition (comp) space and world space coincide. On 3D layers, though, composition space is referenced to the active camera while world space ignores the camera.
