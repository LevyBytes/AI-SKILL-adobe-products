# fromCompVec(vec, t=time)

Return type: Array [2 or 3].

Argument type: vec is an Array [2 or 3], and t is a Number.

Carries a vector out of composition space into layer space. Example (2D layer):

dir=sub(position, thisComp.layer(2).position); fromCompVec(dir)
