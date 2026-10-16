# pageEventNames

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the event.name property for a page-level action. Event names tied to direct user actions are left out here. This enumeration exists so that page-level actions can be told apart from ones a user directly triggers. These are its values:

app.media.pageEventNames.Open

app.media.pageEventNames.Close

app.media.pageEventNames.InView

app.media.pageEventNames.OutView

Example: app.media.pageEventNames serves to separate a page-level action from a direct user action. What follows is folder-level or document-level JavaScript reachable from any point in a document.

This complete handler logs the event category. Insert application-specific processing in the matching branch when extending it.

```javascript
function myMMfunction () {
    if ( app.media.pageEventNames[event.name] ) {
        console.println("Page Event: " + event.name);
    } else {
        console.println("User Generated Event: " + event.name);
    }
}
```
