# require('os') — platform()

Reports the platform that the runtime is using (eg. "win32", "win10", "darwin")

**Returns**: `string` - string value for the platform

### require('os') — release()

Reports the operating system release value (eg. "10.0.1.1032")

**Returns**: `string` - string value for the release

### require('os') — arch()

Reports the active platform architecture (eg. "x32, x64, x86_64 etc")

**Returns**: `string` - string value for the architecture

### require('os') — cpus()

Returns CPU details for the current platform (eg. "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}")

**Returns**: `array` - array of objects with details for each logical CPU core
At present, only the model and speed properties are available; the times property is unavailable.
On UWP, CPU details such as model string and frequency have limited availability.
For UWP, the 'model' value is reported as "ARM based architecture" or "X86 based architecture".
For UWP, the 'speed' value is reported as 0.

### require('os') — totalmem()

Reports total system memory in bytes.

**Returns**: `integer` - total system memory in bytes, represented as an integer

### require('os') — freemem()

Reports free system memory in bytes.

**Returns**: `integer` - free system memory in bytes, represented as an integer

### require('os') — homedir()

Reports the path to the user's home directory.

**Returns**: `string` - user home directory path
