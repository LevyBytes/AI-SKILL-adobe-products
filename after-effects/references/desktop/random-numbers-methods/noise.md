# noise(valOrArray)

Return type: Number.

Argument type: valOrArray is a Number or an Array [2 or 3].

Returns a value between -1 and 1. This noise isn't truly random; it draws on Perlin noise, so the return values for two nearby inputs tend to stay near one another. Such noise helps whenever you want a string of seemingly random numbers that don't swing wildly between neighbors — typically the case when animating any natural-looking random motion. Example: rotation + 360\*noise(time)
