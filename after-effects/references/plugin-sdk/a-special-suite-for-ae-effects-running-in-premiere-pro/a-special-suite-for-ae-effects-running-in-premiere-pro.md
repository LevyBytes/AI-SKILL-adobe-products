# Basic Host Differences - A Special Suite for AE Effects Running in Premiere Pro

Premiere Pro supports no AEGP calls. However, PrSDKAESupport.h contains some useful parallels. For example, the Utility Suite in that header can get source-footage frame rate or field type, or get the speed applied to the clip.

AE effects cannot use other suites from the Premiere Pro SDK.
