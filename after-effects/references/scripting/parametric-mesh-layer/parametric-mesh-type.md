# ParametricMeshLayer.parametricMeshType

app.project.item(index).layer(index).parametricMeshType

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

On a parametric mesh layer, this is its mesh type. Attempting to assign it on a layer that is not a parametric mesh raises an error.

### Type

A ParametricMeshType enumerated value; read/write. One of:

- ParametricMeshType.SPHERE
- ParametricMeshType.PLANE
- ParametricMeshType.CYLINDER
- ParametricMeshType.CONE
- ParametricMeshType.TORUS
- ParametricMeshType.CUBE
