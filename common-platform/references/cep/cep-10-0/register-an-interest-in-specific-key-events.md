# Register an interest in specific key events

(Since 6.1)
Register key events that should be kept from reaching the host application:

Signature: `CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)`.

This function applies to modeless extensions and panel extensions. In general, key events for these extension types are sent to the host application unless the current focus is on a text input or dropdown.

To intercept selected key events and handle them inside the extension, call this function ahead of time so those events are not forwarded to the host application.

- keyEventsInterest: a JSON string that describes the key events of interest. Passing a null object or an empty string removes the interest.

The JSON string should contain an array. Each object uses these keys:

- keyCode: [Required] identifies the pressed key's unmodified value with an OS-dependent virtual key code.
- ctrlKey: [optional] a Boolean indicating whether the control key was pressed (true) or not pressed (false) when the event occurred.
- altKey: [optional] a Boolean indicating whether the alt key was pressed (true) or not pressed (false) when the event occurred.
- shiftKey: [optional] a Boolean indicating whether the shift key was pressed (true) or not pressed (false) when the event occurred.
- metaKey: [optional] (macOS Only) a Boolean indicating whether the Meta key was pressed (true) or not pressed (false) at event time. On Macintosh keyboards this key is Command. On Windows, detect the Windows key by checking keyCode.

Key-code references:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- macOS
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

Example JSON string:

```json
 [{
    "keyCode": 48
 },
 {
    "keyCode": 123,
    "ctrlKey": true
 }]
```
