# Basic Host Differences — Time Values

Premiere Pro uses slightly different `PF_InData` time values. For example in CS4:

During NTSC rendering, time_scale is 60000, time_step is 1001, and field gives field order. In After Effects, field rendering uses scale 2997 and step 50, while progressive rendering uses scale 2997 and step 100.

During PAL rendering, time_scale is 50, time_step is 1, and field gives field order. In After Effects, field rendering uses scale 3200 and step 64, while progressive rendering uses scale 3200 and step 128.

The ratio among time-related values produces the time value, not time_scale alone. Premiere Pro may use different time_scales later, so do not hard code. Be aware that it does not necessarily use exactly the same values as After Effects.
