# Tips & Tricks — Testing

Run your plug-in through RAM previews to confirm it copes cleanly when memory runs short. Does it degrade gracefully once memory is exhausted?

When a memory request hands you `PF_Err_OUT_OF_MEMORY` (from Error Codes), are you handing it back up to After Effects?

And what becomes of your video effect when it's dropped onto an audio-only layer? Put it through projects built with earlier releases of your plug-in.
