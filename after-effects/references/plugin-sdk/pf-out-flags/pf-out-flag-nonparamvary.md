# PF_OutFlag_NON_PARAM_VARY

`PF_OutFlag_NON_PARAM_VARY`

With this flag on, After Effects refrains from caching output where the effect is applied to a still. Otherwise it caches your output for use in rendering other frames where it can. Set this flag where output changes based on anything other than a parameter value. An effect that yields changing frames on a still image with every parameter held constant is a clear signal this bit belongs on (Wave Warp, for instance). Particle effects, say, will require it. Set during `PF_Cmd_GLOBAL_SETUP`. It can be overridden on the fly when needed under `PF_Cmd_QUERY_DYNAMIC_FLAGS`. Switch it off wherever you can to help performance.
