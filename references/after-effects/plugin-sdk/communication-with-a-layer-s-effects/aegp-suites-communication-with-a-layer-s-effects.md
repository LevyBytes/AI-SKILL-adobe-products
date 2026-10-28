# AEGP Suites - Communication With A Layer's Effects

Reach the effects that have been applied to a layer here. The suite opens up every parameter data stream as well.

Use the Stream Suite to work with those streams.

A reference to an effect that's been applied is an `AEGP_Effect_RefH`; a reference to an installed effect, applied somewhere or not, is an `AEGP_InstalledEffectKey`.

Apply Foobarocity to a layer twice and you'll end up with two separate `AEGP_Effect_RefHs`, yet each of them yields the identical `AEGP_InstalledEffectKey`.
