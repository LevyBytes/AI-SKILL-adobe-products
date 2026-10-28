# gaussRandom()

Return type: Number.

Returns a random number whose results follow a Gaussian (bell-shaped) distribution. Roughly 90% of the outputs fall within 0–1, with the other 10% lying outside it.

### gaussRandom(maxValOrArray)

Return type: Number or Array.

Argument type: maxValOrArray is a Number or Array.

With maxValOrArray as a Number, the method returns a random number — about 90% of outputs sit in the 0 to maxValOrArray range and the remaining 10% sit outside it. With maxValOrArray as an Array, it returns an Array of random values matching maxValOrArray's dimension; 90% of those values fall between 0 and maxValOrArray, the other 10% outside. The outputs carry a Gaussian (bell-shaped) distribution.

### gaussRandom(minValOrArray, maxValOrArray)

Return type: Number or Array.

Argument type: minValOrArray and maxValOrArray are Numbers or Arrays.

When minValOrArray and maxValOrArray are Numbers, the method returns a random number — roughly 90% of outputs fall between minValOrArray and maxValOrArray, the other 10% outside. When the arguments are Arrays, it returns an Array of random numbers matching the larger-dimensioned argument. For each component, about 90% of outputs fall between the matching components of minValOrArray and maxValOrArray, with the remaining 10% outside. The outputs carry a Gaussian (bell-shaped) distribution.
