# Parameters — Slider Range Issues?

Got a slider that looks inactive yet isn't grayed out? Inspect the valid*min, slider_min, valid_max, and slider_max fields. Check whether the param is a `PF_Param_FIX_SLIDER` — and if it is, whether you turned your mins and maxs into sensible fixed values. The macros in `AE_Macros`.h take ints, so handing them fixed-point values simply won't work.
