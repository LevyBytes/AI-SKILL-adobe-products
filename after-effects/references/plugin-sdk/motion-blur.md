# Motion Blur

Motion blur is left to each effect, which works it out from `PF_InData`>shutter_angle together with `PF_InData`>shutter_phase.

For After Effects to know this data is wanted, the plug-in has to raise `PF_OutFlag_I_USE_SHUTTER_ANGLE`.

At other moments the effect needs to check out its own parameters so it can see how they shift across the shutter interval.

Whenever those checkouts reach beyond that interval, raise `PF_OutFlag_WIDE_TIME_INPUT`.

That flag lets After Effects weigh the parameters inside the sampling interval and work out whether any have changed.
