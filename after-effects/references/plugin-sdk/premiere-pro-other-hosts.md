# Premiere Pro & Other Hosts

Both Adobe Premiere Pro and Adobe Premiere Elements support the After Effects effect API described in chapters 2, 3, and 5.

Their host implementation is broad, but key omissions include 3D-related calls for auxiliary-channel data, cameras, and lights; 16-bit and SmartFX support; and other utility functions from the After Effects AEGP API.

`PF_InData`>appl_id is set to 'PrMr' by both Premiere Pro and Premiere Elements.

This chapter describes AE API support in Premiere Pro; generally, corresponding versions of Premiere Elements provide the same support.

Use the Premiere-specific App Info Suite from the Premiere Pro SDK headers when you need to distinguish Premiere Pro from Premiere Elements.

| Application Versions | `PF_InData`> version.major | `PF_InData`> version.minor |
| --- | --- | --- |
| Premiere Pro CC through Premiere Pro CC 2019 | 13 | 4 |
| Premiere Pro CS6 | 13 | 2 |
| Premiere Pro CS5.5 | 13 | 1 |
| Premiere Pro CS5, Premiere Elements 9 | 13 | 0 |
| Premiere Pro CS4, Premiere Elements 8 | 12 | 5 |
| Premiere Pro CS3, Premiere Elements 4 and 7 | 12 | 4 |
| Premiere Pro 2.0, Premiere Elements 3 | 12 | 3 |
| Premiere Pro 1.5, Premiere Elements 2 | 12 | 2 |
| Premiere Pro 1.0, Premiere Elements 1 | 12 | 1 |

The versioning used by Premiere Pro and Premiere Elements does not imply support for the same API features that After Effects had at the same version. It is only intended to distinguish one version from the next.
