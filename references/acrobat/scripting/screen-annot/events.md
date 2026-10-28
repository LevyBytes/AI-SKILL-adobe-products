# events

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Events object | R/W |

Holds an Events object that gathers up the EventListeners bound to a screen annotation.

The PDF file does not store this property. Any change you make lasts only for the current session.

Example: Build a basic focus EventListener.

```javascript
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
var myFocusEvent = {
    onFocus: function () {
        console.println("Focusing...");
    }
};
annot.events.add( myFocusEvent );
```

To detach this EventListener afterward, run the code below.

```javascript
annot.events.remove( myFocusEvent );
```
