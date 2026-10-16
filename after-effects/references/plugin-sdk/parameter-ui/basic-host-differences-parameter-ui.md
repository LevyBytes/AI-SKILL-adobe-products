# Basic Host Differences — Parameter UI

Premiere Pro does not honor `PF_ParamFlag_START_COLLAPSED`. Parameters always initialize with their twirlies collapsed, and parameter supervision cannot automatically twirl them open.

Premiere Pro supports `PF_ADD_FLOAT_EXPONENTIAL_SLIDER`(), a macro that lets you define an exponent. Although the CC 2015 release 2 SDK newly added this macro, Premiere Pro had already used it for some time in Fast Color Corrector's Input Grey Level parameter. The exponent makes 1.0 land near the middle of the slider even though the range is 0.10 to 10. The exponent we used was 2.5. Typical values range from 0.01 to 100.

Starting in CC 2015, effects are not sent `PF_Cmd_UPDATE_PARAMS_UI` or `PF_Event_DRAW` when the time needle moves and there are no keyframes, unless the effect sets `PF_OutFlag_NON_PARAM_VARY`. Effects that draw histograms in the Effect Controls panel need to know about this optimization.
