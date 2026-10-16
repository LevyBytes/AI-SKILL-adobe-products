# $.flags

$.flags

### Description

### Type

Number

Reads or changes low-level flags for debug output. Combine these bit flag values with logical AND:

- 0x0002 (2): Shows each executed line together with its line number.
- 0x0040 (64): Turns on very aggressive garbage collection. Normally, collection begins after object count growth reaches a threshold since the prior collection. This flag makes ExtendScript collect after nearly every statement. Performance is severely reduced, but the setting helps diagnose objects that appear to be released too early.
- 0x0080 (128): Shows every call with its arguments and return value.
- 0x0100 (256): Turns on extended error handling (see strict).
- 0x0200 (512): Turns on localization behavior in the toString method. Equivalent to the localize property.

Note

Non-public bit values should not be used.
