# marker.nearestKey(t)

Return type: MarkerKey.

Argument type: t is a Number.

Hands back whichever marker lies closest in time to t. For instance, this expression yields the time of the composition marker sitting nearest the 1-second mark:

thisComp.marker.nearestKey(1).time

And this one yields the time of the composition marker closest to the current time:

thisComp.marker.nearestKey(time).time


Return type: MarkerKey.

Argument type: t is a Number.

Hands back whichever layer marker lies closest in time to t. For instance, this expression yields the time of the layer marker sitting nearest the 1-second mark:

marker.nearestKey(1).time

And this one yields the time of the layer marker closest to the current time:

marker.nearestKey(time).time
