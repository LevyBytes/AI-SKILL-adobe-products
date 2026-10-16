# Implementation

The AEGP API reaches so far, and ties into After Effects so thoroughly, that getting your plug-in to behave correctly in every scenario takes a fair amount of design thought.

PICA function suites are the channel through which AEGPs talk to After Effects.

There's no guaranteed order in which AEGPs load.

From inside your AEGP's entry point function, test the AEGP API version to learn whether a particular suite will be on hand.

An AEGP is also free to call any effect API suite function that doesn't demand a `PF_ProgPtr` (which effects pull from `PF_InData`).
