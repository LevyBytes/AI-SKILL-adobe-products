# What's New — What's New in CC 2015 (13.5.1)?

Some audio APIs that 13.5 broke through its threading changes are repaired in this release. Under 13.5, invoking `AEGP_RenderNewItemSoundData`() from the UI thread produced `A_Err_GENERIC`. Calling it on the UI thread now works again.

So that a deadlock is avoided, `AEGP_RenderNewItemSoundData`() now hands back silence — but only within `PF_Cmd_UPDATE_PARAMS_UI`. In that particular spot it no longer acts the way it once did, yet everywhere else it keeps functioning correctly.
