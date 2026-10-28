# XMPDateTime object constructors

```javascript
new XMPDateTime();            // creates an object containing a 0 date
new XMPDateTime(date);        // initializes the object with a JavaScript date
new XMPDateTime(iso8601Date); // initializes the object with an ISO date
```

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| date | A JavaScript Date object. | Uses the local operation-system time-zone value for the time zone. XMP Toolkit times can use up to nanosecond resolution, but JavaScript Date conversion in either direction reduces time precision to milliseconds. |
| iso8601Date | String | ISO 8601 date-time text; for example: "2007-04-10T17:54:50+01:00" |
