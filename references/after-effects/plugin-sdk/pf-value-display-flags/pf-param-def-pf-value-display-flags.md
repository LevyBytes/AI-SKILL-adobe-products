# `PF_ParamDef``PF_ValueDisplayFlags`

Inside `PF_ParamDefUnion`, both `PF_FloatSliderDef` and `PF_FixedSliderDef` carry a `PF_ValueDisplayFlags` member, letting them follow whatever pixel value display preference the user picks in the info palette. When it's set, the parameter's value shows as 0-1, 0-255, 0-32768, or 0.0 to 1.0, according to that preference. Setting the first bit (`PF_ValueDisplayFlag_PERCENT`) also tacks a percent sign onto the displayed value.

Of course you'd never pull such a stunt, but if you build a parameter that reads as a percentage, spare the user any confusion and don't permit a range beyond 0 to 100. Please. Percent does mean 'out of one hundred'.
