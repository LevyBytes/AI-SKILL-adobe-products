# $.hiresTimer

$.hiresTimer

### Description

High-resolution timer that reports microseconds since the property was last read. Its value is initialized as early as possible, so the first read returns ExtendScript startup time. The property is thread-local; the first read on a thread reports the duration of that thread's creation and initialization.

### Type

Number. Read only.
