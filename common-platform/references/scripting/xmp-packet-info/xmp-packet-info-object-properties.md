# XMPPacketInfo object properties

| Parameter | Type | Description |
| --- | --- | --- |
| charForm | Number | Packet character encoding; allowed values are: - 0 - UTF8 - 2 - UTF-16, MSB-first (big-endian) - 3 - UTF-16, LSB-first (little-endian) - 4 - UTF 32, MSB-first (big-endian) - 5 - UTF 32, LSB-first (little-endian) |
| length | Number | Packet length in bytes. |
| offset | Number | Byte offset, measured from the beginning of the file, where the packet starts. |
| packet | String | Raw packet data. |
| padSize | Number | Packet padding size in bytes; 0 means unknown. |
| writeable | Boolean | True means the packet can be written. |
