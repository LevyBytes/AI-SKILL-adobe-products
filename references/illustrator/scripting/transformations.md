# Transformations

The matrix object gives scripts access to geometric-transformation matrix capabilities.

Illustrator transformation matrices hold the values for operations that scale, rotate, or move (translate) an object on a page.

Matrices offer several benefits:

- Stored transformation values in a matrix object can be reused across different objects in a script.
- Concatenating rotation, translation, and/or scaling matrices and then applying the result lets one script statement perform many geometric transformations.
- Matrix values can be inverted.
- Values from two matrices can be compared.

The application object. provides commands or methods to create, get, invert, compare, or concatenate matrices.

To apply a matrix, use the transform command on any object type that supports transformations.
