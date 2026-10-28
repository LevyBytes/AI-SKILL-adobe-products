# Flow Map controls

The map that steers where the foam runs is governed by the Flow Map controls:

Flow Map

Names the layer that dictates the bubbles' heading and speed. Reach for a still image layer; choose a movie as the flow map layer and only its first frame counts. A flow map is a luminance-based height map: white is high, black is low. White isn't boundlessly high — a bubble moving fast enough can clear a white obstacle. Keep the map slightly blurry, since sharp edges breed erratic results. To run bubbles down a canyon, for example, paint a flow map whose rim is white, whose channel is black, and whose walls are a blurry gray; push the bubbles along with wind in whatever direction you like, and those walls hem them in. A soft gradient along the canyon floor can steer the flow direction as well.

Note

When the bubbles ignore the map, turn to the Simulation Quality control. It also helps to blur the flow map a touch so its edges aren't overly abrupt.

Flow Map Steepness

Governs the gap between white and black as they're read for steepness. Lower this value if the bubbles are caroming off the flow map at random.

Flow Map Fits

Decides whether the flow map references the layer or the universe, resizing itself to match whichever you pick. It comes in handy when you want a bigger universe but the flow map was built for one specific layer, or when you want bubbles to begin off-frame and feel the flow map's pull as they enter.

Simulation Quality

Sharpens the precision, and with it the realism, of the simulation — though higher values stretch out the composition's render time. Normal usually delivers solid results in the shortest time. High yields finer results but takes longer. Intense lengthens rendering further while producing steadier bubble behavior; reach for it when the bubbles won't track the flow map. It frequently cures the erratic behavior that crops up with tiny bubbles, fast bubble speeds, and steep slopes.
