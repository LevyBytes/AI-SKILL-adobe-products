# require('uxp').xmp.XMPDateTime — XMPDateTime()

`XMPDateTime` models date-time values.
XMP timestamps include zone information and may reach nanosecond precision.

### require('uxp').xmp.XMPDateTime — XMPDateTime(date)

Create XMPDateTime

| Param | Type | Description |
| --- | --- | --- |
| date | `Date` \| `string` | `[Optional]` `Date` : A JavaScript Date object. The time zone is set to the local operation-system time-zone value. Time can have up to nanosecond resolution; however, when converting to or from a JavaScript Date value, time resolution is reduced to milliseconds. `iso8601Date`: A string containing a date-time in ISO 8601 format; for example: "2007-04-10T17:54:50+01:00" |

**Example**

```js
// Below example demonstrates how to create XMPDateTime
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

// 1. Creating using Date object
const xdt1 = new XMPDateTime(new Date());

// 2. Creating using iso8601Date
const xdt2 = new XMPDateTime("2007-04-10T17:54:50+01:00");

// 3.  Creating with no arguments
const xdt3 = new XMPDateTime();
```

**Example**

```js
// Below example demonstrates how to compare two XMPDateTime objects
// Importing XMPDateTime class
const { XMPDateTime } = require("uxp").xmp;

const currentDate = new XMPDateTime(new Date());

const oldDate = new XMPDateTime("2007-04-10T17:54:50+01:00");

currentDate.compareTo(oldDate);
// Returns 1

oldDate.compareTo(currentDate);
// Returns -1

currentDate.compareTo(currentDate);
// Returns 0
```
