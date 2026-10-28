# PF_ArbitraryDef

`PF_ArbitraryDef`

arb_d

???

A custom data type. Arbitrary Data Parameters carry an ID (so you can run more than one custom type in a single effect), a default value (which tells After Effects the starting state of your type), and a handle to the parameter itself. Within AE you must set either `PF_PUI_TOPIC` / `PF_PUI_CONTROL` or `PF_PUI_NO_ECW`. From PPro 8.0 onward you may leave all of those unset, which lets the parameter's keyframe track appear on the right side of Effect Controls without building a custom control.
