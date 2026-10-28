# setAction

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader |

Attaches the document's JavaScript action for a particular trigger.

See also addScript, setPageAction, the Bookmark object setAction method, and the Field object setAction method.

Note

Whatever action was already set for the chosen trigger gets overwritten by this method.

Parameters

| Parameter | Description |
| --- | --- |
| cTrigger | Names the trigger point the action attaches to. Values are: WillClose WillSave DidSave WillPrint DidPrint |
| cScript | The JavaScript expression that runs once the trigger fires. |

Example: wire up WillSave and DidSave actions. The code reads the file size both before and after the save, then compares them.

```javascript
// WillSave script
var myWillSave = 'var filesizeBeforeSave = this.filesize;r'
    + 'console.println("File size before saving is " + '
    + ' filesizeBeforeSave );';

// DidSave script
var myDidSave =  'var filesizeAfterSave = this.filesize;r'
    + 'console.println("File size after saving is "'

     + 'filesizeAfterSave);r'
    + 'var difference = filesizeAfterSave - filesizeBeforeSave;r'
    + 'console.println("The difference is " + difference );r'
    + 'if ( difference < 0 )rt'
    + 'console.println("Reduced filesize!");r'
    + 'elsert'
    + 'console.println("Increased filesize!");'

// Set document actions...
this.setAction("WillSave", myWillSave);
this.setAction("DidSave", myDidSave);
```
