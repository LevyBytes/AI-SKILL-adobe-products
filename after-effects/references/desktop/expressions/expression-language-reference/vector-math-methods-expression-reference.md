# Vector Math methods (expression reference)

Vector Math functions are global methods that operate on arrays as though they were mathematical vectors. In contrast to built-in JavaScript methods like Math.sin, you call them without the Math prefix. Except where noted, Vector Math methods tolerate mismatched dimensions: they hand back a value sized to the largest input Array, padding any missing elements with zeros. For instance, add([10, 20], [1, 2, 3]) yields [11, 22, 3].
