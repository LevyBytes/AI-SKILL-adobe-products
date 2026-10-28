# time

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

Carries a duration in seconds, or Infinity. With marker also present, count this duration from that marker as a value of zero or more, though never Infinity. Lacking a marker, the duration is measured from the media's start and may not go negative. Here the offset { time: 0 } points at the media's start.

Example: a pair of offsets, one absolute and one relative.

```javascript
{ time: 5.4 } // offset 5.4 seconds from the beginning of media
{ marker: "Chapter 1", time: 17 } // 17 seconds after "Chapter 1"
```

Such offsets feed straight into the MediaPlayer. seek method.

```javascript
// assume player is a MediaPlayer object
player.seek({ time: 5.4 });
player.seek({ marker: "Chapter 1", time: 17 });
```
