# status

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the event.media.code property on a Status event (see onStatus and afterStatus). Most of these values carry extra information, which lands in the event.text property. The values are:

Value: Description

app.media.status.clear

Empty string: this status event wipes out any message

app.media.status.message

General message

app.media.status.contacting

Hostname being contacted

app.media.status.buffering

Progress message or nothing

app.media.status.init

Name of the engine being initialized

app.media.status.seeking

Empty string

Side by side with the event.media.status code sits the event.media.text, a string mirroring the present status, as laid out above.
