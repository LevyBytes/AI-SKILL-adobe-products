# FootageSource.removePulldown

app.project.item(index).mainSource.removePulldown

app.project.item(index).proxySource.removePulldown

### Description

Determines the manner in which pulldowns get stripped out once field separation is in play. Setting it is an error when isStill is true, and trying to assign anything other than PulldownPhase.OFF is an error wherever fieldSeparationType equals FieldSeparationType.OFF.

### Type

A PulldownPhase enumerated value; read/write. One of:

- PulldownPhase.RemovePulldown.OFF
- PulldownPhase.RemovePulldown.WSSWW
- PulldownPhase.RemovePulldown.SSWWW
- PulldownPhase.RemovePulldown.SWWWS
- PulldownPhase.RemovePulldown.WWWSS
- PulldownPhase.RemovePulldown.WWSSW
- PulldownPhase.RemovePulldown.`WSSWW_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`SSWWW_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`SWWWS_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`WWWSS_24P_ADVANCE`
- PulldownPhase.RemovePulldown.`WWSSW_24P_ADVANCE`
