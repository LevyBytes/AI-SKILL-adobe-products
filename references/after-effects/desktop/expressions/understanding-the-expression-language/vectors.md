# Vectors

A good many After Effects properties and methods take or give back vectors. When an array stands for a point or a direction in space, After Effects labels it a vector — position, for instance, is described as returning a vector.

Yes, a function like audioLevels hands back a value with two dimensions — namely the levels of the left and right channels — yet no vector label attaches to it, since it carries neither a point nor a direction. Certain After Effects functions will take vector arguments, yet they tend to pay off only when the values handed in stand for a direction. cross(vec1, vec2), for example, works out a third vector perpendicular to the two it's given. That cross product proves handy when vec1 and vec2 are vectors marking directions in space, but not when they're merely two random batches of numbers.
