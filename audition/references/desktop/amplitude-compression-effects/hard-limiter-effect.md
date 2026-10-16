# Hard Limiter effect

Amplitude and Compression > Hard Limiter strongly reduces audio that passes a chosen threshold. Limiting is often paired with input boost, which raises overall volume while preventing distortion.

Hard Limiter keeps audio below a chosen peak by sharply limiting or clipping louder material.

Use Hard Limiter when louder signals need sharp limiting or clipping so they do not exceed a set peak.

Maximum Amplitude

Defines the highest sample amplitude that can pass.

Tip

With 16-bit audio, avoid clipping by keeping this value no higher than -0.3 dB. Setting it lower, such as -3 dB, leaves extra headroom for later edits.

Input Boost

Raises the level before limiting, so a selection can become louder without clipping. Higher values produce stronger compression. Very high settings can create the loud, high-impact sound common in contemporary pop music.

Look-Ahead Time

Defines how many milliseconds ahead the effect begins attenuation before the loudest peak arrives. Keep the value at least 5 milliseconds. Values that are too small can introduce audible distortion.

Release Time

Controls how long, in milliseconds, attenuation takes to return by 12 dB, roughly matching the time audio needs to resume normal volume after a loud peak. Around 100, the default, usually works well and keeps low bass intact. If the value is too large, audio may stay quiet and recover slowly.

Link Channels

Ties channel loudness together so stereo or surround balance is maintained.
