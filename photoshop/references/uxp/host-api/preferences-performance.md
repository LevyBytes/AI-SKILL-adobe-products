# PreferencesPerformance

Performance-related settings, including choices that may influence Photoshop speed.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| imageCacheLevels | _number_ | R W | 24.0 | Count of image-data cache levels. Photoshop uses this to improve screen redraw and histogram responsiveness. Use more Cache Levels for larger files with few layers; use fewer Cache Levels for heavily layered small files [1,8]. _Requires Photoshop restart for changed value to take an effect._ |
| maxRAMuse | _number_ | R W | 24.0 | Maximum share of available RAM that Photoshop may use, expressed as a whole-number percentage [2,99]. _Requires Photoshop restart for changed value to take an effect._ |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesPerformance"_. |
