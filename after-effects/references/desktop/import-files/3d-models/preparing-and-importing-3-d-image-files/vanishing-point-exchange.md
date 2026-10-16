# Vanishing Point exchange

With the Vanishing Point feature in Photoshop Extended, the File > Export For After Effects (.vpe) command lets you write the results out as a set of PNG files—one per plane—together with a .vpe file describing the scene's geometry. That .vpe file can then be imported into After Effects. From the data in the .vpe file, After Effects rebuilds the scene as a composition holding one camera layer plus a perspective-corrected 3D layer for every PNG file.

Sitting on the negative z axis at (x,y)=(0,0) is the camera. Its point of interest lands at the center of the composition. How far the camera zooms is set from the field of view in the Vanishing Point scene.

A parent layer anchored at the center of the composition holds the 3D layers for the scene's planes, which lets the entire scene be transformed as a unit.

Only with images whose pixels are square in Photoshop does Vanishing Point exchange work well.
