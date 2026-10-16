# Graphics Utility Suites — Do The Math For Me

Beyond the assorted graphics utilities, we hand over a set of ANSI-standard routines too, sparing plug-ins from pulling in extra libraries just to call the usual functions.

A broad set of math operations — trig, square root, logarithms, and the like — is offered to you as function pointers.

Going through our suite functions buys you a measure of application-level error handling and steers you clear of conflicts that arise when several "standard" libraries ship differing versions.

Every one of these returns a double. Angles are always given in radians; when you need to turn degrees into radians, apply `PF_RAD_PER_DEGREE`, a constant declared in `AE_EffectCB`.h.
