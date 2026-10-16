# Advanced Lightning type and appearance

Electrical-discharge simulations come from the Advanced Lightning effect. It differs from the Lightning effect in that it won't animate on its own; to put the lightning in motion, keyframe the Conductivity State or any other property. The effect carries an Alpha Obstacle feature that lets you route the lightning around objects you designate.

On his website, Chris Zwar walks through in detail how he turned the Advanced Lightning effect into simulated blood-vessel capillaries.

Color depth of 8-bpc is supported by this effect.

Lightning Type

Sets what kind of lightning you get.

note: Whichever type you pick reshapes how the Direction/Outer Radius contextual control behaves. With the Breaking type, widening the gap between Origin and Direction pulls the branches toward the Direction point.

Origin

Sets where the lightning begins.

Direction, Outer Radius

What this control does shifts with the Lightning Type:

Not In Use

When Lightning Type is set to Vertical, neither the Direction nor the Outer Radius control can be used.

Outer Radius

Sets how far the lightning reaches from its origin. Choosing Omni or Anywhere as the lightning type turns this control on; use it to cut the lightning off at a fixed distance from the origin.

Direction

Sets which way the lightning runs. This control turns on for any of these lightning types: Direction, Strike, Breaking, Bouncy, and Two-Way Strike.

Conductivity State

Reroutes the path the lightning follows.

Core Settings

This group of controls tunes the various traits of the lightning's core.

Glow Settings

This group of controls tunes the lightning's glow.

note: You can switch the glow off by setting Glow Opacity to 0, which can shave a great deal off render time.

Related references:

- [Advanced Lightning obstacles, turbulence and forks](lightning-obstacles-and-forks.md)
