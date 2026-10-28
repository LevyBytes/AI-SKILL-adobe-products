# XMPDateTime object properties

Each property is read-write and can change the date-time value. Values outside the allowed range are automatically clamped to the nearest permitted minimum or maximum.

| Property | Type | Description |
| --- | --- | --- |
| year | Number | Year, in the range [0000...9999]. |
| month | Number | Month, in the range [1...12]. |
| day | Number | Day, in the range [1...31]. |
| hour | Number | Hour, in the range [1...23]. |
| minute | Number | Minute, in the range [1...59]. |
| second | Number | Second, in the range [1...59]. |
| nanosecond | Number | Nanosecond, in the range [0...1e+9 -1]. |
| tzSign | Number | Direction of the time-zone offset. - 0: UTC - -1: west - 1: east |
| tzHour | Number | Hour component of the time-zone offset relative to the prime meridian; range [1...23]. |
| tzMinute | Number | Minute component of the time-zone offset relative to the prime meridian; range [1...59]. |
