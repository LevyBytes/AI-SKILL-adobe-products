# Advanced Lightning obstacles, turbulence and forks

Alpha Obstacle

Sets how strongly the original layer's alpha channel steers the lightning's path. With Alpha Obstacle above zero, the lightning treats opaque regions as obstacles and tries to bend around them; below zero, it favors staying within the opaque regions and shies away from the transparent ones. Crossings between opaque and transparent regions are still possible, but the farther Alpha Obstacle sits from zero, the less often they happen.

note: When Alpha Obstacles is set to anything but 0, a preview below full resolution can't always be trusted to show the right result, since full resolution may surface obstacles you didn't see. Confirm the outcome at full resolution before you commit to a final render.

Turbulence

Sets how much turbulence runs through the lightning path. Crank it up for a busier strike with extra branches and forks; dial it down for a plainer strike carrying fewer branches.

Forking

Sets the share of a branch that forks. Both the Turbulence and Alpha Obstacle settings feed into forking.

Decay

Sets how steadily the lightning's strength decays or dissipates, and shapes where the forks start losing opacity.

Decay Main Core

Lets the main core decay together with its forks.

Composite On Original

Blends the lightning onto the original layer through the Add blending mode. Turn it off and you'll see the lightning by itself.

Complexity

Sets how intricate the turbulence within the lightning becomes.

Min. Forkdistance

Sets the smallest pixel gap allowed between fresh forks. Smaller values pack more forks into the lightning; larger values thin them out.

Termination Threshold

Sets the point at which a path ends, judged by atmospheric resistance and any alpha collision. Lower settings let the path quit sooner when it meets resistance or alpha obstacles; higher settings make it work harder to skirt alpha obstacles.

note: Pushing up Turbulence or Complexity raises resistance in certain regions, and those regions move as conductivity shifts. Pushing up the Alpha Obstacle value raises resistance along alpha edges.

Main Core Collision Only

Limits collision calculations to the main core, leaving the forks untouched. This control matters only when Alpha Obstacle is selected.

Fractal Type

Sets which kind of fractal turbulence builds the lightning.

Core Drain

Sets the percentage drained from the core's strength whenever a new fork is born. Raise it and the core grows less opaque wherever new forks appear. Since forks feed off the main core, lowering it also thins the forks' opacity.

Fork Strength

Sets how opaque each new fork is, gauged as a percentage of the Core Drain value.

Fork Variation

Sets how much the fork opacity varies, governing how far it strays from the figure given in Fork Strength.

Related: [Advanced Lightning type and appearance](advanced-lightning-effect.md).
