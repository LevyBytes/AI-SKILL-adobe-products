# require('os') - platform()

Reports the active platform, for example "win32", "win10", or "darwin".

**Returns**: `string` - string value that names the platform

### require('os') - release()

Reports the operating-system release number, for example "10.0.1.1032".

**Returns**: `string` - string value that names the release

### require('os') - arch()

Reports the active platform architecture, for example "x32, x64, x86_64 etc".

**Returns**: `string` - string value that names the architecture

### require('os') - cpus()

Reports CPU details for the current platform, for example "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}".

**Returns**: `array` - array of objects with details for each logical CPU core
Only the model and speed properties are currently supported. the times property is unsupported.
On UWP, access to CPU details such as the model string and frequency is limited.
For UWP, the 'model' value is returned as "ARM based architecture" or "X86 based architecture".
For UWP, the 'speed' value is returned as 0.

### require('os') - totalmem()

Reports total system memory, measured in bytes.

**Returns**: `integer` - integer value for total system memory in bytes

### require('os') - freemem()

Reports total free system memory, measured in bytes.

**Returns**: `integer` - integer value for total free system memory in bytes

### require('os') - homedir()

Reports the user's home directory path.

**Returns**: `string` - user's home directory path
