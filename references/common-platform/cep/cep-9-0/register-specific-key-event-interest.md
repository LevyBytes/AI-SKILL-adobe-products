# Register Specific Key Event Interest

(Since 6.1)
Register interest in selected key events so CEP keeps them inside the extension:

Signature: `CSInterface.prototype.registerKeyEventsInterest = function(keyEventsInterest)`.

Modeless extensions and panel extensions support this function. For those two extension types, key events normally go to the host application unless the current focus is in a text input or dropdown.

If certain key events should be intercepted and handled by the extension, call this function first to stop those events from being sent to the host application.

- keyEventsInterest: a JSON string listing the key events the extension wants to receive. Passing a null object or an empty string clears the registered interest.

The JSON string is expected to be an array, with these keys on each object:

- keyCode: [Required] an OS-dependent virtual key code for the key's unmodified pressed value.
- ctrlKey: [optional] a Boolean showing whether the control key was down (`true`) or not down (`false`) for the event.
- altKey: [optional] a Boolean showing whether the alt key was down (`true`) or not down (`false`) for the event.
- shiftKey: [optional] a Boolean showing whether the shift key was down (`true`) or not down (`false`) for the event.
- metaKey: [optional] (macOS Only) a Boolean showing whether the Meta key was down (`true`) or not down (`false`) for the event. On Macintosh keyboards, this is the command key. On Windows, detect the Windows key through `keyCode` instead.

Use these references when you need the complete key-code lists:

- [Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx)
- macOS
  - `/System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/Headers/Events.h`
  - Install [Key Codes](https://itunes.apple.com/us/app/key-codes/id414568915?mt=12) from the Mac App Store.

JSON sample:

```json
 [{
    "keyCode": 48
 },
 {
    "keyCode": 123,
    "ctrlKey": true
 }]
```
