# Simulation controls

How finely the water surface and ground grids resolve is set by the Simulation controls.

Grid Resolution

Sets how many horizontal and vertical subdivisions build up the wave surface and ground grids. Higher values sharpen the simulation's precision considerably but eat more memory and lengthen render time.

Grid Res Downsamples

Drops the internal simulation resolution whenever the output resolution falls, which speeds rendering up. The trade-off is that the output can end up looking quite different.

Wave Speed

Sets how quickly waves move out from their origin.

Damping

Sets how fast the liquid soaks up a wave's energy. A higher value drains that energy quicker, so the wave covers less ground.

Wave Speed, Damping

Together they set the liquid's apparent viscosity and the apparent size of its body. Waves in water, for one, run faster and farther than waves in honey; waves in a sink race along and die out far quicker than waves in a lake.

Note

Wave World is tuned for small to medium bodies of water — anything between a teacup and a small lake. Big bodies such as an ocean carry swells, those wide steady waves that show no real slowdown. Even at its lowest settings, Wave World can't produce swells, because its waves die out fairly fast.

Reflect Edges

Sets how waves rebound off the layer's edges and return into the scene.

Pre-roll (seconds)

Sets when the waves get going. By default the effect opens on a still surface free of waves or ripples. Use this control to set the waves in motion ahead of the layer's start. Whatever the settings read at the effect's first frame is what gets applied to the layer through the pre-roll.
