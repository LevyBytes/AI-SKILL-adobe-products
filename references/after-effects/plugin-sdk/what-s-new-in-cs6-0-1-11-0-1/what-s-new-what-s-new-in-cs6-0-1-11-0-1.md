# What's New - What's New in CS6.0.1 (11.0.1)?

As of 11.0.1, the AE effect API version was bumped to 13.3.

That lets effects tell 11.0 and 11.0.1 apart.

A bug exists in 11.0 involving the Global Performance Cache whenever a SmartFX effect sets both `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` & `PF_OutFlag_NON_PARAM_VARY`.

Invoking checkout*layer during `PF_Cmd_SMART_PRE_RENDER` returns empty rects in `PF_CheckoutResult`.

Getting around it is as easy as repeating the call. Under 11.0.1 the workaround is no longer required.
