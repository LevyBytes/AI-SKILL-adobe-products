# Artisan Data Types — Orthographic Camera Matrix

Internally, composition width and height define the matrix that OpenGL writes this way:

```cpp
glOrtho(-width/2, width/2, -height/2, height/2, -1, 100);
```

The orthographic matrix defines the projection. A separate scaled matrix describes camera position. Inverting the camera-position matrix gives the "eye" coordinates.
