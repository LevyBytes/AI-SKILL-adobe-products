# random()

Return type: Number.

Returns a random number in the range 0–1.

In After Effects CC and CS6, the behavior of random() is changed to be more random when layer IDs are close together. The wiggle() expression is not affected.

### random(maxValOrArray)

Return type: Number or Array.

Argument type: maxValOrArray is a Number or Array.

When maxValOrArray is a Number, the method returns a value between 0 and maxValOrArray. When it's an Array, the method returns an Array matching maxValOrArray's dimension, each component running from 0 up to the matching component of maxValOrArray.

### random(minValOrArray, maxValOrArray)

Return type: Number or Array.

Argument type: minValOrArray and maxValOrArray are Numbers or Arrays.

When both minValOrArray and maxValOrArray are Numbers, the method returns a value between minValOrArray and maxValOrArray. When the arguments are Arrays, it returns an Array sized to the larger-dimensioned argument, each component falling between the matching components of minValOrArray and maxValOrArray. For instance, random([100, 200], [300, 400]) yields an Array whose first value lands in 100–300 and whose second lands in 200–400. Should the two input Arrays differ in dimension, the higher-dimension slots of the shorter Array are padded with zeros.
