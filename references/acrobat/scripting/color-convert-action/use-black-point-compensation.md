# useBlackPointCompensation

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Boolean | R/W |

With useBlackPointCompensation set true, every color conversion applies black point compensation. How much this flag does hinges on which color management method (CMM) is at work; under the Adobe CMM, though, colorimetric transforms get scaled so that black stays black whatever the source profile's media black point happens to be.
