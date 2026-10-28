# workRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Rectangle | R |

A rectangle giving a monitor’s usable workspace edges in virtual desktop coordinates. Those coordinates are explained under rect.

A monitor’s workspace is the stretch ordinarily handed to applications once you subtract things like docked toolbars or taskbars. Take Windows on one 800x600 display: rect comes to [ 0, 0, 800, 600 ]. Add a typical 30-pixel-high Windows taskbar parked permanently along the bottom, and workRect becomes [ 0, 0, 800, 570 ].
