# Accessing Audio Data — Extending Audio Clips

There is no API call that lengthens an audio clip for you.

That said, the user can readily stretch the clip out ahead of running your effect: apply time remapping to the layer, then drag its out point later.

Say your effect tacks a delay onto a sound clip — you'll want headroom for the tail to decay rather than chopping it off where the original audio stopped.

Spell out in your documentation what users need to do before they apply the effect.
