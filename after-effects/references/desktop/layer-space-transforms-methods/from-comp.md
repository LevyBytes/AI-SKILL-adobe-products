# fromComp(point, t=time)

Return type: Array [2 or 3].

Argument type: point is an Array [2 or 3], and t is a Number.

Carries a point out of composition space into layer space. On a 3D layer the resulting point may hold a nonzero value even while sitting in layer space. Example: fromComp(thisComp.layer(2).position)
