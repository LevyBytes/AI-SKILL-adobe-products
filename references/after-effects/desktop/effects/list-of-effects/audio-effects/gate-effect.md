# Gate effect

The Gate effect mutes any audio sitting under a set volume threshold. Put it to work tidying up noisy recordings, stripping out background hiss, or carving dramatic cuts in the audio.

Threshold (dB)

Range -60dB to 0dB (default: -60dB). Whatever sits below this level gets muted. Park it just over the level of your background noise.

Attack (ms)

Range 0-1000ms (default: 10ms). How fast the gate opens once the audio crosses the threshold. A fast attack opens it right away, while a slow attack fades it in gradually.

Hold (ms)

Range 0-2500ms (default: 40ms). How long the gate holds open after the audio dips below the threshold. It heads off rapid on/off chatter.

Release (ms)

Range 5-4000ms (default: 220ms). How fast the gate shuts after the hold time runs out. A fast release cuts off sharply, a slow release fades out gently.

Tip

Begin at the stock -60dB threshold and creep it upward until the background noise is gone, taking care not to clip the natural tail of your main audio.
