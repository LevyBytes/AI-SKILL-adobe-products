# Physics controls

How the bubbles move and act is set by the Physics controls:

Initial Speed

Fixes how fast a bubble travels the moment the producer point emits it. The remaining Physics parameters then act on that speed.

Note

Combine low Initial Speed values with the default producer size and you'll barely notice a difference, since the bubbles ricochet off one another. Widen Producer X Size and Producer Y Size for finer command over initial speed.

Initial Direction

Fixes which way a bubble heads as it leaves the producer point. Neighboring bubbles and the other Physics controls bend that direction too.

Wind Speed

Fixes how fast the wind blows the bubbles along the heading set by Wind Direction.

Wind Direction

Fixes which way the bubbles drift. Keyframe this control to build gusty, turbulent wind. The wind only acts on bubbles once Wind Speed climbs above 0.

Turbulence

Nudges the bubbles with tiny random forces so they move erratically.

Wobble Amount

Distorts bubbles at random from flawless circles into the more lifelike oval shape.

Repulsion

Dictates whether bubbles rebound off, adhere to, or slip through one another. Set to 0, bubbles never collide and simply pass through. Raise Repulsion and colliding bubbles grow likelier to react to one another.

Pop Velocity

Dictates the knock-on effect of bursting bubbles on their neighbors. A bursting bubble can open a gap for nearby bubbles to occupy, shove them aside, or burst them outright. The higher you set it, the stronger that knock-on effect.

Viscosity

Fixes how fast bubbles slow after leaving the producer point and steers the pace of their flow. A high Viscosity builds resistance the farther bubbles drift from the producer point, dragging them slower; push it high enough and they halt. Thicker substances mean higher Viscosity. To mimic bubbles rising through oil, for instance, set Viscosity fairly high so they meet resistance as they go; to mimic bubbles floating on air, keep Viscosity fairly low.

Stickiness

Draws bubbles into clumps and shields them somewhat from other Physics controls such as Wind Direction. Higher Stickiness makes the bubbles likelier to bunch into clusters and cling together. Pair Stickiness with Viscosity to form a bubble cluster.


How the fragments travel and drop through space is set by the Physics controls.

Rotation Speed

Sets how fast fragments spin about the axis chosen with the Tumble Axis control, letting you mimic the differing spin rates of different materials. Out in nature, pieces of comparable shape rotate at varying rates according to their mass and air resistance — a brick, for instance, spins quicker than Styrofoam.

Tumble Axis

Sets which axis the fragments rotate about. Free lets them spin any direction; None shuts off rotation entirely; X, Y, and Z confine the spin to the chosen single axis; XY, XZ, and YZ confine it to the chosen pair of axes.

Note

Z-axis rotation shows up only once a second force strikes the layer. With only z-axis rotation chosen, the first blast leaves the pieces unrotated.

Randomness

Shapes the starting velocities and spins that the force sphere produces. Held at 0, fragments shoot straight out from a blast's center point (given a positive force). Because actual explosions are seldom tidy, Randomness lets you introduce a touch of variation.

Viscosity

Sets how rapidly fragments slow down after the blast scatters them. A higher Viscosity puts up more resistance to their motion and spin, and a high enough value brings them to a fast halt. Crank Viscosity high to mimic a blast in water or sludge, keep it medium for one in air, and drop it low or to 0 for one in space.

Mass Variance

Sets the notional weight the fragments carry as they blow apart. A large piece, being heavier than a small one, doesn't travel as far or as fast when the blast hits it. At its 30% default, Mass Variance models this physical law realistically. Raise Mass Variance to 100% to overstate the gap between how large and small pieces act; drop it to 0% to make every piece behave identically no matter its size.

Gravity

Sets what becomes of the fragments after they fracture and scatter. A higher gravity value drags the pieces faster along the heading fixed by Gravity Direction and Gravity Inclination.

Gravity Direction

Sets which heading in (x,y) space the gravity-affected fragments follow. That heading is measured relative to the layer. Should Gravity Inclination read -90 or 90, Gravity Direction stops mattering.

Gravity Inclination

Sets which heading in z space the fragments take once they blow apart. At 90 the pieces blast forward relative to the layer; at -90 they blast backward relative to it.
