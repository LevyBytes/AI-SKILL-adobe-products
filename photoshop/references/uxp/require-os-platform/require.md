# require('os') — platform()

Returns the platform value for the current runtime (eg. "win32", "win10", "darwin").

**Returns**: `string` - the string representing the platform

### require('os') — release()

Provides the os release value (eg. "10.0.1.1032").

**Returns**: `string` - the string representing the release

### require('os') — arch()

Reports the architecture for the current platform (eg. "x32, x64, x86_64 etc").

**Returns**: `string` - the string representing the architecture

### require('os') — cpus()

Provides CPU information for the platform running the plugin. Example CPU tuple: "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}".

**Returns**: `array` - objects describing each logical CPU core
Only `model` and `speed` are currently available; `times` is not supported.
On UWP, CPU details such as model string and frequency have limited access.
For UWP, the `model` value is returned as "ARM based architecture" or "X86 based architecture".
On UWP, `speed` returns 0.

### require('os') — totalmem()

Reports total system memory, measured in bytes.

**Returns**: `integer` - integer total for system memory in bytes

### require('os') — freemem()

Reports currently free system memory, measured in bytes.

**Returns**: `integer` - integer value for free system memory in bytes

### require('os') — homedir()

Provides the user's home directory path.

**Returns**: `string` - path for the user's home directory
