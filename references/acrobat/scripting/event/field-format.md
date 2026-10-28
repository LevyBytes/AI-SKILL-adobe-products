# Field/Format

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Once every dependent calculation has finished, this event fires. It lets the attached JavaScript adjust how the data value looks to a user — its presentation, or appearance. Say the value is a number meant to read as currency: the formatting script can prepend a dollar sign ($) and cap it at two places after the decimal point.

The target of this event is whichever field's format script is running. It also defines the commitKey, targetName, and willCommit properties.

The rc return code carries no weight for this event. Its resulting value, though, is what the field shows as its formatted appearance.
