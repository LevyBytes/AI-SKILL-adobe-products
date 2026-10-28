# Register specific key events

(Since 6.1)
Declare selected key events so they are not forwarded to the host application:

Documented signature (call contract, not a function implementation):

`CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)`

This function applies to modeless extensions and panel extensions. For those two extension types, key events are generally sent to the host application unless the currently focused element is a text input or dropdown.

Call this function ahead of time when certain key events should be intercepted and handled inside the extension instead of being sent to the host application.

- keyEventsInterest: A JSON string describing the key events of interest.
  Passing a null object or an empty string removes the interest.

The JSON string should be an array, with each object using these keys:

- keyCode: [Required] provides an OS system dependent virtual key code for the unmodified value of the pressed key.
- ctrlKey: [optional] a Boolean whose value is true when the control key was down for the event, and false otherwise.
- altKey: [optional] a Boolean whose value is true when the alt key was down for the event, and false otherwise.
- shiftKey: [optional] a Boolean whose value is true when the shift key was down for the event, and false otherwise.
- metaKey: [optional] (Mac Only) a Boolean whose value is true when the Meta key was down for the event, and false otherwise. On Mac keyboards, Meta maps to Command. For the Windows key on Windows, detect it through keyCode instead.

To find all key codes:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- Mac
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

An example JSON string:

```json
[
  {
    "keyCode": 48
  },
  {
    "keyCode": 123,
    "ctrlKey": true
  }
]
```
