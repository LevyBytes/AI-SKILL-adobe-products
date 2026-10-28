# Register an interest in specific key events

(Since 6.1)
Register interest in selected key events so they are not delivered to the host application:

Signature: `CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)`.

This function works for modeless extensions and panel extensions. For both extension types, key events normally go to the host application unless the focused element is a text input or dropdown.

When certain key events should be handled inside the extension, call this function beforehand to keep them from being sent to the host application.

- keyEventsInterest: A JSON string describing the key events of interest.
  Passing a null object or an empty string removes the interest.

This JSON string must be an array whose objects use these keys:

- keyCode: [Required] OS-system-dependent virtual key code for the unmodified value of the pressed key.
- ctrlKey: [optional] a Boolean; `true` means Control participated in the event, and `false` means it did not.
- altKey: [optional] a Boolean; `true` means Alt participated in the event, and `false` means it did not.
- shiftKey: [optional] a Boolean; `true` means Shift participated in the event, and `false` means it did not.
- metaKey: [optional] (macOS Only) a Boolean; `true` means Meta participated in the event, and `false` means it did not. On Macintosh keyboards, Meta is the command key. On Windows, detect the Windows key with keyCode instead.

Key-code references:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- macOS
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

An example JSON string:

```json
 [{
    "keyCode": 48
 },
 {
    "keyCode": 123,
    "ctrlKey": true
 }]
```
