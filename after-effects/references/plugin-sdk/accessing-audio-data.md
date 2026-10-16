# Accessing Audio Data

Pulling in an audio layer is done with `PF_CHECKOUT_LAYER_AUDIO` from Interaction Callbacks.

Because the layer comes back opaque, you reach for `PF_GET_AUDIO_DATA` to read out the particulars of that audio.

Just as with pixel data, checking the audio back in promptly really matters.

Should your effect need an input time span that differs from the output span, adjust the startsampL and endsampL field in `PF_OutData` while `PF_Cmd_AUDIO_SETUP` from Frame Selectors is active.
